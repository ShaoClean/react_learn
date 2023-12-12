import { useMemo, useRef, useState } from "react"


export default function MemoDemo(){
    const a = useRef(1);
    let c = 2
    const [d,setD] = useState(3)
    const value = useMemo(()=>a.current + c,
    [d]
    )
    console.log(value);
    
    return(
        <div>
            <h1>{value}</h1>
            <button onClick={()=>a.current = 2}>click</button>
            <button onClick={()=>setD(4)}>click2</button>
        </div>
    )
}