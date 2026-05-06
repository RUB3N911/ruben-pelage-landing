export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#080808",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontFamily: "Inter, sans-serif",
        textAlign: "center",
        padding: "20px"
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "20px",
          color: "#D4AF37"
        }}
      >
        Ruben Pelage
      </h1>

      <p
        style={{
          maxWidth: "600px",
          lineHeight: "1.7",
          opacity: 0.8,
          fontSize: "18px"
        }}
      >
        Création & protection de patrimoine.
        <br />
        Méthode Table / Frigo / Congélo.
      </p>
    </main>
  );
}
