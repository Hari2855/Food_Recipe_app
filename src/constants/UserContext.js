import { createContext, useState } from "react"

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [userData, setUserData] = useState(null);

    const setUser = (data) => {
        setUserData(data);
    };

    return(
        <UserContext.Provider value={{userData, setUser}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContext;