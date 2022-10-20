import React, { useEffect } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import Data from "../api/Data";
import { DataContext } from "../context/dataContext";

const List = (props) => {
    const {data,setdata} = useContext(DataContext);
    let history = useHistory()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Data.get("/");
                setdata(response.data.data.data);
                console.log(response);
            } catch (err) { }
        }
        fetchData();
    }, [])
    const handleUpdate = async (e,id) =>{
        e.stopPropagation();
        history.push(`/data/${id}/update`);
    }
    const handleDelete = async (e,id) =>{
        e.stopPropagation();
        try{
            const response = await Data.delete(`/${id}`);
            setdata(data.filter(dat =>{
                return dat.id !== id
            }))
        }catch(err){
            console.log(err);
        }
    }
    const handledataSelect = (id) =>{
        history.push(`/data/${id}`);
    }
    return (
        <div className="list-group">
            <table className="table table-hober table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Id</th>
                        <th scope="col">Data</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((dat)=>{
                        return(
                            <tr onClick={()=> handledataSelect(dat.id)} key={dat.id}>
                                <td>{dat.id}</td>
                                <td>{dat.data}</td>
                                <td><button onClick={(e)=> handleUpdate(e,dat.id)} className="btn btn-primary">Update</button></td>
                                <td><button onClick={(e)=> handleDelete(e,dat.id)} className="btn btn-primary">Delete</button></td>
                            </tr>
                        )
                    })}
                    {/* <tr>
                        <td>1</td>
                        <td>This is data</td>
                        <td><button className="btn btn-primary">Update</button></td>
                        <td><button className="btn btn-primary">Delete</button></td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default List