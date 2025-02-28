import React, {FC} from "react";
import {formatToPrice} from "@/lib/function";

const ProgressionRender: FC<RenderProps> = ({profileData}) => {
  if (!profileData) return null;

  return (
    <div className="rounded-3xl bg-gray-800 text-gray-200 p-8 m-5 shadow-lg">
      <h1 className="text-3xl font-extrabold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8 mb-8">
        Progression Optimizer :
      </h1>

      {/*/!* Step 1 *!/*/}
      {/*<div*/}
      {/*  className={`${*/}
      {/*    profileData.playerTotalNetworth >= 100_000_000 ? "bg-green-300" : "bg-red-400"*/}
      {/*  } text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5`}*/}
      {/*>*/}
      {/*  <h2 className="text-xl font-bold">Step 1 : 100M Networth</h2>*/}
      {/*  <p className="mt-2 text-lg font-bold">*/}
      {/*    Player networth: {formatToPrice(profileData.playerTotalNetworth)}*/}
      {/*  </p>*/}
      {/*</div>*/}

      {/*/!*<div*!/*/}
      {/*/!*  className={`${*!/*/}
      {/*/!*    profileData.item?.hyperion ? "bg-green-300" : "bg-red-400"*!/*/}
      {/*/!*  } text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5`}*!/*/}
      {/*/!*>*!/*/}
      {/*/!*  <h2 className="text-xl font-bold">Step 2 : Hyperion</h2>*!/*/}
      {/*/!*  <p className="mt-2 text-lg font-bold">*!/*/}
      {/*/!*    Player hyperion value: {formatToPrice(profileData.item.hyperion)}*!/*/}
      {/*/!*  </p>*!/*/}
      {/*/!*</div>*!/*/}

      {/*<div*/}
      {/*  className={`${*/}
      {/*    profileData.playerTotalNetworth >= 6_000_000_000 ? "bg-green-300" : "bg-red-400"*/}
      {/*  } text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5`}*/}
      {/*>*/}
      {/*  <h2 className="text-xl font-bold">Step 2 : 6B Networth</h2>*/}
      {/*  <p className="mt-2 text-lg font-bold">*/}
      {/*    Player networth: {formatToPrice(profileData.playerTotalNetworth)}*/}
      {/*  </p>*/}
      {/*</div>*/}

      {/*<div*/}
      {/*  className={`${*/}
      {/*    profileData.playerTotalNetworth >= 15_000_000_000 ? "bg-green-300" : "bg-red-400"*/}
      {/*  } text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5`}*/}
      {/*>*/}
      {/*  <h2 className="text-xl font-bold">Step 3 : 15B Networth</h2>*/}
      {/*  <p className="mt-2 text-lg font-bold">*/}
      {/*    Player networth: {formatToPrice(profileData.playerTotalNetworth)}*/}
      {/*  </p>*/}
      {/*</div>*/}

      <h1 className="text-3xl font-extrabold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8 mb-8">
        Progression Optimizer : (Work In Progress)
      </h1>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">1 : Faire les quêtes de l'île</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">2 : Faire les quêtes des 12 PNJ</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">3 : Faire les quêtes du bûcheron</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">4 : Récupérer le Hunter Knife, Fire Talisman, la harpe et la collection Jungle Axe</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">5 : Faire les quêtes du mineur jusqu'aux Deep Caverns</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">6 : Aller au Spider's Den pour parler au PNJ bestiaire</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">7 : Faire les quêtes du fermier jusqu'à débloquer le Mushroom Desert</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">8 : Aller sur l'île Barn et compléter le bestiaire de l'île</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">9 : Aller chercher l'armure Squire à Rosetta (devant la mine du hub)</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">10 : Continuer les quêtes Deep Caverns jusqu'à la zone Redstone</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">11 : Monter la collection Redstone 2 pour débloquer le sac d'accessoires</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">12 : Aller chercher les talismans en face du PNJ Bazaar</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">13 : Faire la quête du mineur Redstone</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">14 : Récupérer assez de Redstone pour fabriquer 5 minions niveau 4 puis les placer sur son île</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">15 : Finir de descendre dans les Deep Caverns en terminant les quêtes</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">16 : Aller chercher la Promising Shovel à Rick dans le Spider's Den</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">17 : Aller dans le Mushroom Desert pour farmer le sable et passer Mining niveau 12</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">18 : Débloquer l'accès aux Dwarven Mines</h2>
      </div>

      <div className="w-1/2 mx-auto text-center py-16">
        <h2 className="text-5xl font-bold">MINING INTRODUCTION</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">1 : Accéder aux Dwarven Mines</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">2 : Acheter à Bubu la Fractured Mithril Pickaxe</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">3 : Aller tuer des Glacites pour récupérer la Glacite Armor</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">4 : Farmer les Glacite Jewels jusqu'à pouvoir acheter le Mithril Golem en légendaire</h2>
      </div>
    </div>
  );
};

export default ProgressionRender;