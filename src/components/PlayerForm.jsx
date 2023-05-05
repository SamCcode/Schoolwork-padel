
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addNewPlayer, changePlayerInfo } from "../actions/padelActions";
import { useNavigate } from "react-router";
import style from "../Styles/PlayerForm.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, z } from "zod";
const schema = z.object({
    name: string().nonempty("Name is required."),
    email: string().nonempty("Email is required.").email("Invalid email."),
    phonenumber: string()
      .nonempty("Phone number is required.")
      .refine(value => /^\d+$/.test(value), "Phone number must be digits."),
    level: string()
      .nonempty("Level is required.")
      .refine(value => /^\d+$/.test(value), "Level must be digits."),
    preferedcourt: string().nonempty("Preferred court is required."),
    available: string().nonempty("Availability is required."),
  });
const PlayerForm = ({ user = {}, type, onClose = () =>{}, onSubmit = () =>{} }) => {
    const { register, handleSubmit, formState } = useForm({ defaultValues: user, resolver: zodResolver(schema) });
    const { errors } = formState
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
                <div>{errors.name?.message}</div>
            </div>
            <div>
                <p>Email:</p>
                <input {...register("email")} />
                <div>{errors.email?.message}</div>
            </div>
            <div>
                <p>Number:</p>
                <input {...register("phonenumber")} />
                <div>{errors.phonenumber?.message}</div>
            </div>
            <div>
                <p>Level:</p>
                <input {...register("level")} />
                <div>{errors.level?.message}</div>
            </div>
            <div>
                <p>Prefered court:</p>
                <input {...register("preferedcourt")} />
                <div>{errors.preferedcourt?.message}</div>
            </div>
            <div>
                <p>Available:</p>
                <input {...register("available")} />
                <div>{errors.available?.message}</div>
            </div>
            <div className={style.button}>
                <button>Submit</button>
            </div>
        </form>
    );
}

export default PlayerForm;