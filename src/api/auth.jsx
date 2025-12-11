const API_URL = "http://localhost:3000/auth"

export async function loginUser(email, senha) {
    const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha })
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Erro no login");

    }
    return res.json();
}