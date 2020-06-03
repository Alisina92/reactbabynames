import React from 'react';

const Header =(props)=>{
  return (
      <header className="input">
        <input type='text'  placeholder='Search' value={props.searchTerm} onChange={props.changeHandler}  />
      </header>
    );
}

export default Header;