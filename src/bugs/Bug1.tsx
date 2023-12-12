import { useEffect, useRef, useState } from "react"


export default function Bug1(){
    const [index,setIndex] = useState(-1);

    const [chartDom,setChartDom] = useState<any>();
    const [msg,setMsg] = useState<any>('hello');
    const [status,setStatus] = useState<any>(false);
    const timer = useRef<any>()

    console.log('render');

    function load(){
        update()
    }

    function update(){
        handle()
        setMsg('hi')
    }

    function handle(){
        console.log('index',index);
    }

    function get(){
        update()
        return true
    }

    function repeat(){
        clearInterval(timer.current);
        timer.current = setTimeout(async () => {
            const getRes = await get();
            if (getRes) repeat();
        }, 2000);
    }
    
    useEffect(()=>{
        // console.log(1);
        setChartDom(document.getElementById('main'))
    },[])


    useEffect(()=>{
        // console.log(2);
        // setStatus(2)
        load()
    },[chartDom,index])

    useEffect(()=>{
        // console.log(3);

        repeat()
    },[status,index])


    return (
        <div>
            <h1 id="main">{msg}</h1>
            <h1>{index}</h1>
            <button onClick={()=>setStatus((s:boolean)=>!s)}>change status</button>
            <button onClick={()=>setIndex((i)=>++i)}>change index</button>
        </div>
    )
}