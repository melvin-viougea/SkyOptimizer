import React, { FC } from "react";
import Image from "next/image";
import MiningProgression from "@/components/render/skill/mining/MiningProgression";

const Mining: FC<RenderProps> = ({ profileData }) => {
  if (!profileData) return null;

  return (
    <div className="m-4 h-[calc(100vh-2rem)] w-[calc(100wh-2rem)] bg-primary text-white rounded-3xl p-8 shadow-lg">
      <div className="flex h-[calc(100vh-6rem)]">
        {/* Partie gauche : Mining (non scrollable) */}
        <div className="w-full flex-1 flex flex-col pr-4 border-r-2 border-gray-400 overflow-hidden">
          {/* Partie supérieure - Progression */}
          <div className="flex-1">
            <div>
              <div>early : 0/100</div>
              <div>mid : 0/100</div>
              <div>late : 0/100</div>
              <div>end : 0/100</div>
            </div>
          </div>

          {/* Partie inférieure - Inventaire */}
          <div className="flex flex-col h-auto space-y-4">
            {/* Armor Section */}
            <div className="bg-secondary p-3 rounded-xl">
              <h3 className="text-xl font-semibold">Armor</h3>
              <div className="mb-1 flex p-2 space-x-2">
                <div className="p-2">
                  <Image
                    src="/slot.webp"
                    width={150}
                    height={150}
                    alt="slot"
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="p-2">
                  <Image
                    src="/slot.webp"
                    width={150}
                    height={150}
                    alt="slot"
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="p-2">
                  <Image
                    src="/slot.webp"
                    width={150}
                    height={150}
                    alt="slot"
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="p-2">
                  <Image
                    src="/slot.webp"
                    width={150}
                    height={150}
                    alt="slot"
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Weapon and Pet Section */}
            <div className="flex justify-between space-x-4">
              {/* Weapon Card */}
              <div className="bg-secondary p-3 rounded-xl flex-1">
                <h3 className="text-xl font-semibold">Weapon</h3>
                <div className="flex justify-start p-2 space-x-2">
                  <div className="p-2">
                    <Image
                      src="/slot.webp"
                      width={150}
                      height={150}
                      alt="slot"
                      className="object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Pet Card */}
              <div className="bg-secondary p-3 rounded-xl flex-1">
                <h3 className="text-xl font-semibold">Pet</h3>
                <div className="flex justify-start p-2 space-x-2">
                  <div className="p-2">
                    <Image
                      src="/slot.webp"
                      width={150}
                      height={150}
                      alt="slot"
                      className="object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Accessories Section */}
            <div className="bg-secondary p-3 rounded-xl mt-auto">
              <h3 className="text-xl font-semibold">Accessories</h3>
              <div className="mb-1 flex p-2 space-x-2">
                <div className="p-2">
                  <Image
                    src="/slot.webp"
                    width={150}
                    height={150}
                    alt="slot"
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="p-2">
                  <Image
                    src="/slot.webp"
                    width={150}
                    height={150}
                    alt="slot"
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="p-2">
                  <Image
                    src="/slot.webp"
                    width={150}
                    height={150}
                    alt="slot"
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="p-2">
                  <Image
                    src="/slot.webp"
                    width={150}
                    height={150}
                    alt="slot"
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partie droite : Progression (scrollable) */}
        <div className="pl-4 w-full flex-1 overflow-y-auto">
          <MiningProgression profileData={profileData} />
        </div>
      </div>
    </div>
  );
};

export default Mining;
