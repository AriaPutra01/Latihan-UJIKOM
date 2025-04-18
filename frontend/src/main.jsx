import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { persistor, store } from "./store/configureStore.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
