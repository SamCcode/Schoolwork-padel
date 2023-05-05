import { useSelector } from "react-redux";
import MembersCard from "../components/MembersCard";
import Navbar from "../components/Navbar";
import PrimaryBtn from "../components/PrimaryBtn";
import { useState } from "react";
import style from "../Styles/MyAccount.module.scss"

function MyAccount() {
    const myPlayer = useSelector((state) => { return state.activePlayer })
    const [change, setChange] = useState(false)
    const handleFormSubmit = () => {
        setChange(false);
    }

    const handleClose = () => {
        setChange(false);
    };
    
    return (
        <section className={style.container}>
            <Navbar>My account</Navbar>
            <section className={style.wrapper}>
                <MembersCard player={myPlayer} change={change} onFormSubmit={handleFormSubmit} onClose={handleClose}/>
                <PrimaryBtn onClick={() => { setChange(true) }}>Change account?</PrimaryBtn>
            </section>
        </section>
    );
}

export default MyAccount;