import { useSelector } from 'react-redux';
const MessagesList = () => {
    const {messages} = useSelector(state => state.contactsList.find(item => item.activeUser)); 
    
    return (
        <ul className="messages-list">
            {
                messages.map((message, index) => {
                    return <li key={index}>{message}</li>
                })
            }
        </ul>
    );
}

export default MessagesList;