import Form from "../components/Form";
import "../styles.css";

const Home = () => {
  return (
    <div className="container-app">
      <div className="container-header">
        <h1>Sign In</h1>
        <span>Crie sua conta para acessar nossos recursos e serviços.</span>
      </div>
      <Form />
    </div>
  );
};

export default Home;
