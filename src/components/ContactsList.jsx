import { useSelector, useDispatch } from 'react-redux';
const ContactsList = () => {

    const contactsList = useSelector(state => state.contactsList); 
    const dispatch = useDispatch(); 

    const handleClick = (id) => {   
        dispatch({type: 'CHANGE_CHAT', idUser: id});
        dispatch({type: 'EDIT_TEXTEREA', text: ''});
    }
    
    return (
        <aside>
            <h1>Contacts List</h1>
            <ul>
                {
                    contactsList.map(({userName, activeUser, id}) => {
                    return <li key={id} onClick={() => handleClick(id)} className={(activeUser ? 'active-user' : '')}>{userName}</li>
                    })
                }
            </ul>
        </aside>
    );
}

export default ContactsList;