import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


class ImageForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            caption: '',
            url: ''

        }

        this.handleChange = this.handleChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
        console.log(e.target)

        if(e.target.name === 'url') {
            this.setState({url: e.target.value})


        }else if(e.target.name === 'caption') {
            this.setState({caption : e.target.value})

      }

  }

  handleSubmit(e) {
    e.preventDefault();
    let picture = {caption: this.state.caption, url: this.state.url};

    this.props.handleSubmit(picture);

    this.setState({caption: '', url: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/*<label htmlFor="name">*/}
          {/*User Name:*/}
          {/*<input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange}/>*/}
        {/*</label>*/}

          <label htmlFor="caption">
          Description:
          <input type="text" name="caption" id="caption" value={this.state.caption} onChange={this.handleChange}/>
        </label>

          <label htmlFor="url">
          Image URL:
          <input type="text" name="url" id="url" value={this.state.url} onChange={this.handleChange}/>
        </label>

          <input type='submit' value='click me'/>
      </form>
    )
  }



}


/*//child class bc I am putting it in my render in App*/
class PicturesList extends Component {
    render(props) {
        console.log('props', this.props);


        let pictures = this.props.pictures.map(function(picture, index) {
            return (
                <div key={index}>
                        <img src={picture.url}/>
                        <p>{picture.caption}</p>
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
            pictures: [{caption: "Ocean Waves", url: "https://image.shutterstock.com/image-photo/pacific-ocean-260nw-611361698.jpg"},
                {caption: "mountains", url: "https://images.pexels.com/photos/291732/pexels-photo-291732.jpeg?cs=srgb&dl=adventure-cold-daylight-291732.jpg&fm=jpg"},
                {caption: "flower", url: "https://images.pexels.com/photos/87840/daisy-pollen-flower-nature-87840.jpeg?cs=srgb&dl=bloom-blossom-close-up-87840.jpg&fm=jpg"}]
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }



    handleSubmit(picture){
        let pictures = this.state.pictures.slice();
        pictures.unshift(picture);
        this.setState({pictures})

    }


            render(){
        console.log('this props', this.props)
                return (
                    <div className="mainApp">
                        <h1 className="heading"> Thanks For Visiting Christina's React Picture Board</h1>
                             <ImageForm  handleSubmit={this.handleSubmit}/>
                            <PicturesList pictures={this.state.pictures}/>
                            ]
                    </div>
            )
        }
}


export default ImageBoard;









