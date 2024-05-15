
const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="text-xl font-bold">Logo</div>
        <nav className="space-x-4">
          <a href="#" className="hover:text-purple-500">API</a>
          <a href="#" className="hover:text-purple-500">Solucionamos</a>
        </nav>
      </div>
      <button className="bg-transparent border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-black">
        Iniciar Sesión
      </button>
    </header>
  );
};

export default Header;