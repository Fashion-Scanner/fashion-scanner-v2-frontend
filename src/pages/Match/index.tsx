import React, { useRef } from "react";
import { MatchCover, MatchSystem, MatchExample, PageTemplate } from "components";
import { headerLayout } from "layout";

export const Match: React.FC = () => {
  const matchExampleRef = useRef<HTMLDivElement>(null);

  return (
    <PageTemplate headerLayout={headerLayout.bts} style={{ marginTop: 0 }}>
      <div style={{ height: "100vh" }}>
        <MatchCover matchExampleComponent={matchExampleRef} />
        <MatchExample ref={matchExampleRef} />
        <MatchSystem />
      </div>
    </PageTemplate>
  );
};
