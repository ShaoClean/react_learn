import React from 'react';

function Boxes({ boxes }: any) {
  console.log('Boxes is re-render');
  return (
    <div className="boxes-wrapper">
      {boxes.map((boxStyles: any, index: any) => (
        <div
          key={index}
          className="box"
          style={boxStyles}
        />
      ))}
    </div>
  );
}

export default React.memo(Boxes);