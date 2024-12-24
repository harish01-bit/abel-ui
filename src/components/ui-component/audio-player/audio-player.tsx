import React, { useRef } from "react";
type props = {
    base64Audio: string
}
const AudioPlayerComponent = ({ base64Audio }: props) => {
    // Reference to the audio element
    const audioRef: any = useRef(null);

    // Handle play button click
    const handlePlayAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    // Convert Base64 string to a Blob URL
    const audioSrc = `data:audio/mp3;base64,${base64Audio}`;

    return (
        <div>
            {/* Audio Icon (e.g., Font Awesome) */}
            <button onClick={handlePlayAudio} className="btn btn-light btn-md btn-pill new-chat-btn">
                Play
            </button>

            {/* Hidden audio element */}
            <audio ref={audioRef} src={audioSrc} />
        </div>
    );
};

export default AudioPlayerComponent;
