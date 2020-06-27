import React from "react";

export const SearchPanel = () => {
  const searchText = "Type here to search";
  const searchStyle = {
    fontSize: "22px",
  };
  return (
    <input placeholder={searchText} style={searchStyle} disabled={false} />
  );
};
