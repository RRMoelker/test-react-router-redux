import React from 'react';
import {connect} from 'react-redux'
import {push} from 'connected-react-router'


const Page2 = (props) => {
  const params = props.match.params;
  const { doNavigate, pathname, search, hash} = props;

  // const doNavigateHistory = () => props.history.push('?lat=2lon=42');
  const doNavigateHistory = () => props.history.push({
    pathname: '',
    search: '?lat=2lon=42'
  });


  return (
    <div>
      <h1>Page2</h1>
      <button onClick={doNavigate}>Navigate through store.dispatch</button>
      <button onClick={doNavigateHistory}>Navigate using history</button>

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

const mapDispatchToProps = dispatch => ({
  doNavigate: () => dispatch(push({
    query: 'foo'
  }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Page2)
