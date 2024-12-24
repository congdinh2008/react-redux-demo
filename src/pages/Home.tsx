import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector((state: any) => state.auth);

    const gotoAbout = () => {
        navigate('/about');
    }

    return (
        <section>
            <h1 className="text-2xl font-semibold">Welcome {isAuthenticated ? "Yes" : "No"}</h1>
            <button className="p-2 px-4 bg-blue-500 rounded-full text-white" onClick={gotoAbout}>
                Go to About
            </button>
        </section>
    );
}

export default Home;