"use client"
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillEdit } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';

export default function Home() {

  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setpasswordArray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("password");
    let passwordArray;
    if (passwords) {
      setpasswordArray(JSON.parse(passwords))
    }
    // else{
    //   passwordArray([])
    // }

  }, [])


  const showPassword = () => {
    if (ref.current.src.includes("/crosseye.png")) {
      ref.current.src = "/eye.png"
      passwordRef.current.type = "text"

    }
    else {
      ref.current.src = "/crosseye.png"
      passwordRef.current.type = "password"

    }

  }

  const savePasswod = () => {
    if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
      
      setpasswordArray([...passwordArray, {...form , id:uuidv4()}])
      localStorage.setItem("password", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]))
      setform({site: "", username: "", password: "" })
      toast.success('Password Saved !', {
        position: "top-right",
        autoClose: 1000,
        theme: "light",
      });
    }
    else{
      toast.error('Password not saved !', {
        position: "top-right",
        autoClose: 1000,
        theme: "light",
      });
    }
  }
  const deletePassword = (id) => {
    let c = confirm("Are You Sure to delete this password")
    if (c) {
      setpasswordArray(passwordArray.filter(item=>item.id!==id))
      localStorage.setItem("password", JSON.stringify(passwordArray.filter(item=>item.id!==id)))
      toast.success('Password Deleted !', {
        position: "top-right",
        autoClose: 1000,
        theme: "light",
      });
    }
   


  }

  const editPassword = (id) => {
    setform(passwordArray.filter(i=>i.id===id)[0]);
    setpasswordArray(passwordArray.filter(item=>item.id!==id))

  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const copyText = (text) => {
    toast.success('Copied to clipboard !', {
      position: "top-right",
      autoClose: 1000,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  }



  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Slide"
      />
      
      <nav class=" border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-7">
          <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="text-2xl text-center font-semibold whitespace-nowrap dark:text-white"><span className="text-green-700">&lt;</span><span className="text-green-600"> Pass</span> Manager <span className="text-green-700">/&gt;</span></span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" class="block py-.5 text-xs md:text-sm md:py-2  px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" class="block py-.5 text-xs md:text-sm md:py-2  px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
              </li>
              <li>
                <a href="#" class="block py-.5 text-xs md:text-sm md:py-2  px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
              </li>
              <li>
                <a href="#" class="block py-.5 text-xs md:text-sm md:py-2  px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
              </li>
              <li>
                <a href="#" class="block py-.5 text-xs md:text-sm md:py-2  px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container min-h-[88.2vh] bg-green-100">
        <div className="flex flex-col items-center justify-center my-0">

          <span class="text-3xl text-center my-6 font-semibold whitespace-nowrap dark:text-black"><span className="text-green-700">&lt;</span><span className="text-green-600">Pass</span> Manager <span className="text-green-700">/&gt;</span></span>
          <span className="text-center -mt-5 text-xs my-2 mr-3">Your Own Password Manager</span>
        </div>
        <div className="flex flex-col my-5 mx-auto items-center justify-center">
          <input value={form.site} name="site" onChange={handleChange} type="text" placeholder="Enter website url" className="right-2 border-[1px] border-green-700 rounded-xl mx-auto w-[83%] md:w-[69%] px-2 py-1" />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 my-4 justify-between md:space-x-4 w-5/6 md:w-2/3 mx-auto">
            <input value={form.username} name="username" onChange={handleChange} type="text" placeholder="Enter username" className=" border-[1px] border-green-700 rounded-xl  w-full px-2 py-1" />
            <input value={form.password} ref={passwordRef} onChange={handleChange} name="password" type="password" placeholder="Enter password" className=" border-[1px] border-green-700 rounded-xl px-2 py-1  w-full" />
            <span className="relative cursor-pointer md:left-[-2.5rem] -top-10 left-[17.5rem] right-0 md:top-2.5" onClick={showPassword}>
              <img className="w-4 md:w-8" ref={ref} src="/eye.png" alt="" />
            </span>
          </div>
        </div>
        <div className="flex-col flex items-center">

          <button onClick={savePasswod} className="bg-green-500 flex font-semibold border-black border-[1px] justify-center items-center text-sm hover:bg-green-400 px-5 py-1.5 rounded-3xl">
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            >
            </lord-icon> &nbsp; Save</button>


        </div>

        <div className="passwords w-[100$] md:w-3/4 mx-auto flex flex-col justify-start ">
          <h1 className="text-2xl my-4 mx-auto md:mx-0 font-bold">Your Passwords</h1>
          {passwordArray.length === 0 && <div> No Passwords to Show</div>}
          {passwordArray.length != 0 && <table class="table-fixed overflow-hidden rounded-lg bg-green-200 w-full">
            <thead className="">
              <tr className="bg-green-900  table-fixed text-white">
                <th className="py-.5 text-xs w-1/2  md:text-sm md:py-2 ">Site Url</th>
                <th className="py-.5 text-xs w-1/4 md:text-sm md:py-2 ">Username</th>
                <th className="py-.5 text-xs w-20 md:text-sm md:py-2 ">Password</th>
                <th className="py-.5 text-xs w-12 md:text-sm md:py-2 ">Actions</th>
              </tr>
            </thead>
            <tbody>
              {passwordArray.map((item, index) => {
                return <tr className="" key={index}>
                  <td className="text-center w-32 py-.5 text-xs md:text-sm md:py-2  border"><a target="_blank" href={item.site}>{item.site}</a><span onClick={() => { copyText(item.site) }} className="cursor-pointer w-1 left-1 md:left-5 relative top-1.5"><lord-icon
                    style={{ "width": "16px", "height": "25px" }}
                    src="https://cdn.lordicon.com/depeqmsz.json"
                    trigger="hover" >
                  </lord-icon>
                  </span></td>
                  <td className="text-center w-40 py-.5 text-xs md:text-sm md:py-2  border">{item.username}<span onClick={() => { copyText(item.username) }} className="cursor-pointer w-1 left-1 md:left-5 relative top-1.5"><lord-icon
                    style={{ "width": "16px", "height": "25px" }}
                    src="https://cdn.lordicon.com/depeqmsz.json"
                    trigger="hover" >
                  </lord-icon>
                  </span></td>
                  <td className="text-center w-40 py-.5 text-xs md:text-sm md:py-2  border">{item.password}<span onClick={() => { copyText(item.password) }} className="cursor-pointer w-1 left-1 md:left-5 relative top-1.5"><lord-icon
                    style={{ "width": "16px", "height": "25px" }}
                    src="https://cdn.lordicon.com/depeqmsz.json"
                    trigger="hover" >
                  </lord-icon>
                  </span></td>
                  <td className="text-center space-x-2 md:space-x-3 w-40 py-.5 text-xs md:text-sm md:py-2  border"><AiFillEdit onClick={()=>{editPassword(item.id)}} className="text-centre inline cursor-pointer" /><span onClick={()=>{deletePassword(item.id)}} className="text-center cursor-pointer relative top-0.5"><lord-icon
                    src="https://cdn.lordicon.com/skkahier.json"
                    trigger="hover"
                    style={{"width":"15px", "height":"15px"}}>
                  </lord-icon></span></td>
                </tr>
              })}
            </tbody>
          </table>}
        </div>
      </div>


      <footer class="bg-zinc-50 text-center w-full dark:bg-neutral-700 lg:text-left">
        <div class="bg-black/5 p-4 text-center text-surface dark:text-white">
          © 2023 Copyright:
          <a href="https://tw-elements.com/"> <span>&lt;</span><span className="text-green-600">Pass</span> Manager <span className="text-green-700">/&gt;</span></a>
        </div>
      </footer>

    </>

  );
}
