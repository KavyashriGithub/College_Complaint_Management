import React from 'react';
import { useEffect, useState } from 'react';

import college from '../images/college.jpg'
const Home=()=>{
    const [userName,setUserName] =useState();
    const [show,setShow]=useState(false);

    const userHome=async()=>{
       try{
         const res = await fetch("/getdata",{
            method: "GET",
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials:"include"
         });
         const data=await res.json();
         setUserName(data.name);
         setShow(true);
         if(!res.status===200){
             const error=new Error(res.err);
             throw error;
         }
       }catch(err){
           console.log(err);
       }
    }
    useEffect(()=>{
       userHome();
    },[])
   
    if(userName){
        return(
            <div className='home'
              style={{
    backgroundImage: `url(${college})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100%",
    position:"relative"
  }}>
            <div className="row"
              style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    textAlign: "end",
    
  }}
            >
            <div className="col-md-5">
           {/* <img src={college} alt="not found" style={{ width: "500px", marginBottom: "20px" }} /> */}
            </div>
            <p className='maintext'
            style={{
             marginTop:'650px',
             color:'black',
             display:'flex',
             flexDirection:"row",
             justifyContent:"flex-start"
            }}>Hello {userName}! Welcome !!
                Welcome to the College Complaint Management System

This platform is designed to provide students with a secure and transparent way to raise their concerns or report any issues they may face within the college environment.

You can feel free to submit any type of complaint related to academics, infrastructure, facilities, or other concerns. All complaints submitted through this system are handled confidentially and will be reviewed by the appropriate authorities.

Our goal is to ensure that every complaint is addressed fairly, securely, and as quickly as possible. Your feedback helps us improve the quality of services and maintain a better learning environment for everyone.

Thank you for using this system. We value your voice and are committed to resolving your concerns. </p>
            </div> 
            </div>
        );
    }
   return(
       <>
       <br />
       <div className='home'>
       <div className="row">
       <div className="col-md-5">
       {/* <img src={convo} alt="not found"/> */}
<img src={college} alt="not found" style={{ width: "500px", marginBottom: "20px" }} />
       </div>
       <p className='maintext' >Please login to file a grievance</p>
       </div>
       </div>
       </>
   )
};


export default Home;
