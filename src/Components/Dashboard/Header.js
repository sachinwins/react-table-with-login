import React from 'react';

function Header() {
  let user = localStorage.getItem("userName");
  return (
  <h1> Hello {user}</h1>
  );
}

export default Header;
