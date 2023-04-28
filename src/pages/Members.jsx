import { useSelector } from "react-redux";
import MembersCard from "../components/MembersCard";
import InfoBtn from "../components/InfoBtn";
import Header from "../components/Header";
import { useState } from "react";
import PrimaryBtn from "../components/PrimaryBtn";

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

            {isClicked ? (
                <>
                    <MembersCard player = {clickedPlayer}/>
                    <PrimaryBtn onClick={() => { setIsClicked(false) }}>Back</PrimaryBtn>
                </>
            ) : (
                <>
                    <Header>Members</Header>
                    {players.map((player, i) => (
                        <section key={i}>
                            <InfoBtn onClick={() => { renderClicked(player) }} >{player.name}</InfoBtn>
                        </section>

                    ))}
                </>
            )}
        </>
    );
}
export default Members;