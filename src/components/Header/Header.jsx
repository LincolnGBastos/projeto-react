import React from "react";
import { Topheader } from "./styles";
import HeaderIcon from '../../assets/header-icon.svg'



function Header() {

  
    return (
      <>
        <Topheader>
          
          <img src={HeaderIcon} alt='Icon Header' />
          <p> Senior Frontend Test - </p>

        </Topheader>

      </>
    );
}

export default Header;