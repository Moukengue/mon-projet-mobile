import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";





function Rubrique() {

const [Liste,setListe] = useState([])

const navigate = useNavigate();
useEffect(()=>{
  axios(" https://127.0.0.1:8000/api/rubriques",{
  headers: {
    Accept: "application/json"
   }
  }
  )
  .then((reponse)=>{
    setListe(reponse.data)
  })
},[])

  const handleClick =(rub) =>{

    console.log(rub)

    navigate("/sousrubrique/"+rub.id, { replace: true });
  }
  
return (  
   <>
   <div>
   Rubriques
   {Liste.map((rub,index)=> (
      <div key={index} onClick={()=>{handleClick (rub)}}>
        {rub.nom}
      </div>


   ) )}
   </div>
  
   </>

);


}

export default Rubrique;