import {useDeferredValue, useEffect, useId, useReducer, useRef, useState, useTransition} from "react";

export function DeferValueDemo() {
    const [textArr, setTextArr] = useState<any>([]);

    const [deferArr, setDeferArr] = useState<any>([]);
    // const deferValue = useDeferredValue(deferArr)

    const [isPedding, startTransition] = useTransition()
    const handleUserEvent = () => {
        // 不断的将1渲染到页面上
        const el = <span style={{'color': 'red'}} key={performance.now().toString()}>1</span>
        let currentLen:number = 0;
        setTextArr((pre:any)=> {
            console.log('len:', pre.length)
            currentLen = pre?.length || 0
            return [...pre, el]
        })

        setTimeout(()=>{
            if (currentLen <= 400){
                handleUserEvent()
            }
        },0)
    }

    const handleDeferEvent = () => {
        startTransition(()=>{
            let currentLen:number = 0;

            const el = <span style={{'color': 'blue'}} key={crypto.randomUUID()}>1</span>

            setTextArr((pre:any)=> {
                console.log('len:', pre.length)
                currentLen = pre?.length || 0
                return [...pre, el]
            })

            setTimeout(()=>{
                if (currentLen <= 400){
                    handleDeferEvent()
                }
            },0)
        })
    }


    return (
        <>
            <div>
                <button onClick={handleUserEvent}>
                    用户事件
                </button>
            </div>

            <div>
                <button onClick={handleDeferEvent}>
                    defer事件
                </button>
            </div>

            <div style={{width:'400px',wordWrap:'break-word'}}>
                {
                    textArr
                }
            </div>

            {/*<div>*/}
            {/*    {*/}
            {/*        deferArr*/}
            {/*    }*/}
            {/*</div>*/}

        </>
    )
}