import React, {FC} from "react";

const MinionsRender: FC<RenderProps> = ({profileData}) => {
  if (!profileData) return null;

  return (
    <div className="rounded-3xl bg-primary text-gray-200 p-8 m-5 shadow-lg">
      <h1 className="text-3xl font-extrabold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8 mb-8">
        Minions Optimizer : (Work In Progress)
      </h1>
    </div>
  );
};

export default MinionsRender;
