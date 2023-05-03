
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addNewPlayer, changePlayerInfo } from "../actions/padelActions";
import { useNavigate } from "react-router";

const PlayerForm = ({user = {}, type}) => {
    const { register, handleSubmit} = useForm({defaultValues: user });
    const errors = {};
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleSave = (formValues) => {
        if (type === "newPlayer") {
            dispatch(addNewPlayer(formValues))
            navigate("/");
        } else {

            dispatch(changePlayerInfo(formValues))
        }
    }
    return (
        <form onSubmit={handleSubmit(handleSave)}>
           <div>
            <p>Name:</p>
            <input {...register("name")} />
            <div>{errors.name}</div>
           </div>
           <div>
            <p>Email:</p>
            <input {...register("email")} />
            <div>{errors.email}</div>
           </div>
           <div>
            <p>Number:</p>
            <input {...register("phonenumber")} />
            <div>{errors.phonenumber}</div>
           </div>
           <div>
            <p>Level:</p>
            <input {...register("level")} />
            <div>{errors.level}</div>
           </div>
           <div>
            <p>Prefered court:</p>
            <input {...register("preferedcourt")} />
            <div>{errors.preferedcourt}</div>
           </div>
           <div>
            <p>Available:</p>
            <input {...register("available")} />
            <div>{errors.available}</div>
           </div>
           <button>submit</button>
        </form>
    );
}

export default PlayerForm;