import rroutes from './routes';
import { useRoutes, BrowserRouter as Router } from 'react-router-dom';

const AppRoutes = () => useRoutes(rroutes);

export default function App() {
  return (
    <div className="App">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}
