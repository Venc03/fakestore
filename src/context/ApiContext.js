import { createContext, useState } from "react";
import { useEffect } from "react";
import { myAxios } from "./myAxios";

export const ApiContext = createContext("");
export const ApiProvider = ({children}) => {
        const [termekLista, setTermekLista]=useState([])


        const getAdat = async (vegpont) => {
            try {
                const response = await myAxios.get(vegpont);
                setTermekLista(response.data)
              } catch (err) {
                console.error("HIBA: adatkuldes", err);
              } finally {
                
              }
        };

        useEffect(()=>{
            getAdat("/products")
        },[])

    return (
        <ApiContext.Provider value = {{termekLista}}>
            {children}
        </ApiContext.Provider>
    )
}
