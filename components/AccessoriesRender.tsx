import React, { FC } from "react";

const AccessoriesRender: FC<RenderProps> = ({ profileData }) => {
  if (!profileData) return null;

  return (
    <div>
      <h2>Accessories Optimizer</h2>
    </div>
  );
};

export default AccessoriesRender;
