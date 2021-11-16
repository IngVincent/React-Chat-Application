import { useState } from "react";
import {sendOutlined, PictureOutlioned} from '@ant-design/icons';
import { sendMessage, isTyping } from "react-chat-engine";

const MessageForm = (props) =>{
   
   const [value, setValue] = useState('');
   const {chatIde, creds} = props;
   
   const handleChange = (event) =>{
       setValue(event-target.value);
       isTyping(props,chatId);
   };
   const handleSubmit = (event) =>{
       event.preventDefault();

       const text = value.trimEnd();

       if(text.length > 0){
           sendMessage(creds, chatId, {text});
       }
       setValue('');
   };

   const handleUpload = (event) => {
        sendMessage(creds, ChatId, {files: event.target.files, text: ''});
   };

   return (
        <div>
           <form className="message-form" onSubmit={handleSubmit}>
               <input 
                    className="message-input"
                    placeholder="Send a message..."
                    value={value}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
               />
               <label htmlFor="upload-button">
                    <span className="image-button">
                        <PicturesOutlined className="pictures-icon"/>
                    </span>
               </label>
               <input 
                    type="file"
                    multiple={false}
                    id="upload-button"
                    style={{display: 'none'}}
                    onChange={handleUpload.bind(this)}
               />
               <button type= "submit" className="send-button">
                    <sendOutlined className="send-icon"
                    />
               </button>
           </form>
        </div>
    )
}

export default MessageForm;