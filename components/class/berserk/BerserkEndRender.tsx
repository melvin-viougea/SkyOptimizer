import React, {FC} from "react";

const BerserkEndRender: FC<RenderProps> = ({profileData}) => {
  if (!profileData) return null;

  return (
    <div className="text-gray-200 p-8 m-5">
      <h1 className="text-3xl font-extrabold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8 mb-8">
        Berserk End Game :
      </h1>

      <p className="font-bold text-lg">Weapon: <span className="text-yellow">Dark Claymore</span></p>
      <p className="font-bold text-lg">Power Stone: <span className="text-yellow">Strong</span></p>
      <p className="font-bold text-lg">Reforge Armor: <span className="text-yellow">Ancient</span></p>
      <p className="font-bold text-lg">Reforge Equipment: <span className="text-yellow">Strengthened</span></p>

      <div className="mt-6">
        <h3 className="font-bold text-xl underline">Pet:</h3>
        <ul className="list-disc ml-6">
          <li className="font-bold">Golden Dragon: <span className="text-yellow">Best DPS</span></li>
        </ul>
      </div>

      <div className="flex justify-around mt-8 space-x-6">
        <div className="flex-1 bg-gray-700 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold mb-4">Dungeon</h2>
          <div>
            <h3 className="font-bold text-lg">Armor:</h3>
            <ul className="list-disc ml-6">
              <li className="font-bold">Helmet: <span className="text-yellow">Diamond Necron Head</span></li>
              <li className="font-bold">Chestplate: <span className="text-yellow">Necron's Chestplate</span></li>
              <li className="font-bold">Leggings: <span className="text-yellow">Necron's Leggings</span></li>
              <li className="font-bold">Boots: <span className="text-yellow">Necron's Boots</span></li>
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="font-bold text-lg">Equipment:</h3>
            <ul className="list-disc ml-6">
              <li className="font-bold">Necklace: <span className="text-yellow">Bone Necklace</span></li>
              <li className="font-bold">Cloak: <span className="text-yellow">Shadow Assassin Cloak</span></li>
              <li className="font-bold">Belt: <span className="text-yellow">Adaptive Belt</span></li>
              <li className="font-bold">Gloves: <span className="text-yellow">Soulweaver Gloves</span></li>
            </ul>
          </div>
        </div>

        <div className="flex-1 bg-gray-700 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold mb-4">Outside Dungeon</h2>
          <div>
            <h3 className="font-bold text-lg">Armor:</h3>
            <ul className="list-disc ml-6">
              <li className="font-bold">Helmet: <span className="text-yellow">Warden Helmet</span></li>
              <li className="font-bold">Chestplate: <span className="text-yellow">Crimson Chestplate</span></li>
              <li className="font-bold">Leggings: <span className="text-yellow">Crimson Leggings</span></li>
              <li className="font-bold">Boots: <span className="text-yellow">Crimson Boots</span></li>
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="font-bold text-lg">Equipment:</h3>
            <ul className="list-disc ml-6">
              <li className="font-bold">Necklace: <span className="text-yellow">Molten Necklace</span> <span className="text-sm text-gray-400">(Dom / Speed 10)</span></li>
              <li className="font-bold">Cloak: <span className="text-yellow">Molten Cloak</span> <span className="text-sm text-gray-400">(Dom / Speed 10)</span></li>
              <li className="font-bold">Belt: <span className="text-yellow">Molten Belt</span> <span className="text-sm text-gray-400">(Dom / Speed 10)</span></li>
              <li className="font-bold">Gloves: <span className="text-yellow">Gauntlet of Contagion</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BerserkEndRender;
