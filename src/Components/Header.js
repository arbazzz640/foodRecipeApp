import { Button } from "@material-ui/core";
import React from "react";

const Header = (props) => {
    const {seacrh , onInputChange , onSearchClick} = props
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-1">
          <span className="material-icons brand-icon"> fastfood </span>
          Food Recipe
        </h1>
        <div className="input-group w-50 mx-auto">
          <input
            type="text"
            placeholder="Seacrh Your Recipe..."
            value={seacrh}
            onChange={onInputChange}
          />
          <br />
          <Button className='btn1 mt-3 mx-auto' variant="contained" color="primary" 
          onClick={onSearchClick}>
            Search Recipe
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
