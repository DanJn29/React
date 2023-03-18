import React from 'react';
import Card from './Components/Cards';
import TimeCard from './Components/TimeCard';

const Overview = () => {
    return <div style={{height:"100%", width: "100%", paddingTop: 42, paddingLeft: 42}}>
        <div style={{display: "flex", flexDirection: "row", height: 30}}>
            <h1 style={{height: "100%",}}>Overview</h1>
            <input style={{height: "100%", marginLeft: 20, borderRadius: 10,}} type={"text"}></input>
            <input style={{height: "100%", marginLeft: 20, borderRadius: 10,}} type={"text"}></input>
            <button style={{color: "#0062FF", marginLeft: 20, background: "#FFF", height: "100%", width: 100, border:'1px solid #0062FF', borderRadius: 10,}}>Calculate</button>
        </div>    
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop: 40}}>
            <Card data = {{name: "Average of workload index", number: "97"}}/>
            <Card data = {{name: "Average of usage index", number: "75"}}/>
            <TimeCard data = {{from:"10PM", to:"1AM"}}/>
        </div>  


    </div>
};

export default Overview;
