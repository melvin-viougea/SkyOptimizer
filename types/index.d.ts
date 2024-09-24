declare interface CustomError {
  message: string;
}

//HYPIXEL SKILL

declare interface Skill {
  maxLevel: number;
  levels: number[];
}

declare interface HypixelSkillsResponse {
  skills: {
    FARMING: Skill;
    FISHING: Skill;
    MINING: Skill;
    FORAGING: Skill;
    COMBAT: Skill;
  };
}

declare interface MojangResponse {
  uuid: string;
}

//PLAYER DATA

declare interface MemberExperience {
  SKILL_FARMING: number;
  SKILL_FISHING: number;
  SKILL_MINING: number;
  SKILL_FORAGING: number;
  SKILL_COMBAT: number;
}

declare interface MemberData {
  player_data: {
    experience: MemberExperience;
  };
}

declare interface Members {
  [key: string]: MemberData;
}

declare interface SelectedProfile {
  cute_name: string;
  profile_id: string;
  members: Members;
  selected?: boolean;
}

declare interface ProfilesResponse {
  profiles: SelectedProfile[];
}

