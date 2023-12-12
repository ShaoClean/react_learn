import { useContext, useId } from "react"
import {myContext} from './Context'
export default function UseId(){
    const id1 = useId()
    const id2 = useId()
    const id3 = useId()
    const id4 = useId()
    const mc = useContext(myContext)
    return (
        <div>
            {/* <h1 id={id1}>{id1}</h1>
            <h1 id={id2}>{id2}</h1>
            <h1 id={id3}>{id3}</h1>
            <h1 id={id4}>{id4}</h1> */}
            {/* 用法1 */}
            {/* <myContext.Consumer>
                {
                    content => content + '!!!!!!'
                }
            </myContext.Consumer> */}
            {/* 用法2 */}
            <h1>{mc}</h1>
        </div>
    )
}