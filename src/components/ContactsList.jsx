import { useSelector } from 'react-redux';
const ContactsList = () => {
    const contactsList = useSelector(state => state.contactsList); 
    
    return (
        <aside>
            <h1>Contacts List</h1>
            <ul>
                {
                    contactsList.map(({userName}) => {
                        return <li>{userName}</li>
                    })
                }
            </ul>
        </aside>
    );
}

export default ContactsList;