import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import notFound from "./../images/notFound.jpg"




class ErrorPage extends Component{
    render(){
        return(
            <div>
                <img style={{  height: 400, display: 'block', margin: 'auto', position: 'relative' }}
                 src={notFound} alt="notFoundPage" />
            </div>
        )
    }
}

export default ErrorPage;