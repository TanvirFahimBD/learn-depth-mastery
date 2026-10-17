import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            if (currentuser) {
                setUser(currentuser);
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);


    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;