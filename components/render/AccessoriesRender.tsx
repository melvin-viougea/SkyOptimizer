import React, {FC} from "react";
import {formatToPrice} from "@/lib/function";

const AccessoriesRender: FC<RenderProps> = ({profileData}) => {
  if (!profileData) return null;

  return (
    <div>
      <div className="rounded-3xl bg-primary text-gray-200 p-8 m-5 shadow-lg">
        <h1 className="text-3xl font-extrabold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8 mb-8">
          Accessories Optimizer :
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {profileData.playerAccessories.map((accessory, index) => (
            <div key={index} className="p-2 bg-secondary rounded-lg text-center">
              <p className="text-lg font-semibold">{accessory.name}</p>
              {accessory.networth !== undefined && accessory.networth !== 0 && (
                <p className="font-bold text-sm text-yellow">Lowest Bin: {formatToPrice(accessory.networth)}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccessoriesRender;
