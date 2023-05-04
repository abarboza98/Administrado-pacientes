import { Paciente } from './Paciente';

//COdigo generado con rafce

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  /*useEffect(() => {
    if (pacientes.length > 0) {
      console.log('Nuevo paciente');           //Ejemplo de uso de useEffect
    }
  }, [pacientes]);*/
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes.length > 0 ? ( //Si hay pacientes
        <>
          <h2 className="text-center text-3xl font-black">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{' '}
            <span className="text-indigo-600 font-bold ">
              Pacientes y Citas
            </span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        //Si NO hay Pacientes
        <>
          <h2 className="text-center text-3xl font-black">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes{' '}
            <span className="text-indigo-600 font-bold ">
              y apareceran aqui
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
