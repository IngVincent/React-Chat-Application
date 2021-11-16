const TheirMessage = ({lastMessage, message}) =>{
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    
    return(
        <div className= "message-row">
           {isFirstMessageByUser && (
               <div
                className="message-avatar"
                style= {{backgroundImage: message.sender && `uri(${message.sender.avatar})`
                }}
               />
           )}
           {message.attachements && message.attachements.lengh > 0
            ? (
                <img 
                src= {message.attachements[0].file}
                alt = "message-attachement"
                className = "message-image"
                style={{marginLeft: isFirstMessageByUser ? '40px' : '48px'}}
            />
            )
            :
            (
                <div className = "message" style={{float: 'left', backgroundColor: '#CABCDC',
                marginLeft: isFirstMessageByUser ? '4px' : '48px'}}>
                {message.text}
             </div>
            ) }

        </div>
    );
};

export default TheirMessage;