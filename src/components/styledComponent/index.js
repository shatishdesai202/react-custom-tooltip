import React from "react";
import styled from "styled-components";

const ToolTipText = styled("span")({
  visibility: "hidden",
  width: "auto",
  backgroundColor: "#99cccc",
  color: "black",
  textAlign: "center",
  borderRadius: "6px",
  padding: "5px 0",
  position: "absolute",
  zIndex: 1,
  bottom: "150%",
  left: "50%",
  marginLeft: "-60px",
  ":after": {
    content: '""',
    position: "absolute",
    top: "100%",
    left: "50%",
    marginLeft: "-5px",
    borderWidth: "5px",
    borderStyle: "solid",
    borderColor: "#99cccc transparent transparent transparent"
  }
});

const ToolTip = styled("div")({
  position: "relative",
  display: "inline-block",
  borderBottom: "1px dotted #99cccc",
  ":hover span": {
    visibility: "visible"
  }
});

const David = ({ children, toolTipText }) => (
  <ToolTip>
    {children}
    <ToolTipText>{toolTipText}</ToolTipText>
  </ToolTip>
);

export default David;
