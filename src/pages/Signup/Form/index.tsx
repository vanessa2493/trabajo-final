const Form = () => {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="">Nombre</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Apellido</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Fecha de nacimiento</label>
          <input type="date" />
        </div>
        <div>
          <label htmlFor="">Correo electrónico</label>
          <input type="email" />
        </div>
        <div>
          <label htmlFor="">Contraseña</label>
          <input type="password" />
        </div>
        <div>
          <label htmlFor="">avatar</label>
          <input type="url" />
        </div>
        <div>
          <label htmlFor="">País</label>
          <select name="" id=""></select>
        </div>
        {/* aqui hay que poner dependiendo el pais que se elija, que aprezca la city */}
        <div>
          <label htmlFor="">City</label>
          <select name="" id=""></select>
        </div>
      </form>
    </div>
  );
};

export { Form };
