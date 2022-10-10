import { createContext, useContext, useState,useEffect } from "react";

const AppContext = createContext();

const Context = ({children}) => {
    const [data,setData] = useState([]);
    const [query,setQuery] = useState('Tesla')
    
    const URL = `https://newsapi.org/v2/everything?q=${query}&apiKey=0d080d13836b4daa8ff82f78f2be173d`;
    
    const newsAPI = async() => {
        try{
            const req = await fetch(URL)
            const resp = await req.json();
            setData(resp);
            console.log(resp);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        newsAPI();
    },[query])

    return (
        <>
            <AppContext.Provider value={{data,query,setQuery}}>
                {children}
            </AppContext.Provider>
        </>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export default Context;
export {useGlobalContext};