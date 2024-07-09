import { useState } from "react";
import { useForms } from "../hooks/useForm";
import { FormSchema } from "../schemas/formSchemas";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const Form = () => {
  const [{ register, handleSubmit, errors }] = useForms();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const onSubmit = (data: FormSchema) => {
    setLoading(true);
    setTimeout(() => {
      navigate("/thanks", { state: { user: data } });

      setLoading(false);
    }, 5000);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container-app">
          <div className="container-header">
            <h1>Sign In</h1>
            <span>Crie sua conta para acessar nossos recursos e serviços.</span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="container-form">
            <div className="container-pai">
              <div className="container-input">
                <label className="label-form" htmlFor=""></label>
                <input
                  autoComplete="off"
                  type="text"
                  id="name"
                  placeholder="Digite seu nome"
                  {...register("name")}
                  className="input"
                  name="name"
                />
                {errors.name && (
                  <small className="error-text">{errors.name.message}</small>
                )}
              </div>

              <div className="container-input">
                <label className="label-form"></label>
                <input
                  autoComplete="off"
                  type="text"
                  id="lastname"
                  placeholder="Digite seu sobrenome"
                  {...register("lastname")}
                  className="input"
                  name="lastname"
                />
                {errors.lastname && (
                  <small className="error-text">
                    {errors.lastname.message}
                  </small>
                )}
              </div>

              <div className="container-input">
                <label className="label-form" htmlFor="gender"></label>
                <select
                  className="input"
                  id="gender"
                  {...register("gender")}
                  name="gender"
                >
                  <option value="select">Selecione seu gênero</option>
                  <option value="male">Masculino</option>
                  <option value="female">Feminino</option>
                  <option value="other">Outro</option>
                </select>
                {errors.gender && (
                  <small className="error-text">{errors.gender.message}</small>
                )}
              </div>
              <div className="container-input">
                <label className="label-form"></label>
                <input
                  autoComplete="off"
                  type="email"
                  id="email"
                  placeholder="Digite seu melhor email"
                  {...register("email")}
                  className="input"
                  name="email"
                />
                {errors.email && (
                  <small className="error-text">{errors.email.message}</small>
                )}
              </div>

              <div className="container-input">
                <label className="label-form"></label>
                <input
                  autoComplete="off"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Digite sua senha"
                  {...register("password")}
                  className="input"
                  name="password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="btn-showPassword"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
                {errors.password && (
                  <small className="error-text">
                    {errors.password.message}
                  </small>
                )}
              </div>

              <div className="container-input">
                <label className="label-form"></label>
                <input
                  autoComplete="off"
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Digite sua senha novamente"
                  {...register("confirmPassword")}
                  className="input"
                  name="confirmPassword"
                />
                {errors.confirmPassword && (
                  <small className="error-text">
                    {errors.confirmPassword.message}
                  </small>
                )}
              </div>

              <div className="container-input">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="agree"
                    {...register("agree")}
                    autoComplete="off"
                    name="agree"
                  />
                  <label className="label-form">Aceito os termos</label>
                </div>

                {errors.agree && (
                  <small className="error-text">{errors.agree.message}</small>
                )}
              </div>
            </div>

            <button type="submit" className="btn-submit">
              Cadastrar
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Form;
