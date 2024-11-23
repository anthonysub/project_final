import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import {useNavigate, Link} from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async(values) => {
     signup(values);  
  });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      {
        registerErrors.map((error, i )  => (
          <div className="bg-red-500 text-white p-2" key={i}>
            {error}
          </div>
        ))
      }
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Nombre de usuario"
        />
        {errors.username && (
          <p className="text-red-500">Usuario requerido</p>
        )}

        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Correo electrónico"
        />
        {errors.email && (
          <p className="text-red-500">Email requerido</p>
        )}

        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="password"
        />
        {errors.password && (
          <p className="text-red-500">Contraseña requerida</p>
        )}
        <button type="submit">Registrar</button>
      </form>

      <p className="flex gap-x-2 justify-between">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>

    </div>
  );
}

export default RegisterPage;
