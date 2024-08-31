import React from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./ReviewSection.css"; 

const reviews = [
    {
        id: 1,
        name: "Obi Wan",
        profilePic: 'https://i.postimg.cc/28zQnqGb/d2172acc2957df5854bce88199d0dea7.jpg',
        review: "This portfolio is amazing! The design is clean and the projects are top-notch."
    },
    {
        id: 2,
        name: "Jane Smith",
        profilePic: "profile2.jpg",
        review: "A very professional presentation of work. Impressive!"
    },
    {
        id: 3,
        name: "Alice Johnson",
        profilePic: "profile3.jpg",
        review: "The attention to detail in the design is superb."
    },
    
    // Add more reviews as needed
];

const ReviewSection = () => {
    const scrollRef = React.useRef(null);

    const scroll = (scrollOffset) => {
        scrollRef.current.scrollBy({
            left: scrollOffset,
            behavior: "smooth"
        });
    };

    return (
        
        <div className="review-section">
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl"
            >
                Reviews
            </motion.h2>
            
            <div className="review-content">
                <FaChevronLeft className="scroll-arrow" onClick={() => scroll(-300)} />
                <div className="review-container" ref={scrollRef}>
                    {reviews.map((review) => (
                        <motion.div 
                            key={review.id} 
                            className="review-card"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img src={review.profilePic} alt={`${review.name} profile`} className="profile-pic" />
                            <p className="review-text">"{review.review}"</p>
                            <h4 className="reviewer-name">- {review.name}</h4>
                        </motion.div>
                    ))}
                </div>
                <FaChevronRight className="scroll-arrow" onClick={() => scroll(300)} />
            </div>
        </div>
    );
};

export default ReviewSection;
