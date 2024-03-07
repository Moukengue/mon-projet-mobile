import { useEffect, useState } from "react";
import axios from "axios";
import {useParams } from 'react-router-dom';




function SousRubrique() {

    const [Liste,setListe] = useState([])

    const{id} = useParams();

    useEffect(()=>{
        console.log("sousrubrique.id=" +id)

        axios(" https://127.0.0.1:8000/api/sous_rubriques?sousrubrique.id=" + id,{
  headers: {
    Accept: "application/json"
   }
  }
  )
  .then((reponse)=>{
    setListe(reponse.data)
  })
    },[])
return (  
   <>
    SousRubrique
    {Liste.map((srub,index)=> (
      <div key={index} onClick={()=>{handleClick (srub)}}>
        {srub.nom}
      </div>


   ) )}
   </>

);


}

export default SousRubrique;