import React, {FC} from "react";

const TankEarlyRender: FC<RenderProps> = ({profileData}) => {
  if (!profileData) return null;

  return (
    <div className="text-gray-200 p-8 m-5">
      <h1 className="text-3xl font-extrabold underline decoration-wavy decoration-yellow decoration-4 underline-offset-8 mb-8">
        Tank Early Game : (Work In Progress)
      </h1>
    </div>
  );
};

export default TankEarlyRender;
