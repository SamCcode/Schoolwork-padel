function InfoBtn({ children, onClick }) {
    return (
        <button type="button" onClick={onClick}>
            {children}
        </button>);
}

export default InfoBtn;