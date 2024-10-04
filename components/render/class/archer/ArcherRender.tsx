import React, {FC, useState} from "react";
import ArcherMidRender from "@/components/render/class/archer/ArcherMidRender";
import ArcherEarlyRender from "@/components/render/class/archer/ArcherEarlyRender";
import ArcherLateRender from "@/components/render/class/archer/ArcherLateRender";
import ArcherEndRender from "@/components/render/class/archer/ArcherEndRender";

const ArcherRender: FC<RenderProps> = ({profileData}) => {
  const [gamePhase, setGamePhase] = useState("early");

  if (!profileData) return null;

  const renderGamePhase = () => {
    switch (gamePhase) {
      case "early":
        return <ArcherEarlyRender profileData={profileData}/>;
      case "mid":
        return <ArcherMidRender profileData={profileData}/>;
      case "late":
        return <ArcherLateRender profileData={profileData}/>;
      case "end":
        return <ArcherEndRender profileData={profileData}/>;
      default:
        return null;
    }
  };

  return (
    <div className="rounded-3xl bg-gray-800 text-gray-200 p-8 m-5 shadow-lg">
      <h1 className="text-3xl font-extrabold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8 mb-8">
        Archer Optimizer:
      </h1>

      <div className="flex justify-around space-x-2 mb-6">
        <button
          onClick={() => setGamePhase("early")}
          className={`w-full px-4 py-2 rounded font-bold ${
            gamePhase === "early" ? "bg-yellow text-gray-800" : "bg-gray-600 text-gray-200"
          }`}
        >
          Early Game
        </button>
        <button
          onClick={() => setGamePhase("mid")}
          className={`w-full px-4 py-2 rounded font-bold ${
            gamePhase === "mid" ? "bg-yellow text-gray-800" : "bg-gray-600 text-gray-200"
          }`}
        >
          Mid Game
        </button>
        <button
          onClick={() => setGamePhase("late")}
          className={`w-full px-4 py-2 rounded font-bold ${
            gamePhase === "late" ? "bg-yellow text-gray-800" : "bg-gray-600 text-gray-200"
          }`}
        >
          Late Game
        </button>
        <button
          onClick={() => setGamePhase("end")}
          className={`w-full px-4 py-2 rounded font-bold ${
            gamePhase === "end" ? "bg-yellow text-gray-800" : "bg-gray-600 text-gray-200"
          }`}
        >
          End Game
        </button>
      </div>
      {renderGamePhase()}
    </div>
  );
};

export default ArcherRender;