import React, { useState } from "react";
import LookBookHeader from "components/Lookbook/LookbookHeader";
import LookbookMain from "components/Lookbook/LookbookMain";
import LookbookPicker from "components/Lookbook/LookbookPicker";
import { PageTemplate } from "components";
import { headerLayout } from "layout";
import { useLocation } from "react-router-dom";

interface LocationType {
  memberName: string;
}

export const LookbookPage: React.FC = () => {
  const location = useLocation<LocationType>();
  const getMemberName = () => location.state?.memberName.toUpperCase() || "JUNGKOOK";
  const [memberName, setMemberName] = useState<string>(getMemberName());
  return (
    <PageTemplate headerLayout={headerLayout.bts}>
      <LookBookHeader memberName={memberName} />
      <LookbookMain />
      <LookbookPicker setMemberName={setMemberName} />
    </PageTemplate>
  );
};
