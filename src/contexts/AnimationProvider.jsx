import React, {useState, useEffect, useContext, createContext} from 'react'

export const AnimationContext = createContext(null)

const AnimationProvider = ({children}) => {
    const [color, setColor] = useState(sessionStorage.getItem('color') || '#ffffff');

    const randomHexVal = () => {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return `#${randomColor.padStart(6, '0')}`;
    };

    const changeColor = () => {
        let randomColor = randomHexVal();
        sessionStorage.setItem('color', randomColor);
        setColor(randomColor);
    };

    const applySpinAnimation = () => {
        // Get the image element from Home.jsx
        const imageElement = document.querySelector('.spin-image');
        if (imageElement) {
          // Add animation class to the image
          imageElement.classList.add('spin-animation');
          
          // Optionally remove the animation class after it completes if needed
          setTimeout(() => {
            imageElement.classList.remove('spin-animation');
          }, 5000); // Match the animation duration (10 seconds)
        }
      };

    useEffect(() => {
        const interval = setInterval(() => {
          changeColor();
        }, 1000);
        return () => clearInterval(interval);
      }, [color]);
    const values ={
     color, 
     applySpinAnimation,
    }
  return (
    <AnimationContext.Provider value={values}>{children}</AnimationContext.Provider>
  )
}

export const useAnimation = () => {
    const context = useContext(AnimationContext);
    if (!context) {
      throw new Error('useAnimation must be used within an Animation Provider');
    }
    return context;
} 

export default AnimationProvider