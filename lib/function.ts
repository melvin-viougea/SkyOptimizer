import {fetchBazaar, fetchHypixelAuction, fetchHypixelItems} from "@/lib/fetch";
import nbt from "prismarine-nbt";

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
          item.bzPrice = (bazaar.quick_status?.sellPrice + bazaar.quick_status?.buyPrice) / 2;
        }
      });
    }
  });
  return allItems;
}

export async function decodeItems(invContents: any) {
  const yourBytes = Buffer.from(invContents, "base64");
  const nbtDecoded = await nbt.parse(yourBytes);

  return nbtDecoded?.parsed?.value?.i?.value;
}

export async function calculateNetworth(searchValue: any, allItems: HypixelItem[]){
  let playerItems: networthItem[] = [];
  let playerItemsNetworth: number = 0;

  try {
    const items: any = await decodeItems(searchValue);
    console.log(items)
    const itemsValues = items.value;

    if (Array.isArray(itemsValues)) {
      itemsValues.forEach((element: any) => {
        if (element.tag && typeof element.tag === 'object' && 'value' in element.tag) {
          const displayName = element.tag.value?.display?.value?.Name?.value;

          if (typeof displayName === 'string') {
            const cleanedDisplayName = displayName.replace(/§./g, '');
            const itemId = element.tag?.value?.ExtraAttributes?.value?.id?.value;
            let itemCount = 1;
            let networth = 0;
            let item: HypixelItem | undefined = allItems.find((element) => element.id.includes(itemId));
            if (item?.bzPrice != null) {
              networth = item.bzPrice;
            } else if (item?.ahPrice != null) {
              networth = item.ahPrice;
            }

            if (element?.Count?.value) {
              itemCount = element?.Count?.value;
            }

            if (cleanedDisplayName && itemId !== undefined) {
              const item: networthItem = {
                name: cleanedDisplayName,
                id: itemId,
                count: itemCount,
                networth: networth
              };
              playerItems.push(item);
              playerItemsNetworth += item.networth*itemCount;
            }
          }
        }
      });
    }
  } catch (error) {
    console.error('Error processing the inventory:', error);
  }

  return {
    items: playerItems,
    networth: playerItemsNetworth
  }
}