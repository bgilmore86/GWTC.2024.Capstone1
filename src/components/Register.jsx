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
            console.log(e.target.name, e.target.value);
         //console.log(JSON.stringify(userInfo));
    };


    return (
        <div>
            <h1>Create Account!
                <p>Come Shop With Us...</p>
            </h1>
            <form onSubmit={enterEventHandler}>

                <label>
                    USERNAME
                <input name="username" type="text" placeholder="USERNAME"
                value={userInfo.username} onChange={userInfoEntered}/>
                </label>

                <label>
                    PASSWORD
                <input name="password" type="password" placeholder="PASSWORD"
                value={userInfo.password} onChange={userInfoEntered}/>
                </label>

                <label>
                    EMAIL
                    <input name="email" type="email" placeholder="EMAIL"
                    value={userInfo.email} onChange={userInfoEntered}/>
                </label>

                <label>
                    FIRSTNAME
                    <input name="firstname" type="text" placeholder="FIRSTNAME"
                    value={userInfo.firstname} onChange={userInfoEntered}/>
                    </label>
                
                <label>
                    LASTNAME
                    <input name="lastname" type="text" placeholder="LASTAME"
                    value={userInfo.lastname} onChange={userInfoEntered}/>
                    </label>

                <button>ENTER</button>
                
            </form>
        </div>
        )}

    


export default Register
