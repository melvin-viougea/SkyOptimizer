import React, { FC, useState, useEffect } from "react";
import { useLocalStoragePermission } from "@/lib/useLocalStoragePermission";
import Image from "next/image";
import {useLanguage} from "@/context/LanguageProvider";

const EarlyProgressionRender: FC<RenderProps> = ({ profileData }) => {
  if (!profileData) return null;
  const { language } = useLanguage();
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
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ? 'Complete the island quests' : 'Faire les quêtes de l\'île'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(2) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(2)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">2</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ? 'Complete the island quests' : 'Faire les quêtes des 12 PNJ et récupérer la'} <a href="https://wiki.hypixel.net/Rogue_Sword" className="text-raritycommon underline underline-offset-4" target="_blank" rel="noopener noreferrer">ROGUE SWORD</a>
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(3) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(3)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">3</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ? 'Complete the lumberjack quests (-112 74 -36) in the Hub' : 'Faire les quêtes du bûcheron (-112 74 -36) dans le Hub'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(4) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(4)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">4</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ? 'Retrieve the ' : 'Récupérer le '}
          <a href="https://wiki.hypixel.net/Hunter_Knife" className="text-rarityuncommon underline underline-offset-4" target="_blank" rel="noopener noreferrer">HUNTER KNIFE</a>,
          {' '}
          <a href="https://wiki.hypixel.net/Campfire_Badge" className="text-raritycommon underline underline-offset-4" target="_blank" rel="noopener noreferrer">CAMPFIRE BADGE</a>,
          {' '}
          {language === 'en' ? 'the harp and collection to unlock the ' : 'la harpe et la collection pour débloquer la '}
          <a href="https://wiki.hypixel.net/Jungle_Axe" className="text-rarityuncommon underline underline-offset-4" target="_blank" rel="noopener noreferrer">JUNGLE AXE</a>
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(5) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(5)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">5</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ? 'Complete the Blacksmith miner quests (-28 69 -125) in the Hub until the Deep Caverns' : 'Faire les quêtes mineur du Blacksmith (-28 69 -125) dans le Hub jusqu\'aux Deep Caverns'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(6) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(6)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">6</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ? 'Go to the Spider\'s Den to talk to the Bestiary NPC (-271 113 -196)' : 'Aller au Spider\'s Den pour parler au PNJ bestiaire (-271 113 -196)'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(7) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(7)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">7</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ? 'Complete the farmer\'s quests (44 72 -162) in the Hub until the Mushroom Desert is unlocked' : 'Faire les quêtes du fermier (44 72 -162) dans le Hub jusqu\'à débloquer le Mushroom Desert'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(8) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(8)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">8</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ? 'Go to Barn Island and complete the island bestiary' : 'Aller sur l\'île Barn et compléter le bestiaire de l\'île'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(9) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(9)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">9</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ? 'Go to get the ' : 'Aller chercher la '}
          <a href="https://wiki.hypixel.net/Squire_Armor" className="text-rarityuncommon underline underline-offset-4" target="_blank" rel="noopener noreferrer">SQUIRE ARMOR</a>
          {language === 'en' ? ' at Rosetta (-12 68 -141) in the Hub' : ' à Rosetta (-12 68 -141) dans le Hub'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(10) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(10)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">10</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ? 'Continue the Deep Caverns quests until the Redstone area' : 'Continuer les quêtes Deep Caverns jusqu\'à la zone Redstone'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(11) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(11)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">11</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ? 'Level up the Redstone collection 2 to unlock the accessory pouch' : 'Monter la collection Redstone 2 pour débloquer le sac d\'accessoires'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(12) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(12)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">12</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ? 'Go to get the talismans from the adventurer (-41 70 -64) in front of the Bazaar NPC' : 'Aller chercher les talismans à l\'aventurier (-41 70 -64) face du PNJ Bazaar'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(13) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(13)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">13</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ? 'Complete the Redstone Miner quest (24 104 16) in the Deep Caverns' : 'Faire la quête du Redstone Miner (24 104 16) dans les Deep Caverns'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(14) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(14)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">14</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ? 'Gather enough Redstone to craft 5 level 4 minions and then place them on your island' : 'Récupérer assez de Redstone pour fabriquer 5 minions niveau 4 puis les placer sur son île'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(15) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(15)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">15</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ? 'Finish descending into the Deep Caverns by completing the quests' : 'Finir de descendre dans les Deep Caverns en terminant les quêtes'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(16) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(16)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">16</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ? 'Go to get the ' : 'Aller chercher la '}
          <a href="https://wiki.hypixel.net/Promising_Shovel" className="text-rarityuncommon underline underline-offset-4" target="_blank" rel="noopener noreferrer">PROMISING SHOVEL</a>
          {language === 'en' ? ' at Rick (-251 70 -325) in the Spider\'s Den' : ' à Rick (-251 70 -325) dans le Spider\'s Den'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(17) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(17)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">17</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ? 'Go to the Mushroom Desert to farm sand and reach Mining level 12' : 'Aller dans le Mushroom Desert pour farmer le sable et passer Mining niveau 12'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(18) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(18)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">18</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ? 'Unlock access to the Dwarven Mines' : 'Débloquer l\'accès aux Dwarven Mines'}
        </h2>
      </div>

      <div className="w-1/2 mx-auto text-center py-16">
        <h1 className="text-3xl font-extrabold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8">
          {language === 'en' ? 'MINING INTRODUCTION' : 'INTRODUCTION AU MINAGE'}
        </h1>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold text-gray-800 bg-yellow p-5 rounded-t-lg">
          {language === 'en' ? 'HOTM TREE - upgrade 1/3/5 with powder' : 'HOTM TREE - améliorer 1/3/5 avec la powder'}
        </h2>
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
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ? 'Access the Dwarven Mines' : 'Accéder aux Dwarven Mines'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(20) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(20)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">2</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ?
            'Buy from Bubu (-10 201 -103) in Dwarven Mines the ' :
            'Acheter à Bubu (-10 201 -103) dans les Dwarven Mines la '}
          <a href="https://wiki.hypixel.net/Fractured_Mithril_Pickaxe" className="text-rarityuncommon underline underline-offset-4" target="_blank" rel="noopener noreferrer">FRACTURED MITHRIL PICKAXE</a>
        </h2>
      </div>


      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(21) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(21)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">3</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ?
            'Go kill Glacite Walkers at the Great Ice Wall (0 128 150) to get the ' :
            'Aller tuer des Glacite Walkers au Great Ice Wall (0 128 150) pour récupérer la '}
          <a href="https://hypixel-skyblock.fandom.com/wiki/Glacite_Armor" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">GLACITE ARMOR</a>
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(22) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(22)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">4</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ?
            'Remember to do the daily, Puzzler (181 196 135) and Fetchur (84 224 -118) to earn some powder and money' :
            'Pensez au daily, Puzzler (181 196 135) et Fetchur (84 224 -118) pour gagner un peu de powder et d\'argent'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(23) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(23)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">5</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ? 'Go to HOTM 2' : 'Passer HOTM 2'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(24) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(24)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">6</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ?
            'Use the forge as soon as possible (at a minimum, craft Refined Mithril)' :
            'Utiliser la forge dès que possible (au minimum craft des Refined Mithril)'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(25) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(25)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">7</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ?
            'Farm Glacite Jewels until you can buy the ' :
            'Farmer les Glacite Jewels jusqu\'à pouvoir acheter le '}
          <a href="https://wiki.hypixel.net/Mithril_Golem_Pet" className="text-raritylegendary underline underline-offset-4" target="_blank" rel="noopener noreferrer">MITHRIL GOLEM</a>
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(26) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(26)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">8</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ?
            'Buy/craft the ' :
            'Acheter/forger les '}
          <a href="https://wiki.hypixel.net/Mithril_Equipment" className="text-rarityuncommon underline underline-offset-4" target="_blank" rel="noopener noreferrer">MITHRIL EQUIPMENT</a>
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(27) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(27)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">9</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ?
            'Go to HOTM 4 through commissions and events' :
            'Passer HOTM 4 via les commissions et event'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(28) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(28)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">10</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ?
            'Buy the ' :
            'Acheter la '}
          <a href="https://wiki.hypixel.net/Sorrow_Armor" className="text-raritylegendary underline underline-offset-4" target="_blank" rel="noopener noreferrer">SORROW ARMOR</a>
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(29) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(29)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">11</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ?
            'Buy/craft the ' :
            'Acheter/forger les '}
          <a href="https://wiki.hypixel.net/Titanium_Equipment" className="text-rarityrare underline underline-offset-4" target="_blank" rel="noopener noreferrer">TITANIUM EQUIPMENT</a>
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(30) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(30)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">12</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ?
            'HOTM 5, reset the tree as soon as ' :
            'HOTM 5, réinitialiser l\'arbre dès que '}
          <span className="text-powdermithril">150,000 mithril powder</span>
          {language === 'en' ?
            ' is reached to unlock a commission slot with Core lvl 2' :
            ' atteint pour débloquer un commission slot avec le Core lvl 2'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(31) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(31)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">13</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ?
            'Buy/craft the ' :
            'Acheter/forger la '}
          <a href="https://wiki.hypixel.net/Mithril_Drill_SX-R326" className="text-rarityrare underline underline-offset-4" target="_blank" rel="noopener noreferrer">
            MITHRIL DRILL SX-R326
          </a>
          {language === 'en' ?
            ' as soon as possible' :
            ' dès que possible'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(32) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(32)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">14</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ?
            'Buy/craft the ' :
            'Acheter/forger la '}
          <a href="https://wiki.hypixel.net/Spicy_Goblin_Omelette" className="text-rarityrare underline underline-offset-4" target="_blank" rel="noopener noreferrer">
            SPICY GOBLIN OMELETTE
          </a>
          {language === 'en' ?
            ' and put it on the drill' :
            ' et le mettre sur la drill'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(33) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(33)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">15</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ?
            'Buy/craft the ' :
            'Acheter/forger le '}
          <a href="https://wiki.hypixel.net/Mithril-Infused_Fuel_Tank" className="text-rarityrare underline underline-offset-4" target="_blank" rel="noopener noreferrer">
            MITHRIL-INFUSED FUEL TANK
          </a>
          {language === 'en' ?
            ' and put it on the drill' :
            ' et le mettre sur la drill'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(34) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(34)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">16</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ?
            'Buy/craft the ' :
            'Acheter/forger le '}
          <a href="https://wiki.hypixel.net/Mithril-Plated_Drill_Engine" className="text-rarityrare underline underline-offset-4" target="_blank" rel="noopener noreferrer">
            MITHRIL-PLATED DRILL ENGINE
          </a>
          {language === 'en' ?
            ' and put it on the drill' :
            ' et le mettre sur la drill'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(35) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(35)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">17</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ?
            'Go to HOTM 7' :
            'Passer HOTM 7'}
        </h2>
      </div>

      <div className="w-1/2 mx-auto text-center py-16">
        <h1 className="text-3xl font-extrabold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8">GEMSTONE POWDER FARMING</h1>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold text-gray-800 bg-yellow p-5 rounded-t-lg">
          {language === 'en' ?
            'HOTM TREE - max the 4 perks in order' :
            'HOTM TREE - maxer les 4 perks dans l\'ordre'}
        </h2>
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
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ?
            'Buy the ' :
            'Acheter la '}
          <a href="https://wiki.hypixel.net/Mineral_Armor" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">MINERAL ARMOR</a>
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(37) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(37)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">2</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ?
            'Buy an ' :
            'Acheter un '}
          <a href="https://wiki.hypixel.net/Armadillo_Pet" className="text-raritylegendary underline underline-offset-4" target="_blank" rel="noopener noreferrer">ARMADILLO</a>
        </h2>
      </div>


      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
        {language === 'en' ?
          'As soon as possible, buy/forge a ' :
          'Dès que possible, acheter/forger une '}
        <a href="https://wiki.hypixel.net/Jasper_Drill_X" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">JASPER DRILL X</a>
        {language === 'en' ?
          ' and put the Drill Parts previously bought into it.' :
          ' et y mettre les Drill Parts achetés précédemment'}
      </h2>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(39) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(39)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">4</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ?
            'Make powder by opening Treasure Chests in Precursor City to earn money' :
            'Faire la powder avec l\'ouverture des Treasure Chests dans Precursor City pour faire de l\'argent'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(40) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(40)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">5</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ?
            'Reach ' :
            'Atteindre '}
          <span className="text-powdergemstone">12,076,732 gemstone powder</span>
          {language === 'en' ?
            ' (minimum required for gemstone mining)' :
            ' (minimum nécessaire gemstone mining)'}
        </h2>
      </div>

      <div className="w-1/2 mx-auto text-center py-16">
        <h1 className="text-3xl font-extrabold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8">MITHRIL POWDER FARMING</h1>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg w-1/2 mx-auto text-center mt-5">
        <h2 className="text-xl font-bold text-gray-800 bg-yellow p-5 rounded-t-lg">
          {language === 'en' ?
            'HOTM TREE - gemstone max 1/2/3 then the rest 4 - mithril distribute the powder from 1 to 4 in a loop' :
            'HOTM TREE - gemstone max 1/2/3 puis le reste 4 - mithril repartir la powder du 1 au 4 en boucle'}
        </h2>
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
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ?
            'Remember to buy Powder Pumpkin from Brynmor (32 202 -154.5) in the Dwarven Mines Tavern' :
            'Pensez à acheter des Powder Pumpkin à Brynmor (32 202 -154.5) dans la taverne des Dwarven Mine'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(42) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(42)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">2</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ?
            'Retrieve the Mithril Drill, the Sorrow Armor, and the Mithril Golem' :
            'Reprendre la Mithrill Drill, la Sorrow Armor et le Mithril Golem'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(43) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(43)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">3</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ?
            'Apply the Dimensional reforge to the armor and Blazing to the equipment' :
            'Mettre la reforge Dimensional sur l\'armure et Blazing sur les équipements'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(44) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(44)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">4</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ?
            'Place Perfect Gemstones in the Sorrow Armor' :
            'Mettre des Perfect Gemstones dans la Sorrow Armor'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(45) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(45)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">5</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ?
            'Gradually buy/forge the ' :
            'Acheter/forger progressivement la '}
          <a href="https://wiki.hypixel.net/Armor_Of_Divan" className="text-raritylegendary underline underline-offset-4" target="_blank" rel="noopener noreferrer">ARMOR OF DIVAN</a>
          {language === 'en' ?
            ' and equip it the same way as the Sorrow Armor.' :
            ' en la mettant pareil que la Sorrow Armor'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(46) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(46)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">6</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ?
            'Participate in as many events as possible and complete them with the drill in hand.' :
            'Participer à un maximum d\'event et les finir avec la drill en main'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(47) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(47)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">7</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ?
            'Target blue mithril for more powder at spots such as 12 170 35 or 9 226 129 (the latter is a bit more sought after, the former is often free), don\'t hesitate to farm right and pickobulus left or vice versa.' :
            'Cibler le mithrill bleu pour plus de powder à des spots tels qu\'en 12 170 35 ou 9 226 129 (l\'autre est un peu plus prisé, l\'autre est souvent libre), ne pas hésiter à farmer à droite et pickobulus à gauche ou inversement'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(48) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(48)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">8</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Atteindre <span className="text-powdermithril">3.966.926 mithril powder</span> (minimum nécessaire gemstone mining, retirer 93.838 si vous ne voulez pas la perks Quick Forge de montée)
        </h2>

        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ?
            'Reach ' :
            'Atteindre '}
          <span className="text-powdermithril">3.966.926 mithril powder</span>
          {language === 'en' ?
            ' (minimum required for gemstone mining, subtract 93,838 if you do not want the Quick Forge perk unlocked)' :
            ' (minimum nécessaire gemstone mining)'}
        </h2>
      </div>

      <div className="w-1/2 mx-auto text-center py-16">
        <h1 className="text-3xl font-extrabold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8">
          {language === 'en' ? 'GEMSTONE MINING REQUIREMENT' : 'PRÉREQUIS GEMSTONE MINING'}
        </h1>
      </div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(49) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(49)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">1</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">{language === 'en' ? 'Armor' : 'Armure'} : <a href="https://wiki.hypixel.net/Armor_Of_Divan" className="text-raritylegendary underline underline-offset-4" target="_blank" rel="noopener noreferrer">ARMOR OF DIVAN</a> jaded - recomb - full perfect - {language === 'en' ? 'optional upgrade' : 'amélioration non obligatoire'} : wisdom</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(50) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(50)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">2</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Drill : <a href="https://wiki.hypixel.net/Titanium_Drill_DR-X655" className="text-raritylegendary underline underline-offset-4" target="_blank" rel="noopener noreferrer">TITANIUM DRILL DR-X655</a> : Ruby-Polished Drill Engine ou Divan's Powder Coating - Prismatic Enchant - {language === 'en' ? 'optional upgrade' : 'amélioration non obligatoire'} : recomb - full perfect - 5 silex - compact - reforge Lustrous {'>'} Auspicious - Blue Cheese Goblin Omelette - un Fuel Tank</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(51) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(51)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">3</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">{language === 'en' ? 'Equipment' : 'Equipement'} : <a href="https://wiki.hypixel.net/Titanium_Equipment" className="text-rarityrare underline underline-offset-4" target="_blank" rel="noopener noreferrer">TITANIUM EQUIPMENT</a> - {language === 'en' ? 'optional upgrade' : 'amélioration non obligatoire'} : <a href="https://wiki.hypixel.net/Dwarven_Handwarmers" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">DWARVEN HANDWARMERS</a> / <a href="https://wiki.hypixel.net/Gemstone_Equipment" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">GEMSTONE EQUIPMENT</a> {language === 'en' ? 'of the mined gemstone' : 'de la gemstone minée'}</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(52) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(52)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">4</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">Pet : <a href="https://wiki.hypixel.net/Scatha_Pet" className="text-rarityrare underline underline-offset-4" target="_blank" rel="noopener noreferrer">SCATHA</a>, {language === 'en' ? 'else' : 'sinon'} <a href="https://wiki.hypixel.net/Bal_Pet" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">BAL</a> {language === 'en' ? 'if mining in Magma Fields or' : 'si mining dans Magma Fields ou'} <a href="https://wiki.hypixel.net/Glacite_Golem_Pet" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">GLACITE GOLEM</a> {language === 'en' ? 'if mining in Glacite Tunnels' : 'si mining dans les Glacite Tunnels'}</h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(53) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(53)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">5</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">{language === 'en' ? 'Accessories' : 'Accessoires'} : <a href="https://wiki.hypixel.net/Mineral_Talisman" className="text-rarityrare underline underline-offset-4" target="_blank" rel="noopener noreferrer">MINERAL TALISMENT</a> - <a href="https://wiki.hypixel.net/Titanium_Artifact" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">TITANIUM ARTIFACT</a> - <a href="https://wiki.hypixel.net/Artifact_Of_Power" className="text-rarityrare underline underline-offset-4" target="_blank" rel="noopener noreferrer">ARTIFACT OF POWER</a> - {language === 'en' ? 'optional upgrade' : 'amélioration non obligatoire'} : <a href="https://wiki.hypixel.net/Glossy_Mineral_Talisman" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">GLOSSY MINERAL
          TALISMENT</a> - <a href="https://wiki.hypixel.net/Titanium_Relic" className="text-raritylegendary underline underline-offset-4" target="_blank" rel="noopener noreferrer">TITANIUM RELIC</a> - <a href="https://wiki.hypixel.net/Relic_Of_Power" className="text-rarityepic underline underline-offset-4" target="_blank" rel="noopener noreferrer">RELIC OF POWER</a></h2>
      </div>

      <div className="w-1/2 mx-auto text-center py-16">
        <h1 className="text-3xl font-extrabold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8">GEMSTONE MINING</h1>
      </div>

      <div className="bg-secondary text-gray-300 rounded-lg w-1/2 mx-auto text-center mt-5">
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en' ?
            'HOTM TREE - Mithril max 1/2/3 then the rest 4/5 - Gemstone max 1/2/3/4 then 5/6/7/8/9/10, if HOTM 10, level the middle up to Mining Master (' :
            'HOTM TREE - Mithril max 1/2/3 puis le reste 4/5 - Gemestone max 1/2/3/4 puis 5/6/7/8/9/10, si HOTM 10, monté le milieu jusqu\'a Mining Master ('}
          <span className="text-powdermithril">11.155.681 mithril powder</span> / <span className="text-powdergemstone">31.260.158 gemstone powder</span>
          {language === 'en' ?
            ' to max out the entire tree)' :
            ' pour maxer l\'arbre entier)'}
        </h2>
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
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en'
            ? 'Go to the Divan Mine in the Mithril Deposit'
            : 'Aller au Mine au Divan dans le Mithril Deposite'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(55) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(55)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">2</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en'
            ? 'Veins are at the ceiling, make a cobblestone platform below the big spots'
            : 'Les fillons sont au plafond, se faire une plateforme en cobble en dessous des gros spot'}
        </h2>
      </div>

      <div className="w-1 bg-gray-400 h-10 mx-auto"></div>

      <div className={`text-gray-300 rounded-lg w-1/2 mx-auto flex items-center ${isStepSelected(56) ? 'bg-green-500 outline outline-2 outline-green-500' : 'bg-yellow'}`} onClick={() => handleClick(56)}>
        <span className="text-xl font-bold text-center text-gray-800 flex items-center justify-center rounded-l-lg w-14">3</span>
        <h2 className="bg-secondary text-xl font-bold text-center flex-1 p-5 h-full rounded-r-lg">
          {language === 'en'
            ? 'With the white ones, /recipe for the green ones, then for the blue ones, then sell all the fine jade at the Bazaar (36M/h)'
            : 'Avec les blanches, /recipe pour les vertes, puis pour les bleues, puis vendre toutes les fines jade au Bazaar (36M/h)'}
        </h2>
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

export default EarlyProgressionRender;