import React, { useMemo } from 'react';
import "./box.css";

import Boxes from './Boxes';

function BoxContainer() {
  const [name, setName] = React.useState('');
  const [boxWidth, setBoxWidth] = React.useState(1);
  
  const id = React.useId();
  
//   重新渲染的时候 会生成新的数组
//  由于数组之间的比较是引用比较 所以会导致重新渲染
//   const boxes = [
//     { flex: boxWidth, background: 'hsl(345deg 100% 50%)' },
//     { flex: 3, background: 'hsl(260deg 100% 40%)' },
//     { flex: 1, background: 'hsl(50deg 100% 60%)' },
//   ];

  const boxes = useMemo(() => {
    return [
        { flex: boxWidth, background: 'hsl(345deg 100% 50%)' },
        { flex: 3, background: 'hsl(260deg 100% 40%)' },
        { flex: 1, background: 'hsl(50deg 100% 60%)' },
    ]
  },[boxWidth])

  
  return (
    <>
      <Boxes boxes={boxes} />
      
      <section>
        <label htmlFor={`${id}-name`}>
          Name:
        </label>
        <input
          id={`${id}-name`}
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label htmlFor={`${id}-box-width`}>
          First box width:
        </label>
        <input
          id={`${id}-box-width`}
          type="range"
          min={1}
          max={5}
          step={0.01}
          value={boxWidth}
          onChange={(event) => {
            setBoxWidth(Number(event.target.value));
          }}
        />
      </section>
    </>
  );
}

export default BoxContainer;