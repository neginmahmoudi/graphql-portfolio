import './App.css';

import {
  gql,
  useQuery,
} from '@apollo/client';

const profileQuery = gql`
  query ProfileQuery($username: String = "neginmahmoudi") {
    user(login: $username) {
      name
      avatarUrl
      repositories(first: 30) {
        edges {
          node {
            name
            id
            url
          }
        }
      }
    }
  }
`;

function App() {
  const locations=window.location.href.split("/");
  const username= locations[locations.length-1];
  const { loading, error, data } = useQuery(profileQuery, { variables: {username:username} });
  if (loading) {
    return <h1>I am loading, wait</h1>;
  }
  return (
    <div id="App">
      <h1>{data.user.name}</h1>
      <img src={data.user.avatarUrl} alt="user data"></img>
      <ul>
        {data.user.repositories.edges.map(({ node: { name, id, url } }) => (
          <li key={id}>
            <a href={url}>{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
