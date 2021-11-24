import React, { useRef } from "react";
import { MatchCover, MatchSystem, MatchExample } from "components";

export const Match: React.FC = () => {
  const matchExampleRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ height: "100vh" }}>
      <MatchCover matchExampleComponent={matchExampleRef} />
      <MatchExample ref={matchExampleRef} />
      <MatchSystem />
    </div>
  );
};
