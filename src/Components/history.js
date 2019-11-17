import createHistory from 'history/createBrowserHistory';

export default createHistory({
  basename: process.env.NODE_ENV === 'development' ? '' : 'https://dry-sands-15245.herokuapp.com'
});