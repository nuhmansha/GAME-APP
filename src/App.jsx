import "./Styles/main.scss";
import { Provider } from "react-redux";
import AppRouter from "./Routers/AppRouter";
import store from "./Redux/Store/store"
function App() {
 

  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter/>

      </Provider>
      
    </div>
  )
}

export default App
