import React from "react";
import {DiBlackberry} from "react-icons/di"
import{Link} from "react-router-dom"

export default function Home() {

    return (
        <div className="w-screen h-screen flex flex-col p-[30px] bg-[#212121] text-orange-400">
        <h1 className="text-[40px] font-light">Helloo...</h1>

        <div className="my-8 relative flex flex-col items-center">
           
            <div className="w-[420px] h-[400px] rounded-full bg-cover bg-center">
            <img src="gambar/aley.jpg"  alt="narsis"  className="w-full h-full object-cover"
        style={{
          clipPath: "circle(50% at center)"}}
          />
            </div>

            <div className="border-orange-400 border-[6px] rounded-full w-[420px] h-[420px]
            absolute -top-[10px]"></div>

        </div>
        <div>
        <h1 className="text-[36px] font-light"> My name Aley</h1>
        <p className=" text--[16px] font-light">seorang web developer</p>
        
     <Link to={'/Profile'} className=" w-[80px] h-[80px] bg-orange-400 text-gray-800 rounded-full fixed -bottom-3 -right-3 
     flex justify-center items-center ">
        <DiBlackberry className="text-[42px]"/>
     </Link>

        </div>
        </div>
    )
}