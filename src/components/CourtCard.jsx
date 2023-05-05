import style from "../Styles/CourtCard.module.scss"


function CourtCard({ court }) {
    return (
        <section className={style.wrapper}>
            <h3>{court.name}</h3>
            <h5>{court.website}</h5>
            <img src={court.img} alt="image of a padel court" />
            <p><span>Location:</span> {court.location}</p>
            <p><span>Price:</span> {court.price}€</p>
            <p><span>Phone:</span> {court.phoneNumber}</p>
            <p><span>Email:</span> {court.mail}</p>
        </section>
    );
}

export default CourtCard;