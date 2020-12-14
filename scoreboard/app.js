const titleId = 'main-title';

const description =
  'I just learned how to create a react node and render it into the DOM</p>';

const name = 'Arkar';

const header = (
  <header>
    {/* This is a JSX Comment */}
    <h1 id={titleId}>{name}'s First React Element!</h1>
    <p className="main-description">{description}</p>
  </header>
);

ReactDOM.render(header, document.getElementById('root'));
