interface ProfileData {
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
  purse: number;
  bank: number;
  playerAccessories: Array<{
    name: string;
  }>;
}

declare interface RenderProps {
  profileData: ProfileData | null;
}

declare interface HypixelSkillsResponse {
  skills: {
    FARMING: { levels: number[], maxLevel: number };
    FISHING: { levels: number[], maxLevel: number };
    MINING: { levels: number[], maxLevel: number };
    FORAGING: { levels: number[], maxLevel: number };
    COMBAT: { levels: number[], maxLevel: number };
  };
}

interface HypixelItem {
  name: string;
  category: string;
  id: string;
}

interface HypixelItemsResponse {
  success: boolean;
  lastUpdated: number;
  items: HypixelItem[];
}

declare interface MojangResponse {
  uuid: string;
}

declare interface ProfilesResponse {
  profiles: Array<{
    cute_name: string;
    selected: boolean;
    profile_id: string;
    banking: {
      balance: number;
    };
    members: { [key: string]: {
        currencies: {
          coin_purse: number;
        };
        inventory: any;
        player_data: {
          experience: { [skill: string]: number }
        };
      } };
  }>;
}

declare interface CustomError {
  message: string;
}

declare interface InventoryItem {
  name: string;
  count: number;
  id: number;
  sellable: boolean;
  bazaarPrice: number;
}

interface HypixelBazaarResponse {
  success: boolean;
  lastUpdated: number;
  products: BazaarItem[];
}

interface BazaarItem {
  product_id: any;
}

declare interface accessoriesItem {
  name: string;
}