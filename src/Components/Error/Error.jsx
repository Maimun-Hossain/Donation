import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div>
            <h2>Opps</h2>
            <Link to="/"><button className="btn btn-primary">Home</button></Link>
        </div>
    );
};

export default Error;