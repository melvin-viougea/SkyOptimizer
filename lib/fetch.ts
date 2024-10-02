import ky from "ky";

export const fetchSkills = async (): Promise<HypixelSkillsResponse> => {
  return await ky.get("https://api.hypixel.net/v2/resources/skyblock/skills").json();
};

export const fetchHypixelItems = async (): Promise<HypixelItemsResponse> => {
  return await ky.get("https://api.hypixel.net/v2/resources/skyblock/items").json();
};

export const fetchHypixelAuction = async (): Promise<HypixelAuctionResponse[]> => {
  const firstResponse = await ky.get("https://api.hypixel.net/v2/skyblock/auctions?page=0").json<HypixelAuctionResponse>();

  const totalPages = firstResponse.totalPages;

  const promises: Promise<HypixelAuctionResponse>[] = [];

  //for (let page = 0; page < totalPages; page++) {
  for (let page = 0; page < 1; page++) {
    const request = ky.get(`https://api.hypixel.net/v2/skyblock/auctions?page=${page}`).json<HypixelAuctionResponse>();
    promises.push(request);
  }

  const results = await Promise.all(promises);

  return results;
};

export const fetchMojangData = async (pseudo: string): Promise<MojangResponse> => {
  return await ky.get(`https://api.ashcon.app/mojang/v2/user/${pseudo}`).json();
};

export const fetchBazaar = async (): Promise<HypixelBazaarResponse> => {
  return await ky.get(`https://api.hypixel.net/v2/skyblock/bazaar`).json();
};

export const fetchHypixelProfiles = async (playerUuid: string): Promise<ProfilesResponse> => {
  return await ky.get(`https://api.hypixel.net/v2/skyblock/profiles?uuid=${playerUuid}`, {
    headers: {
      "API-Key": process.env.NEXT_PUBLIC_HOST,
    },
  }).json();
};