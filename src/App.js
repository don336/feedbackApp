import {BrowserRouter as Route, Router, Switch} from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import Aboutpage from "./pages/Aboutpage"
import { createBrowserHistory } from "history"
import AboutLink from "./components/AboutLink"
import { FeedbackProvider } from "./context/FeedbackContext"


const History = createBrowserHistory();

const App = ()=>{
  return (
    <FeedbackProvider>
      <Router  history={History}>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList />
            </Route>
            <Route  path="/about">< Aboutpage/></Route>
          </Switch>

            <AboutLink/>
        </div>
      
      </Router>
    </FeedbackProvider>
  )
}

export default App