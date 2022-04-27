import React from 'react';

const FlexBoxContainer = ({ children }) => {
  return <div style={{ flexGrow: '1', flexShrink: 0 }}>{children}</div>;
};
export default FlexBoxContainer;
