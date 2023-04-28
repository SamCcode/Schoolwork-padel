function CourtCard({ court }) {
    return (
        <>
            <h3>{court.name}</h3>
            <img src={court.img} alt="image of a padel court" />
            <p>location:{court.location}</p>
            <p>price:{court.price}</p>
            <p>Phone:{court.phoneNumber}</p>
            <p>{court.website}</p>
            <p>{court.mail}</p>
        </>
    );
}

export default CourtCard;