import { useSelector } from 'react-redux';
const MessagesList = () => {
    const {messages} = useSelector(state => state.contactsList.find(item => item.activeUser)); 
    
    return (
        <ul className="messages-list">
            {
                messages.map(({text, myMessage }, index) => {
                    return <li key={index} className={(myMessage ? 'my-message' : '')}>{text}</li>
                })
            }
        </ul>
    );
}

export default MessagesList;