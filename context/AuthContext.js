import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setuserToken] = useState(null);
    const [fname, setFname] = useState(null);
    const [lname, setLname] = useState(null);
    const [isSmoker, setIsSmoker] = useState(false);
    const [isDrinker, setIsDrinker] = useState(false);
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [dob, setDob] = useState(null);
    const [email, setEmail] = useState(null);

    const login = (receivedToken) => {
        setIsLoading(true);
        setuserToken(receivedToken)
        AsyncStorage.setItem('userToken', receivedToken);
    }

    const logout = () => {

        setIsLoading(true);
        setuserToken(null);
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    }

    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('userToken');
            setuserToken(userToken);
            setIsLoading(false);
        } catch (e) {
            console.log(`isLogged in error ${e}`);
        }
    }

    useEffect(() => {
        isLoggedIn();
    }, [userToken]);

    return (
        // with this provider we can pass any value to any screen
        <AuthContext.Provider value={{ isLoading, userToken, login, logout, fname, lname, isDrinker, isSmoker, height, weight, email }}>

            {children}

        </AuthContext.Provider>
    )
}
