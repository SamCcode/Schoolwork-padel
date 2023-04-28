import { useNavigate } from "react-router";
import InfoBtn from "../components/InfoBtn";
import Header from "../components/Header";

function Home() {
    const navigate = useNavigate()
    return ( 
        <>
        <Header>Home</Header>
        <InfoBtn onClick={()=> {navigate("/courts")}}>Courts in Orihuela Costa</InfoBtn>
        <InfoBtn onClick={()=> {navigate("/members")}}>Members</InfoBtn>
        </>
        );
}

export default Home;