import React from 'react'

const CreateAuthStateContext = React.createContext(undefined);
const CreateAuthDispatchContext = React.createContext(undefined);

function AuthProvider({ children }){
    const [isAuthenticated, setIsAuthenticated] = React.useState(false)

    const  handleAuthChange = (isAuthenticated) =>{
        setIsAuthenticated(isAuthenticated);
    };

    return(
        <CreateAuthStateContext.Provider value={isAuthenticated}>
            <CreateAuthDispatchContext.Provider value={{ handleAuthChange }}>
                {children}
            </CreateAuthDispatchContext.Provider>
        </CreateAuthStateContext.Provider>
    )

}

const useCreateAuthStateContext = () =>{
    const context = React.useContext(CreateAuthStateContext);

    if(context=== undefined){
        throw Error ("useCreateAuthContext must be inside AuthProvider")
    }
    return context;

}

const useCreateAuthDispatchContext = () =>{
    const context = React.useContext(CreateAuthDispatchContext)
    if(context===undefined){
        throw Error("useCreateAuthDispatchContex must be inside AuthProvider")
        // return context;
    }
}
export{AuthProvider}
export{useCreateAuthDispatchContext}
export{useCreateAuthStateContext}