import { useSelector } from "react-redux";
import CourtCard from "../components/CourtCard";
import InfoBtn from "../components/InfoBtn";
import { useState } from "react";
import PrimaryBtn from "../components/PrimaryBtn";
import Navbar from "../components/Navbar";
import style from "../Styles/Courts.module.scss"


function Courts() {
    const courts = useSelector((state) => { return state.courts })
    const [isClicked, setIsClicked] = useState(false)
    const [clickedCourt, setClickedCourt] = useState()
    function renderClicked(court) {
        setClickedCourt(court)
        setIsClicked(true)
    }


    return (
        <>
            <Navbar>Courts</Navbar>
            <section className={style.wrapper}>

                {isClicked ? (
                    <>
                        <CourtCard court={clickedCourt} />
                        <PrimaryBtn onClick={() => { setIsClicked(false) }}>Back</PrimaryBtn>
                    </>
                ) : (
                    <>
                        {courts.map((court, i) => (
                            <section key={i}>
                                <InfoBtn onClick={() => { renderClicked(court) }} >{court.name}</InfoBtn>
                            </section>

                        ))}
                    </>
                )}
            </section>
        </>
    );
}

export default Courts;