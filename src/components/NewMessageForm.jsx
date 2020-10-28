import { useSelector, useDispatch } from 'react-redux';
const NewMessageForm = () => {

    const newMessageText = useSelector(state => state.newMessageText); 
    const dispatch = useDispatch(); 

    const handleSubmit = (e) => {      
        e.preventDefault(); 
        if(!newMessageText) {
            return;
        }
        dispatch({type: 'SEND_MESSAGE', text: newMessageText});
        dispatch({type: 'EDIT_TEXTEREA', text: ''});
    }
    const handleChange = (event) => {   
        dispatch({type: 'EDIT_TEXTEREA', text: event.target.value});
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea value = {newMessageText} onChange={handleChange}></textarea>
            <br/>
            <button>Send message</button>
        </form>
    );
}

export default NewMessageForm;