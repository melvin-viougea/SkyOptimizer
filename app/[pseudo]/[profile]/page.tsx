"use client";

import { useParams } from "next/navigation";
import ky from "ky";
import { useState, useEffect } from "react";
import {getSkillLevel} from "@/lib/getSkillLevel";

export default function ProfilePage() {
  const { pseudo } = useParams();
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hypixelSkills: HypixelSkillsResponse = await ky
          .get("https://api.hypixel.net/v2/resources/skyblock/skills")
          .json();

        const allLvlFarming = hypixelSkills.skills.FARMING.levels;
        const allLvlFishing = hypixelSkills.skills.FISHING.levels;
        const allLvlMining = hypixelSkills.skills.MINING.levels;
        const allLvlForaging = hypixelSkills.skills.FORAGING.levels;
        const allLvlCombat = hypixelSkills.skills.COMBAT.levels;
        const farmingMaxLvl = hypixelSkills.skills.FARMING.maxLevel;
        const fishingMaxLvl = hypixelSkills.skills.FISHING.maxLevel;
        const miningMaxLvl = hypixelSkills.skills.MINING.maxLevel;
        const foragingMaxLvl = hypixelSkills.skills.FORAGING.maxLevel;
        const combatMaxLvl = hypixelSkills.skills.COMBAT.maxLevel;

        const mojangResponse: MojangResponse = await ky
          .get(`https://api.ashcon.app/mojang/v2/user/${pseudo}`)
          .json();
        const playerUuid = mojangResponse.uuid;

        const profilesResponse: ProfilesResponse = await ky
          .get(`https://api.hypixel.net/v2/skyblock/profiles?uuid=${playerUuid}`, {
            headers: {
              'API-Key': process.env.NEXT_PUBLIC_API_KEY,
            }
          })
          .json();

        const profiles = profilesResponse.profiles || [];
        const selectedProfile = profiles.find((profile) => profile.selected);

        if (!selectedProfile) {
          setError("Profile not found");
          return;
        }

        const members = selectedProfile.members;
        const normalizedPlayerUuid = playerUuid.replace(/-/g, "");
        const selectedMember = members[normalizedPlayerUuid];

        if (!selectedMember) {
          console.error("Selected member not found");
          return;
        }

        const actualFarmingXp = selectedMember.player_data.experience.SKILL_FARMING;
        const actualFishingXp = selectedMember.player_data.experience.SKILL_FISHING;
        const actualMiningXp = selectedMember.player_data.experience.SKILL_MINING;
        const actualForagingXp = selectedMember.player_data.experience.SKILL_FORAGING;
        const actualCombatXp = selectedMember.player_data.experience.SKILL_COMBAT;

        const farmingLvl = getSkillLevel(actualFarmingXp, allLvlFarming);
        const fishingLvl = getSkillLevel(actualFishingXp, allLvlFishing);
        const miningLvl = getSkillLevel(actualMiningXp, allLvlMining);
        const foragingLvl = getSkillLevel(actualForagingXp, allLvlForaging);
        const combatLvl = getSkillLevel(actualCombatXp, allLvlCombat);

        setProfileData({
          //PLAYER
          pseudo,
          profile: selectedProfile.cute_name,
          profileId: selectedProfile.profile_id,
          farmingLvl: farmingLvl,
          fishingLvl: fishingLvl,
          miningLvl: miningLvl,
          foragingLvl: foragingLvl,
          combatLvl: combatLvl,
          // HYPIXEL
          farmingMaxLvl,
          fishingMaxLvl,
          miningMaxLvl,
          foragingMaxLvl,
          combatMaxLvl,
        });
      } catch (err) {
        setError("Failed to load profile data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pseudo]);


  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 pt-5 min-h-screen">
        <h1 className="text-4xl font-bold text-center">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 pt-5 min-h-screen">
        <h1 className="text-4xl font-bold text-center">Error: {error}</h1>
      </div>
    );
  }

  if (!profileData) {
    return <p>No profile data available.</p>;
  }

  const {
    //PLAYER
    pseudo: playerPseudo,
    profile,
    farmingLvl,
    fishingLvl,
    miningLvl,
    foragingLvl,
    combatLvl,
    //HYPIXEL
    farmingMaxLvl,
    fishingMaxLvl,
    miningMaxLvl,
    foragingMaxLvl,
    combatMaxLvl,
  } = profileData;

  return (
    <div className="flex flex-col items-center justify-center gap-2 pt-5">
      <h1 className="text-4xl font-bold text-center">{playerPseudo} - {profile}</h1>
      <h1 className="text-2xl font-bold text-center">Skills :</h1>
      <p>Farming {farmingLvl} / {farmingMaxLvl}</p>
      <p>Fishing {fishingLvl} / {fishingMaxLvl}</p>
      <p>Mining {miningLvl} / {miningMaxLvl}</p>
      <p>Foraging {foragingLvl} / {foragingMaxLvl}</p>
      <p>Combat {combatLvl} / {combatMaxLvl}</p>
    </div>
  );
}
