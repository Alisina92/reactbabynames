import React from'react';

const BabyNamesData =(props)=>{
      let sortedArr = props.babyData.sort(function(a,b){
               if(a.name.toLowerCase()< b.name.toLowerCase())return-1;
               if(a.name.toLowerCase()>b.name.toLowerCase())return 1;
                return 0;
     })
     
     
     return (
       <div className="row col-12" style={{ color: "white" }}>
        
         
          
         {sortedArr.map((element, index) => {
           return (
             <div
               key={index}
               className="container"
               style={
                 element.sex === "m"
                   ? { backgroundColor: "blue" }
                   : { backgroundColor: "red" }
               }
             > 
            
               {element.name}
             </div>
           );
         })}

         
       </div>
     );
}

export default BabyNamesData;