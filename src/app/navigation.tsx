import React from 'react';
import {Navbar, Button} from 'react-bootstrap';

const Navigation = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">BlockVerify</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/varify-documents">Verify Document</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/varify-documents">Submit Document</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/profile-details">User Profile</a>
              </li>
            </ul>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <Button href="/login" className="mt-3 mb-3 text-white" variant='primary'>
                    Login
                </Button>
              </Navbar.Text>
            </Navbar.Collapse>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;