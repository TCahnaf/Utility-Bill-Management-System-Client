import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const Slider = () => {

     const variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

    const [currentIndex, setCurrentIndex] = useState(0);

    const imageArray = [
        '/images/palm_dubai.jpg',
        '/images/palm_dubai_1.jpg',
        '/images/palm_dubai_2.jpg',
        '/images/pam_dubai_3.jpg',
        '/images/palm_dubai_4.jpg']


    return (
        <div className="w-full max-w-xl mx-auto relative">
      <div className="overflow-hidden rounded-xl">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={imageArray[currentIndex]}
            className="w-full h-[300px] object-cover"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {imageArray.map((image, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index ===  currentIndex? "bg-blue-600 w-4 h-4" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
    );
};

export default Slider;