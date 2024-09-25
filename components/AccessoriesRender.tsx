import React, { FC } from "react";

const AccessoriesRender: FC<RenderProps> = ({ profileData }) => {
  if (!profileData) return null;

  return (
    <div className="w-[75vw] rounded-3xl bg-gray-800 p-5 m-5">
      <h1 className="text-2xl font-bold underline decoration-wavy decoration-secondary decoration-4 underline-offset-8 mb-5">Accessories Optimizer :</h1>
    </div>
)
  ;
};

export default AccessoriesRender;
