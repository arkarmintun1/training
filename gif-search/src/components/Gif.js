import React from 'react';

const Gif = ({ url }) => (
  <li className="gif-wrap">
    <img alt="" src={url} />
  </li>
);

export default Gif;
