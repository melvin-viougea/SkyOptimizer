// Accessory Item Interface
interface accessoriesItem {
  name: string;
  lowestBin?: number;
}

// Inventory Item Interface
interface InventoryItem {
  name: string;
  count: number;
  id: string;
}

// Profile Data Interface
interface ProfileData {
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
  purse: number;
  bank: number;
  playerAccessories: accessoriesItem[];
  playerAccessoriesNetworth: number;
}

// Render Props Interface (used for rendering components)
interface RenderProps {
  profileData: ProfileData;
}

// Hypixel Skills Response Interface (skills data from Hypixel API)
interface HypixelSkillsResponse {
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

// Hypixel Item Interface (used for auction and item responses)
interface HypixelItem {
  bzPrice: number;
  name: string;
  category: string;
  id: string;
  ahPrice: number;
}

// Hypixel Items Response Interface (all items from Hypixel API)
interface HypixelItemsResponse {
  items: HypixelItem[];
}

// Hypixel Auction Response Interface (auctions data from Hypixel API)
interface HypixelAuctionResponse {
  totalAuctions: number;
  totalPages: number;
  auctions: Array<{
    item_name: string;
    starting_bid: number;
    bin: boolean;
  }>;
}

// Mojang Response Interface (used for getting player UUID from Mojang API)
interface MojangResponse {
  uuid: string;
}

// Profiles Response Interface (contains profile and members data from Hypixel API)
interface ProfilesResponse {
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

// Custom Error Interface (used for handling errors)
interface CustomError {
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

// Define the type with an index signature
declare interface PriceForAccessories {
  [key: string]: number;
}