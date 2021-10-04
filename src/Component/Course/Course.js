import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Course.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faEye,faDollarSign,faStar,faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Course = () => {
    const [card, setCard] = useState([])
    useEffect(() => {
        fetch('./DB.json')
            .then(res => res.json())
            .then(data => setCard(data));
    }, [])
    const eye = <FontAwesomeIcon className="text-xl " icon={faEye} />
    const dollar = <FontAwesomeIcon className="text-xl " icon={faDollarSign} />
    const star = <FontAwesomeIcon className="text-xl " icon={faStar} />
    return (
        
        <div  className="bg-img">
            <h1 className="mx-10 text-5xl font-semibold mt-10 text-green-900">Find Your Courses With Comfortable</h1>
            <p className="mx-10 font-semibold  text-green-900">We are Waiting for your Greeting</p>
            <div className="grid grid-cols-3 gap-4  mx-10 my-3 pb-3   " >

                {
                    card.map(cards => <div className="card px-3 pb-3 rounded-md">
                        <div className="card-img">
                            <img className="w-6/12 image pt-2" src={cards.images} alt="" />
                        </div>
                        <div className="card-body">
                            <p>{cards.catagories}</p>
                            <h1 className="text-2xl text-yellow-700 hover:text-blue-800 font-semibold">{cards.title}</h1>
                            <div className="flex justify-between">
                                <h2 className="text-yellow-500 text-xs mt-2">{star} {star} {star} {star} {cards.rating}</h2>
                                <h2 className="text-green-700"> {eye} {cards.review}</h2>
                                <h2> {dollar} {cards.price}</h2>
                            </div>

                            <Link to="course"><button className="btn p-2  px-5 bg-red-400 mx-auto block rounded-lg hover:bg-red-500 text-white">                    <FontAwesomeIcon className="text-xl " icon={faShoppingCart} /> 
                             Add to cart</button></Link>
                        </div>
                    </div>)
                }
                
            </div>
            <Link to="/course" > <button className="btn p-2   px-5 bg-red-400  mx-auto block rounded-lg hover:bg-red-500 text-white">Back To Home <FontAwesomeIcon className="text-xl pt-1 " icon={faArrowRight} />
            </button></Link>
       </div>
        
    );
};

export default Course;