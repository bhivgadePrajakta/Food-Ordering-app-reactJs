import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return( <div>
        <h1>Opps!!!</h1>
    <h2>Something Went Wrong!</h2>
    <h2>{err.status} : {err.statusText}</h2>
    <h3></h3> 
    </div>);
}
export default Error;