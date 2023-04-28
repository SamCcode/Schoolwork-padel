import { useState } from "react";
import { addNewPlayer } from "../actions/padelActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function RegisterCard() {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [preferedCourt, setPreferedCourt] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [level, setLevel] = useState("");
    const dispatch = useDispatch()

    function handleSubmit(e) {
        console.log("hej");
        e.preventDefault()
        const newPlayer = {
            name,
            email,
            preferedCourt,
            phoneNumber,
            level,
          };
          dispatch(addNewPlayer(newPlayer));
          navigate("/");
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <h3>Register</h3>
            <input type="text" placeholder="Name" value={name} onChange={(e)=> {setName(e.currentTarget.value)}}/>
            <input type="text" placeholder="Email" value={email} onChange={(e)=> {setEmail(e.currentTarget.value)}}/>
            <input type="text" placeholder="Prefered Court" value={preferedCourt} onChange={(e)=> {setPreferedCourt(e.currentTarget.value)}}/>
            <input type="text" placeholder="Phone number" value={phoneNumber} onChange={(e)=> {setPhoneNumber(e.currentTarget.value)}}/>
            <input type="text" placeholder="Level" value={level} onChange={(e)=> {setLevel(e.currentTarget.value)}}/>
            <button>Submit</button>
        </form>
     );
}

export default RegisterCard;
