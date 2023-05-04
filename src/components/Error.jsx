const Error = ({ mensaje }) => {
  return (
    <div className="bg-red-500 rounded-xl p-3 uppercase font-bold border-2">
      <p className="text-white text-center">{mensaje}</p>
    </div>
  );
};

export default Error;
