import React,{createContext} from 'react'

// 1. Create context (warehouse)
const AppContext = createContext()

// 2. Provider (delivery person)
const AppProvider = ({ children })=>{

  return(
    <AppContext.Provider value="Jiya Agrawal">
      {children}
    </AppContext.Provider>
  );
};

// 3. Export both properly
export {AppContext,AppProvider }
