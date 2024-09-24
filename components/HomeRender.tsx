import React, { FC } from "react";

const HomeRender: FC<RenderProps> = ({ profileData }) => {
  if (!profileData) return null;

  return (
    <div>
      <h1 className="text-2xl font-bold text-center underline">Skills :</h1>
      <p>Farming {profileData.farmingLvl} / {profileData.farmingMaxLvl}</p>
      <p>Fishing {profileData.fishingLvl} / {profileData.fishingMaxLvl}</p>
      <p>Mining {profileData.miningLvl} / {profileData.miningMaxLvl}</p>
      <p>Foraging {profileData.foragingLvl} / {profileData.foragingMaxLvl}</p>
      <p>Combat {profileData.combatLvl} / {profileData.combatMaxLvl}</p>
    </div>
  );
};

export default HomeRender;
