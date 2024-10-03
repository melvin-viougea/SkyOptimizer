import React, {FC} from "react";

const ForagingRender: FC<RenderProps> = ({profileData}) => {
  if (!profileData) return null;

  return (
    <div className="rounded-3xl bg-gray-800 text-gray-200 p-8 m-5 shadow-lg">
      <h1 className="text-3xl font-extrabold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8 mb-8">
        Foraging Optimizer : (Work In Progress)
      </h1>
    </div>
  );
};

export default ForagingRender;
