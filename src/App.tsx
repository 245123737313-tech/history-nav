import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import CodingTrack from './routes/coding-track';
import CodingHistory from './routes/coding-history';
import SubmissionPage from './routes/submissions';
import AppShell from './components/AppShell';
import { NotFoundComponent, ErrorComponent } from './routes/__root';
import './styles.css';

const queryClient = new QueryClient();

function ErrorBoundary({ children }: { children: React.ReactNode }) {
  const [error, setError] = useState<Error | null>(null);

  if (error) {
    return <ErrorComponent error={error} reset={() => setError(null)} />;
  }

  return (
    <div
      onError={(e) => {
        if (e instanceof Error) setError(e);
      }}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppShell><CodingTrack /></AppShell>} />
            <Route path="/coding-track" element={<AppShell><CodingTrack /></AppShell>} />
            <Route path="/coding-history" element={<AppShell><CodingHistory /></AppShell>} />
            <Route path="/submissions/:id" element={<AppShell><SubmissionPage /></AppShell>} />
            <Route path="*" element={<NotFoundComponent />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;