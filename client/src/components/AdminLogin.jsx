import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';

const AdminLogin =()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const history=useHistory();
    
    const getAccess=()=>{
        if(email==="admin@gmail.com" && password==="admin"){
            window.alert("Login Successful");
            history.push("/aAbBcC");
        }
        else if(email==="admin.edu@gmail.com" && password==="education"){
           window.alert("Login Successful");
            history.push("/education"); 
        }
        else if(email==="admin.health@gmail.com" && password==="health"){
            window.alert("Login Successful");
             history.push("/health"); 
         }
         else if(email==="admin.service@gmail.com" && password==="service"){
            window.alert("Login Successful");
             history.push("/service"); 
         }
        else{
            window.alert("You don't have this access");
        }
    }
    return(
        <>
          <div
        style={{
            background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/college.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}
        >

        <div
        style={{
            width: "420px",
            height: "500px",
            background: "white",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0px 8px 25px rgba(0,0,0,0.3)"
        }}
        >
        <h1 className="text-center my-1">Admin Login</h1>
        <hr />

        <form method="GET">
        <div className="form-group text-center jumbotron mx-5"
        style={{width:"300px" 
        }}>
        
        <div >
                <label htmlFor="email">
                Email ID:
                </label>
                <input type="email" name="email" id="email" autoComplete="off" 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="Your email ID here" className='mx-2'
                 style={{
                    width:"250px",
                    padding:"6px",
                    borderRadius:"6px",
                    border:"1px solid #ccc"
                }}></input>
              </div>
              
              <br />
              <div className="form-group">
                <label htmlFor="password">
                Password: 
                </label>
                <input type="password" name="password" id="password" autoComplete="off" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Enter your password" className='mx-1'
                 style={{
                    width:"250px",
                    padding:"6px",
                    borderRadius:"6px",
                    border:"1px solid #ccc"
                }}></input>
              </div>
<br />
             <div className="form-group form-button">
                <input type="submit" name="signin" id="signin" className="form-submit btn btn-outline-primary"
                onClick={getAccess} value="Log In"
                  style={{
                    width:"120px",
                    fontWeight:"bold"
                }}/>
              </div>
              </div>
        </form>
        </div>
        </div>
        </>
    )
} 

export default AdminLogin;