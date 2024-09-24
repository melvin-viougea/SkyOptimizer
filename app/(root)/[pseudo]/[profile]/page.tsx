"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { getSkillLevel } from "@/lib/getSkillLevel";
import {Section} from "@/constants";
import {fetchHypixelProfiles, fetchMojangData, fetchSkills} from "@/lib/fetch";
import HomeRender from "@/components/HomeRender";
import FarmingRender from "@/components/FarmingRender";
import AccessoriesRender from "@/components/AccessoriesRender";

export default function ProfilePage() {
  const { pseudo } = useParams();


  const normalizedPseudo = Array.isArray(pseudo) ? pseudo[0] : pseudo;

  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<Section>(Section.Home);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [hypixelSkills, mojangResponse] = await Promise.all([
          fetchSkills(),
          fetchMojangData(normalizedPseudo),
        ]);

        const playerUuid = mojangResponse.uuid;
        const profilesResponse = await fetchHypixelProfiles(playerUuid);

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
          setError("Selected member not found");
          return;
        }

        const { FARMING, FISHING, MINING, FORAGING, COMBAT } = hypixelSkills.skills;
        const farmingLvl = getSkillLevel(selectedMember.player_data.experience.SKILL_FARMING ?? 0, FARMING.levels);
        const fishingLvl = getSkillLevel(selectedMember.player_data.experience.SKILL_FISHING ?? 0, FISHING.levels);
        const miningLvl = getSkillLevel(selectedMember.player_data.experience.SKILL_MINING ?? 0, MINING.levels);
        const foragingLvl = getSkillLevel(selectedMember.player_data.experience.SKILL_FORAGING ?? 0, FORAGING.levels);
        const combatLvl = getSkillLevel(selectedMember.player_data.experience.SKILL_COMBAT ?? 0, COMBAT.levels);

        setProfileData({
          pseudo: normalizedPseudo,
          profile: selectedProfile.cute_name,
          farmingLvl,
          fishingLvl,
          miningLvl,
          foragingLvl,
          combatLvl,
          farmingMaxLvl: FARMING.maxLevel,
          fishingMaxLvl: FISHING.maxLevel,
          miningMaxLvl: MINING.maxLevel,
          foragingMaxLvl: FORAGING.maxLevel,
          combatMaxLvl: COMBAT.maxLevel,
        });
      } catch (error) {
        setError("Failed to load profile data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [normalizedPseudo]);



  const renderSection = () => {
    switch (activeSection) {
      case Section.Home:
        return <HomeRender profileData={profileData} />
      case Section.Accessories:
        return <AccessoriesRender profileData={profileData} />
      case Section.Farming:
        return <FarmingRender profileData={profileData} />
      default:
        return null;
    }
  };

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

  return (
    <div className="flex flex-col items-center justify-center gap-2 pt-5">
      <h1 className="text-4xl font-bold text-center">{profileData.pseudo} - {profileData.profile}</h1>
      <div className="flex gap-4 py-4">

        <button
          onClick={() => setActiveSection(Section.Home)}
          className={`px-4 py-2 rounded ${activeSection === Section.Home ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
        >
          Home
        </button>

        <button
          onClick={() => setActiveSection(Section.Accessories)}
          className={`px-4 py-2 rounded ${activeSection === Section.Accessories ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
        >
          Optimize Accessories
        </button>

        <button
          onClick={() => setActiveSection(Section.Farming)}
          className={`px-4 py-2 rounded ${activeSection === Section.Farming ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
        >
          Optimize Farming
        </button>
      </div>
      {renderSection()}
    </div>
  );
}