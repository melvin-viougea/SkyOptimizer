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

declare interface MojangResponse {
  uuid: string;
  // Other relevant fields
}

declare interface ProfilesResponse {
  profiles: Array<{
    cute_name: string;
    selected: boolean;
    profile_id: string;
    members: { [key: string]: { player_data: { experience: { [skill: string]: number } } } };
  }>;
}

declare interface CustomError {
  message: string;
}