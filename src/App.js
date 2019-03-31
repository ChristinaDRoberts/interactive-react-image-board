import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


class ImageForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            caption: '',
            url: '',
            name: ''

        };

        this.handleChange = this.handleChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
      console.log(e.target);

      if (e.target.name === 'url') {
          this.setState({url: e.target.value})


      } else if (e.target.name === 'caption') {
          this.setState({caption: e.target.value})

      } else {
          this.setState({name: e.target.value})
      }
  }


  handleSubmit(e) {
    e.preventDefault();
    let picture = {caption: this.state.caption, url: this.state.url, name: this.state.name};

    this.props.handleSubmit(picture);

    this.setState({caption: '', url: '', name: ''});
  }

  render() {
    return (
        <div className="formBox">
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">
                  User Name:
                  <input type="text" name="name" id="name" className="text" placeholder="Enter Your Name Here" value={this.state.name} onChange={this.handleChange}/>
                </label>

                  <label htmlFor="caption">
                  Description:
                  <input type="text" name="caption" id="caption" className="text" placeholder="Enter A Caption Here" value={this.state.caption} onChange={this.handleChange}/>
                </label>

                  <label htmlFor="url">
                  Image URL:
                  <input type="text" name="url" id="url" className="text" placeholder="Enter a Valid URL Here" value={this.state.url} onChange={this.handleChange}/>
                </label>
                  <br/>

                  <input type='submit' className="addPic" value='ADD PHOTO'/>
              </form>
        </div>
    )
  }



}


/*//child class bc I am putting it in my render in App*/
class PicturesList extends Component {
    render(props) {
        console.log('props', this.props);


        let pictures = this.props.pictures.map(function(picture, index) {
            return (
                <div key={index} className="picDiv">
                        <img src={picture.url}/>
                        <p>{picture.caption}</p>
                        <p>By: {picture.name}</p>
                    </div>
            )

        });




        return (
            <ul>
                {pictures}
            </ul>

        )
  }

}



//parent class
class ImageBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: [{caption: "My Escape", url: "https://i.pinimg.com/564x/b6/ae/51/b6ae511d854df7efd6786a1e7d16fa0e.jpg?b=t", name: "Kelly Bright"},
                {caption: " Echo ", url: "https://images.pexels.com/photos/291732/pexels-photo-291732.jpeg?cs=srgb&dl=adventure-cold-daylight-291732.jpg&fm=jpg", name: "Sarah Waters"},
                {caption: "Welcoming The Bees For Lunch", url: "https://images.pexels.com/photos/87840/daisy-pollen-flower-nature-87840.jpeg?cs=srgb&dl=bloom-blossom-close-up-87840.jpg&fm=jpg", name: "Theresa Modesto"}]
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }



    handleSubmit(picture){
        let pictures = this.state.pictures.slice();
        pictures.unshift(picture);
        this.setState({pictures})

    }


            render(){
        console.log('this props', this.props);
                return (
                    <div className="mainApp">
                        <h1 className="heading"> Thank You For Visiting Christina's React Picture Board</h1>
                        <h3 className="feelFree"> Feel Free To Add Your Own Pictures By Completing The Form Below</h3>
                             <ImageForm  className="forms" handleSubmit={this.handleSubmit}/>
                            <PicturesList className="pictureList" pictures={this.state.pictures}/>

                    </div>
            )
        }
}


export default ImageBoard;









