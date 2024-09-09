const Navbar = () => {
    return (
        <nav className='bg-nav-bg text-white'>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-16">
                <div className="logo font-bold text-2xl">
                    <span className="text-green-600"> &lt; </span>
                    Cipher
                    <span className="text-green-600"> Chest /&gt;</span>
                </div>
                <button 
                    className="text-white flex gap-4 hover:bg-green-600 bg-green-700 p-2 rounded-lg ring-white ring-2 ring-opacity-50"
                >
                    <img className="w-6" src="/git.svg" alt="github" />
                    <span className="font-bold">Github</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
