import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css';


const App=() =>{
return (
    <ChatEngine
    height= "100vh"
    projectID="cc491078-689e-4545-824b-9565472f51e7"
    userName = "bksudip"
    userSecret = "123"
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />

);
}

export default App;