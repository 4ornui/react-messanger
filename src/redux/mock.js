const initMock = {
    contactsList: [
        {   
            id: 1,
            userName: 'Max',
            activeUser: true,
            messages: [
                { text: 'Hi' },
                { text: 'How are you' }
            ]
        },
        {   
            id: 2,
            userName: 'Ann', 
            messages: [
                { text: 'Hello' }
            ]
        },
        {   
            id: 3,
            userName: 'Andrey', 
            messages: [      
                { text: 'Hi. How are you' }
            ]
        }   
    ],
    newMessageText: ''
}

export default initMock;