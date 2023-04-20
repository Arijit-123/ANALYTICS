import React from 'react';
 import ReactDOM from 'react-dom/client';
import Graph from './Graph';
import Linegraph from './Linegraph';

import Data from './Data.json';


  

const ApplayoutComponent=()=>{
    const dataone=Data.map((item)=>{
        return (item.Ash);
       })
       console.log('datanew',dataone);

       const datatwo=Data.map((item)=>{
        return ('Fla'+ item.Flavanoids.toString());
       })
       
       console.log('datanewtwo',datatwo);
       
       let z=Data[0].Magnesium;
       let y=Number.MAX_VALUE;
       let x=Number.MAX_VALUE;
       var array=[];
       
       var Alcoholdetail=['Alcohol 1','Alcohol 2','Alcohol 3']
     for(let a=0;a<Data.length-1;a++){
        if(Data[a].Alcohol==1){
          if(Data[a].Magnesium<z)
          {
            z=Data[a].Magnesium;
            array[0]=z;
          }
        }
          if(Data[a].Alcohol==2)
          {
          if(Data[a].Magnesium<y){
            y=Data[a].Magnesium;
            array[1]=y;
          }
        }
        if(Data[a].Alcohol==3)
          {
          if(Data[a].Magnesium<x){
            x=Data[a].Magnesium;
            array[2]=x;
          }
        }
       
     }
     console.log('this is array',array);
    return (
        <div className='new-display'>
        <div className='bar-graph'>
           <Graph array={array} Alcoholdetail={Alcoholdetail}/>
           </div>
           <div className='line-graph'>
           <Linegraph dataone={dataone} datatwo={datatwo}/>
           
           </div>
         
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<ApplayoutComponent/>) 
