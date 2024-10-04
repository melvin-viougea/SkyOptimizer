import React, {FC} from "react";

const MinionsRender: FC<RenderProps> = ({profileData}) => {
  if (!profileData) return null;

  return (
    <div>
      <div className="rounded-3xl bg-gray-800 text-gray-200 p-8 m-5 shadow-lg">
        <h1 className="text-3xl font-extrabold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8 mb-8">
          V1.1 :
        </h1>
        <p className="font-bold">Minions Optimizer</p>
        <p className="font-bold">Accessories Optimizer</p>
      </div>

      <div className="rounded-3xl bg-gray-800 text-gray-200 p-5 m-5">
        <h1 className="text-3xl font-extrabold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8 mb-8">
          V1.0 :
        </h1>
        <p className="font-bold">All Skills page</p>
        <p className="font-bold">All Classes page</p>
        <p className="font-bold">Player Skills</p>
        <p className="font-bold">Player Networth</p>
      </div>
    </div>
  );
};

export default MinionsRender;
