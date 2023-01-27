import { createContext } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
/*     const [user, setUser] = useState({});

    const login = (user) => {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
    };

    const logout = () => {
        setUser({});
        localStorage.removeItem("user");
    }; */

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );

}