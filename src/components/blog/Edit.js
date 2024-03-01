import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";
import checkAuth from "../auth/checkAuth";

function Edit() {
    const {postId} = useParams();
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [expiry_date, setExp] = useState('');
    
    var user = useSelector(store=>store.auth.user);
    let navigate = useNavigate();
    
    useEffect(()=>{

        axios.get('https://medicalstore.mashupstack.com/api/medicine/'+postId,
        {
            headers: {
                'Authorization': 'Bearer ' + user.token 
     } })
        .then(response=>{
            setName(response.data.name);
            setCompany(response.data.company);
            setExp(response.data.expiry_date);
        }
        )
    },[postId,user.token]);
    function update(){
        axios.post('https://medicalstore.mashupstack.com/api/medicine/'+postId,{
            name: name,
            company: company,
            expiry_date: expiry_date
        },{
            headers: {
                'Authorization': 'Bearer ' + user.token 
            }
    }).then(response=>{
            alert(response.data.message)
        })
        navigate('/blog/posts');
    }
    return <div>
        <Navbar/>
        <div className="edit">
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2">
                    <h1 className="text-center">Edit Medicine</h1>
                    <div className="form-group">
                        <label>Name:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={name} 
                        onChange={(event)=>{setName(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Company:</label>
                        <textarea 
                        className="form-control" 
                        value={company} 
                        onChange={(event)=>{setCompany(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Expiry Date:</label>
                        <textarea 
                        className="form-control" 
                        value={expiry_date} 
                        onChange={(event)=>{setExp(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary float-right" onClick={update}>Submit</button>
                    </div>                    
                </div>
            </div>
            </div>
        </div>
    </div>
}

export default checkAuth(Edit);