// import React, { createContext, useState, useEffect } from 'react';

// export const DarkModeContext = createContext();

// export const DarkModeProvider = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const className = 'dark-mode';
//     if (isDarkMode) {
//       document.body.classList.add(className);
//     } else {
//       document.body.classList.remove(className);
//     }
//   }, [isDarkMode]);

//   return (
//     <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };