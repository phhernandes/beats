import axios from "axios";

function Favoritos({ favoritos }) {
  return (
    <div>
      <h1>Músicas Favoritas</h1>
      <ul>
        {favoritos.map((musica) => (
          <li key={musica.id}>{musica.name}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get("http://localhost:3001/favoritos");
    const favoritos = response.data;
    return { props: { favoritos } };
  } catch (error) {
    console.error("Erro ao obter favoritos:", error);
    return { props: { favoritos: [] } };
  }
}

export default Favoritos;
