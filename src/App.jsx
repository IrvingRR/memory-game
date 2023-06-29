import { Toaster } from 'react-hot-toast';
import { Router } from "./router/Router";
import { GlobalStyles } from "./styled/globalStyles";

const toastOptions = {
  style: {
    color: 'var(--font-color)',
    backgroundColor: 'var(--background-secondary-color)',
  },
  duration: 1000
};

function App() {

  return (
    <>
      <GlobalStyles/>
      <Toaster toastOptions={toastOptions}/>
      <Router/>
    </>
  )
}

export default App;