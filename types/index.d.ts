declare interface ProfilesResponse {
  profiles: Array<{
    cute_name: string;
    selected: boolean;
    profile_id: string;
    banking: {
      balance: number;
    };
    members: {
      [key: string]: {
        currencies: {
          coin_purse: number;
        };
        inventory: {
          inv_contents: {
            data: string;
          };
          bag_contents: {
            fishing_bag: {
              data: string;
            }
            talisman_bag: {
              data: string;
            };
          };
          inv_armor: {
            data: string;
          };
          equipment_contents: {
            data: string;
          };
        };
        player_data: {
          experience: {
            [skill: string]: number;
          };
        };
      };
    };
  }>;
}

declare interface ProfileData {
  pseudo: string;
  profile: string;
  farmingLvl: number;
  farmingMaxLvl: number;
  fishingLvl: number;
  fishingMaxLvl: number;
  miningLvl: number;
  miningMaxLvl: number;
  foragingLvl: number;
  foragingMaxLvl: number;
  combatLvl: number;
  combatMaxLvl: number;
  networth: number;
  purse: number;
  bank: number;
  playerAccessories: NetworthItem[];
  playerAccessoriesNetworth: number;
  playerInventory: NetworthItem[];
  playerInventoryNetworth: number;
  playerArmor: NetworthItem[];
  playerArmorNetworth: number;
  playerEquipment: NetworthItem[];
  playerEquipmentNetworth: number;
  playerFishingBag: NetworthItem[];
  playerFishingBagNetworth: number;
}

declare interface NetworthItem {
  id: any;
  name: string;
  networth: number;
  count?: number;
  lowestBin?: number;
}

declare interface RenderProps {
  profileData: ProfileData;
}

declare interface HypixelSkillsResponse {
  skills: {
    FARMING: {
      levels: number[];
      maxLevel: number;
    };
    FISHING: {
      levels: number[];
      maxLevel: number;
    };
    MINING: {
      levels: number[];
      maxLevel: number;
    };
    FORAGING: {
      levels: number[];
      maxLevel: number;
    };
    COMBAT: {
      levels: number[];
      maxLevel: number;
    };
  };
}

declare interface HypixelItem {
  lowestBin: undefined;
  bzPrice?: number;
  name: string;
  category: string;
  id: string;
  ahPrice?: number;
}

// RESPONSES
declare interface HypixelItemsResponse {
  items: HypixelItem[];
}

declare interface HypixelAuctionResponse {
  totalAuctions: number;
  totalPages: number;
  auctions: Array<{
    item_name: string;
    starting_bid: number;
    bin: boolean;
  }>;
}

declare interface MojangResponse {
  uuid: string;
}

declare interface HypixelBazaarResponse {
  success: boolean;
  lastUpdated: number;
  products: {
    [key: string]: {
      quick_status: {
        buyPrice: number;
      }
      product_id: string;
    };
  }
}

// OTHERS
declare interface CustomError {
  message: string;
}