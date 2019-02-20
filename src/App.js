import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class ImageForm extends Component {
    
    render() {
        return(

        )
    }
}


//child class bc I am putting it in my render in App
class PicturesList extends Component {
    // constructor(props) {
    //     super(props);



    render() {
        return (
            <ul>
                <li>

                    <img className="pictureItems" />

                </li>
            </ul>)

    }
}



//parent class
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
            render(){
                return (
                    <div className="mainApp">
                        <h1 className="heading"> Thanks For Visiting Christina's React Picture Board</h1>
                            <PicturesList/>
                    </div>
            )
        }
    }



















export default App;








// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

