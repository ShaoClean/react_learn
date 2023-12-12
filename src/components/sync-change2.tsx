import { useDispatch, useSelector } from "react-redux"
import  { setValue } from "../store/features/counterSlice"
import { RootState } from "../store"
import { useEffect } from "react";

export default function SyncChange2 (){
    
    const countInfo = useSelector( (state :RootState)=> state.countSlice.countInfo)
    const dispatch = useDispatch();

    // console.log('component 2 render');

    useEffect(() => {
        // console.log('component 2:',countInfo);
    },[countInfo])

    return (
        <div>
            <button onClick={()=>dispatch(setValue())}>click</button>
        </div>
    )
}