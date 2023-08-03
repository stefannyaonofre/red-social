import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <main className="d-flex justify-content-center align-items-center vw-100 vh-100">
      <form className="card p-5 bg-info-subtle" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">
            <span>Nombre</span>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Escriba su nombre"
              {...register('name', {required: true})}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            <span>Email</span>
            <input
              type="email"
              className="form-control mt-2"
              placeholder="Escriba su email"
              {...register('email', {required: true})}
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
              {...register('password', {required: true})}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            <span>Género</span>
            <select className="form-select" aria-label="Seleccione el Género" {...register('gender', {required: true})}>
              <option value="">Selecciona una opción</option>
              <option value="m">Masculino</option>
              <option value="f">Femenino</option>
              <option value="i">Indeterminado</option>
            </select>
          </label>
        </div>
        <button type="submit" className="btn btn-success">Registrar</button>
      </form>
    </main>
  );
};

export default Register;
