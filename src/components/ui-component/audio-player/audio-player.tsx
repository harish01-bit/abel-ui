import React from "react";

type Props = {
  base64Audio: string;
};

const AudioPlayerComponent = ({ base64Audio }: Props) => {
  // Convert Base64 string to a data URL
  const audioSrc = `data:audio/wav;base64,${base64Audio}`;

  // Handle download button click
  const handleDownloadAudio = () => {
    const link = document.createElement("a");
    link.href = audioSrc;
    link.download = "audio.wav"; // Set the file name
    document.body.appendChild(link); // Required for Firefox
    link.click();
    document.body.removeChild(link); // Cleanup
  };

  return (
    <div>
      {/* Audio player with built-in controls */}
      <audio controls src={audioSrc} />

     
    </div>
  );
};

export default AudioPlayerComponent;
