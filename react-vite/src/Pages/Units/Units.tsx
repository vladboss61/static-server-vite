import { useNavigate } from "react-router-dom";

const Units = () => {
    const nav = useNavigate();
    return (<div>
            Units page
            <button onClick={() => nav('/')}>App</button>
        </div>)
}

export default Units;
