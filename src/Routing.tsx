import { Switch } from "react-router-dom";
import PropsRoute from "./shared/components/PropsRoute";
import Home from "./pages/Home";
import Eula from "./pages/Eula";

const Routing = (props: any) => {
  return (
    <Switch>
      <PropsRoute path="/" component={Home} exact />
      <PropsRoute path="/eula" component={Eula} exact />
    </Switch>
  );
};

export default Routing;
