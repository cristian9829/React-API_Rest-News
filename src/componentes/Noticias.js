import React, {Component} from 'react';
import Noticia from './Noticia';

export default class Noticias extends Component{
  
  render(){
    console.log("Ahi esta")
    console.log(this.props.noticias)
    return(
      <div className="row">
        {this.props.noticias.map(noticia => (
          <Noticia
            key = {noticia.url}
            noticia = {noticia}
          /> 
        ))}
      </div>
    )
  }
}