import './index.css';

import React from 'react';

import ReactDOM from 'react-dom/client';

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    authorization: "Bearer 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",
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
