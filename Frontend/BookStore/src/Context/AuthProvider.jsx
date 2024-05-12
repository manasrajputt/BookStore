import react, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const initialUser = localStorage.getItem("User");
    const [authUser, setAuthUser] = useState(initialUser ? JSON.parse(initialUser) : undefined);

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}