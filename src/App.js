// https://api.instagram.com/oauth/authorize?app_id=822188005463007&redirect_uri=https%3A%2F%2Fmultimix.vercel.app%2Flogin&scope=user_profile,user_media&response_type=code

import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import shot from './images/shot.jpg';

function App() {
  const appId       = 822188005463007,
        redirectUri = "https%3A%2F%2Fmultimix.vercel.app%2F",
        authLink    = "https://api.instagram.com/oauth/authorize?app_id=" + appId + "&redirect_uri=" + redirectUri + "&scope=user_profile,user_media&response_type=code";
        
  const [shot01, setShot01] = useState();
  const [shot02, setShot02] = useState();
  const [shot01URL, setShot01URL] = useState();
  const [shot02URL, setShot02URL] = useState();

  useEffect(()=>{
    console.log('shot01, shot02:', shot01, shot02);
    if(!shot01 || !shot02) return;
    setShot01URL(URL.createObjectURL(shot01));
    setShot02URL(URL.createObjectURL(shot02));
    // console.log('shot01URL:', shot01URL, '\n shot02URL:', shot02URL);
  }, [shot01, shot02])

  function onShot01Change(event) {
    console.log('E:', event);
    setShot01(event.target.files[0]);
    console.log('shot01:', shot01);
  }
  function onShot02Change(event) {
    console.log('E:', event);
    setShot02(event.target.files[0]);
    console.log('shot02:', shot02);
  }

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
        <h3 style={{margin: "30px 0 15px"}}>Or your can mix downloaded photos</h3>
        <div>
          <label htmlFor='sh1' style={{margin: "0 10px 0 0"}}>Shot 1:</label>
          <input id="sh1" name="shot1" type="file" accept='image/*' onChange={onShot01Change}/>
          <label htmlFor='sh2' style={{margin: "0 10px 0 0"}}>Shot 2:</label>
          <input id="sh1" name="shot1" type="file" accept='image/*' onChange={onShot02Change}/>
        </div>
        <div>
          <img src={shot01URL || shot} className='shot' alt=""/>
          <img src={shot02URL || shot} className='shot' alt=""/>
        </div>
        <div className='resshot-wrap'>
          <p>111</p>
          <img src={shot01URL || shot} className='resshot topImg' alt=""/>
          <img src={shot02URL || shot} className='resshot baseImg' alt=""/>
        </div>
      </header>
    </div>
  );
}

export default App;
