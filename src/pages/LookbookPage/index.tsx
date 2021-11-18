import React, { useState } from "react";
import LookBookHeader from "components/Lookbook/LookbookHeader";
import LookbookMain from "components/Lookbook/LookbookMain";
import LookbookPicker from "components/Lookbook/LookbookPicker";
import { PageTemplate } from "components";
import { headerLayout } from "layout";

export const LookbookPage: React.FC = () => {
  const [memberName, setMemberName] = useState<string>("jungkook");
  return (
    <PageTemplate headerLayout={headerLayout.bts}>
      <LookBookHeader memberName={memberName} />
      <LookbookMain />
      <LookbookPicker setMemberName={setMemberName} />
    </PageTemplate>
  );
};
