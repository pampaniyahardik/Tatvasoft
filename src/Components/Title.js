import React from 'react'
import Home from "../Pages/Home"


// const Title = props => {

//    return <h1> hello {props.name}</h1>
// } 




function Title(props){

     const {title, description} = props
      
   return( 
      <>
         {/* task-3 */}
      <h1>{props.name} {title} <br/>{description}</h1>     
  </>
   )
}

export default Title;