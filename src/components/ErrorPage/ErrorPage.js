import React from 'react';
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div id="error-page" className='mt-5'>
            <h1 className='mt-5'>Oops!</h1>
            <img className='mt-5' src="https://pa1.narvii.com/7036/9194fcb71414697c9e24eb57741ae7b03cdd1830r1-450-360_hq.gif" alt="" />
            <p className='mt-5'>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;