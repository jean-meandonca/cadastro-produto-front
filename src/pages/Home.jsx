import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

export default function Home() {
    const { logout } = useContext(AuthContext);

    return (
        <div style={{ textAligh : "center", marginTop: "40ox" }}>
            <h1>Bem-vindo!</h1>
            <button onClick={logout}>Sair</button>
        </div>
    );
}