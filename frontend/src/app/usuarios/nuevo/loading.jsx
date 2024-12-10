"use client"; // Esto indica que el componente debe renderizarse en el lado del cliente

export default function Cargando() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "#f0f0f0" // Fondo claro
        }}>
            <div style={{
                width: "80px",
                height: "80px",
                border: "8px solid #e0e0e0", // Color gris claro para el borde del spinner
                borderTop: "8px solid #007bff", // Azul para el borde superior
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
                marginBottom: "20px"
            }}></div>
            <h1 style={{
                fontSize: "2em",
                color: "#333333", // Color del texto más oscuro
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "bold",
                margin: "0"
            }}>Cargando...</h1>
            <p style={{
                fontSize: "1.2em",
                color: "#666666", // Color de texto gris
                marginTop: "10px"
            }}>Por favor, espera un momento.</p>

            <style jsx>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}