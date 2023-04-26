function CourtCard({children}) {
    return ( 
        <div>
            <h2>{children.name}</h2>
            <p>{children.phone}</p>
            <p>{children.mail}</p>
            <p>{children.price}</p>
        </div>
     );
}

export default CourtCard;