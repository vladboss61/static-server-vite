import { useNavigate } from "react-router-dom";

const Home = () => {
    const nav = useNavigate();
    
    return (<div>
            Home page
            <button onClick={() => nav('/')}>App</button>
        </div>)
}

export default Home;
