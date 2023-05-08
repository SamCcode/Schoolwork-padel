import { useState } from "react";
import InfoBtn from "../components/InfoBtn";
import Americano from "../components/Americano";
import RegularGame from "../components/RegularGame";

function Games() {
    const [regular, SetRegular] = useState(false);
    const [americano, SetAmericano] = useState(false);
    const [singleGame, setSingleGame] = useState(false)
    const [tournament, setTournament] = useState(false)

    return (
        <section>
          {americano && singleGame && <Americano type="single" />}
          {americano && tournament && <Americano type="tournament" />}
          {regular && singleGame && <RegularGame type="single" />}
          {regular && tournament && <RegularGame type="tournament" />}
          
          {(!americano && !regular) && (
            <>
              {(!singleGame && !tournament) && (
                <>
                  <InfoBtn onClick={() => setSingleGame(true)}>Single game</InfoBtn>
                  <InfoBtn onClick={() => setTournament(true)}>Tournament</InfoBtn>
                </>
              )}
      
              {(singleGame || tournament) && (
                <>
                  <InfoBtn onClick={() => SetRegular(true)}>Regular game</InfoBtn>
                  <InfoBtn onClick={() => SetAmericano(true)}>Americano</InfoBtn>
                </>
              )}
            </>
          )}
        </section>
      );
}

export default Games;