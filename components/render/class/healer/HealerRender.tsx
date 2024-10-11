import React, {FC, useState} from "react";
import HealerEndRender from "@/components/render/class/healer/HealerEndRender";
import HealerEarlyRender from "@/components/render/class/healer/HealerEarlyRender";
import HealerMidRender from "@/components/render/class/healer/HealerMidRender";
import HealerLateRender from "@/components/render/class/healer/HealerLateRender";

const HealerRender: FC<RenderProps> = ({profileData}) => {
  const [gamePhase, setGamePhase] = useState("early");

  if (!profileData) return null;

  const renderGamePhase = () => {
    switch (gamePhase) {
      case "early":
        return <HealerEarlyRender profileData={profileData}/>;
      case "mid":
        return <HealerMidRender profileData={profileData}/>;
      case "late":
        return <HealerLateRender profileData={profileData}/>;
      case "end":
        return <HealerEndRender profileData={profileData}/>;
      default:
        return null;
    }
  };

  return (
    <div className="rounded-3xl bg-gray-800 text-gray-200 p-8 m-5 shadow-lg">
      <h1 className="text-3xl font-extrabold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8 mb-8">
        Healer Optimizer:
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

export default HealerRender;