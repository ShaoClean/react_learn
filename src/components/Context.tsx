import { createContext, useContext } from "react"
import UseId from "./use-id";

export const myContext = createContext('hihihi')
export default function Context(){
    const mc = useContext(myContext);
    let msg = 'im clean'
    return (
        <div>
            <myContext.Provider value={msg}>
                <UseId/>
            </myContext.Provider>

            <h1>mc is :{mc}</h1>
        </div>
    )
}