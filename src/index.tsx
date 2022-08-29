import ReactDOM from "react-dom";
import { Provider } from "./shared/config/context";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import App from "./App";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
