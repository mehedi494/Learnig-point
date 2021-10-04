import React from 'react';
import { Link } from 'react-router-dom';
import "./Catagories.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faStar } from '@fortawesome/free-solid-svg-icons';

const Catagories = (props) => {
    const { catagories,title,review,rating,images} = props.card
    return (
        <div >
            <div className="card pb-5 px-3 rounded-lg">
                <div className="card-img">
                    <img className="w-6/12 image pt-2" src={images} alt="" />
                </div>
                <div className="card-body">
                    <p>{catagories}</p>
                    <h1 className="text-2xl text-yellow-700 hover:text-blue-800 font-semibold">{title}</h1>
                    <div className="flex justify-between">
                        <h2 className="text-yellow-600"><FontAwesomeIcon  icon={faStar} />Rating {rating}</h2>
                        <h2 className="text-yellow-600"> <FontAwesomeIcon icon={faEye}/> Review {review}</h2>
                    </div>

                    <Link to="course"><button className="btn p-2  px-5 bg-red-400 mx-auto block rounded-lg hover:bg-red-500 text-white"><FontAwesomeIcon className=" " icon={faEye} />
  View More </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Catagories;