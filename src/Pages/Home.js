import React, {Component} from 'react'
import Title from '../Components/Title'


class Home extends Component  {

    constructor(props){
        super(props)
        this.state = {
            title : 'bookstore',
            description:'This is a bookstore application '
        }

    }

    render(){
        return (
         <><h1>this is Home Page</h1>
         <Title  title={this.state.title} description={this.state.description} />
         <Title name='book e sell' />
         <Title name='online book store' />
         </>
         
         
        )
                
    }
}

export default Home;