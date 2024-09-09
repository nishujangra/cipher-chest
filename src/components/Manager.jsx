import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react"
import { FaCopy } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const Manager = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [form, setForm] = useState({
        website: "",
        username: "",
        password: ""
    })
    const [passwordArray, setPasswordArray] = useState([]);

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");

        if (passwords) {
            setPasswordArray(JSON.parse(passwords));
        }
    }, [])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const copyToClipboard = (text) => {
        toast.success('Copied to the Clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigator.clipboard.writeText(text);
    };

    const savePassword = () => {
        if(form.website.length > 3 && form.username.length > 3 && form.password.length > 3) {
            setPasswordArray([...passwordArray, {...form, id: uuidv4()}]);
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]));
            setForm({
                website: "",
                username: "",
                password: ""
            });
    
            toast.success('Password saved successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        else{
            toast.error('Please fill all the fields!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

    };

    const deletePassword = (id) => {
        let c = confirm("Are you sure you want to delete this password?");
        if (c) {
            let passwords = passwordArray.filter((password) => password.id !== id);
            setPasswordArray(passwords);
            localStorage.setItem("passwords", JSON.stringify(passwords));

            toast.success('Password deleted successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    const editPassword = (id) => {
        let password = passwordArray.find((password) => password.id === id);
        setForm(password);
        deletePassword(id);
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <div className="md:mycontainer p-2 md:px-0 text-primary">
                <h1 className="text-4xl font-bold text-center">
                    <span className="text-green-600">&lt;</span>
                    Cipher
                    <span className="text-green-600"> Chest/&gt;</span>
                </h1>
                <p className="font-semibold text-xl text-center pt-4">
                    Secure your passwords like hidden treasures with <span className="font-bold">Captain&apos;s Own Vault</span>-your personal password manager, secured with the wisdom of the seas!
                </p>
                <div className="flex flex-col items-center md:p-4 pt-9 px-4 text-black gap-6">
                    <input
                        value={form.website}
                        onChange={handleChange}
                        placeholder="Enter website url"
                        className="rounded-full border border-nav-bg w-full py-1 px-4"
                        type="text" name="website" id="website"
                    />
                    <div className="flex md:flex-row flex-col md:p-0 py-6 w-full justify-between gap-8">
                        <input
                            value={form.username}
                            onChange={handleChange}
                            placeholder="Enter username"
                            className="rounded-full border border-nav-bg w-full py-1 px-4"
                            type="text" name="username" id="username"
                        />
                        <div className="relative">
                            <input
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Enter password"
                                className="rounded-full border border-nav-bg w-full p-4 py-1"
                                type={showPassword ? "text" : "password"}
                                name="password" id="password"
                            />
                            <span className="absolute right-[1px] top-[2px] cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? (
                                    <img className="p-1" width={30} src="https://img.icons8.com/ios/50/hide.png" alt="hide" />
                                ) : (
                                    <img className="p-1" width={30} src="https://img.icons8.com/material-outlined/24/visible--v1.png" alt="visible--v1" />
                                )}
                            </span>
                        </div>

                    </div>
                    <button onClick={savePassword} className="flex justify-center items-center bg-btn-bg hover:bg-btn-bg-hover text-black rounded-full px-6 py-2 w-fit gap-x-2 font-semibold">
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        Save Password
                    </button>
                </div>


                <div className="passwords pb-10">
                    <h2 className="text-xl font-semibold text-center py-4">
                        Your Passwords
                    </h2>
                    {passwordArray.length === 0 ? (
                        <p className="text-center">No passwords saved</p>
                    ) :
                        <table className="table-auto w-full overflow-hidden rounded-md">
                            <thead className="bg-card-bg text-main-bg">
                                <tr>
                                    <th className="py-2">Website</th>
                                    <th className="py-2">Username</th>
                                    <th className="py-2">Password</th>
                                    <th className="py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-btn-text">
                                {passwordArray.map((password, index) => {
                                    return (
                                        <tr key={index}>
                                            <td
                                                className="text-center py-2 border border-green-300"
                                            >
                                                <div className="flex items-center justify-center">
                                                    <a href={password.website} target="_blank">
                                                        {password.website}
                                                    </a>
                                                    <div
                                                        className="cursor-pointer size-5 px-3 lordiconcopy"
                                                        onClick={() => copyToClipboard(password.website)}
                                                    >
                                                        <FaCopy />
                                                    </div>

                                                </div>
                                            </td>
                                            <td
                                                className="text-center py-2 border border-green-300"
                                            >
                                                <div className="flex items-center justify-center">
                                                    <span>
                                                        {password.username}
                                                    </span>
                                                    <div
                                                        className="cursor-pointer size-5 px-3 lordiconcopy"
                                                        onClick={() => copyToClipboard(password.username)}
                                                    >
                                                        <FaCopy />
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                className="text-center py-2 border border-green-300"
                                            >
                                                <div className="flex items-center justify-center">
                                                    <span>
                                                        {password.password}
                                                    </span>
                                                    <div
                                                        className="cursor-pointer size-5 px-3 lordiconcopy"
                                                        onClick={() => copyToClipboard(password.password)}
                                                    >
                                                        <FaCopy />
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                className="text-center py-2 border border-green-300"
                                            >
                                                <div className='flex justify-center items-center'>
                                                    <span className='cursor-pointer mx-1' onClick={() => editPassword(password.id)}>
                                                        <MdEdit
                                                            style={{ width: "25px", height: "25px" }}
                                                        />
                                                    </span>
                                                    <span className='cursor-pointer mx-1' onClick={() => deletePassword(password.id)}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/skkahier.json"
                                                            trigger="hover"
                                                            style={{ width: "25px", height: "25px" }}
                                                        >
                                                        </lord-icon>
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    }
                </div>
            </div>

        </>
    )
}

export default Manager
