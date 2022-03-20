import gql from "graphql-tag";
import React, {useState} from "react";
import { Query } from "react-apollo";
import UserCreate from './UserCreate'
import UserDetail from './UserDetail'
import {useNavigate, Link} from 'react-router-dom'

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
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  return (
     <>
     <Query query={FETCH_USERS}>
       {({ loading, error, data }) => {
         console.log(data);
         return (
           <div>
             <h1>User Index</h1>
             <ul>
                 {!loading && data.users.map((user) => (
                     <li key={user.id} onClick={() => navigate(`/users/${user.id}`)}>
                         <p>name:{user.name}</p>
                     </li>
                 ))}
             </ul>
           </div>
         );
       }}
     </Query>
     <UserCreate user={user} />
     {user && <UserDetail user={user} />}
     <Link to="/posts">All Posts</Link>
     </>
   );
}

  export default UserIndex;