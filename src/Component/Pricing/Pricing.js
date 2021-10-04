import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



const Pricing = () => {
    const element = <FontAwesomeIcon icon={faCheckCircle} />

    return (
        <div className="mt-20">
            {/* pricing text */}
            <div><h1 className="font-bold text-5xl text-center my-2">PRICING</h1>
                <p className="text-center text-green-500">Sign up in less 30 seconds.Try out our 7day risk free trial upgrade at anytime .</p>
                <p className="text-center text-green-500"> no qustion , no hassle.</p>
                <h1 className="text-center my-10  "><span className="border-2 py-2 "><span className="px-5 py-2  ">MONTHLY</span> <span className=" text-white px-5 bg-green-600 py-2 ">ANNUALLY</span></span></h1></div>
            




            {/* pricing card */}

            <div className="flex justify-evenly">
                <div className="flex justify-items-center">
                    <div className="card-cont border-2 mx-10 px-3 p-5 rounded-xl">
                        <div><h1 className="text-2xl font-bold text-center">Free</h1></div>
                        <div><h1 className="text-2xl text-center my-4 ">$ <span className="text-6xl font-extrabold ">49</span> <span>/mo</span></h1></div>
                        <div>
                            <h1 className="font-semibold text-xl text-green-700 mb-2">{element} 100% Satisfation Gurranted.</h1>
                            <h1 className="font-semibold text-xl text-green-700 mb-2">{element} somethid Satisfation Gurranted.</h1>
                            <h1 className="font-semibold text-xl text-green-700 mb-2">{element} Errorles Satisfation Gurranted.</h1>
                            <h1 className="font-semibold text-xl text-green-700 mb-2">{element} impulse  Satisfation Gurranted.</h1>
                            <h1 className="font-semibold text-xl text-green-700 mb-2">{element} So Satisfation Gurranted.</h1>


                            <Link to="#"><button className="hover:bg-green-500 block mx-auto p-3 bg-green-800 text-white rounded-xl " >Sign up Now</button></Link>
                        </div>
                    </div>
                </div>


                <div className="flex justify-items-center">
                    <div className="card-cont border-2 mx-10 px-3 p-5 rounded-xl">
                        <div><h1 className="text-2xl font-bold text-center">Basic</h1></div>
                        <div><h1 className="text-2xl text-center my-4 ">$ <span className="text-6xl font-extrabold ">105</span> <span>/mo</span></h1></div>
                        <div>
                            <h1 className="font-semibold text-xl text-green-700 mb-2">{element} 100% Satisfation Gurranted.</h1>
                            <h1 className="font-semibold text-xl text-green-700 mb-2">{element} somethid Satisfation Gurranted.</h1>
                            <h1 className="font-semibold text-xl text-green-700 mb-2">{element} Errorles Satisfation Gurranted.</h1>
                            <h1 className="font-semibold text-xl text-green-700 mb-2">{element} impulse  Satisfation Gurranted.</h1>
                            <h1 className="font-semibold text-xl text-green-700 mb-2">{element} So Satisfation Gurranted.</h1>


                            <Link to="#"><button className="hover:bg-green-500 block mx-auto p-3 bg-green-800 text-white rounded-xl " >Sign up Now</button></Link>
                        </div>
                    </div>
                </div>


                <div className="flex justify-items-center">
                    <div className="card-cont border-2 mx-10 px-3 p-5 rounded-xl">
                        <div><h1 className="text-2xl font-bold text-center">Premium</h1></div>
                        <div><h1 className="text-2xl text-center my-4 ">$ <span className="text-6xl font-extrabold ">149</span> <span>/mo</span></h1></div>
                        <div>
                            <h1 className="font-semibold text-xl text-green-700 mb-2">{element} 100% Satisfation Gurranted.</h1>
                            <h1 className="font-semibold text-xl text-green-700 mb-2">{element} somethid Satisfation Gurranted.</h1>
                            <h1 className="font-semibold text-xl text-green-700 mb-2">{element} Errorles Satisfation Gurranted.</h1>
                            <h1 className="font-semibold text-xl text-green-700 mb-2">{element} impulse  Satisfation Gurranted.</h1>
                            <h1 className="font-semibold text-xl text-green-700 mb-2">{element} So Satisfation Gurranted.</h1>


                            <Link ><button className="hover:bg-green-500 block mx-auto p-3 bg-green-800 text-white rounded-xl " >Sign up Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;