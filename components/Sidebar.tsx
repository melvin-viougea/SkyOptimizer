"use client";

import React, { useState } from "react";
import { Section } from "@/constants";
import {useLanguage} from "@/context/LanguageProvider";

const Sidebar: React.FC<NavbarProps> = ({ activeSection, setActiveSection, pseudo, level, profile }) => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: 'en' | 'fr') => {
    setLanguage(lang);
  };

  return (
    <div className="fixed left-4 top-4 w-60 h-[calc(100vh-2rem)] bg-sidebar text-white flex flex-col py-4 rounded-3xl shadow-lg">
      <h2 className="text-2xl font-bold text-center text-yellow mb-4">SkyOptimizer</h2>
      <h2 className="text-xl font-bold text-center mb-0.5">[{level}] {pseudo}</h2>
      <h2 className="text-sm font-bold text-center text-gray-400 mb-3">{profile}</h2>

      <div className="flex flex-col gap-2 m-3">
        <button onClick={() => setActiveSection(Section.Home)} className={`px-4 py-1.5 rounded font-bold text-gray-200 ${activeSection === Section.Home ? "bg-yellow hover:bg-darkyellow" : "bg-sidebarlight hover:bg-primary"}`}>
          {language === 'en' ? 'Home' : 'Accueil'}
        </button>
        <button onClick={() => setActiveSection(Section.Accessories)} className={`px-4 py-1.5 rounded font-bold text-gray-200 ${activeSection === Section.Accessories ? "bg-yellow hover:bg-darkyellow" : "bg-sidebarlight hover:bg-primary"}`}>
          {language === 'en' ? 'Accessories' : 'Accessoires'}
        </button>
        <button onClick={() => setActiveSection(Section.Minions)} className={`px-4 py-1.5 rounded font-bold text-gray-200 ${activeSection === Section.Minions ? "bg-yellow hover:bg-darkyellow" : "bg-sidebarlight hover:bg-primary"}`}>
          Minions
        </button>
        <button onClick={() => setActiveSection(Section.Progression)} className={`px-4 py-1.5 rounded font-bold text-gray-200 ${activeSection === Section.Progression ? "bg-yellow hover:bg-darkyellow" : "bg-sidebarlight hover:bg-primary"}`}>
          {language === 'en' ? 'Early Progression' : 'Progression débutant'}
        </button>

        <button onClick={() => setActiveSection(Section.Mining)} className={`mt-3 px-4 py-1.5 rounded font-bold text-gray-200 ${activeSection === Section.Mining ? "bg-yellow hover:bg-darkyellow" : "bg-sidebarlight hover:bg-primary"}`}>
          {language === 'en' ? 'Mining' : 'Minage'}
        </button>
        <button onClick={() => setActiveSection(Section.Farming)} className={`px-4 py-1.5 rounded font-bold text-gray-200 ${activeSection === Section.Farming ? "bg-yellow hover:bg-darkyellow" : "bg-sidebarlight hover:bg-primary"}`}>
          Farming
        </button>
        <button onClick={() => setActiveSection(Section.Fishing)} className={`px-4 py-1.5 rounded font-bold text-gray-200 ${activeSection === Section.Fishing ? "bg-yellow hover:bg-darkyellow" : "bg-sidebarlight hover:bg-primary"}`}>
          {language === 'en' ? 'Fishing' : 'Pêche'}
        </button>
        <button onClick={() => setActiveSection(Section.Foraging)} className={`px-4 py-1.5 rounded font-bold text-gray-200 ${activeSection === Section.Foraging ? "bg-yellow hover:bg-darkyellow" : "bg-sidebarlight hover:bg-primary"}`}>
          Foraging
        </button>

        <button onClick={() => setActiveSection(Section.Mage)} className={`mt-3 px-4 py-1.5 rounded font-bold text-gray-200 ${activeSection === Section.Mage ? "bg-yellow hover:bg-darkyellow" : "bg-sidebarlight hover:bg-primary"}`}>
          Mage
        </button>
        <button onClick={() => setActiveSection(Section.Archer)} className={`px-4 py-1.5 rounded font-bold text-gray-200 ${activeSection === Section.Archer ? "bg-yellow hover:bg-darkyellow" : "bg-sidebarlight hover:bg-primary"}`}>
          Archer
        </button>
        <button onClick={() => setActiveSection(Section.Berserk)} className={`px-4 py-1.5 rounded font-bold text-gray-200 ${activeSection === Section.Berserk ? "bg-yellow hover:bg-darkyellow" : "bg-sidebarlight hover:bg-primary"}`}>
          Berserk
        </button>
        <button onClick={() => setActiveSection(Section.Tank)} className={`px-4 py-1.5 rounded font-bold text-gray-200 ${activeSection === Section.Tank ? "bg-yellow hover:bg-darkyellow" : "bg-sidebarlight hover:bg-primary"}`}>
          Tank
        </button>
        <button onClick={() => setActiveSection(Section.Healer)} className={`px-4 py-1.5 rounded font-bold text-gray-200 ${activeSection === Section.Healer ? "bg-yellow hover:bg-darkyellow" : "bg-sidebarlight hover:bg-primary"}`}>
          Healer
        </button>
      </div>

      <div className="mt-auto flex justify-center gap-3">
        <img
          src="/flagenglish.png"
          alt="English"
          className={`w-10 h-6 cursor-pointer rounded outline outline-2 ${language === 'en' ? 'outline-yellow' : 'outline-gray-500'}`}
          onClick={() => handleLanguageChange('en')}
        />
        <img
          src="/flagfrench.png"
          alt="Français"
          className={`w-10 h-6 cursor-pointer rounded outline outline-2 ${language === 'fr' ? 'outline-yellow' : 'outline-gray-500'}`}
          onClick={() => handleLanguageChange('fr')}
        />
      </div>
      <a href="https://www.patreon.com/SkyOptimizerteam" target="_blank" rel="noopener noreferrer" className="mt-4 mx-auto text-center w-5/12 bg-sidebar border border-1 border-gray-200 rounded-full hover:bg-secondary transition">
        Patreon
      </a>
      <div className="text-center mt-3 text-gray-500 text-sm">for Skyblock 21.3</div>
    </div>
  );
};

export default Sidebar;
