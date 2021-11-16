import { useState } from "react";
import axios from 'axios';

const projectID = "7a77c33d-1d02-4c47-a10b-623fb4ee978e";

const LoginForm = () =>{

    const [username, serUsername] = useState('');
    const [password, serUsername] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefualt();

        const autObject = {'Protect-ID': projectID, 'User-Name': username, 'User-Secret': password};

        try{
            await axios.get('https://api.chatengine/chats',{headers: authObject});
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            windows.location.reload();
            setError('');
        }
        catch(err)
        {
            setError('Oops, Incorrect credentials')
        }
    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">
                    Chat Application
                </h1>
                <form onSubmit={handleSubmit}> 
                    <input type="text" value={username} onChange = {(e) => setUserName(e.target.value)} className="input" placeholder="Username" required
                    />
                    <input type="password" value={password} onChange = {(e) => setPassword(e.target.value)} className="input" placeholder="Password" required
                    />
                    <div align="center">
                        <button className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>
                <h1>{error}</h1>
            </div>
        </div>
    );
};

export default LoginForm;