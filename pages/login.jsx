import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { loginUser } from "../src/api/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        try { 
            const data = await loginUser(email, senha);

            login(data.token);

            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div style={{ maxWidth: "400px", margin: "80px auto", textAlign: "center"}}>
            <h2>Login</h2>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <form onSubmit={handleSubmit}>
                <input type="email" 
                       placeholder="Email" 
                       value={email} 
                       onChange={(e) => setEmail(e.target.value)}
                       required
                       style={{ width: "100%", padding: "10px", margin: "10px 0"}}
                />

                <input type="password"
                       placeholder="Senha"
                       value={senha}
                       onChange={(e) => setSenha(e.target.value)}
                       required
                       style={{ width: "100%", padding: "10px", margin: "10px 0" }}
                />

                <button type="submit" 
                        style={{
                            width: "100%",
                            padding: "10px",
                            margin: "10px 0",
                            backgroundColor: "#007bff",
                            color: "white",
                            border: "none",
                            cursor: "pointer"
                        }}
                >
                    Entrar
                </button>
            </form>
        </div>
    );
}