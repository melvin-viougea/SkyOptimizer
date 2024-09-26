import React, {FC} from "react";
import {formatToMillions} from "@/lib/function";

const HomeRender: FC<RenderProps> = ({profileData}) => {
  if (!profileData) return null;

  return (
    <div>
      <div className="w-[75vw] rounded-3xl bg-gray-800 text-gray-200 p-5 m-5">
        <h1 className="text-2xl font-bold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8 mb-5">
          Skills :
        </h1>
        <p className="font-bold">Farming {profileData.farmingLvl} / {profileData.farmingMaxLvl}</p>
        <p className="font-bold">Fishing {profileData.fishingLvl} / {profileData.fishingMaxLvl}</p>
        <p className="font-bold">Mining {profileData.miningLvl} / {profileData.miningMaxLvl}</p>
        <p className="font-bold">Foraging {profileData.foragingLvl} / {profileData.foragingMaxLvl}</p>
        <p className="font-bold">Combat {profileData.combatLvl} / {profileData.combatMaxLvl}</p>
      </div>

      <div className="w-[75vw] rounded-3xl bg-gray-800 text-gray-200 p-5 m-5">
        <h1 className="text-2xl font-bold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8 mb-5">
          Networth :
        </h1>
        <p className="font-bold">Total Networth : {formatToMillions(profileData.purse+profileData.bank)}M</p>
        <p className="font-bold">Purse : {formatToMillions(profileData.purse)}M</p>
        <p className="font-bold">Bank : {formatToMillions(profileData.bank)}M</p>
        <p className="font-bold">Sacks : {profileData.combatLvl}</p>
        <p className="font-bold">Armor : {profileData.combatLvl}</p>
        <p className="font-bold">Equipment : {profileData.combatLvl}</p>
        <p className="font-bold">Wardrobe : {profileData.combatLvl}</p>
        <p className="font-bold">Inventory : {profileData.combatLvl}</p>
        <p className="font-bold">Ender Chest : {profileData.combatLvl}</p>
        <p className="font-bold">Accessories : {profileData.combatLvl}</p>
        <p className="font-bold">Storage : {profileData.combatLvl}</p>
        <p className="font-bold">Pets : {profileData.combatLvl}</p>
        <p className="font-bold">Fishing bag : {profileData.combatLvl}</p>
        <p className="font-bold">Museum : {profileData.combatLvl}</p>
      </div>
    </div>
  );
};

export default HomeRender;
