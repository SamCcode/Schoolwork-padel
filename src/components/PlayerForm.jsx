
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addNewPlayer, changePlayerInfo } from "../actions/padelActions";
import { useNavigate } from "react-router";
import style from "../Styles/PlayerForm.module.scss";

const PlayerForm = ({ user = {}, type, onClose = () =>{}, onSubmit = () =>{} }) => {
    const { register, handleSubmit } = useForm({ defaultValues: user });
    const errors = {};
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleSave = (formValues) => {
        onSubmit();
        if (type === "newPlayer") {
            dispatch(addNewPlayer(formValues))
            navigate("/");
        } else {
            dispatch(changePlayerInfo(formValues))
        }
        onClose();
    }
    return (
        <form className={style.form} onSubmit={handleSubmit(handleSave)}>
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
            <div className={style.button}>
                <button>Submit</button>
            </div>
        </form>
    );
}

export default PlayerForm;