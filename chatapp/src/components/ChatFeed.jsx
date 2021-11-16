import MessageFrom from './TheirMessage';
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
    
    const { chats, activeChat, userName, messages} = props;
    
    const chat = chats && chats[activeChat];
    
    const renderReadReceipts = (message, isMyMesage) => chat.people.map((person, index)=> person.last_read === message.id && (
        <div>
            key = {`read_${index}`}
            className = "read-recipent"
            style = {{
                float: isMyMesage ? 'right' : 'left',
                backgroundImage : person.person.avatar && `url(${person.person.avatar})`,
            }}
        </div>
    ));

    const renderMessages = () => {
        const key = Object.keys(messages);
        
        return key.map(key, index => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : key[index-1];
            const isMyMesage = userName === message.sender.userName;

            return(
                <div key ={`msg ${index}`} style={{width: '100%' }}>
                    
                    <div className= "message-block">
                        {   isMyMesage
                            ? <MyMessage message={message}/>
                            : <TheirMessage message = {message} lastMessage={messages
                                [lastMessageKey]} />}
                    </div>
                    <div className="read-reciepts" style={{marginRight: isMyMesage ? '18px' : 
                    '0px', marginLeft: isMyMesage ? '0px' : '68px'}}>
                        {renderReadReceipts()}
                    </div>
                </div>
            );

        });
    };

    return(
        <div className= "chat-feed">
            <div className= "chat-title-container">
                <div className= "chat-title">{chat?.title} </div>
                <div className = "chat-subtitle">

                </div>
                {renderMessages()}
                <div style = {
                   { height: '100px'}
                }>
                    <div className="message-form-container">
                        <MessageFrom {...props} chatId={activeChat} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ChatFeed;