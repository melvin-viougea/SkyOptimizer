import React, { FC, useState, useEffect } from "react";
import { useLocalStoragePermission } from "@/lib/useLocalStoragePermission";
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
          {language === 'en' ? 'Complete the island quests' : 'Faire les quêtes des 12 PNJ et récupérer la'} <a href="https://wiki.hypixel.net/Rogue_Sword" className="text-raritycommon underline underline-offset-4" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>ROGUE SWORD</a>
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
          <a href="https://wiki.hypixel.net/Hunter_Knife" className="text-rarityuncommon underline underline-offset-4" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>HUNTER KNIFE</a>,
          {' '}
          <a href="https://wiki.hypixel.net/Campfire_Badge" className="text-raritycommon underline underline-offset-4" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>CAMPFIRE BADGE</a>,
          {' '}
          {language === 'en' ? 'the harp and collection to unlock the ' : 'la harpe et la collection pour débloquer la '}
          <a href="https://wiki.hypixel.net/Jungle_Axe" className="text-rarityuncommon underline underline-offset-4" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>JUNGLE AXE</a>
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
          <a href="https://wiki.hypixel.net/Squire_Armor" className="text-rarityuncommon underline underline-offset-4" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>SQUIRE ARMOR</a>
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
          <a href="https://wiki.hypixel.net/Promising_Shovel" className="text-rarityuncommon underline underline-offset-4" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>PROMISING SHOVEL</a>
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
    </div>
  );
};

export default EarlyProgressionRender;