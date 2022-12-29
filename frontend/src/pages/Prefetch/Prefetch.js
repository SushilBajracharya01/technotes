import { useEffect } from "react"
import { usersApliSlice } from "../Users/userApiSlice";

import { store } from '../../app/store'
import { Outlet } from "react-router-dom";
import { notesApliSlice } from "../Notes/notesApiSlice";

export default function Prefetch() {
    useEffect(() => {
        const users = store.dispatch(usersApliSlice.endpoints.getUsers.initiate());
        const notes = store.dispatch(notesApliSlice.endpoints.getNotes.initiate());
        console.log('subscribing');

        return () => {
            console.log('unsubscribing');
            users.unsubscribe();
            notes.unsubscribe();
        }
    }, []);

    return <Outlet />
}