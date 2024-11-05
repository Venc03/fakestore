import { createContext, useState } from "react";

export const KosarContext = createContext("");
export const KosarProvider = ({children}) => {
        const [kosarLista, setKosarLista]=useState([])

        function athelyez(obj){
            const KUjLista = [...kosarLista]
            KUjLista.push(obj)
            setKosarLista(KUjLista)
        }

    return (
        <KosarContext.Provider value = {{kosarLista, athelyez}}>
            {children}
        </KosarContext.Provider>
    )
}
