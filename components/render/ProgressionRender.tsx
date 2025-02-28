import React, {FC} from "react";
import {formatToPrice} from "@/lib/function";

const ProgressionRender: FC<RenderProps> = ({profileData}) => {
  if (!profileData) return null;

  return (
    <div className="rounded-3xl bg-gray-800 text-gray-200 p-8 m-5 shadow-lg">
      <h1 className="text-3xl font-extrabold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8 mb-8">
        Progression Optimizer : (Work In Progress)
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

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">1 : Faire les quetes de l'ile</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">2 : Faire les quetes des 12 PNJ</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">3 : Faire les quetes du bucheron</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">4 : Récupéré le hunter knife, fire talisement, la harpe, et la collection jungle Axe</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">5 : Faire les quetes du mineur jusqu'au deep caverne</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">6 : Aller au Spider Den pour parler au PNJ bestiaire</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">7 : Faire les quetes du farmeur jusqu'a débloquer le mushroom desert</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">8 : Aller sur l'ile Barn et completer le bestiaire de l'ile</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">9 : Aller chercher l'arumure Squire a Rosetta (devant la mine du hub)</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">10 : Continuer les quetes jusqu'a la zone redstone</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">11 : Monter collection redstone 2 pour débloquer le sac d'accessoire</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">12 : Aller chercher les talisement en fasse du PNJ bazaar</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">13 : Faire la quete du redstone mineur</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">14 : Récupéré assez de redstone pour aller faire 5 minion lvl 4 de redstone</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">15 : Finir de descendre dans les deep caverne en terminant les quetes</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">16 : Aller chercher la promising shovel a Rick dans le Spider Den</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">17 : Aller dans le mushroom desert pour farm le sable et passer mining lvl 12</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">18 : Accèder au Dwarven Mine</h2>
      </div>

      <div className="text-gray-800 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">MINING INTRODUCTION</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">19 : Achetez a Bubu la fractured mithril pickaxe</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">20 : Aller tué des glacites pour récupéré la glacite armor</h2>
      </div>

      <div className="bg-green-300 text-gray-800 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">21 : Farmer les glacites jewel jusqu'a pouvoir acheter le Mithril Golem en légendaire</h2>
      </div>
    </div>
  );
};

export default ProgressionRender;