import React, { FC } from "react";

const HomeRender: FC<RenderProps> = ({ profileData }) => {
  if (!profileData) return null;

  return (
    <div className="w-[75vw] rounded-3xl bg-gray-800 p-5 m-5">
      <h1 className="text-2xl font-bold underline decoration-wavy decoration-secondary decoration-4 underline-offset-8 mb-5">Skills :</h1>
      <p>Farming {profileData.farmingLvl} / {profileData.farmingMaxLvl}</p>
      <p>Fishing {profileData.fishingLvl} / {profileData.fishingMaxLvl}</p>
      <p>Mining {profileData.miningLvl} / {profileData.miningMaxLvl}</p>
      <p>Foraging {profileData.foragingLvl} / {profileData.foragingMaxLvl}</p>
      <p>Combat {profileData.combatLvl} / {profileData.combatMaxLvl}</p>
    </div>
  );
};

export default HomeRender;
