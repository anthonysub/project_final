import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { singin, errors: singinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    singin(data);
  });

  useEffect(() => {
    if(isAuthenticated) navigate("/tasks");

  }, [isAuthenticated])
  

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-zinc-800  max-w-md w-full p-10 rounded-md">

      {
        singinErrors.map((error, i )  => (
          <div className="bg-red-500 text-white p-2 text-center my-2" key={i}>
            {error}
          </div>
        ))
      }

        <h1 className="text-2xl font-bold">Login</h1>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Correo electrónico"
          />
          {errors.email && <p className="text-red-500">Email requerido</p>}

          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="password"
          />
          {errors.password && (
            <p className="text-red-500">Contraseña requerida</p>
          )}
          <button type="submit">Login</button>
        </form>

        <p className="flex gap-x-2 justify-between">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="text-blue-500">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
