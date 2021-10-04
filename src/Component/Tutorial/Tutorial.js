import React from 'react';
import './Tutorial.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons';

const Tutorial = () => {
    return (
        <div className="containerx w-full flex items-center  p-4">
            <div className="w-6/12 mx-10 ">
                <h1 className="text-5xl font-bold text-white">Watch Our Trainers
                    in Live Action</h1>
                <p className=" text-white">In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope known as the Hubble.</p>
            </div>
            <div className="item w-6/12  pb-20">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Y8Tko2YC5hA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="mt-10"><h1 className="text-3xl font-bold text-white">Learn Phython for Legendery persons</h1>
                    <p className=" text-white">history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope known as the Hubble.</p></div>
                <Link to="about"><button className="btn p-2  px-5 mt-5 bg-red-400 mx-auto block rounded-lg hover:bg-red-500 text-white">Learn More <FontAwesomeIcon
                    icon={faArrowAltCircleRight} />
                    </button></Link>
            </div>
            
        </div>
    );
};

export default Tutorial;