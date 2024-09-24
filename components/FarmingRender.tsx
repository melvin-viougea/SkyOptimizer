import React, { FC } from "react";

const FarmingRender: FC<RenderProps> = ({ profileData }) => {
  if (!profileData) return null;

  return (
    <div>
      <h2>Farming Optimizer</h2>
    </div>
  );
};

export default FarmingRender;
