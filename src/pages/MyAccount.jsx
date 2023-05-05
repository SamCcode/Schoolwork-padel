import { useSelector } from "react-redux";
import MembersCard from "../components/MembersCard";
import Navbar from "../components/Navbar";
import PrimaryBtn from "../components/PrimaryBtn";
import { useState } from "react";
import style from "../Styles/MyAccount.module.scss"
import { useDispatch } from "react-redux";
import { deletePlayer } from "../actions/padelActions";
import { useNavigate } from "react-router";

function MyAccount() {
    const myPlayer = useSelector((state) => { return state.activePlayer })
    const [change, setChange] = useState(false)
    const [deleteAccount, setDeleteAccount] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleFormSubmit = () => {
        setChange(false);
    }

    const handleClose = () => {
        setChange(false);
    };

    const handleDelete = () => {
        dispatch(deletePlayer(myPlayer));
        navigate("/");
    };

    return (
        <section className={style.container}>
            <Navbar>My account</Navbar>
            {deleteAccount ? (
                <section className={style.wrapper}>
                      <MembersCard player={myPlayer} change={change} onFormSubmit={handleFormSubmit} onClose={handleClose} />
                    <p>Are you sure?</p>
                    <div className={style.buttonwrapper}>
                    <PrimaryBtn onClick={handleDelete }>Yes!</PrimaryBtn>
                    <PrimaryBtn onClick={() => { setDeleteAccount(false) }}>No!</PrimaryBtn>
                    </div>
                </section>
            ) : 
            <section className={style.wrapper}>
                <MembersCard player={myPlayer} change={change} onFormSubmit={handleFormSubmit} onClose={handleClose} />
                <PrimaryBtn onClick={() => { setChange(true) }}>Change account?</PrimaryBtn>
                <PrimaryBtn onClick={() => { setDeleteAccount(true) }}>Delete account?</PrimaryBtn>
            </section>}
        </section>
    );
}

export default MyAccount;