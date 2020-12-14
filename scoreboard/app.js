const title = React.createElement(
  'h1',
  {
    id: 'main-title',
    title: 'This is a title',
  },
  'My First React Element!'
);

const description = React.createElement(
  'p',
  null,
  'I just learned how to create a react node and render it into the DOM'
);

const header = React.createElement('header', null, title, description);

ReactDOM.render(header, document.getElementById('root'));
