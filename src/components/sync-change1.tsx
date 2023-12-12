import { useSelector } from "react-redux"
import { RootState } from "../store"
import { useEffect, useRef } from "react";

export default function SyncChange1 (){
    const countInfo = useSelector((state: RootState) => state.countSlice.countInfo);
    const hasValue = useRef<boolean>();
    console.log('component 1 render');
    useEffect(() => {
        console.log('countInfo.value:',countInfo.value);
        const objValue = JSON.parse(countInfo.value);

        hasValue.current = !!objValue
    },[countInfo])

    return (
        <div>
        </div>
    )
}