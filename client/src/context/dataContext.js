import React, {useState, createContext} from "react";
export const DataContext = createContext();
export const DataContextProvider = props =>{
    
    const [data,setdata] = useState([]);

    const [selectedData,setselectedData] = useState(null);

    const addData=(dat)=>{
        setdata([...data,dat]);
    }
    return (
        <DataContext.Provider value={{
            data,
            setdata,
            addData,
            selectedData,
            setselectedData
            }}>
            {props.children}
        </DataContext.Provider>
    )
}