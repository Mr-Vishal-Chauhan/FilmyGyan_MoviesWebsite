import { Link } from "react-router-dom";
export default function Server(){

   
    return(
        <>
                <body class="d-flex justify-content-center 
                        align-items-center">
            <div class="col-md-12 text-center text-light">
                <h1>500</h1>
                <h2>Server Error</h2>
                <p>
                Sorry, there's a problem with the server...
                </p>
                <Link to="/"><button className="btn btn-primary">go Back</button></Link>
            </div>
          
        </body>
        </>
    );
}