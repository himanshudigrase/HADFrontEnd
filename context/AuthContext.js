import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const LOGOUT_TIME = 30 * 60 * 1000;
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setuserToken] = useState('');
    const [doctorAssigned, setdoctorAssigned] = useState(false);

console.log('Auth context',doctorAssigned);

    const login = (receivedToken) => {
        setIsLoading(true);
        setuserToken(receivedToken)  
    }

    const logout = async() => {

        setIsLoading(true);
        setuserToken(null);
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('patientId');
        await AsyncStorage.removeItem('doctorId');
        setIsLoading(false);
        //setdoctorAssigned(false);
    }

    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('token');
            setuserToken(userToken);
            setIsLoading(false);
        } catch (e) {
            console.log(`isLogged in error ${e}`);
        }
    }

    const assignDoctor= async(id) =>{
        try{   
            console.log('Assign doctor getting called');
            await AsyncStorage.setItem('doctorId', id.toString());
            setdoctorAssigned(true);
        }catch(e){
            console.log(`Error in assigning doctor ${e}`);
        }
    }

    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        // with this provider we can pass any value to any screen
        <AuthContext.Provider value={{ isLoading, userToken, login, logout, assignDoctor,doctorAssigned }}>

            {children}

        </AuthContext.Provider>
    )
}
