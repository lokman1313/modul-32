import { use } from "react"

export default function Users({fetchUser}){

    const user =use(fetchUser);
    return (
        <div className="card">
            <h2>Users : {user.length}</h2>
        </div>
    )
}