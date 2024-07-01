import React, { useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";

const VideoPlayer = ({ videoUrl }) => {
    return (
        <div>
            <iframe
                width="560"
                height="315"
                src={videoUrl}
                title="Embedded video player"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};

const App = () => {
    const [videoUrl, setVideoUrl] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Xử lý logic khi người dùng submit link video
        // Ví dụ đơn giản: chỉ hiển thị video ngay khi submit
    };

    const handleChange = (event) => {
        setVideoUrl(event.target.value);
    };

    return (
        <section className="popular-tours-two">
            <Container>
                <div>
                    <h1>Video Player Example</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={videoUrl}
                            onChange={handleChange}
                            placeholder="Paste video URL here..."
                        />
                        <button type="submit">Play Video</button>
                    </form>
                    {videoUrl && <VideoPlayer videoUrl={videoUrl} />}
                </div>
            </Container>
        </section>
    );
};

export default App;
