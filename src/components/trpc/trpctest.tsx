import {trpc} from "../../trpc";

export default function Trpctest(){
    async function a(){
        const res = await trpc.userList.useQuery()
        const data = res.data

    }
    a()

    async function b(){
        const mutation = await trpc.createUser.useMutation();
        mutation.mutate({
           name:'',
           hobby: true,
           age: 18
        })
    }
    return (
        <div>
            111
        </div>
    )
}