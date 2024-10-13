import React, { FC } from "react";

const FarmingEarlyRender: FC<RenderProps> = ({ profileData }) => {
  if (!profileData) return null;

  return (
    <div className="text-gray-200 p-8 m-5">
      <h1 className="text-3xl font-extrabold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8 mb-8">
        Farming Early Game :
      </h1>

      <p className="font-bold text-lg">Pet: <span className="text-yellow">Rabbit</span></p>
      <p className="font-bold text-lg">Reforge Equipment: <span className="text-yellow">Blooming</span></p>

      <div className="mt-6">
        <h3 className="font-bold text-xl underline">Tools:</h3>
        <ul className="list-disc ml-6">
          <li className="font-bold">
            <span className="text-yellow">Advanced Gardening Hoe</span> for Wheat, Potatoes, Carrots, Nether Wart, Sugar Cane, and Mushrooms
          </li>
          <li className="font-bold">
            <span className="text-yellow">Advanced Gardening Axe</span> for Cocoa Beans, Melons, and Pumpkins
          </li>
          <li className="font-bold text-sm text-gray-400">
            Do not farm Cactus without a Cactus Knife
          </li>
        </ul>
      </div>

      <div className="flex justify-around mt-8 space-x-6">
        <div className="flex-1 bg-gray-700 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold mb-4">Armor</h2>
          <ul className="list-disc ml-6">
            <li className="font-bold">Helmet: <span className="text-yellow">Farm Suit Helmet</span></li>
            <li className="font-bold">Chestplate: <span className="text-yellow">Farm Suit Chestplate</span></li>
            <li className="font-bold">Leggings: <span className="text-yellow">Farm Suit Leggings</span></li>
            <li className="font-bold">Boots: <span className="text-yellow">Farm Suit Boots</span></li>
          </ul>
        </div>

        <div className="flex-1 bg-gray-700 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold mb-4">Equipment</h2>
          <ul className="list-disc ml-6">
            <li className="font-bold">Necklace: N/A</li>
            <li className="font-bold">Cloak: N/A</li>
            <li className="font-bold">Belt: <span className="text-yellow">Lotus Belt</span></li>
            <li className="font-bold">Gloves: <span className="text-yellow">Lotus Bracelet</span></li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default FarmingEarlyRender;
