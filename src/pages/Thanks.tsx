import { useLocation, useNavigate } from "react-router-dom";
import "../styles.css";

const Thanks = () => {
  const location = useLocation();
  const { user } = location.state || {};
  const navigate = useNavigate()

  return (
    <div className="container-thanks">
      <div className="content-thanks">
        <button onClick={() => navigate(-1)}>Voltar ao formulario</button>
        <h1>
          Seja bem vindo,
          <span>{user.name}!</span>
        </h1>
        <h4>obrigado por se cadastrar em nosso sistema!</h4>
        <p>aproveite nossos recursos e se divirta.</p>
      </div>
    </div>
  );
};

export default Thanks;
