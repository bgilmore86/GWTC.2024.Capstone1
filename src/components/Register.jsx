import {useState} from "react";

//importing api
import {useRegisterMutation} from "../redux/api"


function Register() {

    const [userInfo, setUserInfo] = useState({
        username: "",
        password: "",
        email: "",
        firstname: "",
        lastname: "",
});

//[register] name has to be same as endpoint key register in built query mutation 
    const [register] = useRegisterMutation();

    const enterEventHandler = (event)  => {
        event.preventDefault();
        register(userInfo);
        console.log("Register ENTER button clicked", `USERINFO${userInfo.username}`);
    };

    const userInfoEntered = (e) => {
        setUserInfo({...userInfo, [e.target.name]: e.target.value});
            console.log(userInfo.username);
            //console.log(e.target.name, e.target.value);
         //console.log(JSON.stringify(userInfo));
    };

    return (
        <div>
            <h5>Register Component</h5>
            <h2>Create Account!
            </h2>
            
            <form onSubmit={enterEventHandler}>
                <label>
                    USERNAME
                        <input 
                        name="username"
                        type="text"
                        placeholder="USERNAME"
                        value={userInfo.username}
                        onChange={userInfoEntered}/>
                </label>

                <label>
                    PASSWORD
                        <input
                        name="password"
                        type="password"
                        placeholder="PASSWORD"
                        value={userInfo.password}
                        onChange={userInfoEntered}/>
                </label>

                <label>
                    EMAIL
                        <input
                    name="text"
                    type="email"
                    placeholder="EMAIL"
                   defaultValue={userInfo.email}
                    onChange={userInfoEntered}/>
                </label>

                <label>
                    FIRSTNAME
                    <input
                    name="firstname"
                    type="text"
                    placeholder="FIRSTNAME"
                    value={userInfo.firstname}
                    onChange={userInfoEntered}/>
                    </label>
                
                <label>
                    LASTNAME
                    <input
                    name="lastname"
                    type="text"
                    placeholder="LASTNAME"
                    value={userInfo.lastname}
                    onChange={userInfoEntered}/>
                    </label>
                <button>ENTER</button>
            </form>
            
            <h3>Already have an account?</h3>
            <button>LOGIN</button>
            
        </div>
        )}

    


export default Register
