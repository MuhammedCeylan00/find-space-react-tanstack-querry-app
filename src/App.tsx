import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


import SideBar from './components/sideBar';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SideBar>
          <AppRoutes />
        </SideBar>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
