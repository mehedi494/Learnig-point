import React from 'react';
import"./Footer.css"

const Footer = () => {
    return (
        <div className="footer-container mt-20 p-20 text-white">
            <div className="flex justify-evenly mt-24">
                <div>
                    <h1 className="text-xl font-bold">Top Products</h1>
                    <p>Managed Website</p>
                    <p>Manage Reputation</p>
                    <p>Power Tools</p>
                    <p>Marketing Service</p>
                </div>
                <div>
                    <h1 className="text-xl font-bold">Quick Links</h1>
                    <p>Managed Website</p>
                    <p>Manage Reputation</p>
                    <p>Power Tools</p>
                    <p>Marketing Service</p>
                </div>
                <div>
                    <h1 className="text-xl font-bold">Features</h1>
                    <p>Managed Website</p>
                    <p>Manage Reputation</p>
                    <p>Power Tools</p>
                    <p>Marketing Service</p>
                </div>
                <div>
                    <h1 className="text-xl font-bold">Newsletter</h1>
                    <p>You can trust us. we only send promo offers,</p>
                    <input  className="p-2 text-black" type="text" placeholder="Your Email address" />
                    <button className="p-2 border-2" > Subscribe</button>
                </div>
            </div>
            <h1 className="text-center text-bold mt-10"> 2021 All copy right resereved Nasa</h1>
        </div>
    );
};

export default Footer;