import { useEffect, useState} from "react";
import { Route,Routes } from "react-router-dom";
import './App.css';
import Rubrique from "./Rubrique";
import SousRubrique from "./SousRubrique";
import Produit from "./Produit";
import DetailsProduit from "./DetailsProduit";
import axios from "axios";
function App() {
  return (
    <>
   
     <h1>Liste Des Rubrique</h1>
     <Routes>
     <Route path="rubrique" element={<Rubrique />} />
     <Route path="Sousrubrique/:id" element={<SousRubrique/>} />
     <Route path="produit" element={<Produit/>} />
     <Route path="detailsproduit" element={<DetailsProduit/>} />
     </Routes>
     
    </>
  );
}

export default App;
