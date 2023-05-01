import style from "../Styles/PrimaryBtn.module.scss"
function PrimaryBtn({ children, onClick }) {
    return (
        <button type="button" onClick={onClick} className={style.primaryBtn}>
            {children}
        </button>
    );
}

export default PrimaryBtn;