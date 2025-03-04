import React, { FC, useState, useEffect } from "react";
import { useLocalStoragePermission } from "@/lib/useLocalStoragePermission";
import Image from "next/image";

const ProgressionRender: FC<RenderProps> = ({ profileData }) => {
  if (!profileData) return null;

  const { isAllowed } = useLocalStoragePermission();
  const [selectedSteps, setSelectedSteps] = useState<number[]>([]);

  useEffect(() => {
    if (isAllowed) {
      const storedSteps = localStorage.getItem("selectedSteps");
      setSelectedSteps(storedSteps ? JSON.parse(storedSteps) : []);
    }
  }, [isAllowed]);

  useEffect(() => {
    if (isAllowed) {
      localStorage.setItem("selectedSteps", JSON.stringify(selectedSteps));
    }
  }, [selectedSteps, isAllowed]);

  const handleClick = (stepNumber: number) => {
    setSelectedSteps((prevSteps) =>
      prevSteps.includes(stepNumber)
        ? prevSteps.filter((step) => step !== stepNumber)
        : [...prevSteps, stepNumber]
    );
  };

  const isStepSelected = (stepNumber: number) => selectedSteps.includes(stepNumber);

  return (
    <div className="rounded-3xl bg-primary text-gray-200 p-8 m-5 shadow-lg">
      <h1 className="text-3xl font-extrabold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8 mb-8">
        Progression Optimizer :
      </h1>

      <div className="w-1/2 mx-auto text-center py-16">
        <h1 className="text-3xl font-extrabold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8">INTRODUCTION</h1>
      </div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(1) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(1)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">1</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Faire les quêtes de l'île</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(2) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(2)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">2</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Faire les quêtes des 12 PNJ et récupérer la <a href="https://wiki.hypixel.net/Rogue_Sword" className="text-raritycommon underline underline-offset-4" target="_blank" rel="noopener noreferrer">ROGUE SWORD</a></h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(3) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(3)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">3</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Faire les quêtes du bûcheron (-112 74 -36) dans le Hub</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(4) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(4)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">4</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Récupérer le <a href="https://wiki.hypixel.net/Hunter_Knife" className="text-rarityuncommon underline underline-offset-4" target="_blank" rel="noopener noreferrer">HUNTER KNIFE</a>, <a href="https://wiki.hypixel.net/Campfire_Badge" className="text-raritycommon underline underline-offset-4" target="_blank" rel="noopener noreferrer">CAMPFIRE BADGE</a>, la harpe et la collection pour débloquer la <a href="https://wiki.hypixel.net/Jungle_Axe" className="text-rarityuncommon underline underline-offset-4" target="_blank" rel="noopener noreferrer">JUNGLE AXE</a></h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(5) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(5)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">5</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Faire les quêtes mineur du Blacksmith (-28 69 -125)dans le Hub jusqu'aux Deep Caverns</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(6) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(6)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">6</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Aller au Spider's Den pour parler au PNJ bestiaire (-271 113 -196)</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(7) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(7)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">7</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Faire les quêtes du fermier (44 72 -162) dans le Hub jusqu'à débloquer le Mushroom Desert</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(8) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(8)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">8</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Aller sur l'île Barn et compléter le bestiaire de l'île</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(9) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(9)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">9</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Aller chercher la <a href="https://wiki.hypixel.net/Squire_Armor" className="text-rarityuncommon underline underline-offset-4" target="_blank" rel="noopener noreferrer">SQUIRE ARMOR</a> à Rosetta (-12 68 -141) dans le Hub</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(10) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(10)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">10</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Continuer les quêtes Deep Caverns jusqu'à la zone Redstone</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(11) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(11)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">11</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Monter la collection Redstone 2 pour débloquer le sac d'accessoires</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(12) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(12)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">12</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Aller chercher les talismans a l'aventurier (-41 70 -64) face du PNJ Bazaar</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(13) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(13)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">13</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Faire la quête du Redstone Miner (24 104 16) dans les Deep Caverns</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(14) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(14)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">14</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Récupérer assez de Redstone pour fabriquer 5 minions niveau 4 puis les placer sur son île</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(15) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(15)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">15</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Finir de descendre dans les Deep Caverns en terminant les quêtes</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(16) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(16)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">16</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Aller chercher la <a href="https://wiki.hypixel.net/Promising_Shovel" className="text-rarityuncommon underline underline-offset-4" target="_blank" rel="noopener noreferrer">PROMISING SHOVEL</a> à Rick (-251 70 -325) dans le Spider's Den</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(17) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(17)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">17</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Aller dans le Mushroom Desert pour farmer le sable et passer Mining niveau 12</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(18) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(18)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">18</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Débloquer l'accès aux Dwarven Mines</h2>
      </div>

      <div className="w-1/2 mx-auto text-center py-16">
        <h1 className="text-3xl font-extrabold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8">MINING INTRODUCTION</h1>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold text-gray-800 bg-yellow p-5 rounded-t-lg">HOTM TREE - améliorer 1/3/5 avec la powder</h2>
        <div className="flex justify-center p-5">
          <Image
            src="/hotm_intro.png"
            width={1200}
            height={800}
            alt="HOTM Tree Intro"
            className="object-contain rounded-lg"
          />
        </div>
      </div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center mt-6 ${isStepSelected(19) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(19)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">1</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Accéder aux Dwarven Mines</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(20) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(20)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">2</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Acheter à Bubu (-10 201 -103) dans les Dwraven Mine la <a href="https://wiki.hypixel.net/Fractured_Mithril_Pickaxe" className="text-rarityuncommon underline underline-offset-4" target="_blank" rel="noopener noreferrer">FRACTURED MITHRIL PICKAXE</a></h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(21) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(21)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">3</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Aller tuer des Glacite Walker au Great Ice Wall (0 128 150) pour récupérer la <a href="https://hypixel-skyblock.fandom.com/wiki/Glacite_Armor" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">GLACITE ARMOR</a></h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(22) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(22)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">4</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Pensez au Daily, Puzzler (181 196 135) et Fetchur (84 224 -118) pour gagner un peu de powder et d'argent</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(23) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(23)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">5</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Passer HOTM 2</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(24) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(24)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">6</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Utiliser la forge dès que possible (au minimum craft des Refined Mithril)</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(25) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(25)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">7</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Farmer les Glacite Jewels jusqu'à pouvoir acheter le <a href="https://wiki.hypixel.net/Mithril_Golem_Pet" className="text-raritylegendary underline underline-offset-4" target="_blank" rel="noopener noreferrer">MITHRIL GOLEM</a></h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(26) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(26)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">8</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Acheter/forger les <a href="https://wiki.hypixel.net/Mithril_Equipment" className="text-rarityuncommon underline underline-offset-4" target="_blank" rel="noopener noreferrer">MITHRIL EQUIPMENT</a></h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(27) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(27)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">9</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Passer HOTM 4 via les commissions et event</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(28) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(28)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">10</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Acheter la <a href="https://wiki.hypixel.net/Sorrow_Armor" className="text-raritylegendary underline underline-offset-4" target="_blank" rel="noopener noreferrer">SORROW ARMOR</a></h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(29) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(29)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">11</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Acheter/forger les <a href="https://wiki.hypixel.net/Titanium_Equipment" className="text-rarityrare underline underline-offset-4" target="_blank" rel="noopener noreferrer">TITANIUM EQUIPMENT</a></h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(30) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(30)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">12</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">HOTM 5, réinitialiser l'arbre dès que <span className="text-powdermithril">150.000 mithril powder</span> atteint pour débloquer un commission slot avec le Core lvl 2</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(31) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(31)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">13</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Acheter/forger la <a href="https://wiki.hypixel.net/Mithril_Drill_SX-R326" className="text-rarityrare underline underline-offset-4" target="_blank" rel="noopener noreferrer">MITHRIL DRILL SX-R326</a> dès que possible</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(32) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(32)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">14</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Acheter/forger la <a href="https://wiki.hypixel.net/Spicy_Goblin_Omelette" className="text-rarityrare underline underline-offset-4" target="_blank" rel="noopener noreferrer">SPICY GOBLIN OMELETTE</a> et le mettre sur la drill</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(33) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(33)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">15</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Acheter/forger le <a href="https://wiki.hypixel.net/Mithril-Infused_Fuel_Tank" className="text-rarityrare underline underline-offset-4" target="_blank" rel="noopener noreferrer">MITHRIL-INFUSED FUEL TANK</a> et le mettre sur la drill</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(34) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(34)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">16</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Acheter/forger le <a href="https://wiki.hypixel.net/Mithril-Plated_Drill_Engine" className="text-rarityrare underline underline-offset-4" target="_blank" rel="noopener noreferrer">MITHRIL-PLATED DRILL ENGINE</a> et le mettre sur la drill</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(35) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(35)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">17</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Passer HOTM 7</h2>
      </div>

      <div className="w-1/2 mx-auto text-center py-16">
        <h1 className="text-3xl font-extrabold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8">GEMSTONE POWDER FARMING</h1>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold text-gray-800 bg-yellow p-5 rounded-t-lg">HOTM TREE - maxer les 4 perks dans l'ordre</h2>
        <div className="flex justify-center p-5">
          <Image
            src="/hotm_gemstone_powder.png"
            width={1200}
            height={1200}
            alt="HOTM Tree Gemstone Powder"
            className="object-contain rounded-lg"
          />
        </div>
      </div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center mt-6 ${isStepSelected(36) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(36)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">1</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Acheter la <a href="https://wiki.hypixel.net/Mineral_Armor" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">MINERAL ARMOR</a></h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(37) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(37)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">2</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Acheter un <a href="https://wiki.hypixel.net/Armadillo_Pet" className="text-raritylegendary underline underline-offset-4" target="_blank" rel="noopener noreferrer">ARMADILLO</a></h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(38) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(38)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">3</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Dès que possible, acheter/forger une <a href="https://wiki.hypixel.net/Jasper_Drill_X" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">JASPER DRILL X</a> et y mettre les Drill Parts achetés précédemment</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(39) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(39)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">4</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Faire la powder avec l'ouverture des Treasure Chest dans Precursor City pour faire de l'argent</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(40) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(40)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">5</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Atteindre <span className="text-powdergemstone">12.076.732 gemstone powder</span> (minimum nécessaire gemstone mining)</h2>
      </div>

      <div className="w-1/2 mx-auto text-center py-16">
        <h1 className="text-3xl font-extrabold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8">MITHRIL POWDER FARMING</h1>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold text-gray-800 bg-yellow p-5 rounded-t-lg">HOTM TREE - gemstone max 1/2/3 puis le reste 4 - mithril repartir la powder du 1 au 4 en boucle</h2>
        <div className="flex justify-center p-5">
          <Image
            src="/hotm_mithril_powder.png"
            width={1200}
            height={1200}
            alt="HOTM Tree Mithril Powder"
            className="object-contain rounded-lg"
          />
        </div>
      </div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center mt-6 ${isStepSelected(41) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(41)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">1</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Pensez à acheter des Powder Pumpkin a Brynmor (32 202 -154.5) dans la taverne des Dwarven Mine</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(42) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(42)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">2</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Reprendre la Mithrill Drill, la Sorrow Armor et le Mithril Golem</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(43) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(43)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">3</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Mettre la reforge Dimensional sur l'armure et Blazing sur les equipements</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(44) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(44)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">4</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Mettre des Perfect Gemstones dans la Sorrow Armor</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(45) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(45)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">5</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Acheter/forger progressivement la <a href="https://wiki.hypixel.net/Armor_Of_Divan" className="text-raritylegendary underline underline-offset-4" target="_blank" rel="noopener noreferrer">ARMOR OF DIVAN</a> en la mettant pareil que la Sorrow Armor
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(46) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(46)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">6</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Participer à un maximum d'event et les finir avec la drill en main</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(47) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(47)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">7</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Cibler le mithrill bleu pour plus de powder a des spot tel qu'en 12 170 35 ou 9 226 129 (un peu plus prisé, l'autre est souvent libre), ne pas hésiter à farm à droite et pickobulus à gauche ou inversement</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(48) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(48)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">8</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Atteindre <span className="text-powdermithril">3.966.926 mithril powder</span> (minimum nécessaire gemstone mining, retirer 93.838 si vous ne voulez pas la perks Quick Forge de montée)
        </h2>
      </div>

      <div className="w-1/2 mx-auto text-center py-16">
        <h1 className="text-3xl font-extrabold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8">GEMSTONE MINING PREREQUIS</h1>
      </div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(49) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(49)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">1</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Armor : <a href="https://wiki.hypixel.net/Armor_Of_Divan" className="text-raritylegendary underline underline-offset-4" target="_blank" rel="noopener noreferrer">ARMOR OF DIVAN</a> jaded - recomb - full perfect - amélioration non obligatoire : wisdom</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(50) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(50)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">2</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Drill : <a href="https://wiki.hypixel.net/Titanium_Drill_DR-X655" className="text-raritylegendary underline underline-offset-4" target="_blank" rel="noopener noreferrer">TITANIUM DRILL DR-X655</a> : Ruby-Polished Drill Engine ou Divan's Powder Coating - Prismatic Enchant - amélioration non obligatoire : recomb - full perfect - 5 silex - compact - reforge Lustrous ou Auspicious - Blue Cheese Goblin Omelette - un Fuel Tank</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(51) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(51)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">3</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Equipment : <a href="https://wiki.hypixel.net/Titanium_Equipment" className="text-rarityrare underline underline-offset-4" target="_blank" rel="noopener noreferrer">TITANIUM EQUIPMENT</a> - amélioration non obligatoire : <a href="https://wiki.hypixel.net/Dwarven_Handwarmers" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">DWARVEN HANDWARMERS</a> / <a href="https://wiki.hypixel.net/Gemstone_Equipment" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">GEMSTONE EQUIPMENT</a> de la gemstone minée</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(52) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(52)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">4</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Pet : <a href="https://wiki.hypixel.net/Scatha_Pet" className="text-rarityrare underline underline-offset-4" target="_blank" rel="noopener noreferrer">SCATHA</a>, sinon <a href="https://wiki.hypixel.net/Bal_Pet" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">BAL</a> si mining dans magma Fields ou <a href="https://wiki.hypixel.net/Glacite_Golem_Pet" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">GLACITE GOLEM</a> si Glacite Gemstone Mining</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(53) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(53)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">5</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Talisment : <a href="https://wiki.hypixel.net/Mineral_Talisman" className="text-rarityrare underline underline-offset-4" target="_blank" rel="noopener noreferrer">MINERAL TALISMENT</a> - <a href="https://wiki.hypixel.net/Titanium_Artifact" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">TITANIUM ARTIFACT</a> - <a href="https://wiki.hypixel.net/Artifact_Of_Power" className="text-rarityrare underline underline-offset-4" target="_blank" rel="noopener noreferrer">ARTIFACT OF POWER</a> - amélioration non obligatoire : <a href="https://wiki.hypixel.net/Glossy_Mineral_Talisman" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">GLOSSY MINERAL
          TALISLENT</a> - <a href="https://wiki.hypixel.net/Titanium_Relic" className="text-raritylegendary underline underline-offset-4" target="_blank" rel="noopener noreferrer">TITANIUM
          RELIC</a> - <a href="https://wiki.hypixel.net/Relic_Of_Power" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">RELIC OF POWER</a></h2>
      </div>

      <div className="w-1/2 mx-auto text-center py-16">
        <h1 className="text-3xl font-extrabold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8">GEMSTONE MINING</h1>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold text-gray-800 bg-yellow p-5 rounded-t-lg">HOTM TREE - Mithril max 1/2/3 puis le reste 4/5 - Gemestone max 1/2/3/4 puis 5/6/7/8/9/10, si HOTM 10, monté le milieu jusqu'a Mining Master (<span className="text-powdermithril">11.155.681 mithril powder</span> / <span className="text-powdergemstone">31.260.158 gemstone powder</span> pour maxer l'arbre entier)</h2>
        <div className="flex justify-center p-5">
          <Image
            src="/hotm_gemstone_mining.png"
            width={1200}
            height={1200}
            alt="HOTM Tree Gemstone Mining"
            className="object-contain rounded-lg"
          />
        </div>
      </div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center mt-6 ${isStepSelected(54) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(54)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">1</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Aller au Mine au Divan dans le Mithril Deposite</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(55) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(55)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">2</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Les fillons sont au plafond, se faire une plateforme en cobble en dessous de l'un des gros spot</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(56) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(56)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">3</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Avec les blanches, /recipe pour les vertes, puis pour les bleux, puis vendre toutes les fines jade au Bazaar (36M/h)</h2>
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