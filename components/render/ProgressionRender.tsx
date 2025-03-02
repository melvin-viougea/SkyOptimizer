import React, {FC} from "react";
import Image from "next/image";
//import {formatToPrice} from "@/lib/function";

const ProgressionRender: FC<RenderProps> = ({profileData}) => {
  if (!profileData) return null;

  return (
    <div className="rounded-3xl bg-primary text-gray-200 p-8 m-5 shadow-lg">
      {/*/!* Step 1 *!/*/}
      {/*<div*/}
      {/*  className={`${*/}
      {/*    profileData.playerTotalNetworth >= 100_000_000 ? "bg-secondary" : "bg-red-400"*/}
      {/*  } text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5`}*/}
      {/*>*/}
      {/*  <h2 className="text-xl font-bold">Step 1 : 100M Networth</h2>*/}
      {/*  <p className="mt-2 text-lg font-bold">*/}
      {/*    Player networth: {formatToPrice(profileData.playerTotalNetworth)}*/}
      {/*  </p>*/}
      {/*</div>*/}

      {/*/!*<div*!/*/}
      {/*/!*  className={`${*!/*/}
      {/*/!*    profileData.item?.hyperion ? "bg-secondary" : "bg-red-400"*!/*/}
      {/*/!*  } text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5`}*!/*/}
      {/*/!*>*!/*/}
      {/*/!*  <h2 className="text-xl font-bold">Step 2 : Hyperion</h2>*!/*/}
      {/*/!*  <p className="mt-2 text-lg font-bold">*!/*/}
      {/*/!*    Player hyperion value: {formatToPrice(profileData.item.hyperion)}*!/*/}
      {/*/!*  </p>*!/*/}
      {/*/!*</div>*!/*/}

      {/*<div*/}
      {/*  className={`${*/}
      {/*    profileData.playerTotalNetworth >= 6_000_000_000 ? "bg-secondary" : "bg-red-400"*/}
      {/*  } text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5`}*/}
      {/*>*/}
      {/*  <h2 className="text-xl font-bold">Step 2 : 6B Networth</h2>*/}
      {/*  <p className="mt-2 text-lg font-bold">*/}
      {/*    Player networth: {formatToPrice(profileData.playerTotalNetworth)}*/}
      {/*  </p>*/}
      {/*</div>*/}

      {/*<div*/}
      {/*  className={`${*/}
      {/*    profileData.playerTotalNetworth >= 15_000_000_000 ? "bg-secondary" : "bg-red-400"*/}
      {/*  } text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5`}*/}
      {/*>*/}
      {/*  <h2 className="text-xl font-bold">Step 3 : 15B Networth</h2>*/}
      {/*  <p className="mt-2 text-lg font-bold">*/}
      {/*    Player networth: {formatToPrice(profileData.playerTotalNetworth)}*/}
      {/*  </p>*/}
      {/*</div>*/}

      <h1 className="text-3xl font-extrabold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8 mb-8">
        Progression Optimizer :
      </h1>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">1 : Faire les quêtes de l'île</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">2 : Faire les quêtes des 12 PNJ</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">3 : Faire les quêtes du bûcheron</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">4 : Récupérer le Hunter Knife, Fire Talisman, la harpe et la collection Jungle Axe</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">5 : Faire les quêtes du mineur jusqu'aux Deep Caverns</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">6 : Aller au Spider's Den pour parler au PNJ bestiaire</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">7 : Faire les quêtes du fermier jusqu'à débloquer le Mushroom Desert</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">8 : Aller sur l'île Barn et compléter le bestiaire de l'île</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">9 : Aller chercher l'armure Squire à Rosetta (devant la mine du hub)</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">10 : Continuer les quêtes Deep Caverns jusqu'à la zone Redstone</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">11 : Monter la collection Redstone 2 pour débloquer le sac d'accessoires</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">12 : Aller chercher les talismans en face du PNJ Bazaar</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">13 : Faire la quête du mineur Redstone</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">14 : Récupérer assez de Redstone pour fabriquer 5 minions niveau 4 puis les placer sur son île</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">15 : Finir de descendre dans les Deep Caverns en terminant les quêtes</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">16 : Aller chercher la Promising Shovel à Rick dans le Spider's Den</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">17 : Aller dans le Mushroom Desert pour farmer le sable et passer Mining niveau 12</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">18 : Débloquer l'accès aux Dwarven Mines</h2>
      </div>

      <div className="w-1/2 mx-auto text-center py-16">
        <h2 className="text-5xl font-bold">MINING INTRODUCTION</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold pb-4">HOTM TREE - améliorer 1/3/5 avec la powder</h2>
        <div className="flex justify-center">
          <Image
            src="/hotm_intro.png"
            width={1200}
            height={800}
            alt="HOTM Tree Intro"
            className="object-contain rounded-lg"
          />
        </div>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">1 : Accéder aux Dwarven Mines</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">2 : Acheter à Bubu la Fractured Mithril Pickaxe</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">3 : Aller tuer des Glacites pour récupérer la Glacite Armor</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">4 : Pensez au Daily, Puzzler et Fetchur pour gagner un peu de powder et d'argent</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">4 : Passer HOTM 2</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">5 : Utiliser la forge dès que possible (au minimum craft des Refined Mithril)</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">6 : Farmer les Glacite Jewels jusqu'à pouvoir acheter le Mithril Golem en légendaire</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">9 : Acheter/forger les équipements en mithril</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">7 : Passer HOTM 4</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">8 : Acheter l'armure Sorrow en légendaire</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">9 : Acheter/forger les équipements en titanium</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">10 : HOTM 5, réinitialiser l'arbre dès que 150.000 powders pour débloquer un commission slot avec le Core lvl 2</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">11 : Acheter/forger la Mithril Drill SX-R326 dès que possible</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">12 : Acheter/forger la Spicy Goblin Omelette et le mettre sur la drill</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">13 : Acheter/forger le Mithril-Infused Fuel Tank et le mettre sur la drill</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">14 : Acheter/forger le Mithril-Plated Drill Engine et le mettre sur la drill</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">15 : Passer HOTM 7</h2>
      </div>

      <div className="w-1/2 mx-auto text-center py-16">
        <h2 className="text-5xl font-bold">GEMSTONE POWDER FARMING</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold pb-4">HOTM TREE - maxer les 4 perks dans l'ordre</h2>
        <div className="flex justify-center">
          <Image
            src="/hotm_gemstone_powder.png"
            width={1200}
            height={1200}
            alt="HOTM Tree Gemstone Powder"
            className="object-contain rounded-lg"
          />
        </div>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">1 : Acheter une Mineral armor</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">2 : Acheter un Armadillo légendaire</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">3 : Dès que possible, acheter/forger une Jasper Drill X et y mettre les Drill Parts achetés précédemment</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">4 : Faire la powder avec l'ouverture des Treasure Chest dans Precursor City pour faire de l'argent</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">5 : Atteindre 12.076.732 de gemstone powder (minimum nécessaire gemstone mining)</h2>
      </div>

      <div className="w-1/2 mx-auto text-center py-16">
        <h2 className="text-5xl font-bold">MITHRIL POWDER FARMING</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold pb-4">HOTM TREE - gemstone max 1/2/3 puis le reste 4 - mithril repartir la powder du 1 au 4 en boucle</h2>
        <div className="flex justify-center">
          <Image
            src="/hotm_mithril_powder.png"
            width={1200}
            height={1200}
            alt="HOTM Tree Mithril Powder"
            className="object-contain rounded-lg"
          />
        </div>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">1 : Reprendre la Mithrill Drill, la Sorrow Armor et le Mithril Golem</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">2 : Mettre la reforge Dimensional sur l'armure et Blazing sur les equipements</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">3 : Mettre des Perfect Gemstones dans la Sorrow Armor</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">4 : Acheter/forger progressivement la Divan Armor en la mettant pareil que la Sorrow Armor</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">5 : Participer à un maximum d'event et les finir avec la drill en main</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">6 : Cibler le mithrill bleu pour plus de powder</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">7 : Atteindre 3.966.926 de Mithril Powder (minimum nécessaire gemstone mining, retirer 93.838 si vous ne voulez pas la perks Quick Forge de montée)</h2>
      </div>

      <div className="w-1/2 mx-auto text-center py-16">
        <h2 className="text-5xl font-bold">GEMSTONE MINING PREREQUIS</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">1 : Armor : Divan [obligatoire : jaded - recomb - full perfect] - wisdom</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">2 : Drill : Titanium 655 : [obligatoire : Ruby-Polished Drill Engine ou Divan's Powder Coating - Prismatic Enchant] - recomb - full perfect - 5 silex - compact - reforge Lustrous ou Auspicious - Blue Cheese Goblin Omelette - un Fuel Tank</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">3 : Equipment : [obligatoire : Titanium Equipment] - Dwarven Handwarmers/Gemstone Equipment de la gemstone minée</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">4 : Pet : Scatha Rare, sinon Bal Epic si mining dans magma Fields ou Galcite golem si Glacite Gemstone Mining</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">4 : Talisment : [obligatoire : Mineral Talisment - Titanium Artefact - Artifact of Power] - Glossy MineralTalisment - Titanium Relic - Relic of Power</h2>
      </div>

      <div className="w-1/2 mx-auto text-center py-16">
        <h2 className="text-5xl font-bold">GEMSTONE MINING</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold pb-4">HOTM TREE - Mithril max 1/2/3 puis le reste 4/5 (total 11.155.681) - Gemestone max 1/2/3/4 puis 5/6/7/8/9/10 (total 31.260.158) si HOTM 10, monté le milieu jusqu'a Mining Master</h2>
        <div className="flex justify-center">
          <Image
            src="/hotm_gemstone_mining.png"
            width={1200}
            height={1200}
            alt="HOTM Tree Gemstone Mining"
            className="object-contain rounded-lg"
          />
        </div>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">1 : WIP</h2>
      </div>

      <div className="w-1/2 mx-auto text-center py-16">
        <h2 className="text-5xl font-bold">BLOCK/ORE MINING (WIP)</h2>
      </div>

      <div className="w-1/2 mx-auto text-center py-16">
        <h2 className="text-5xl font-bold">GLACITE MINESHAFT (WIP)</h2>
      </div>

      <div className="w-1/2 mx-auto text-center py-16">
        <h2 className="text-5xl font-bold">END GAME CHECK-UP (WIP)</h2>
      </div>
    </div>
  );
};

export default ProgressionRender;