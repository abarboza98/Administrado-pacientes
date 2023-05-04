export const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const handleEliminar = () => {
    const respuesta = confirm('¿Deseas eliminar este paciente?');

    if (respuesta) {
      eliminarPaciente(paciente.id);
    }
  };

  return (
    <div className="m-3 shadow-md rounded-md bg-white px-5 py-10">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre de la mascota:{' '}
        <span className="font-normal normal-case">{paciente.nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre del propietario:{' '}
        <span className="font-normal normal-case">{paciente.propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Correo electronico:{' '}
        <span className="font-normal normal-case">{paciente.email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de alta:{' '}
        <span className="font-normal normal-case">{paciente.fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas:{' '}
        <span className="font-normal normal-case">{paciente.sintoma}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 rounded-md mr-2 bg-lime-700 hover:bg-lime-800 text-white font-bold uppercase"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          className="py-2 px-10 rounded-md mr-2 bg-red-600 hover:bg-red-700 text-white font-bold uppercase"
          type="button"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
