import { useState } from "react";
import { useForms } from "../hooks/useForm";
import { FormSchema } from "../schemas/formSchemas";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Form = () => {
  const [{ register, handleSubmit, errors }] = useForms();

  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
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
          />
          {errors.lastname && (
            <small className="error-text">{errors.lastname.message}</small>
          )}
        </div>

        <div className="container-input">
          <label className="label-form" htmlFor="gender"></label>
          <select className="input" id="gender" {...register("gender")}>
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
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="btn-showPassword"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
          {errors.password && (
            <small className="error-text">{errors.password.message}</small>
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
  );
};

export default Form;
