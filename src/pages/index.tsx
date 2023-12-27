import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import Navigation from '../app/navigation';
import Login from './login'

const Home = () => {
    return (
        <>  
            {/* <Navigation /> */}
            <div className="container">
                <Login />
            </div>
        </>
    );
}

export default Home;
