import React from "react";

export default function ProfileCard({label, value, icons, link}) {
    
    const handLelink = () =>{
        window.open(link)
    }
    return(

        <div className=" w-full flex flex-col gap-1 relative">
            <h1 className=" text-[16px] font-light">{label} </h1>
            <p className=" text-[16px] font-bold max-w-[60%]">{value} </p>

            <div className=" absolute right-2 top-4" onClick={handLelink} >
                {icons}
            </div>
        </div>
    )
}