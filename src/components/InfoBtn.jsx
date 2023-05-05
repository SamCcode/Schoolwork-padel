import style from "../Styles/InfoBtn.module.scss"

function InfoBtn({ children, onClick }) {
    return (
        <button className={style.btn} type="button" onClick={onClick}>
            {children}
        </button>);
}

export default InfoBtn;