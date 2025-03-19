import { BrowserRouter } from "react-router";
import Routes from "./Routes";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
