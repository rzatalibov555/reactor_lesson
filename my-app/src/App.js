import {Component} from 'react'
import './App.css'
import './header.css'


class WhoAmI extends Component{

  constructor(props){
    super(props)
    this.state = {
      count: 0,
      text: "super",
      position: "Soz daxil edin",
      bg: "",
      color:""
      
    }
  }

  kolbasa = () => {
    // console.log(this)
    this.setState(state => ({
      count: state.count + 1
    }))


    this.setState({
      text:"hello"
    })

    // this.setState(state => ({
    //   text:"Trello"
    // }))
  }


  changeText = (e , reng) =>{
    console.log(reng)
    this.setState({
      position: e.target.value,
      color: e.target.value
    })

    
  }


  // nextYear = () => {
  
  //   this.setState(state => ({
  //     years: state.years + 1,
  //     text: "Ela",
  //     status: true
  //   }))
  //   console.log(this.state)
  // }

  render(){

    // console.log(this.props)
    const {name, surname, link} = this.props;
    const {count, text, position, color} = this.state;

  

    return(
      
      <div className='card' style={{background: color}}>
        <button onClick={this.kolbasa}>{text}</button>
        <button>change red</button>
        <button>change green</button>
        <button>change blue</button>
        <h1>My name is {name}, surname is {surname}. <br />  Klik: {count}.  </h1>
        <a href={link}>Profile</a>
        <input type="text" onChange={(e) => this.changeText(e, color)} />
        <p>Text: {position}</p>
      </div>
    )
  }

}

function App() {

    
      return(
        
        <div className="app">
          <WhoAmI name="Rza" surname="Talibov" link="www.arrow.az" />
          <WhoAmI name="Vaqif" surname="Huseynov" link="www.vaqif.az" />
        </div>
        
      )

}






export default App;
