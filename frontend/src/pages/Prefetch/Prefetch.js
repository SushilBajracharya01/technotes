import { useEffect } from "react"
import { usersApliSlice } from "../Users/userApiSlice";

import { store } from '../../app/store'
import { Outlet } from "react-router-dom";

export default function Prefetch() {
    useEffect(() => {
        const users = store.dispatch(usersApliSlice.endpoints.getUsers.initiate());

        return () => {
            console.log('unsubscribing');
            users.unsubscribe();
        }
    }, []);

    return <Outlet />
}