import * as React from 'react';
// @ts-ignore
import { AudioRecorder } from 'react-audio-voice-recorder';

export default function App() {
  const addAudioElement = async (blob: Blob) => {
    const audioFile = new File([blob], "voice.mp3", {
      type: "audio/mpeg"
    })

    const fd = new FormData();
    fd.append('file', audioFile);

    await fetch('http://localhost:3000/api/saveAudio', {
      body: fd,
      method: "POST",
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
      <AudioRecorder
        onRecordingComplete={addAudioElement}
        onNotAllowedOrFound={(err: any) => console.table(err)}
        mediaRecorderOptions={{
          audioBitsPerSecond: 128000,
        }}
      />
      <br />
    </div>
  );
}
