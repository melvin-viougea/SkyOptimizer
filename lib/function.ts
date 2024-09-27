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

export function formatToMillions(value: number): string {
  return (value / 1_000_000).toFixed(1);
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