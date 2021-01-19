import React from "react";
import ReactDOM from "react-dom";
import dayjs from 'dayjs'
import 'dayjs/locale/ja'
dayjs.locale('ja')
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import components
import CalenderBoard from './components/CalenderBoard/container'
import Navigation from './components/Navigation/container'
// import reducers
import rootReducer from './redux/rootReducer'

const store = createStore(rootReducer)

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
      <CalenderBoard />
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
