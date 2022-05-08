import routes from './routes';
import { useRoutes, BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

const AppRoutes = () => useRoutes(routes);

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          <AppRoutes />
        </Router>
      </div>
    </QueryClientProvider>
  );
}
