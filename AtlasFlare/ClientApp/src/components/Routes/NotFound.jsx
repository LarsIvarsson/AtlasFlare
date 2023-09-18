import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";

function NotFound() {
    return (
        <div>
            <div className="youtube-box">           
                <div className="youtube">
                <em>Page not found....</em>
                    <YoutubeEmbed embedId="dQw4w9WgXcQ" />              
                </div>
            </div>
        </div>
    );
}

export default NotFound;