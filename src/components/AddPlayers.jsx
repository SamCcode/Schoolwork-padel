import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

function AddPlayers() {
    const players = useSelector((state) => { return state.players })
    const { register, handleSubmit } = useForm();

    const onSubmit = () => {
        console.log("tja");
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {
                players.map((player) => (
                    <li key={player.id}>{player.name}</li>
                ))
            }
        </form>
    );
}

export default AddPlayers;


