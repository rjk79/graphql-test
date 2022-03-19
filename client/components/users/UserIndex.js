import gql from "graphql-tag";
import React, {useState} from "react";
import { Query } from "react-apollo";
import UserEdit from './UserCreate'

// changing the string after 'query' modifies the 'operationName' in the payload
// so it can be anything
const FETCH_USERS = gql`
  query FetchUsers {
    users {
      id
      name
      email
    }
  }
`;

const UserIndex = () => {
  const [user, setUser] = useState(null)

  return (
     <>
     <Query query={FETCH_USERS}>
       {({ loading, error, data }) => {
         console.log(data);
         return (
           <div>
             <h1>UserIndex</h1>
             <ul>
                 {!loading && data.users.map((user) => (
                     <li key={user.id} onClick={() => setUser(user)}>
                         <p>{user.name}</p>
                         <p>{user.email}</p>
                     </li>
                 ))}
             </ul>
           </div>
         );
       }}
     </Query>
     <UserEdit user={user} />
     </>
   );
}

  export default UserIndex;