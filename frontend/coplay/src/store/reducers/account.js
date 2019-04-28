// store/reducers/account.js

const initState = {
  users: [
    {idUser: '1', username: 'admin', passwordHash: 'admin', firstname: 'admin', lastname: 'tef', email: 'jfeig@mgmail.com'},
    {idUser: '2', username: 'jfeg', passwordHash: 'dhehf', firstname: 'fwefwegw', lastname: 'fwe', email: 'gewgggggggig@mgmail.com'},
    {idUser: '3', username: 'maret', passwordHash: '12345678', firstname: 'fwe', lastname: 'fwegwge', email: 'yyyyyyyyy@mgmail.com'},
  ]
}

const account = (state = initState, action) => {
  return state;
}

export default account;
