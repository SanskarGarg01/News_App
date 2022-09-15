//Earlier we have made the app using class based components.
// Then we transform the class based components to function based components.
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";



// export default class App extends Component {
  const App=()=>{
  // Here we are hiding our apiKey i.e. we are storing the key in our local file called
  // ".env.local" In this file,we can store the value in any variable and can use that variable as an value.
 const  apiKey = process.env.REACT_APP_NEWS_API;
  // Here we are assigning the value to the apiKey variable which we have stored in our '.env.local' file .In '.env.local' file we have created the variable REACT_APP_NEWS_API and stored our apiKey in it.Now here we are fetching that value using 'process.env.REACT_APP_NEWS_API' where REACT_APP_NEWS_API is our variable name saved in '.env.local' file.
  // state = {
  //   progress: 0,
  // };
  const [progress, setProgress] = useState(0);
  
  // setProgress = (progress) => {
  //   setState({
  //     progress: progress,
  //   });
  // };
  //render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={progress}

          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="general"
                  pageSize={5}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="business"
                  pageSize={5}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="science"
                  pageSize={5}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="entertainment"
                  pageSize={5}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="general"
                  pageSize={5}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="health"
                  pageSize={5}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="sports"
                  pageSize={5}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="technology"
                  pageSize={5}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
 // }
}

export default App ;