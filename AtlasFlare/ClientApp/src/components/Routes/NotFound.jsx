import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";

function NotFound() {
    return (
        <div>
            <div className="youtube">
                <h1>Page not found....</h1>
                <YoutubeEmbed embedId="IZKAF-IsJ24" />              
            </div>
        </div>
    );
}

export default NotFound;