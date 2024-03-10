import React from "react";
import Header from "../Components/Header";
import ProfileCard from "./ProfileCard";
import {FiPhone, FiMail,FiLinkedin, FiMap, FiWifi, FiChevronRight } from "react-icons/fi"
import dataBio from "../constant/dataBio";
import ModalMenu from "../Components/modalMenu";


const handIcon = ( deck ) =>{

    switch(deck){
        case"phone" :
        return <FiPhone />

        case"email" :
        return <FiMail />
        
        case"linkedIn" :
        return <FiLinkedin />
    
        case"map" :
        return <FiMap />
    
        case"web" :
        return <FiWifi />

        default :
        return <FiChevronRight />
    }
}

export default function Profile() {

    return(
        <div className="w-screen min-h-screen flex flex-col p-[30px] bg-[#212121]
         text-orange-400 overflow-hidden">

            <Header tail={'Profile'} />

            <div className="mt-[50px] flex flex-col justify-center items-center relative">
            <img src="gambar/aley.jpg"  alt="narsis"  className=" rounded-full w-[200px] h-[200px]
             object-cover" />

             <div className="w-[220px] h-[220px] border-[4px] border-orange-400
              rounded-full border-dashed absolute "></div>
            </div>
            
            <div>

            <div className=" flex flex-col gap-10 mt-6 mb-[100px]">
        {dataBio.map((item)=>{
            return(
                <ProfileCard
                    label={item.label} 
                    value={item.value} 
                    icons={item.icons && handIcon(item.icons)} 
                    link={item.link} 
                    key={item.id}
                />
            )
          })}
            </div>
            <ModalMenu />
        </div>
        </div>
    )
}