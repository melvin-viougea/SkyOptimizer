"use client";

import {useParams} from "next/navigation";
import React, {useEffect, useState} from "react";
import {calculateNetworth, decodeItems, fetchAndProcessData, getSkillLevel} from "@/lib/function";
import {Section} from "@/constants";
import HomeRender from "@/components/HomeRender";
import FarmingRender from "@/components/skill/FarmingRender";
import MinionsRender from "@/components/MinionsRender";
import AccessoriesRender from "@/components/AccessoriesRender";
import MiningRender from "@/components/skill/MiningRender";
import FishingRender from "@/components/skill/FishingRender";
import ForagingRender from "@/components/skill/ForagingRender";
import MageRender from "@/components/class/MageRender";
import ArcherRender from "@/components/class/ArcherRender";
import BerserkRender from "@/components/class/BerserkRender";
import TankRender from "@/components/class/TankRender";
import HealerRender from "@/components/class/HealerRender";
import ProgressionRender from "@/components/ProgressionRender";
import {fetchHypixelProfiles, fetchMojangData, fetchSkills} from "@/lib/fetch";

export default function ProfilePage() {
  const {pseudo} = useParams();
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

        const playerPurse = selectedMember.currencies.coin_purse
        const playerBank = selectedProfile.banking.balance

        if (!selectedMember) {
          setError("Selected member not found");
          return;
        }

        // ALL ITEMS
        const allItems = await fetchAndProcessData();

        // ALL ACCESSORIES
        // const accessoryItems = allItems.items.filter(item => item.category === "ACCESSORY");
        // const talismanNames = accessoryItems.map(item => item.name);

        //////////////////////// NETWORTH ////////////////////////

        let fishingBagItems = await calculateNetworth(selectedMember?.inventory?.bag_contents?.fishing_bag?.data, allItems);
        let accessoriesItems = await calculateNetworth(selectedMember?.inventory?.bag_contents?.talisman_bag?.data, allItems);
        let equipmentItems = await calculateNetworth(selectedMember?.inventory?.equipment_contents?.data, allItems);
        let armorItems = await calculateNetworth(selectedMember?.inventory?.inv_armor?.data, allItems);
        let inventoryItems = await calculateNetworth(selectedMember.inventory.inv_contents.data, allItems);
        console.log(fishingBagItems)

        //////////////////////// END NETWORTH ////////////////////////

        const {FARMING, FISHING, MINING, FORAGING, COMBAT} = hypixelSkills.skills;
        const farmingLvl = getSkillLevel(selectedMember.player_data.experience.SKILL_FARMING ?? 0, FARMING.levels);
        const fishingLvl = getSkillLevel(selectedMember.player_data.experience.SKILL_FISHING ?? 0, FISHING.levels);
        const miningLvl = getSkillLevel(selectedMember.player_data.experience.SKILL_MINING ?? 0, MINING.levels);
        const foragingLvl = getSkillLevel(selectedMember.player_data.experience.SKILL_FORAGING ?? 0, FORAGING.levels);
        const combatLvl = getSkillLevel(selectedMember.player_data.experience.SKILL_COMBAT ?? 0, COMBAT.levels);

        setProfileData({
          pseudo: normalizedPseudo,
          profile: selectedProfile.cute_name,
          networth: playerPurse + playerBank + accessoriesItems.networth + inventoryItems.networth + armorItems.networth + equipmentItems.networth,
          purse: playerPurse,
          bank: playerBank,
          playerAccessories: accessoriesItems.items,
          playerAccessoriesNetworth: accessoriesItems.networth,
          playerInventory: inventoryItems.items,
          playerInventoryNetworth: inventoryItems.networth,
          playerArmor: armorItems.items,
          playerArmorNetworth: armorItems.networth,
          playerEquipment: equipmentItems.items,
          playerEquipmentNetworth: equipmentItems.networth,
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
        return <HomeRender profileData={profileData}/>;
      case Section.Accessories:
        return <AccessoriesRender profileData={profileData}/>;
      case Section.Minions:
        return <MinionsRender profileData={profileData}/>;
      case Section.Progression:
        return <ProgressionRender profileData={profileData}/>;

      case Section.Farming:
        return <FarmingRender profileData={profileData}/>;
      case Section.Fishing:
        return <FishingRender profileData={profileData}/>;
      case Section.Mining:
        return <MiningRender profileData={profileData}/>;

      case Section.Foraging:
        return <ForagingRender profileData={profileData}/>;

      case Section.Mage:
        return <MageRender profileData={profileData}/>;
      case Section.Archer:
        return <ArcherRender profileData={profileData}/>;
      case Section.Berserk:
        return <BerserkRender profileData={profileData}/>;
      case Section.Tank:
        return <TankRender profileData={profileData}/>;
      case Section.Healer:
        return <HealerRender profileData={profileData}/>;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 pt-5 min-h-screen">
        <h1 className="text-4xl font-bold text-gray-200 text-center">Loading...</h1>
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
    <div className="flex">
      <div className="w-64 h-screen bg-gray-800 text-white flex flex-col py-4">
        <h2 className="text-2xl font-bold text-center text-yellow mb-4">SkyOptimizer</h2>
        <h2 className="text-xl font-bold text-center mb-4">{profileData.pseudo}</h2>
        <h2 className="text-lg font-bold text-center mb-4">{profileData.profile}</h2>
        <div className="flex flex-col gap-2 m-3">
          <button onClick={() => setActiveSection(Section.Home)} className={`px-4 py-2 rounded font-bold text-gray-800 ${activeSection === Section.Home ? "bg-yellow" : "bg-gray-200"}`}>
            Home
          </button>
          <button onClick={() => setActiveSection(Section.Progression)} className={`px-4 py-2 rounded font-bold text-gray-800 ${activeSection === Section.Progression ? "bg-yellow" : "bg-gray-200"}`}>
            Progression
          </button>
          <button onClick={() => setActiveSection(Section.Accessories)} className={`px-4 py-2 rounded font-bold text-gray-800 ${activeSection === Section.Accessories ? "bg-yellow" : "bg-gray-200"}`}>
            Accessories
          </button>
          <button onClick={() => setActiveSection(Section.Minions)} className={`px-4 py-2 rounded font-bold text-gray-800 ${activeSection === Section.Minions ? "bg-yellow" : "bg-gray-200"}`}>
            Minions
          </button>

          <button onClick={() => setActiveSection(Section.Farming)} className={`mt-5 px-4 py-2 rounded font-bold text-gray-800 ${activeSection === Section.Farming ? "bg-yellow" : "bg-gray-200"}`}>
            Farming
          </button>
          <button onClick={() => setActiveSection(Section.Fishing)} className={`px-4 py-2 rounded font-bold text-gray-800 ${activeSection === Section.Fishing ? "bg-yellow" : "bg-gray-200"}`}>
            Fishing
          </button>
          <button onClick={() => setActiveSection(Section.Mining)} className={`px-4 py-2 rounded font-bold text-gray-800 ${activeSection === Section.Mining ? "bg-yellow" : "bg-gray-200"}`}>
            Mining
          </button>
          <button onClick={() => setActiveSection(Section.Foraging)} className={`px-4 py-2 rounded font-bold text-gray-800 ${activeSection === Section.Foraging ? "bg-yellow" : "bg-gray-200"}`}>
            Foraging
          </button>

          <button onClick={() => setActiveSection(Section.Mage)} className={`mt-5 px-4 py-2 rounded font-bold text-gray-800 ${activeSection === Section.Mage ? "bg-yellow" : "bg-gray-200"}`}>
            Mage
          </button>
          <button onClick={() => setActiveSection(Section.Archer)} className={`px-4 py-2 rounded font-bold text-gray-800 ${activeSection === Section.Archer ? "bg-yellow" : "bg-gray-200"}`}>
            Archer
          </button>
          <button onClick={() => setActiveSection(Section.Berserk)} className={`px-4 py-2 rounded font-bold text-gray-800 ${activeSection === Section.Berserk ? "bg-yellow" : "bg-gray-200"}`}>
            Berserk
          </button>
          <button onClick={() => setActiveSection(Section.Tank)} className={`px-4 py-2 rounded font-bold text-gray-800 ${activeSection === Section.Tank ? "bg-yellow" : "bg-gray-200"}`}>
            Tank
          </button>
          <button onClick={() => setActiveSection(Section.Healer)} className={`px-4 py-2 rounded font-bold text-gray-800 ${activeSection === Section.Healer ? "bg-yellow" : "bg-gray-200"}`}>
            Healer
          </button>
        </div>
      </div>
      <div className="flex-1">
        {renderSection()}
      </div>
    </div>
  );
}