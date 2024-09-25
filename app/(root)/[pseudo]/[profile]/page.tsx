"use client";

import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { getSkillLevel } from "@/lib/getSkillLevel";
import {Section} from "@/constants";
import {fetchHypixelProfiles, fetchMojangData, fetchSkills} from "@/lib/fetch";
import HomeRender from "@/components/HomeRender";
import FarmingRender from "@/components/FarmingRender";
import MinionsRender from "@/components/MinionsRender";
import AccessoriesRender from "@/components/AccessoriesRender";
import MiningRender from "@/components/MiningRender";
import FishingRender from "@/components/FishingRender";
import ForagingRender from "@/components/ForagingRender";
import MageRender from "@/components/MageRender";
import ArcherRender from "@/components/ArcherRender";
import BerserkRender from "@/components/BerserkRender";
import TankRender from "@/components/TankRender";
import HealerRender from "@/components/HealerRender";

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

      // GENERAL
      case Section.Home:
        return <HomeRender profileData={profileData} />
      case Section.Accessories:
        return <AccessoriesRender profileData={profileData} />
      case Section.Minions:
        return <MinionsRender profileData={profileData} />

      // SKILLS
      case Section.Farming:
        return <FarmingRender profileData={profileData} />
      case Section.Fishing:
        return <FishingRender profileData={profileData} />
      case Section.Mining:
        return <MiningRender profileData={profileData} />
      case Section.Foraging:
        return <ForagingRender profileData={profileData} />

      // CLASS
      case Section.Mage:
        return <MageRender profileData={profileData} />
      case Section.Archer:
        return <ArcherRender profileData={profileData} />
      case Section.Berserk:
        return <BerserkRender profileData={profileData} />
      case Section.Tank:
        return <TankRender profileData={profileData} />
      case Section.Healer:
        return <HealerRender profileData={profileData} />
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
      <h1 className="text-4xl font-bold text-center mb-5">Show Optimizations For :</h1>
      <h1 className="text-2xl font-bold text-center">{profileData.pseudo} - {profileData.profile}</h1>
      <div className="flex gap-8 py-4">
        {/* SKILLS */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveSection(Section.Farming)}
            className={`px-4 py-2 rounded font-bold text-gray-800 ${activeSection === Section.Farming ? "bg-yellow" : "bg-gray-200"}`}
          >
            Farming
          </button>

          <button
            onClick={() => setActiveSection(Section.Fishing)}
            className={`px-4 py-2 rounded font-bold text-gray-800 ${activeSection === Section.Fishing ? "bg-yellow" : "bg-gray-200"}`}
          >
            Fishing
          </button>

          <button
            onClick={() => setActiveSection(Section.Mining)}
            className={`px-4 py-2 rounded font-bold text-gray-800 ${activeSection === Section.Mining ? "bg-yellow" : "bg-gray-200"}`}
          >
            Mining
          </button>

          <button
            onClick={() => setActiveSection(Section.Foraging)}
            className={`px-4 py-2 rounded font-bold text-gray-800 ${activeSection === Section.Foraging ? "bg-yellow" : "bg-gray-200"}`}
          >
            Foraging
          </button>
        </div>

        {/* GENERAL */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveSection(Section.Home)}
            className={`px-4 py-2 rounded font-bold text-gray-800 ${activeSection === Section.Home ? "bg-yellow" : "bg-gray-200"}`}
          >
            Home
          </button>

          <button
            onClick={() => setActiveSection(Section.Accessories)}
            className={`px-4 py-2 rounded font-bold text-gray-800 ${activeSection === Section.Accessories ? "bg-yellow" : "bg-gray-200"}`}
          >
            Accessories
          </button>

          <button
            onClick={() => setActiveSection(Section.Minions)}
            className={`px-4 py-2 rounded font-bold text-gray-800 ${activeSection === Section.Minions ? "bg-yellow" : "bg-gray-200"}`}
          >
            Minions
          </button>
        </div>

        {/* CLASS */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveSection(Section.Mage)}
            className={`px-4 py-2 rounded font-bold text-gray-800 ${activeSection === Section.Mage ? "bg-yellow" : "bg-gray-200"}`}
          >
            Mage
          </button>

          <button
            onClick={() => setActiveSection(Section.Archer)}
            className={`px-4 py-2 rounded font-bold text-gray-800 ${activeSection === Section.Archer ? "bg-yellow" : "bg-gray-200"}`}
          >
            Archer
          </button>

          <button
            onClick={() => setActiveSection(Section.Berserk)}
            className={`px-4 py-2 rounded font-bold text-gray-800 ${activeSection === Section.Berserk ? "bg-yellow" : "bg-gray-200"}`}
          >
            Berserk
          </button>

          <button
            onClick={() => setActiveSection(Section.Tank)}
            className={`px-4 py-2 rounded font-bold text-gray-800 ${activeSection === Section.Tank ? "bg-yellow" : "bg-gray-200"}`}
          >
            Tank
          </button>

          <button
            onClick={() => setActiveSection(Section.Healer)}
            className={`px-4 py-2 rounded font-bold text-gray-800 ${activeSection === Section.Healer ? "bg-yellow" : "bg-gray-200"}`}
          >
            Healer
          </button>

        </div>
      </div>
      {renderSection()}
    </div>
  );
}