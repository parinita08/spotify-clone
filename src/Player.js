import React from 'react';
import "./Player.css";
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

function Player({ spotify }) {
    return (
        <div className="player">
            {/* Sidebar and a body in one div */}
            <div className="player__body">
                <Sidebar />
                <Body />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Player;
