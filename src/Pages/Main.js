import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
export default function Main(){

    const[data,setData]= useState([])

    const getData = ()=>{
        fetch('Film.JSON',{headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        }}).then((response)=>{
            return response.json()
        }).then((myJson)=>{
            setData(myJson);
        })
    }

    useEffect(()=>{
       getData();
    },[])
    return(
        <>
        <div className="container">
            <div className="text-lights mt-5 ">All Leatest Movies HOLLYWOOD </div>
            <div class="card-container">
          
            {
                data && data.length > 0 && data.map((val)=>{
                    return(
                        <>
                        <div class="card">
                        <Link to={`/Download/${val.title}`}><img src={val.Poster} alt="card1" class="card-img" /></Link>
                        <div className="title">
                          <Link to={`/Download/${val.title}`}><p class="card-info">Download {val.title} ({val.Year}) Dual Audio [Hindi + English] WeB-DL 480p [300MB] | 720p [800MB] | 1080p [1.7GB]</p></Link>
                        </div>
                        </div>
                        </>
                    );
                })
            }
           
         

            </div>
        </div>
        </>
    );
}