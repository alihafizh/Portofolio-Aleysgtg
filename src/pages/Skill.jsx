import React from "react";
import Header from "../Components/Header";
import ModalMenu from "../Components/modalMenu";
import SkillCard from "./skillCard";

export default function Skill() {
    return(
        <div className="w-screen min-h-screen flex flex-col p-[30px] bg-[#212121]
         overflow-hidden">

 
            <Header tail={'Skill'} />

            <div className=" flex flex-col gap-4 mt-12">


        <SkillCard ttile={'HTML, CSS, JavaScript'} 
        Content={'Membuat sebuah applikasi dengan HTML native'}
        image={' https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=400'}
        link='/skill'
        />

        <SkillCard ttile={'HTML, CSS, JavaScript'} 
        Content={'Membuat sebuah applikasi dengan HTML native'}
        image={' https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=400'}
        link='/skill'
        />

        <SkillCard ttile={'HTML, CSS, JavaScript'} 
        Content={'Membuat sebuah applikasi dengan HTML native'}
        image={' https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=400'}
        link='/skill'
        />

        <SkillCard ttile={'HTML, CSS, JavaScript'} 
        Content={'Membuat sebuah applikasi dengan HTML native'}
        image={' https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=400'}
        link='/skill'
        />

        <SkillCard ttile={'HTML, CSS, JavaScript'} 
        Content={'Membuat sebuah applikasi dengan HTML native'}
        image={' https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=400'}
        link='/skill'
        />
        </div>

            <ModalMenu />
        </div>
    )
}