import {ChatEngine} from 'react-chat-engine';
import './App.css';
import { ChatFeed } from './components/ChatFeed.jsx';

function App() {
  return (
    <div className="App">
     <ChatEngine
        height ="100vh"
        projectID ="7a77c33d-1d02-4c47-a10b-623fb4ee978e"
        userName="vicente"
        userSecret="iguanas92"
        renderCharFeed = {(chatAppProps) =><chatFeed {...chatAppProps}/>} 
        onNewMessage = {()=> new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3')}
     />
    </div>
  );
}

export default App;
