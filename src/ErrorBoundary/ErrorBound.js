import React, { Component } from 'react';
import atul from  '../atul.JPG'
 import Image2 from "../Image2.jpg"
import Image from "../ErrorBoundary/Image"
import Error from "../ErrorBoundary/Error"
class ErrorBound extends Component {
    render() {
        return (
            <div>
                <Error>
                <Image term={atul} /> <br/>
                </Error>
                <Error>
                <Image term={Image2} /> <br/>
                </Error>
                <Error>
                <Image term= "NoImage"/>
                </Error>
            </div>
        );
    }
}

export default ErrorBound;