import {fetchBazaar, fetchHypixelAuction, fetchHypixelItems} from "@/lib/fetch";

export const getSkillLevel = (actualXP: number, allLvlSkill: any[]): number => {
  let level = 0;
  for (let i = 0; i < allLvlSkill.length; i++) {
    if (actualXP >= allLvlSkill[i].totalExpRequired) {
      level = allLvlSkill[i].level;
    } else {
      break;
    }
  }
  return level;
};

export function formatToPrice(value: number): string {
  if (value >= 1_000_000_000) {
    const formatted = (value / 1_000_000_000).toFixed(1);
    return formatted.endsWith('.0') ? formatted.slice(0, -2) + 'B' : formatted + 'B';
  } else if (value >= 1_000_000) {
    const formatted = (value / 1_000_000).toFixed(1);
    return formatted.endsWith('.0') ? formatted.slice(0, -2) + 'M' : formatted + 'M';
  } else if (value >= 1_000) {
    const formatted = (value / 1_000).toFixed(1);
    return formatted.endsWith('.0') ? formatted.slice(0, -2) + 'K' : formatted + 'K';
  }
  return Math.floor(value).toString();
}



export async function fetchAndProcessData() {
  const itemsResponse = await fetchHypixelItems();
  const bazaarResponse = await fetchBazaar();
  const auctionResponse = await fetchHypixelAuction();

  const allItems = itemsResponse.items;
  const bazaarItems = Object.values(bazaarResponse.products);
  let allAuctions: any[] = [];

  auctionResponse.forEach((element2: any) => {
    allAuctions.push(element2.auctions);
  });

  allItems.forEach((item: any) => {
    allAuctions.forEach((auctions: any[]) => {
      auctions.forEach((auction: { item_name: string; starting_bid: number; }) => {
        if (item.name === auction.item_name) {
          if (item.ahPrice !== undefined) {
            if (item.ahPrice > auction.starting_bid) {
              item.ahPrice = auction.starting_bid;
            }
          } else {
            item.ahPrice = auction.starting_bid;
          }
        }
      });
    });
    if (!("ahPrice" in item)) {
      bazaarItems.forEach((bazaar: any) => {
        if (bazaar.product_id == item.id) {
          item.bzPrice = bazaar.quick_status?.buyPrice;
        }
      });
    }
  });
  return allItems;
}

export async function getItemPriceByName(displayName: string, allItems: any[]): Promise<ArmorItem | undefined> {
  const cleanedDisplayName = displayName.replace(/§./g, '');

  if (cleanedDisplayName) {
    const itemData = allItems.find((item: any) => {
      const cleanedItemName = item.name.replace(/§./g, '');
      return cleanedItemName === cleanedDisplayName;
    });

    if (itemData) {
      const lowestBin = itemData?.ahPrice;
      const bzPrice = itemData?.bzPrice;

      return {
        name: cleanedDisplayName,
        lowestBin: lowestBin ?? undefined,
        bzPrice: bzPrice ?? undefined,
      };
    }
  }
  return undefined;
}
