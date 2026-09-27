import { useState } from 'react';
import { FoundationsTokens } from './components/FoundationsTokens';
import { BaseComponentsLibrary } from './components/BaseComponentsLibrary';
import { ComplexComponents } from './components/ComplexComponents';
import { HRDashboard } from './components/HRDashboard';

export default function App() {
  const [page, setPage] = useState('Dashboard');

  switch (page) {
    case 'Foundations':
      return <FoundationsTokens onNavigate={setPage} />;
    case 'Base Components':
      return <BaseComponentsLibrary onNavigate={setPage} />;
    case 'Complex Components':
      return <ComplexComponents onNavigate={setPage} />;
    case 'Dashboard':
    default:
      return <HRDashboard onNavigate={setPage} />;
  }
}
