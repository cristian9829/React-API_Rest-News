import React, {Component} from 'react';
import Noticia from './Noticia';

export default class Noticias extends Component{
  render(){
    return(
      <div className="row">
        Noticia padre
        <Noticia/>
      </div>
    )
  }
}