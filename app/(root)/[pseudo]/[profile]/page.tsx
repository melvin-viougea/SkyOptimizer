"use client";

import {useParams} from "next/navigation";
import React, {useEffect, useRef, useState} from "react";
import {Section} from "@/constants";
import HomeRender from "@/components/HomeRender";
import MinionsRender from "@/components/MinionsRender";
import AccessoriesRender from "@/components/AccessoriesRender";
import HealerRender from "@/components/class/healer/HealerRender";
import MageRender from "@/components/class/mage/MageRender";
import ArcherRender from "@/components/class/archer/ArcherRender";
import BerserkRender from "@/components/class/berserk/BerserkRender";
import TankRender from "@/components/class/tank/TankRender";
import MiningRender from "@/components/skill/mining/MiningRender";
import FarmingRender from "@/components/skill/farming/FarmingRender";
import FishingRender from "@/components/skill/fishing/FishingRender";
import ForagingRender from "@/components/skill/foraging/ForagingRender";
import ProgressionRender from "@/components/ProgressionRender";
import {fetchHypixelAuction, fetchHypixelProfiles, fetchMojangData, fetchSkills} from "@/lib/fetch";
import {calculateNetworth, calculateSacksNetworth, fetchAllItemsWithPrice, getSkillLevel} from "@/lib/function";

export default function ProfilePage() {
  const {pseudo} = useParams();
  const normalizedPseudo = Array.isArray(pseudo) ? pseudo[0] : pseudo;

  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<Section>(Section.Home);


  const numberFetchesRef = useRef<number>(0);
  const [numberFetches, setNumberFetches] = useState<number>(0);
  const [totalFetches, setTotalFetches] = useState<number>(0);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const firstResponse = await fetchHypixelAuction(0);
        setTotalFetches(firstResponse.totalPages + 4);
        const [hypixelSkills, mojangResponse] = await Promise.all([
          fetchSkills().then((response) => {
            numberFetchesRef.current += 1;
            setNumberFetches(numberFetchesRef.current);
            return response;
          }),
          fetchMojangData(normalizedPseudo).then((response) => {
            numberFetchesRef.current += 1;
            setNumberFetches(numberFetchesRef.current);
            return response;
          }),
        ]);

        const playerUuid = mojangResponse.uuid;
        const profilesResponse = await fetchHypixelProfiles(playerUuid).then((response) => {
          numberFetchesRef.current += 1;
          setNumberFetches(numberFetchesRef.current);
          return response;
        });

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

        //////////////////////// ALL ITEMS ////////////////////////
        const allItems = await fetchAllItemsWithPrice(() => {
          numberFetchesRef.current += 1;
          setNumberFetches(numberFetchesRef.current);
        });

        //////////////////////// NETWORTH ////////////////////////
        //console.log(selectedMember);
        let playerPurse = selectedMember.currencies.coin_purse;
        let playerBank = selectedProfile.banking.balance;
        let sackItems = await calculateNetworth(selectedMember?.inventory?.bag_contents?.sacks_bag?.data, allItems);
        let armorItems = await calculateNetworth(selectedMember?.inventory?.inv_armor?.data, allItems);
        let equipmentItems = await calculateNetworth(selectedMember?.inventory?.equipment_contents?.data, allItems)
        let wardrobeItems = await calculateNetworth(selectedMember.inventory.wardrobe_contents.data, allItems)
        let inventoryItems = await calculateNetworth(selectedMember.inventory.inv_contents.data, allItems)
        let enderChestItems = await calculateNetworth(selectedMember.inventory.ender_chest_contents.data, allItems)
        let accessorieItems = await calculateNetworth(selectedMember?.inventory?.bag_contents?.talisman_bag?.data, allItems)
        let storageItems = await calculateNetworth(selectedMember.inventory?.backpack_contents?.data, allItems)
        let petItems = await calculateNetworth(selectedMember.inventory, allItems)
        let fishingBagItems = await calculateNetworth(selectedMember?.inventory?.bag_contents?.fishing_bag?.data, allItems)
        let museumItems = await calculateNetworth(selectedMember.inventory, allItems)
        //////////////////////// SKILL ////////////////////////
        const {FARMING, FISHING, MINING, FORAGING, COMBAT} = hypixelSkills.skills;
        const farmingLvl = getSkillLevel(selectedMember.player_data.experience.SKILL_FARMING ?? 0, FARMING.levels);
        const fishingLvl = getSkillLevel(selectedMember.player_data.experience.SKILL_FISHING ?? 0, FISHING.levels);
        const miningLvl = getSkillLevel(selectedMember.player_data.experience.SKILL_MINING ?? 0, MINING.levels);
        const foragingLvl = getSkillLevel(selectedMember.player_data.experience.SKILL_FORAGING ?? 0, FORAGING.levels);
        const combatLvl = getSkillLevel(selectedMember.player_data.experience.SKILL_COMBAT ?? 0, COMBAT.levels);

        setProfileData({
          pseudo: normalizedPseudo,
          profile: selectedProfile.cute_name,
          // NETWORTH
          playerPurseNetworth: playerPurse,
          playerBankNetworth: playerBank,
          playerSackNetworth: sackItems.networth,
          playerArmorNetworth: armorItems.networth,
          playerEquipmentNetworth: equipmentItems.networth,
          playerWardrobeNetworth: wardrobeItems.networth,
          playerInventoryNetworth: inventoryItems.networth,
          playerEnderChestNetworth: enderChestItems.networth,
          playerAccessoriesNetworth: accessorieItems.networth,
          playerStorageNetworth: storageItems.networth,
          playerPetsNetworth: petItems.networth,
          playerFishingBagNetworth: fishingBagItems.networth,
          playerMuseumNetworth: museumItems.networth,
          playerTotalNetworth: playerPurse + playerBank + sackItems.networth + armorItems.networth + equipmentItems.networth + wardrobeItems.networth + inventoryItems.networth + enderChestItems.networth + accessorieItems.networth + storageItems.networth + petItems.networth + fishingBagItems.networth + museumItems.networth,
          // PLAYER ITEMS
          playerPurse: playerPurse,
          playerBank: playerBank,
          playerSack: sackItems.items,
          playerArmor: armorItems.items,
          playerEquipment: equipmentItems.items,
          playerWardrobe: wardrobeItems.items,
          playerInventory: inventoryItems.items,
          playerEnderChest: enderChestItems.items,
          playerAccessories: accessorieItems.items,
          playerStorage: storageItems.items,
          playerPets: petItems.items,
          playerFishingBag: fishingBagItems.items,
          playerMuseum: museumItems.items,
          // SKILLS
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
    fetchData().then((r) => {
      return r;
    });
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
        <h1 className="text-3xl font-bold text-gray-200 text-center">{totalFetches ? Math.min(Math.round(numberFetches * 100 / totalFetches), 100) : 0}%</h1>
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