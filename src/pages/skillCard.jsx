import React from "react";
import { Link } from "react-router-dom";

export default function SkillCard({ttile, image, Content, link}) {
    
    return(
        <div className="bg-white flex flex-col gap-2 w-full p-[20px] rounded-lg">
            <h1 className="text-[16px] font-bold"> {ttile} </h1>
                <img src={image} alt={ttile} className=" w-full h-[200px] object-cover rounded-lg" />
                <p className=" font-light"> {Content} </p>
              <Link to={link} className=" h-10 bg-orange-400 rounded-full w-[180px] flex justify-center
              items-center mx-auto">
                    lihat Portofolio
              </Link>
    </div>
)
}
 