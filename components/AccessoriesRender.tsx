import React, {FC} from "react";
import {formatToPrice} from "@/lib/function";

const AccessoriesRender: FC<RenderProps> = ({profileData}) => {
  if (!profileData) return null;

  return (
    <div>
      <div className="w-[75vw] rounded-3xl bg-gray-800 text-gray-200 p-5 m-5">
        <h1 className="text-2xl font-bold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8 mb-5">
          Accessories Optimizer :
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {profileData.playerAccessories.map((accessory, index) => (
            <div key={index} className="p-2 bg-gray-700 rounded-lg text-center">
              <p className="text-lg font-semibold">{accessory.name}</p>
              {accessory.lowestBin !== undefined && (
                <p className="font-bold text-sm text-yellow">Lowest Bin: {formatToPrice(accessory.lowestBin)}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccessoriesRender;
