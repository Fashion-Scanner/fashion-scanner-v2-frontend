import React from "react";
import { MatchCover, MatchSystem, MatchExample } from "components";

export const Match: React.FC = () => {
  return (
    <div>
      <MatchCover />
      <MatchExample />
      <MatchSystem />
    </div>
  );
};
