'use client'

import { useState } from 'react'
import { backendUrl } from '@/config'
import './ImageCarousal.scss'

const ImageCarousal = ({ layout }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const images = layout.images

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    return (
        <div className="carousal-container">
            <div
                className="carousal-slide"
                style={{
                    backgroundImage: `url(${backendUrl}/${images[currentIndex].image.url})`,
                    width: '100%',
                    height: '80vh',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    transition: 'background-image 0.5s ease-in-out',
                }}
            >
                <div className="carousal-content" style={{ color: 'white', textAlign: 'center' }}>
                    <h3 className="carousal-heading">{images[currentIndex].heading}</h3>

                    <div className="carousal-description-wrapper">
                        <p>{images[currentIndex].description}</p>
                    </div>
                    <div className="carousal-dots-container">
                        {images.map((item, index) => (
                            <div
                                className={`carousal-dot ${index == currentIndex ? 'highlight' : ''}`}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <button
                    className="prev-btn"
                    onClick={prevSlide}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '20px',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        cursor: 'pointer',
                    }}
                >
                    &#8249;
                </button>
                <button
                    className="next-btn"
                    onClick={nextSlide}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        right: '20px',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        cursor: 'pointer',
                    }}
                >
                    &#8250;
                </button>
            </div>
        </div>
    )
}

export default ImageCarousal
