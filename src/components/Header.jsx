import style from "../Styles/Header.module.scss"
function Header({ children }) {
    return (
        <header className={style.header}>
            <h1>{children}</h1>
            <nav><a href="/home">home</a></nav>
            <nav><a href="/courts">courts</a></nav>
            <nav><a href="/members">members</a></nav>
            <nav><a href="/">log out</a></nav>
        </header>);
}

export default Header;