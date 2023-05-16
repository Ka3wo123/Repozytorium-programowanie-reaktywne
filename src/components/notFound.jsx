import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return <div className="jumbotron">
        <h1 className="display-4">404 - Not found!</h1>
        <p className="lead">Page you are looking for doesn't exist</p>
        <hr className="my-3"/>
        <p>Go back to Home</p>
        <Link className="btn btn-primary btn-lg" to="/home" role="button">Home</Link>
    </div>;
};

export default NotFound;