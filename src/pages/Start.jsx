import { useEffect, useState } from "react";
import PrimaryBtn from "../components/PrimaryBtn";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import style from "../Styles/Start.module.scss"
import { addActivePlayer } from "../actions/padelActions";




function Start() {
    const players = useSelector((state) => { return state.players })
    const dispatch = useDispatch();
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
                    dispatch(addActivePlayer(player))
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

        <section className={style.container}>
            <h1>Padel Maniac</h1>
            {clicked ? (
                <section className={style.wrapper}>
                        <aside className={style.input}>
                            <input type="text" placeholder="Email" onChange={handleInputValue} />
                        </aside>
                   
                    {!valid && (
                    <PrimaryBtn onClick={handleLogin}>submit</PrimaryBtn> 
                    )}
                    {valid && (
                        <p className={style.fail}>wrong email. Try again or <span onClick={() => { setAddNewPlayer(true) }}>create an account.</span></p>
                        )}
                        <p>Forgot Email?</p> {/* lägg till länk osv */}
                        
                </section>
            ) : (
                <p className={style.login} onClick={() => { setClicked(true) }}>log in</p>
            )}

            <p onClick={() => { setAddNewPlayer(true) }}>no account?</p>
        </section>

    );

}

export default Start;