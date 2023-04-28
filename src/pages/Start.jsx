import { useEffect, useState } from "react";
import PrimaryBtn from "../components/PrimaryBtn";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";




function Start() {
    const players = useSelector((state) => { return state.players })
    const navigate = useNavigate()
    const [clicked, setClicked] = useState(false)
    const [valid, setValid] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [addNewPlayer, setAddNewPlayer] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)


    const handleInputValue = (e) => {
        setInputValue(e.target.value)
        setValid(false)
    }


    const handleLogin = () => {
        if (players && players.length > 0) {
            players.map((player) => {
                if (Object.is(player.email, inputValue)) {
                    setLoggedIn(true)
                } else {
                    setValid(true);
                }
            });
        }
    };

    useEffect(() => {
        if (addNewPlayer) {
            navigate("/register");
        }
        if (loggedIn) {
            navigate("/home");
        }
    }, [addNewPlayer, loggedIn]);

    return (
        <div>
            <h1>Padel Maniac</h1>
            {clicked ? (
                <>
                    <input type="text" placeholder="EMAIL" onChange={handleInputValue} />
                    <PrimaryBtn onClick={handleLogin}>Ok</PrimaryBtn>
                </>
            ) : (
                <PrimaryBtn onClick={() => { setClicked(true) }}>log in</PrimaryBtn>
            )}
            {clicked && valid && (
                <>
                    <p>wrong email, try again or create an account.</p>
                </>)}
            <p onClick={() => { setAddNewPlayer(true) }}>Create account</p>
        </div>
    );

}

export default Start;