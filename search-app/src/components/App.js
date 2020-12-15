import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

import SearchForm from './SearchForm';
import Results from './Results';

const App = () => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1>Search App</h1>
          <p>This is a simple search app</p>
          <SearchForm />
        </Container>
      </Jumbotron>
      <Results />
    </div>
  );
};

export default App;
