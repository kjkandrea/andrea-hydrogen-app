import rroutes from './routes';
import { useRoutes, BrowserRouter as Router } from 'react-router-dom';

const AppRoutes = () => useRoutes(rroutes);

function App() {
  return (
    <div className="App">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
