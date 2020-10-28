import initMock from './mock';

const reducer = (state = initMock, action) => {
  switch(action.type) {
      case 'CHANGE_CHAT': {
          state.contactsList.find(({activeUser}) => activeUser).activeUser = false;
          state.contactsList.find(({id}) => id == action.idUser).activeUser = true;
      }  
      case 'SEND_MESSAGE': {
        if(action.text) {
          state.contactsList.find(({activeUser}) => activeUser).messages.push(action.text);
        }
      }        
      case 'EDIT_TEXTEREA': {
          state.newMessageText = action.text;
      }
    }
    return state;
  }

export default reducer;