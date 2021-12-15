const TheirMessage = ({lastMessage,message}) =>{

    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    return(
        <div className ="message-row">
              {isFirstMessageByUser &&
              (
                  <div
                  className="message-avatar"
                  style={{bckgroundImage : `url(${message?.sender?.avatar})`}}
                  />
              ) }
      {
            message?.attachments?.length >0 ?
                (<img
                src= {message.attachments[0].file}
                alt ="message-attachment"
                classname="message-image"
                style={{marginLef: isFirstMessageByUser ? '4px': '48px'}}
                />
            )
        :(
            <div className="message" style={{ float:'left',  backgroundColor:'#CABCDC',marginLef: isFirstMessageByUser ? '4px': '48px'}}>
                    {message.text}
            </div>
        )}
      
        </div>
    );
    }
    export default TheirMessage;