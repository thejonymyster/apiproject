import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import AddPost from './components/AddPost'
import AllPosts from './components/AllPosts'
import Auth from './components/Auth'
import Profile from './components/Profile'
import actions from './api'
import { Switch, Route, Link, useHistory } from 'react-router-dom'
import TheContext from './TheContext'
import Theform from './components/Theform'
import Youtuber from './components/youtube';



function App() {

  const [user, setUser] = useState({})

  useEffect(() => {
    actions.getUser().then(res => {
      setUser(res.data)
    }).catch(console.error)
  }, [])

  const history = useHistory()

  return (

    <>
      <TheContext.Provider value={{ user, setUser, history }}>
      <div className="App">
        <nav>
          {/* <Link to="/"><p class="whitebg">Home</p></Link> */}
        </nav>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/all-posts" render={(props) => <AllPosts {...props} />} />
        </Switch>

      </div>
    </TheContext.Provider>

    {/* <Theform/> */}
      
      <Youtuber/>
    </>
    
  );
}

export default App;
