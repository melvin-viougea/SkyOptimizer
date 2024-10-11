import React, {FC} from "react";
import {formatToPrice} from "@/lib/function";

const HomeRender: FC<RenderProps> = ({profileData}) => {
  if (!profileData) return null;

  return (
    <div>
      <div className="rounded-3xl bg-gray-800 text-gray-200 p-8 m-5 shadow-lg">
        <h1 className="text-3xl font-extrabold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8 mb-8">
          Skills :
        </h1>
        <p className="font-bold">Farming {profileData.farmingLvl} / {profileData.farmingMaxLvl}</p>
        <p className="font-bold">Fishing {profileData.fishingLvl} / {profileData.fishingMaxLvl}</p>
        <p className="font-bold">Mining {profileData.miningLvl} / {profileData.miningMaxLvl}</p>
        <p className="font-bold">Foraging {profileData.foragingLvl} / {profileData.foragingMaxLvl}</p>
        <p className="font-bold">Combat {profileData.combatLvl} / {profileData.combatMaxLvl}</p>
      </div>

      <div className="rounded-3xl bg-gray-800 text-gray-200 p-5 m-5">
        <h1 className="text-2xl font-bold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8 mb-5">
          Networth :
        </h1>
        <p className="font-bold">Total Networth : {formatToPrice(profileData.playerTotalNetworth)}</p>
        <p className="font-bold">Purse : {formatToPrice(profileData.playerPurseNetworth)}</p>
        <p className="font-bold">Bank : {formatToPrice(profileData.playerBankNetworth)}</p>
        <p className="font-bold">Sacks : {formatToPrice(profileData.playerSackNetworth)}</p>
        <p className="font-bold">Armor : {formatToPrice(profileData.playerArmorNetworth)}</p>
        <p className="font-bold">Equipment : {formatToPrice(profileData.playerEquipmentNetworth)}</p>
        <p className="font-bold">Wardrobe : {formatToPrice(profileData.playerWardrobeNetworth)}</p>
        <p className="font-bold">Inventory : {formatToPrice(profileData.playerInventoryNetworth)}</p>
        <p className="font-bold">Ender Chest : {formatToPrice(profileData.playerEnderChestNetworth)}</p>
        <p className="font-bold">Accessories : {formatToPrice(profileData.playerAccessoriesNetworth)}</p>
        <p className="font-bold">Storage : {formatToPrice(profileData.playerStorageNetworth)}</p>
        <p className="font-bold">Pets : {formatToPrice(profileData.playerPetsNetworth)}</p>
        <p className="font-bold">Fishing bag : {formatToPrice(profileData.playerFishingBagNetworth)}</p>
        <p className="font-bold">Museum : {formatToPrice(profileData.playerMuseumNetworth)}</p>
      </div>
    </div>
  );
};

export default HomeRender;
