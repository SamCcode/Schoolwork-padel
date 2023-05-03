import { useSelector } from "react-redux";
import MembersCard from "../components/MembersCard";
import InfoBtn from "../components/InfoBtn";
import { useState } from "react";
import PrimaryBtn from "../components/PrimaryBtn";
import Navbar from "../components/Navbar";
import style from "../Styles/Members.module.scss"

function Members() {
    const players = useSelector((state) => { return state.players })
    const [isClicked, setIsClicked] = useState(false)
    const [clickedPlayer, setClickedPlayer] = useState()
    function renderClicked(player) {
        setClickedPlayer(player)
        setIsClicked(true)
    }


    return (
        <>
            <Navbar>Members</Navbar>
            <section className={style.wrapper}>

                {isClicked ? (
                    <>
                        <MembersCard player={clickedPlayer} />
                        <PrimaryBtn onClick={() => { setIsClicked(false) }}>Back</PrimaryBtn>
                    </>
                ) : (
                    <>

                        {players.map((player, i) => (
                            <section key={i}>
                                <InfoBtn onClick={() => { renderClicked(player) }} >{player.name}</InfoBtn>
                            </section>

                        ))}
                    </>
                )}
            </section>
        </>
    );
}
export default Members;