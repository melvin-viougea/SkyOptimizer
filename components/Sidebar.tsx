"use client";

import React from "react";
import {Section} from "@/constants";

const Navbar: React.FC<NavbarProps> = ({activeSection, setActiveSection, pseudo, profile}) => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col py-4">
      <h2 className="text-2xl font-bold text-center text-yellow mb-4">SkyOptimizer</h2>
      <h2 className="text-xl font-bold text-center mb-4">{pseudo}</h2>
      <h2 className="text-lg font-bold text-center mb-4">{profile}</h2>
      <div className="flex flex-col gap-2 m-3">
        <button onClick={() => setActiveSection(Section.Home)} className={`px-4 py-2 rounded font-bold text-gray-200 ${activeSection === Section.Home ? "bg-yellow hover:bg-yellow" : "bg-gray-700 hover:bg-darkyellow"}`}>
          Home
        </button>
        <button onClick={() => setActiveSection(Section.Progression)} className={`px-4 py-2 rounded font-bold text-gray-200 ${activeSection === Section.Progression ? "bg-yellow hover:bg-yellow" : "bg-gray-700 hover:bg-darkyellow"}`}>
          Progression
        </button>
        <button onClick={() => setActiveSection(Section.Accessories)} className={`px-4 py-2 rounded font-bold text-gray-200 ${activeSection === Section.Accessories ? "bg-yellow hover:bg-yellow" : "bg-gray-700 hover:bg-darkyellow"}`}>
          Accessories
        </button>
        <button onClick={() => setActiveSection(Section.Minions)} className={`px-4 py-2 rounded font-bold text-gray-200 ${activeSection === Section.Minions ? "bg-yellow hover:bg-yellow" : "bg-gray-700 hover:bg-darkyellow"}`}>
          Minions
        </button>

        <button onClick={() => setActiveSection(Section.Farming)} className={`mt-5 px-4 py-2 rounded font-bold text-gray-200 ${activeSection === Section.Farming ? "bg-yellow hover:bg-yellow" : "bg-gray-700 hover:bg-darkyellow"}`}>
          Farming
        </button>
        <button onClick={() => setActiveSection(Section.Fishing)} className={`px-4 py-2 rounded font-bold text-gray-200 ${activeSection === Section.Fishing ? "bg-yellow hover:bg-yellow" : "bg-gray-700 hover:bg-darkyellow"}`}>
          Fishing
        </button>
        <button onClick={() => setActiveSection(Section.Mining)} className={`px-4 py-2 rounded font-bold text-gray-200 ${activeSection === Section.Mining ? "bg-yellow hover:bg-yellow" : "bg-gray-700 hover:bg-darkyellow"}`}>
          Mining
        </button>
        <button onClick={() => setActiveSection(Section.Foraging)} className={`px-4 py-2 rounded font-bold text-gray-200 ${activeSection === Section.Foraging ? "bg-yellow hover:bg-yellow" : "bg-gray-700 hover:bg-darkyellow"}`}>
          Foraging
        </button>

        <button onClick={() => setActiveSection(Section.Mage)} className={`mt-5 px-4 py-2 rounded font-bold text-gray-200 ${activeSection === Section.Mage ? "bg-yellow hover:bg-yellow" : "bg-gray-700 hover:bg-darkyellow"}`}>
          Mage
        </button>
        <button onClick={() => setActiveSection(Section.Archer)} className={`px-4 py-2 rounded font-bold text-gray-200 ${activeSection === Section.Archer ? "bg-yellow hover:bg-yellow" : "bg-gray-700 hover:bg-darkyellow"}`}>
          Archer
        </button>
        <button onClick={() => setActiveSection(Section.Berserk)} className={`px-4 py-2 rounded font-bold text-gray-200 ${activeSection === Section.Berserk ? "bg-yellow hover:bg-yellow" : "bg-gray-700 hover:bg-darkyellow"}`}>
          Berserk
        </button>
        <button onClick={() => setActiveSection(Section.Tank)} className={`px-4 py-2 rounded font-bold text-gray-200 ${activeSection === Section.Tank ? "bg-yellow hover:bg-yellow" : "bg-gray-700 hover:bg-darkyellow"}`}>
          Tank
        </button>
        <button onClick={() => setActiveSection(Section.Healer)} className={`px-4 py-2 rounded font-bold text-gray-200 ${activeSection === Section.Healer ? "bg-yellow hover:bg-yellow" : "bg-gray-700 hover:bg-darkyellow"}`}>
          Healer
        </button>
      </div>
      <div className="mt-auto text-center text-gray-500">
        <button onClick={() => setActiveSection(Section.RealseNote)} className={`px-2 mb-1 rounded font-bold text-gray-200 ${activeSection === Section.RealseNote ? "bg-yellow hover:bg-yellow" : "bg-gray-700 hover:bg-darkyellow"}`}>
          v1.0
        </button>
      </div>
      <div className="text-center text-gray-500 text-sm">
        for Skyblock 20.6
      </div>
    </div>
  );
};

export default Navbar;
