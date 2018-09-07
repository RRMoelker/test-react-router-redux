import React from 'react';

export default (props) => {

  const params = props.match.params;
  console.log(params);
  return (
    <div>
      <h1>Page2</h1>
    </div>
  );
}
