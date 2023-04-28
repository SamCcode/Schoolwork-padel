function MembersCard({player}) {
    return ( 
        <>
            <h2>{player.name}</h2>
            <p>{player.email}</p>
            <p>{player.phonenumber}</p>
            <p>level:{player.level}</p>
            <p>Prefered court{player.preferedcourt}</p>
            <p>available:{player.available}</p>
        </>
     );
}

export default MembersCard;