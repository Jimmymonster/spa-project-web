import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { DataContext } from "../context/dataContext";
import Data from "../api/Data";

const UpdateData = () => {
    const { id } = useParams(); 
    let history = useHistory();
    // const {dat} = useContext(DataContext);
    const [data,setdata] = useState("");

    useEffect(()=>{
        const fetchData = async() =>{
            const response = await Data.get(`/${id}`);
            console.log(response.data.data);
            setdata(response.data.data.data.data);
        };
        fetchData();
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const updateData = await Data.put(`/${id}`,{
            data,
        });
        history.push("/");
    };
    return (
        <div>
            <form action="">
                <div className="form-group">
                    <input value={data} onChange={(e)=> setdata(e.target.value)} id="data" class="form-control form-control-lg" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateData