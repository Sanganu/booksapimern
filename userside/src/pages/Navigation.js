import React from "react";
import { Navbar, NavItem, Button } from "react-materialize";
import {Link} from "react-router-dom";

function Navigation() {
  return (<div>
    <Navbar>
    <div>
      <Button><Link to ="/saved">Saved Videos</Link></Button>
      <Button><Link to="/">Search Videos</Link></Button>
      </div>
      <a className="brand-logo right" href="/">Coders Spot</a>
    </Navbar>

  </div>)
}

export default Navigation;