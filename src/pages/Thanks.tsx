import { useLocation } from "react-router-dom";

const Thanks = () => {
  const location = useLocation();
  const { user } = location.state || {};
  return (
    <div>
      <h1>Seja bem vindo {user.name}</h1>
      <h2>obrigado por se cadastrar em nosso sistema!</h2>
      <p>aproveite nossos recursos e se divirta</p>
    </div>
  );
};

export default Thanks;
