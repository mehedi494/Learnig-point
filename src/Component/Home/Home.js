import React, { useEffect, useState } from 'react';
import "./Home.css";
import img from '../Images/xheader-img.png.pagespeed.ic.ungsFL0Q2L.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';


import Tutorial from '../Tutorial/Tutorial';
import Catagories from './Catagories/Catagories';
import { Link } from 'react-router-dom';
import Pricing from '../Pricing/Pricing';
import About from '../About/About';

const Home = () => {
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('./item.json')
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])

    return (
        <div>
            <div className="bg" >
                <div className=" flex ">
                    <div className="mx-10 mt-20 text-white w-6/12">
                        <h1 className="text-6xl font-semibold">Take the first step </h1>
                        <h1 className="text-6xl font-semibold">to learn with us</h1>
                        <p>In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope known as the Hubble</p>
                        <Link to="/"><button className="mt-10 block mx-auto bg-pink-700 p-4 rounded-lg hover:bg-pink-900">Get Started <FontAwesomeIcon
                            icon={faArrowAltCircleRight} /></button></Link>
                    </div>
                    <div className="mr-10 w-6/12">
                        <img src={img} alt="" />
                    </div>
                </div>

                {/*  sub- catagories */}

                <div className="flex mx-10 pb-5 mt-10 " >
                    <div className="w-1/12 ml-20  border-r-2">
                        <h2 className="font-bold text-blue-400 course">New Classes</h2>
                        <p>In the history of modern astronomy, there is probably no one greater leap forward.</p>
                        <Link className="block text-pink-900" to="/about"><button><FontAwesomeIcon className="text-2xl mt-2 block text-center"
                            icon={faArrowAltCircleRight} /></button></Link>
                    </div>
                    <div className="w-1/12 ml-10 mt-10 border-r-2">
                        <h2 className="font-bold course text-blue-400">Top Courses</h2>
                        <p>In the history of modern astronomy, there is probably no one greater leap forward.</p>
                        <Link className="block text-pink-900" to="/about"><button><FontAwesomeIcon className="text-2xl mt-2 block text-center"
                            icon={faArrowAltCircleRight} /></button></Link>
                    </div>
                    <div className="w-1/12 ml-10 mt-20 border-r-2">
                        <h2 className="font-bold course text-blue-400">Full E-Books</h2>
                        <p>In the history of modern astronomy, there is probably no one greater leap forward.</p>
                        <Link className="block text-pink-900" to="/about"><button><FontAwesomeIcon className="text-2xl mt-2 block text-center"
                            icon={faArrowAltCircleRight} /></button></Link>
                    </div>
                </div>
            </div>


            {/* Course Catagories section */}
            <div >
                <div className="mx-10 ">
                    <h1 className="font-bold text-3xl text-red-900">Popular Courses
                        Available Right Now</h1>
                    <p className="font-thin  text-red-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                {/* Card section */}
                <div className="card-container  grid grid-cols-3 gap-4  mx-10 my-3 pb-3   ">
                    {
                        item.map(card => <Catagories key={card.id} card={card}></Catagories>)
                    }
                </div>
            </div>
            <Tutorial></Tutorial>
            <About></About>
            <Pricing></Pricing>

        </div>
    );
};

export default Home;