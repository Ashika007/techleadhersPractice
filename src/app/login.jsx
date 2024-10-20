import {usestate} from "react";

    const Login=()=>{

   
    const[userName, setUsername]= useState("");
    const[password, setPassword]= useState("");


    const onUsernameChange=(e)=>{
        setUsername(e.target.value);
       
    };
    const onPassswodChange=(e)=>{
        setUsername(e.target.value);
       
    };
    const handleLogin=()=>{
        alert("Login");
       
    };

    return(
        <div>
            <input type="password" name="userName" value={password} onChange="onPasswordChange">Password</input>
            <input type="text"name="password" value={userName} onChange="onUsernameChange">UserId</input>
            <button onClick="handleLogin">Login</button>
        </div>
    )
}
export default Login;