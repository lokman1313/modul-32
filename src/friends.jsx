import { use } from "react";
import Frind from "./frind";

export default function Friends({friends}){
    const friend=use(friends);
    return(
        <div className="card">
            <h2>Friend : {friend.length}</h2>
            {
                friend.map(frind => <Frind key={frind.id} frind={frind}></Frind>)
            }
        </div>
    )
}