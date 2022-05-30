// import Header from "./Header";
import React, { Component }  from 'react';
import Left from "../Left/Left";
import Right from "../Right/Right";
const Home =() =>{

  return(
     <div className="container">
          
          <section>
            <div className="row">
             <Left/>
              <Right/>
            </div>
          </section>
    </div>
  )
}
export default Home;