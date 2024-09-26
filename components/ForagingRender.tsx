import React, { FC } from "react";

const ForagingRender: FC<RenderProps> = ({ profileData }) => {
  if (!profileData) return null;

  return (
    <div className="w-[75vw] rounded-3xl bg-gray-800 text-gray-200 p-5 m-5">
      <h1 className="text-2xl font-bold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8 mb-5">Foraging Optimizer :</h1>
      <p className="font-bold mt-8">Work In Progress</p>
    </div>
  )
    ;
};

export default ForagingRender;
