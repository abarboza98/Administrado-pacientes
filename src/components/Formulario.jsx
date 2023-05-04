import { useState, useEffect } from 'react';
import Error from './Error';

//Codigo generado con rafc

export const Formulario = ({
  pacientes,
  setPacientes,
  paciente,
  setPaciente,
}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintoma, setSintoma] = useState('');
  const [error, setError] = useState(false);
  function generarId() {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  }
  //AQUI SE RELLENAN NUEVAMENTE LOS CAMPOS CON EL COMPONENTE A EDITAR
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintoma(paciente.sintoma);
    }
  }, [paciente]);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validando el formulario
    if ([nombre, propietario, email, fecha, sintoma].includes('')) {
      //verifica si hay al menos un campo vacio
      setError(true);
    } else {
      //Aqui todos los campos estan llenos
      setError(false);
      //Objeto de pacientes

      const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintoma,
      };

      if (paciente.id) {
        //Editando el registro
        objetoPaciente.id = paciente.id;
        const pacientesActualizados = pacientes.map((pacienteState) =>
          pacienteState.id === paciente.id ? objetoPaciente : pacienteState
        );
        setPacientes(pacientesActualizados);
        setPaciente({});
      } else {
        //Agregando nuevo registro

        objetoPaciente.id = generarId();

        //Spread Operator
        setPacientes([...pacientes, objetoPaciente]);
      }

      //Reiniciar el formulario
      setNombre('');
      setPropietario('');
      setEmail('');
      setFecha('');
      setSintoma('');
    }
  };

  return (
    <div className="md:w-1/2 lg:w-3/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-8">
        Añade pacientes y{' '}
        <span className="text-indigo-600 fot-bold ">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-md py-10 px-5 mb-10"
      >
        {
          error && <Error mensaje="Todos los campos obligatorios!!!" /> //Div que se muestra en caso de que halla un error
        }
        <div>
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="nombre"
          >
            Nombre Mascota*
          </label>
          <input
            id="nombre"
            className="border-2 mt-2 p-2 w-full placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre de la mascota"
            value={nombre} //Asigna el valor inicial al campo
            onChange={(e) => setNombre(e.target.value)} // Va modificando el valor conforme vas escribiendo en el campo
          />
        </div>
        <div className="mt-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario"
          >
            Nombre Del Propietario*
          </label>
          <input
            id="propietario"
            className="border-2 mt-2 p-2 w-full placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre del propietario"
            value={propietario} //Asigna el valor inicial al campo
            onChange={(e) => setPropietario(e.target.value)} // Va modificando el valor conforme vas escribiendo en el campo
          />
        </div>
        <div className="mt-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Correo Electronico*
          </label>
          <input
            id="email"
            className="border-2 mt-2 p-2 w-full placeholder-gray-400 rounded-md"
            type="email"
            placeholder="Su correo electronico"
            value={email} //Asigna el valor inicial al campo
            onChange={(e) => setEmail(e.target.value)} // Va modificando el valor conforme vas escribiendo en el campo
          />
        </div>
        <div className="mt-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="fecha"
          >
            Fecha de alta*
          </label>
          <input
            id="fecha"
            className="border-2 mt-2 p-2 w-full placeholder-gray-400 rounded-md"
            type="date"
            value={fecha} //Asigna el valor inicial al campo
            onChange={(e) => setFecha(e.target.value)} // Va modificando el valor conforme vas escribiendo en el campo
          />
        </div>
        <div className="mt-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Sintomas*
          </label>
          <textarea
            className="border-2 mt-2 p-2 w-full placeholder-gray-400 rounded-md"
            name=""
            id="sintomas"
            placeholder="Describe los sintoma"
            value={sintoma} //Asigna el valor inicial al campo
            onChange={(e) => setSintoma(e.target.value)} // Va modificando el valor conforme vas escribiendo en el campo
          ></textarea>
        </div>
        <input
          type="submit"
          value={paciente.id ? 'Editar' : 'Agregar'}
          className="bg-indigo-600 rounded-md w-full p-3 uppercase fot-bold hover:bg-indigo-700 text-white cursor-pointer transition-all"
        />
      </form>
    </div>
  );
};
