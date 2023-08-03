import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { getUser } from "../../services/users";
import Swal from "sweetalert2";
import { AppContext } from "../../router/Router";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const { user: { userDispatch } } = useContext(AppContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate();

    const onSubmit = async(data) => {
        try {
            const user = await getUser(data);
            if(user){
                Swal.fire(
                    `Exitoso! ${user.name}`,
                    'Ha iniciado sesión exitosamente!',
                    'success'
                  ).then(() => {
                    userDispatch({
                      type: "login",
                      payload: {
                        isAuthenticate: true,
                        user: user
                      }
                    })
                    navigate('/')
                  })
            }else{
              Swal.fire(
                'Ooops!',
                'Por favor verifique sus credenciales',
                'error'
              )
            }
            
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="d-flex justify-content-center align-items-center vw-100 vh-100">
      <form className="card p-5 align-items-center bg-info-subtle" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">
            <span>Email</span>
            <input
              type="email"
              className="form-control mt-2"
              placeholder="Escriba su email"
              {...register("email", { required: true })}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            <span>Contraseña</span>
            <input
              type="password"
              className="form-control mt-2"
              placeholder="Escriba su contraseña"
              {...register("password", { required: true })}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-success">Iniciar Sesión</button>
        <span className="pt-5">Si no tienes cuenta, puedes crear una cuenta <Link to='/register'>Aquí</Link></span>
      </form>
    </div>
  );
};

export default Login;
