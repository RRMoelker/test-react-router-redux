import React from 'react';
import { connect } from 'react-redux'

const Page2 = (props) => {
  const params = props.match.params;
  const { pathname, search, hash } = props;
  // console.log(params);
  return (
    <div>
      <h1>Page2</h1>
      <div>
        <h2>Redux router params</h2>
        <pre>{JSON.stringify(params, null, 2)}</pre>

        <h2>React-redux search</h2>
        <div> pathname:
          <pre>{JSON.stringify(pathname, null, 2)}</pre>
        </div>
        <div> search:
          <pre>{JSON.stringify(search, null, 2)}</pre>
        </div>
        <div> hash:
          <pre>{JSON.stringify(hash, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
  search: state.router.location.search,
  hash: state.router.location.hash,
});

export default connect(mapStateToProps)(Page2)
