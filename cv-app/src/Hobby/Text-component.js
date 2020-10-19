import React from "react";

function HobbyTextComponent({ HobbyTextData }) {
  const { info } = HobbyTextData;
  return (
    <div className="mediaWrapper">
      <p>{info}</p>
    </div>
  );
}

export default HobbyTextComponent;
