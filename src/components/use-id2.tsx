import { useId } from "react"

export default function UseId2(){
    const id1 = useId()
    const id2 = useId()
    const id3 = useId()
    const id4 = useId()

    return (
        <div>
            <h1 id={id1}>{id1}</h1>
            <h1 id={id2}>{id2}</h1>
            <h1 id={id3}>{id3}</h1>
            <h1 id={id4}>{id4}</h1>
        </div>
    )
}