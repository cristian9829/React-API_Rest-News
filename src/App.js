import React, {Component} from 'react';
import Header from './componentes/Header';

class App extends Component {

  state = {
    noticias: []
  }

  componentDidMount() {
    this.consultarNoticias();
    
  }

  consultarNoticias = () =>{
    let url = 'https://newsapi.org/v2/top-headlines?country=co&category=general&apiKey=2913c18359114c5cb4bbadb70b3a600b'
    
    fetch(url)
    .then(data =>{
      return data.json()
    })
    .then(data => {
      console.log(data.articles)
      this.setState({
        noticias: data.articles
      })
    })
  }
  

  render(){
    return (
      <div className="App">
        <Header
          titulo="Noticias"
        />
      </div>
    );
  }
}

export default App;
