import React, { useCallback } from 'react';

import MegaBoost from './MegaBoost';

function CallBackContainer() {
  const [count, setCount] = React.useState(0);
//  count 每次变化的时候会将 CallBackContainer重新渲染 handleMegaBoost函数也会重新创建一次 
//  由于判断两个函数是否相同 比较的是两个函数之间的引用 所以每次重新渲染的时候都是一个新的函数 也会导致MegaBoost重新渲染
//  使用useCallback 可以对函数进行缓存 也就是渲染前后两个函数是同一个引用 使得每次重新渲染后 handleMegaBoost函数不会重新创建

//   function handleMegaBoost() {
//     setCount((currentValue) => currentValue + 1234);
//   

  const handleMegaBoost = useCallback(() => {
    setCount((currentValue) => currentValue + 1234);
  },[])

  return ( 
    <>
      Count: {count}
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click me!
      </button>
      <MegaBoost handleClick={handleMegaBoost} />
    </>
  );
}

export default CallBackContainer;