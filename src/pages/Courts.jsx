import { useSelector } from "react-redux";
import CourtCard from "../components/CourtCard";
import Header from "../components/Header";
import InfoBtn from "../components/InfoBtn";
import { useState } from "react";
import PrimaryBtn from "../components/PrimaryBtn";

function Courts() {
    const courts = useSelector((state) => { return state.courts })
    const [isClicked, setIsClicked] = useState(false)
    const [clickedCourt, setClickedCourt] = useState()
    function renderClicked(court) {
        console.log(court);
        setClickedCourt(court)
        setIsClicked(true)
    }


    return (
        <>

            {isClicked ? (
                <>
                    <CourtCard court={clickedCourt} />
                    <PrimaryBtn onClick={() => { setIsClicked(false) }}>Back</PrimaryBtn>
                </>
            ) : (
                <>
                    <Header>Courts</Header>
                    {courts.map((court, i) => (
                        <section key={i}>
                            <InfoBtn onClick={() => { renderClicked(court) }} >{court.name}</InfoBtn>
                        </section>

                    ))}
                </>
            )}
        </>
    );
}

export default Courts;