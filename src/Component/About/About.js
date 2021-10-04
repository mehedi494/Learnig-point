import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRibbon, faCrown, faKey,faHeadphones,faFile,faSuitcase } from '@fortawesome/free-solid-svg-icons'
import"./About.css";
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="mx-10 my-5">
            <div className="mx-10"><h1 className="font-bold text-pink-700 text-4xl">Features That
                Can Avail By Everyone</h1>
                <p><small>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</small></p></div>
                
            {/* card section */}

            <div className="flex justify-between mx-10">
                <div className="hover:text-blue-800 card-hover">
                    <FontAwesomeIcon className="text-3xl" icon={faRibbon} />
                    <h1 className="text-xl font-semibold">Student Membership</h1>
                    <p><small>Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore. Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.</small></p>
                </div>
                <div className="hover:text-blue-800 card-hover">
                    <FontAwesomeIcon className="text-3xl" icon={faCrown} />
                    <h1 className="text-xl font-semibold">Source File Included</h1>
                    <p><small>Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore. Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.</small></p>
                </div>
                <div className="hover:text-blue-800 card-hover">
                    <FontAwesomeIcon className="text-3xl " icon={faKey} />
                    <h1 className="text-xl font-semibold">Lifetime Access</h1>
                    <p><small>Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore. Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.</small></p>
                </div>
                
            </div>
            <div className="flex justify-between mx-10">
                <div className="hover:text-blue-800 card-hover">
                    <FontAwesomeIcon className="text-3xl" icon={faHeadphones} />
                    <h1 className="text-xl font-semibold">Live Support</h1>
                    <p><small>Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore. Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.</small></p>
                </div>
                <div className="hover:text-blue-800 card-hover">
                    <FontAwesomeIcon className="text-3xl" icon={faFile} />
                    <h1 className="text-xl font-semibold">Expert Mentors</h1>
                    <p><small>Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore. Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.</small></p>
                </div>
                <div className="hover:text-blue-800 card-hover">
                    <FontAwesomeIcon className="text-3xl " icon={faSuitcase} />
                    <h1 className="text-xl font-semibold">35000+ Courses</h1>
                    <p><small>Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore. Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.</small></p>
                </div>
                
            </div>
            <Link to="/"><button className="block mx-auto px-5 py-3 rounded-sm text-white bg-green-700 hover:bg-green-500">Go to Home</button></Link>
        </div>
    );
};

export default About;