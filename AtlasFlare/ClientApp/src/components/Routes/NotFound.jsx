import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";

function NotFound() {
    return (
        <div>
            <div className="youtube-box">           
                <div className="youtube">
                <em>Page not found....</em>
                <YoutubeEmbed embedId="IZKAF-IsJ24" />              
                </div>
            </div>
        </div>
    );
}

export default NotFound;