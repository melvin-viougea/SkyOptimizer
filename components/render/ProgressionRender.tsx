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
        <h2 className="text-xl font-bold">2 : Faire les quêtes des 12 PNJ et récupérer la <a href="https://wiki.hypixel.net/Rogue_Sword" className="text-raritycommon underline underline-offset-4" target="_blank" rel="noopener noreferrer">ROGUE SWORD</a></h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">3 : Faire les quêtes du bûcheron (-112 74 -36) dans le Hub</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">4 : Récupérer le <a href="https://wiki.hypixel.net/Hunter_Knife" className="text-rarityuncommon underline underline-offset-4" target="_blank" rel="noopener noreferrer">HUNTER KNIFE</a>, <a href="https://wiki.hypixel.net/Campfire_Badge" className="text-raritycommon underline underline-offset-4" target="_blank" rel="noopener noreferrer">CAMPFIRE BADGE</a>, la harpe et la collection pour débloquer la <a href="https://wiki.hypixel.net/Jungle_Axe" className="text-rarityuncommon underline underline-offset-4" target="_blank" rel="noopener noreferrer">JUNGLE AXE</a></h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">5 : Faire les quêtes mineur du Blacksmith (-28 69 -125)dans le Hub jusqu'aux Deep Caverns</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">6 : Aller au Spider's Den pour parler au PNJ bestiaire (-271 113 -196)</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">7 : Faire les quêtes du fermier (44 72 -162) dans le Hub jusqu'à débloquer le Mushroom Desert</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">8 : Aller sur l'île Barn et compléter le bestiaire de l'île</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">9 : Aller chercher la <a href="https://wiki.hypixel.net/Squire_Armor" className="text-rarityuncommon underline underline-offset-4" target="_blank" rel="noopener noreferrer">SQUIRE ARMOR</a> à Rosetta (-12 68 -141) dans le Hub</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">10 : Continuer les quêtes Deep Caverns jusqu'à la zone Redstone</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">11 : Monter la collection Redstone 2 pour débloquer le sac d'accessoires</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">12 : Aller chercher les talismans a l'aventurier (-41 70 -64) face du PNJ Bazaar</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">13 : Faire la quête du Redstone Miner (24 104 16) dans les Deep Caverns</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">14 : Récupérer assez de Redstone pour fabriquer 5 minions niveau 4 puis les placer sur son île</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">15 : Finir de descendre dans les Deep Caverns en terminant les quêtes</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">16 : Aller chercher la <a href="https://wiki.hypixel.net/Promising_Shovel" className="text-rarityuncommon underline underline-offset-4" target="_blank" rel="noopener noreferrer">PROMISING SHOVEL</a> à Rick (-251 70 -325) dans le Spider's Den</h2>
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
        <h2 className="text-xl font-bold">2 : Acheter à Bubu (-10 201 -103) dans les Dwraven Mine la <a href="https://wiki.hypixel.net/Fractured_Mithril_Pickaxe" className="text-rarityuncommon underline underline-offset-4" target="_blank" rel="noopener noreferrer">FRACTURED MITHRIL PICKAXE</a></h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">3 : Aller tuer des Glacite Walker au Great Ice Wall (0 128 150) pour récupérer la <a href="https://hypixel-skyblock.fandom.com/wiki/Glacite_Armor" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">GLACITE ARMOR</a></h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">4 : Pensez au Daily, Puzzler (181 196 135) et Fetchur (84 224 -118) pour gagner un peu de powder et d'argent</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">4 : Passer HOTM 2</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">5 : Utiliser la forge dès que possible (au minimum craft des Refined Mithril)</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">6 : Farmer les Glacite Jewels jusqu'à pouvoir acheter le <a href="https://wiki.hypixel.net/Mithril_Golem_Pet" className="text-raritylegendary underline underline-offset-4" target="_blank" rel="noopener noreferrer">MITHRIL GOLEM</a></h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">7 : Acheter/forger les <a href="https://wiki.hypixel.net/Mithril_Equipment" className="text-rarityuncommon underline underline-offset-4" target="_blank" rel="noopener noreferrer">MITHRIL EQUIPMENT</a></h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">8 : Passer HOTM 4</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">9 : Acheter la <a href="https://wiki.hypixel.net/Sorrow_Armor" className="text-raritylegendary underline underline-offset-4" target="_blank" rel="noopener noreferrer">SORROW ARMOR</a></h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">10 : Acheter/forger les <a href="https://wiki.hypixel.net/Titanium_Equipment" className="text-rarityrare underline underline-offset-4" target="_blank" rel="noopener noreferrer">TITANIUM EQUIPMENT</a></h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">11 : HOTM 5, réinitialiser l'arbre dès que <span className="text-powdermithril">150.000 mithril powder</span> atteint pour débloquer un commission slot avec le Core lvl 2</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">12 : Acheter/forger la <a href="https://wiki.hypixel.net/Mithril_Drill_SX-R326" className="text-rarityrare underline underline-offset-4" target="_blank" rel="noopener noreferrer">MITHRIL DRILL SX-R326</a> dès que possible</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
      <h2 className="text-xl font-bold">13 : Acheter/forger la <a href="https://wiki.hypixel.net/Spicy_Goblin_Omelette" className="text-rarityrare underline underline-offset-4" target="_blank" rel="noopener noreferrer">SPICY GOBLIN OMELETTE</a> et le mettre sur la drill</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">14 : Acheter/forger le <a href="https://wiki.hypixel.net/Mithril-Infused_Fuel_Tank" className="text-rarityrare underline underline-offset-4" target="_blank" rel="noopener noreferrer">MITHRIL-INFUSED FUEL TANK</a> et le mettre sur la drill</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">15 : Acheter/forger le <a href="https://wiki.hypixel.net/Mithril-Plated_Drill_Engine" className="text-rarityrare underline underline-offset-4" target="_blank" rel="noopener noreferrer">MITHRIL-PLATED DRILL ENGINE</a> et le mettre sur la drill</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">16 : Passer HOTM 7</h2>
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
        <h2 className="text-xl font-bold">1 : Acheter la <a href="https://wiki.hypixel.net/Mineral_Armor" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">MINERAL ARMOR</a></h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">2 : Acheter un <a href="https://wiki.hypixel.net/Armadillo_Pet" className="text-raritylegendary underline underline-offset-4" target="_blank" rel="noopener noreferrer">ARMADILLO</a></h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">3 : Dès que possible, acheter/forger une <a href="https://wiki.hypixel.net/Jasper_Drill_X" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">JASPER DRILL X</a> et y mettre les Drill Parts achetés précédemment</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">4 : Faire la powder avec l'ouverture des Treasure Chest dans Precursor City pour faire de l'argent</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">5 : Atteindre <span className="text-powdergemstone">12.076.732 gemstone powder</span> (minimum nécessaire gemstone mining)</h2>
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
      <h2 className="text-xl font-bold">4 : Acheter/forger progressivement la <a href="https://wiki.hypixel.net/Armor_Of_Divan" className="text-raritylegendary underline underline-offset-4" target="_blank" rel="noopener noreferrer">ARMOR OF DIVAN</a> en la mettant pareil que la Sorrow Armor
      </h2>
    </div>

  <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
    <h2 className="text-xl font-bold">5 : Participer à un maximum d'event et les finir avec la drill en main</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">6 : Cibler le mithrill bleu pour plus de powder a des spot tel qu'en 12 170 35 ou 9 226 129 (un peu plus prisé, l'autre est souvent libre), ne pas hésiter à farm à droite et pickobulus à gauche ou inversement</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">7 : Atteindre <span className="text-powdermithril">3.966.926 mithril powder</span> (minimum nécessaire gemstone mining, retirer 93.838 si vous ne voulez pas la perks Quick Forge de montée)</h2>
      </div>

      <div className="w-1/2 mx-auto text-center py-16">
        <h2 className="text-5xl font-bold">GEMSTONE MINING PREREQUIS ([] = obligatoire)</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">1 : Armor : <a href="https://wiki.hypixel.net/Armor_Of_Divan" className="text-raritylegendary underline underline-offset-4" target="_blank" rel="noopener noreferrer">ARMOR OF DIVAN</a> jaded - recomb - full perfect - amélioration non obligatoire : wisdom</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">2 : Drill : <a href="https://wiki.hypixel.net/Titanium_Drill_DR-X655" className="text-raritylegendary underline underline-offset-4" target="_blank" rel="noopener noreferrer">TITANIUM DRILL DR-X655</a> : Ruby-Polished Drill Engine ou Divan's Powder Coating - Prismatic Enchant  - amélioration non obligatoire : recomb - full perfect - 5 silex - compact - reforge Lustrous ou Auspicious - Blue Cheese Goblin Omelette - un Fuel Tank</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">3 : Equipment : <a href="https://wiki.hypixel.net/Titanium_Equipment" className="text-rarityrare underline underline-offset-4" target="_blank" rel="noopener noreferrer">TITANIUM EQUIPMENT</a> - amélioration non obligatoire : <a href="https://wiki.hypixel.net/Dwarven_Handwarmers" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">DWARVEN HANDWARMERS</a> / <a href="https://wiki.hypixel.net/Gemstone_Equipment" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">GEMSTONE EQUIPMENT</a> de la gemstone minée</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">4 : Pet : <a href="https://wiki.hypixel.net/Scatha_Pet" className="text-rarityrare underline underline-offset-4" target="_blank" rel="noopener noreferrer">SCATHA</a>, sinon <a href="https://wiki.hypixel.net/Bal_Pet" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">BAL</a> si mining dans magma Fields ou <a href="https://wiki.hypixel.net/Glacite_Golem_Pet" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">GLACITE GOLEM</a> si Glacite Gemstone Mining</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold">4 : Talisment : <a href="https://wiki.hypixel.net/Mineral_Talisman" className="text-rarityrare underline underline-offset-4" target="_blank" rel="noopener noreferrer">MINERAL TALISLENT</a> - <a href="https://wiki.hypixel.net/Titanium_Artifact" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">TITANIUM ARTIFACT</a> - <a href="https://wiki.hypixel.net/Artifact_Of_Power" className="text-rarityrare underline underline-offset-4" target="_blank" rel="noopener noreferrer">ARTIFACT OF POWER</a> - amélioration non obligatoire : <a href="https://wiki.hypixel.net/Glossy_Mineral_Talisman" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">GLOSSY MINERAL TALISLENT</a> - <a href="https://wiki.hypixel.net/Titanium_Relic" className="text-raritylegendary underline underline-offset-4" target="_blank" rel="noopener noreferrer">TITANIUM
          RELIC</a> - <a href="https://wiki.hypixel.net/Relic_Of_Power" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">RELIC OF POWER</a></h2>
      </div>

      <div className="w-1/2 mx-auto text-center py-16">
        <h2 className="text-5xl font-bold">GEMSTONE MINING</h2>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg p-5 w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold pb-4">HOTM TREE - Mithril max 1/2/3 puis le reste 4/5 - Gemestone max 1/2/3/4 puis 5/6/7/8/9/10, si HOTM 10, monté le milieu jusqu'a Mining Master (<span className="text-powdermithril">11.155.681 mithril powder</span> / <span className="text-powdergemstone">31.260.158 gemstone powder</span> pour maxer l'arbre entier)</h2>
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