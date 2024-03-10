import React, {useState} from "react";
import { FiMenu } from "react-icons/fi"
import {Link} from "react-router-dom"

export default function ModalMenu() {
    
const [show, setShow] = useState(false)

const handleShowModal = () => {
    setShow(!show)
}


    return (
        <>
{show && (
    <div className=" w-screen h-screen flex flex-col justify-center items-center bg-[#212121]
    fixed top-0 left-0 z-[200] ">

        <Link to={'/'} className=" w-full h-16 flex justify-center items-center
         text-orange-400 font-bold" onClick={handleShowModal} >
        Home
        </Link>
        
        <Link to={'/Profile'} className=" w-full h-16 flex justify-center items-center
         text-orange-400 font-bold" onClick={handleShowModal} >
        Profile
        </Link>


        <Link to={'/Skill'} className=" w-full h-16 flex justify-center items-center
         text-orange-400 font-bold" onClick={handleShowModal} >
        Skill
        </Link>

        <a href={'tel:+6281213127612'} target="_blank" className=" w-full h-16 flex justify-center items-center
         text-orange-400 font-bold" onClick={handleShowModal} >
        Contact
        </a>

        <a href={'https://linkedIn.com/alihafizh'} target="_blank" className=" w-full h-16 flex justify-center items-center
         text-orange-400 font-bold" onClick={handleShowModal} >
        Linkedin
        </a>

        <a href={'https://github.com/alihafizh'} target="_blank" className=" w-full h-16 flex justify-center items-center
         text-orange-400 font-bold" onClick={handleShowModal} >
        Github
        </a>


    </div>
)}
        

        
        
        <button  className=" 
        w-[80px] h-[80px] 
        bg-orange-400 text-gray-800
        rounded-full fixed 
        -bottom-3 -right-3 
        flex justify-center 
        items-center 
        z-[250]" onClick={handleShowModal} >
            <FiMenu />
        </button>
        
        </>
    )
}