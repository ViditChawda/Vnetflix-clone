import React, {useState, useEffect} from 'react'
import netflix from './images/netflix.jpeg'
import './navbar.css'
function Navbar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        // return () => {
        //     window.removeEventListener("scroll")
        // };
    }, []);
    
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img
        className="nav-logo"
        src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png"
        alt='netflix-logo'
        />
    </div>
  )
}
//svg-icon svg-icon-netflix-logo
export default Navbar