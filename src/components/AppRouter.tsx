import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {privateRoutes, publicRoutes} from "../router";
import Login from "../pages/login";
import Event from "../pages/event";
import {useTypedSlector} from "../hooks/useTypedSlector";

const AppRouter = () => {
    const {isAuth} = useTypedSlector(state => state.auth)
    return (
        isAuth ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path}
                           element={<route.element/>}
                            key={route.path}/>
                )}
                <Route path="*" element={<Event/>} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path}
                           element={<route.element/>}
                           key={route.path}
                    />
                )}
                <Route path="*" element={<Login/>} />
            </Routes>
    );
};

export default AppRouter;