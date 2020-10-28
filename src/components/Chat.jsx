import MessagesList from './MessagesList';
import NewMessageForm from './NewMessageForm';
const Chat = () => {
    return (
        <div className="chat">
            <MessagesList />
            <NewMessageForm />
        </div>
    );
}

export default Chat;