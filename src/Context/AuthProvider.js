import React, { createContext } from 'react';
import useAllEvents from '../Hooks/useAllEvents';
import useAllVolunteers from '../Hooks/useAllVolunteers';
import useFirebase from '../Hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    const volunteers = useAllVolunteers();
    const events = useAllEvents();
    return (
        <AuthContext.Provider value={{ allContext, volunteers, events }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;