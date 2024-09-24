import ky from "ky";

export const fetchSkills = async (): Promise<HypixelSkillsResponse> => {
  return await ky.get("https://api.hypixel.net/v2/resources/skyblock/skills").json();
};

export const fetchMojangData = async (pseudo: string): Promise<MojangResponse> => {
  return await ky.get(`https://api.ashcon.app/mojang/v2/user/${pseudo}`).json();
};

export const fetchHypixelProfiles = async (playerUuid: string): Promise<ProfilesResponse> => {
  return await ky.get(`https://api.hypixel.net/v2/skyblock/profiles?uuid=${playerUuid}`, {
    headers: {
      "API-Key": process.env.NEXT_PUBLIC_HOST,
    },
  }).json();
};