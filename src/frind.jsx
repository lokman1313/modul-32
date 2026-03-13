export default function Frind({frind}){
    console.log(frind)
    const {name ,email ,phone ,website}=frind;
    return (
        <div className="card">
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <p>Web-Site : {website}</p>
        </div>
    )
}