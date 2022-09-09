// https://api.instagram.com/oauth/authorize?app_id=822188005463007&redirect_uri=https%3A%2F%2Fmultimix.vercel.app%2Flogin&scope=user_profile,user_media&response_type=code


import './App.css';

function App() {
  const appId       = 822188005463007,
        redirectUri = "https%3A%2F%2Fmultimix.vercel.app",
        authLink    = "https://api.instagram.com/oauth/authorize?app_id=" + appId + "&redirect_uri=" + redirectUri + "&scope=user_profile,user_media&response_type=code"
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi man.</h1>
        <a
          className="App-link"
          href={authLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Press to login throw insta
        </a>
      </header>
    </div>
  );
}

export default App;
