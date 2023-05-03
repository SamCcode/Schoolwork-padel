import { useSelector } from "react-redux";
import MembersCard from "../components/MembersCard";
import Navbar from "../components/Navbar";
import PrimaryBtn from "../components/PrimaryBtn";
import { useState } from "react";

function MyAccount() {
    const myPlayer = useSelector((state) => { return state.activePlayer })
    const [change, setChange] = useState(false)
    console.log(myPlayer);
    return ( 
        <>
        <Navbar>My account</Navbar>
        <MembersCard player={myPlayer} change={change}/>
        <PrimaryBtn onClick={()=> {setChange(true)}}>Change account?</PrimaryBtn>
        </>
     );
}

export default MyAccount;