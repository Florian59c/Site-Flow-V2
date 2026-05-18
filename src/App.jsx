import { Route, Switch, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import { analytics } from "./firebase";
import { logEvent } from "firebase/analytics";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location]);

  useEffect(() => {
    if (!analytics) return;

    logEvent(analytics, "page_view", {
      page_path: location.pathname,
    });
  }, [location]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}