import './App.css';
import Dashboard from './pages/dashboard';
import Layout from './pages/layout';

const App: React.FC = () => {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
};

export default App;
