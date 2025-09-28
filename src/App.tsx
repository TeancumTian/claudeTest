import { useState } from 'react';
import './App.css';
import './i18n';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import {
  Installation,
  Permissions,
  Usage,
  Automation,
  Hooks,
  Commands,
  Troubleshooting
} from './components/sections';

function App() {
  const [activeSection, setActiveSection] = useState('installation');

  const renderSection = () => {
    switch (activeSection) {
      case 'installation':
        return <Installation />;
      case 'permissions':
        return <Permissions />;
      case 'usage':
        return <Usage />;
      case 'automation':
        return <Automation />;
      case 'hooks':
        return <Hooks />;
      case 'commands':
        return <Commands />;
      case 'troubleshooting':
        return <Troubleshooting />;
      default:
        return <Installation />;
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="main-layout">
        <Navigation
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        <main className="content">
          {renderSection()}
        </main>
      </div>
    </div>
  );
}

export default App;
