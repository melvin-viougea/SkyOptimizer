import React, { FC } from "react";

const HomeRender: FC<RenderProps> = ({ profileData }) => {
  if (!profileData) return null;

  return (
    <div className="w-[75vw] rounded-3xl bg-gray-800 text-gray-200 p-5 m-5">
      <h1 className="text-2xl font-bold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8 mb-5">Skills :</h1>
      <p className="font-bold">Farming {profileData.farmingLvl} / {profileData.farmingMaxLvl}</p>
      <p className="font-bold">Fishing {profileData.fishingLvl} / {profileData.fishingMaxLvl}</p>
      <p className="font-bold">Mining {profileData.miningLvl} / {profileData.miningMaxLvl}</p>
      <p className="font-bold">Foraging {profileData.foragingLvl} / {profileData.foragingMaxLvl}</p>
      <p className="font-bold">Combat {profileData.combatLvl} / {profileData.combatMaxLvl}</p>
      <p className="font-bold mt-8">Work In Progress</p>
    </div>
  );
};

export default HomeRender;
