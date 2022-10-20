import React, { useState, useContext } from "react";
import Data from "../api/Data";
import { DataContext } from "../context/dataContext";

const AddData = () => {
    const {addData} =useContext(DataContext);
    const [data, setdata] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Data.post("/", {
                data,
            });
            addData(response.data.data.data);
            console.log(response);
        } catch (err){
            console.log(err);
        }
    };
    return (
        <div className="mb-4">
            <form action="">
                <div className="form-row">
                    <div className="col">
                        <input 
                        value={data} 
                        onChange={(e) => setdata(e.target.value)} 
                        type="text" 
                        class="form-control form-control-lg" 
                        classname="form-control" placeholder="data" />
                    </div>
                    <button 
                    onClick={handleSubmit} 
                    type="submit" 
                    className="btn btn-primary">Add</button>
                </div>

            </form>
        </div>
    )
}

export default AddData