import React, { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/dataContext";
import Data from "../api/Data";

const DataDetail = () => {
    const { id } = useParams();
    const { selectedData, setselectedData } = useContext(DataContext);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Data.get(`/${id}`);
                setselectedData(response.data.data)
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            {selectedData &&(
                <>
                    <h1 className="font-weight-light display-1 text-center">
                        Data Detail
                    </h1>
                    <div>
                        Item ID = {id}
                        
                    </div>
                    <div>
                        Data Detail = {selectedData.data.data}
                    </div>
                </>
            )}
        </div>
    )
}

export default DataDetail