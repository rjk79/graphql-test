import React, {useState} from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

// changing the string after 'mutation' modifies the 'operationName' in the payload
// so it can be anything
const CREATE_USER = gql`
  mutation NewUser($name: String!, $email: String!, $password: String!) {
    newUser(name: $name, email: $email, password: $password) {
      name
      email
    }
  }
`;

const UserCreate = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e, createUser) {
        e.preventDefault();
        console.log(props.user);
        createUser({
          variables: {
            name,
            email,
            password,
          }
        })
      }

    return (
        <Mutation mutation={CREATE_USER}>
            {createUser => (
          <div>
            <h1>User Create Form</h1>
            <form onSubmit={e => handleSubmit(e, createUser)}>
              <div>Name</div>
              <input value={name} onChange={e => setName(e.target.value)} />
              <div>Email</div>
              <input value={email} onChange={e => setEmail(e.target.value)} />
              <div>Password</div>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
              <button type="submit">Create User</button>
            </form>
          </div>
        )}
        </Mutation>
    )
}

export default UserCreate