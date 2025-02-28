"use client";

import {useParams} from "next/navigation";
import React, {useEffect, useRef, useState} from "react";
import {Section} from "@/constants";
import HomeRender from "@/components/render/HomeRender";
import MinionsRender from "@/components/render/MinionsRender";
import AccessoriesRender from "@/components/render/AccessoriesRender";
import HealerRender from "@/components/render/class/healer/HealerRender";
import MageRender from "@/components/render/class/mage/MageRender";
import ArcherRender from "@/components/render/class/archer/ArcherRender";
import BerserkRender from "@/components/render/class/berserk/BerserkRender";
import TankRender from "@/components/render/class/tank/TankRender";
import MiningRender from "@/components/render/skill/mining/MiningRender";
import FarmingRender from "@/components/render/skill/farming/FarmingRender";
import FishingRender from "@/components/render/skill/fishing/FishingRender";
import ForagingRender from "@/components/render/skill/foraging/ForagingRender";
import ProgressionRender from "@/components/render/ProgressionRender";
import {fetchHypixelAuction, fetchHypixelProfiles, fetchMojangData, fetchSkills} from "@/lib/fetch";
import {calculateNetworth, fetchAllItemsWithPrice, getSkillLevel} from "@/lib/function";
import Navbar from "@/components/Sidebar";
import ReleaseNoteRender from "@/components/render/ReleaseNoteRender";

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

        //////////////////////// ALL ITEMS WITH PRICE ////////////////////////
        const allItems = await fetchAllItemsWithPrice(() => {
          numberFetchesRef.current += 1;
          setNumberFetches(numberFetchesRef.current);
        });

        //////////////////////// PLAYER NETWORTH ////////////////////////
        // //console.log(selectedMember);
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

        //////////////////////// PLAYER SKILL ////////////////////////
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
    fetchData().then();
  }, []);

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
      case Section.RealseNote:
        return <ReleaseNoteRender profileData={profileData}/>;

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
    if (process.env.NODE_ENV === "production") {
      return (
        <div className="flex flex-col items-center justify-center gap-2 pt-5 min-h-screen">
          <h1 className="text-3xl font-bold text-gray-200 text-center pb-5">An error has occurred. Please try again.</h1>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-yellow text-gray-800 rounded-md transition font-bold"
          >
            Go Back
          </button>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-center justify-center gap-2 pt-5 min-h-screen">
          <h1 className="text-3xl font-bold text-gray-200 text-center">Error: {error}</h1>
        </div>
      );
    }
  }

  if (!profileData) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 pt-5 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-200 text-center">No profile data available.</h1>
      </div>
    );
  }

  return (
    <div className="flex">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} pseudo={profileData.pseudo} profile={profileData.profile}/>
      <div className="flex-1">{renderSection()}</div>
    </div>
  );
}