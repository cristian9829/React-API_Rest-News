import React from 'react';

const Header = (props) =>{
  return(
    <nav>
      <div className="nav-wrapper light-blue darken-3">
        <h3 className="brand-logo center">{props.titulo}</h3>
      </div>
    </nav>
  )
}

export default Header;