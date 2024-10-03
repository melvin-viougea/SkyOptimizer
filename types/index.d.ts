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
  playerAccessories: accessoriesItem[];
  playerAccessoriesNetworth: number;
  playerInventory: InventoryItem[];
  playerInventoryNetworth: number;
  playerArmor: ArmorItem[];
  playerArmorNetworth: number;
  playerEquipment: EquipmentItem[];
  playerEquipmentNetworth: number;
}

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

declare interface networthItem {
  id: any;
  name: string;
  networth: number;
  count?: number;
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
  bzPrice?: number;
  name: string;
  category: string;
  id: string;
  ahPrice?: number;
}

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

declare interface CustomError {
  message: string;
}

declare interface HypixelBazaarResponse {
  success: boolean;
  lastUpdated: number;
  products: {
    [key: string]: BazaarItem;
  }
}

declare interface BazaarItem {
  quick_status: {
    buyPrice: number;
  }
  product_id: string;
}

declare interface accessoriesItem {
  name: string;
}

declare interface accessoriesItem {
  name: string;
  lowestBin?: number;
}