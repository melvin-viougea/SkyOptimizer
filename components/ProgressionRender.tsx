import React, {FC} from "react";
import {formatToPrice} from "@/lib/function";

const ProgressionRender: FC<RenderProps> = ({profileData}) => {
  if (!profileData) return null;

  return (
    <div className="rounded-3xl bg-gray-800 text-gray-200 p-8 m-5 shadow-lg">
      <h1 className="text-3xl font-extrabold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8 mb-8">
        Progression Optimizer : (Work In Progress)
      </h1>

      {/* Step 1 */}
      <div
        className={`${
          profileData.playerTotalNetworth >= 100_000_000 ? "bg-green-400" : "bg-red-400"
        } text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5`}
      >
        <h2 className="text-xl font-bold">Step 1 : 100M Networth</h2>
        <p className="mt-2 text-lg font-bold">
          Player networth: {formatToPrice(profileData.playerTotalNetworth)}
        </p>
      </div>

      {/*<div*/}
      {/*  className={`${*/}
      {/*    profileData.item?.hyperion ? "bg-green-400" : "bg-red-400"*/}
      {/*  } text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5`}*/}
      {/*>*/}
      {/*  <h2 className="text-xl font-bold">Step 2 : Hyperion</h2>*/}
      {/*  <p className="mt-2 text-lg font-bold">*/}
      {/*    Player hyperion value: {formatToPrice(profileData.item.hyperion)}*/}
      {/*  </p>*/}
      {/*</div>*/}

      <div
        className={`${
          profileData.playerTotalNetworth >= 6_000_000_000 ? "bg-green-400" : "bg-red-400"
        } text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5`}
      >
        <h2 className="text-xl font-bold">Step 2 : 6B Networth</h2>
        <p className="mt-2 text-lg font-bold">
          Player networth: {formatToPrice(profileData.playerTotalNetworth)}
        </p>
      </div>

      <div
        className={`${
          profileData.playerTotalNetworth >= 15_000_000_000 ? "bg-green-400" : "bg-red-400"
        } text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5`}
      >
        <h2 className="text-xl font-bold">Step 3 : 15B Networth</h2>
        <p className="mt-2 text-lg font-bold">
          Player networth: {formatToPrice(profileData.playerTotalNetworth)}
        </p>
      </div>
    </div>
  );
};

export default ProgressionRender;