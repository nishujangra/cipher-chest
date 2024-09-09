
const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center py-2 w-full bg-nav-bg text-white relative bottom-0">
            <div className="logo font-bold text-2xl">
                <span className="text-green-600"> &lt; </span>
                Cipher
                <span className="text-green-600"> Chest /&gt;</span>
            </div>
            &nbsp;
            &nbsp;
            <div className="logo font-bold text-xl flex gap-2">
                Created with
                <lord-icon
                    src="https://cdn.lordicon.com/ulnswmkk.json"
                    trigger="hover"
                    colors="primary:#c74b16"
                >
                </lord-icon>
                by @nishujangra27
            </div>
        </div>
    )
}

export default Footer
