import style from "../Styles/MembersCard.module.scss"
import PlayerForm from "./PlayerForm";
function MembersCard({ player, change }) {
    console.log(player.name);
    return (
        <section className={style.wrapper}>
            {change ? (
                <>
                    <PlayerForm user={player}/>
                </>
                ) :
                <>
                    <h2>{player.name}</h2>
                    <p><span>Email:</span> {player.email}</p>
                    <p><span>Number:</span> {player.phonenumber}</p>
                    <p><span>level:</span> {player.level}</p>
                    <p><span>Prefered court:</span> {player.preferedcourt}</p>
                    <p><span>available:</span> {player.available}</p>
                </>}
        </section>
    );
}

export default MembersCard;

