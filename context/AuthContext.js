import React,{createContext, useEffect, useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    const [isLoading,setIsLoading] = useState(false);
    const [userToken, setuserToken] = useState(null);

    const login = () =>{
        setIsLoading(true);
        setuserToken('tokeenn');
        AsyncStorage.setItem('userToken','userToken');
        setIsLoading(false);
    }
    const logout = () =>{
        setIsLoading(true);
        setuserToken(null);
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    }

    const isLoggedIn = async() =>{
        try{
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('userToken');
            setuserToken(userToken);
            setIsLoading(false);
        }catch(e){
            console.log(`isLogged in error ${e}`);
        }
    }

    useEffect(()=>{
        isLoggedIn();
    },[]);

    return(
        // with this provider we can pass any value to any screen
        <AuthContext.Provider value={{isLoading,userToken,login,logout}}>
            {children}
            {console.log(AuthContext)}
        </AuthContext.Provider>
    )
}
