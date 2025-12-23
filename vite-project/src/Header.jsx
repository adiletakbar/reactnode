function Header() {
  return (
    <header className="bg-slate-800 text-white px-4 py-3 flex items-center justify-between">
      <h1 className="text-gray-300 hover:text-white transition-colors">My App</h1>
      <a className="text-gray-300 hover:text-white transition-colors" href="">Home</a>
      <a href="" className="text-gray-300 hover:text-white transition-colors">About</a>
    </header>
  );
}

export default Header;
