import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import dayjs
import dayjs from 'dayjs'
import 'dayjs/locale/ja'
dayjs.locale('ja')
import DayjsUtil from '@date-io/dayjs'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
// import components
import CalenderBoard from './components/CalenderBoard/container'
import Navigation from './components/Navigation/container'
// import reducers
import rootReducer from './redux/rootReducer'

const store = createStore(rootReducer)

const App = () => {
  return (
    <Provider store={store}>
      <MuiPickersUtilsProvider utils={DayjsUtil}>
        <Navigation />
        <CalenderBoard />
      </MuiPickersUtilsProvider>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));

