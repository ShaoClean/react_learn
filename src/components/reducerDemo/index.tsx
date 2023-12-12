import {useReducer, useRef} from "react";
import Button from "antd/es/button";
function reducer(state:any, action:any){
    console.log(state, action)
    if (action === 'incremented_age') {
        return {
            age: state.age + 1,
            name: 'clean'
        }
    }
    throw Error('Unknown action')
}


export function ReducerDemo() {

    const [state, dispatch] = useReducer(reducer,{age:42, name:''});
    const [x,forceRender] = useReducer(x => x + 1,0)

    const numRef = useRef(1);

    function changeRef(){
        numRef.current++
        console.log(numRef.current)
        forceRender()
    }


    return (
        <div>
            <Button type="primary" onClick={()=>dispatch('incremented_age')}>increment age</Button>
            <Button type="primary" onClick={()=>dispatch('abababab')}>other button</Button>
            <Button onClick={changeRef}>change Ref</Button>
            <p>hello you are {state.age} old</p>
            <p>hello you are {state.name}</p>
            <p>numRef: { numRef.current }</p>
            <p>{x}</p>
        </div>
    )
}