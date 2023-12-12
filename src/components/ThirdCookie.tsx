import axios from "axios"

export default function ThirdCookie(){
    axios.get("http://localhost:3000/",{
        withCredentials:true
    }).then(res=>{
        console.log('3000',res);
    }).catch(err=>{
        console.log('3000',err);
    })

    return (
        <div>
            <h1>我是广告</h1>
        </div>
    )
}