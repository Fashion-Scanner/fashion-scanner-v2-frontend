import React, { useState } from "react";
import LookBookHeader from "components/Lookbook/LookbookHeader";
import LookbookMain from "components/Lookbook/LookbookMain";
import LookbookPicker from "components/Lookbook/LookbookPicker";

export const LookbookPage: React.FC = () => {
  const [memberName, setMemberName] = useState<string>("jungkook");
  return (
    <>
      <LookBookHeader memberName={memberName} />
      <LookbookMain />
      <LookbookPicker setMemberName={setMemberName} />
    </>
  );
};
