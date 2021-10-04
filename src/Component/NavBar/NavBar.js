import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faGraduationCap } from '@fortawesome/free-solid-svg-icons';



const NavBar = () => {
    return (
        <div className="bg-gradient-to-r from-blue-200 via-blue-400 to-blue-500 py-5 w-full" >
            <div className="container flex mx-10 justify-between align-bottom">
                <div>
                    <Link to="/"><h1 className="font-extrabold text-6xl text-yellow-800"><FontAwesomeIcon icon={faGraduationCap} />Learning_Point</h1></Link>
                </div>
                <div className="my-2.5 mr-10 text-2xl text-white" >
                    <NavLink className="ms-10  navbtn " to="/home" activeStyle={{
                        fontWeight: "bold",
                        color:"black",
                        padding: "10px",
                        borderBottom:" 3px  solid rgb(141, 9, 9) "
                    }}> Home </NavLink>
                    <NavLink className=" ml-5  navbtn " to="/course" activeStyle={{
                        fontWeight: "bold",
                        color: "black",
                        padding: "10px",
                        borderBottom: " 3px  solid rgb(141, 9, 9) "
                    }}>Courses</NavLink>
                    <NavLink className=" ml-5 navbtn " to="/pricing" activeStyle={{
                        fontWeight: "bold",
                        color: "black",
                        padding: "10px",
                        borderBottom: " 3px  solid rgb(141, 9, 9) "
                    }}>Pricing</NavLink>
                    <NavLink className=" ml-5  navbtn " to="/about" activeStyle={{
                        fontWeight: "bold",
                        color: "black",
                        padding: "10px",
                        borderBottom: " 3px  solid rgb(141, 9, 9) "
                    }}>About us</NavLink>
                    <FontAwesomeIcon className="text-3xl " icon={faShoppingCart} />
                </div>
            </div>

        </div>
    );
};

export default NavBar;