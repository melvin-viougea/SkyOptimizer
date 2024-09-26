import React, { FC } from "react";

const ProgressionRender: FC<RenderProps> = ({ profileData }) => {
  if (!profileData) return null;

  return (
    <div className="w-[75vw] rounded-3xl bg-gray-800 p-5 m-5">
      <h1 className="text-2xl font-bold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8 mb-5">Progression Optimizer :</h1>
      <div className="bg-red-400 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center">
        <h2 className="text-xl font-bold">Step 1 : 100M Networth</h2>
        <p className="mt-2 text-lg font-bold">Player networth : {profileData.fishingLvl}</p>
      </div>

      <div className="bg-red-400 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">Step 1 : 6B Networth</h2>
        <p className="mt-2 text-lg font-bold">Player networth : {profileData.farmingLvl}</p>
      </div>

      <div className="bg-red-400 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">Step 1 : 15B Networth</h2>
        <p className="mt-2 text-lg font-bold">Player networth : {profileData.miningLvl}</p>
      </div>
    </div>
  );
};

export default ProgressionRender;
