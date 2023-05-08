import { useNavigate } from "react-router";
import InfoBtn from "../components/InfoBtn";
import Navbar from "../components/Navbar";
import style from "../Styles/Home.module.scss"
import { useSelector } from "react-redux";

function Home() {
    const activePlayer = useSelector((state) => { return state.activePlayer })
    const navigate = useNavigate()
    return (
        <>
            <Navbar>Home</Navbar>
            <section className={style.wrapper}>
                <h1>Welcome </h1>
                <h3>{activePlayer.name}</h3>
                <InfoBtn onClick={() => { navigate("/courts") }}>Courts in Orihuela Costa</InfoBtn>
                <InfoBtn onClick={() => { navigate("/members") }}>Members</InfoBtn>
                <InfoBtn onClick={() => { navigate("/myaccount") }}>My account</InfoBtn>
                <InfoBtn onClick={() => { navigate("/games") }}>Start a game</InfoBtn>
            </section>
        </>
    );
}

export default Home;