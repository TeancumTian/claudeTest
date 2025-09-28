import { useTranslation } from 'react-i18next';
import {
  Download,
  Shield,
  Lightbulb,
  Cpu,
  Settings,
  Terminal,
  AlertCircle
} from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const { t } = useTranslation();

  const sections = [
    { id: 'installation', icon: Download, label: t('nav.installation') },
    { id: 'permissions', icon: Shield, label: t('nav.permissions') },
    { id: 'usage', icon: Lightbulb, label: t('nav.usage') },
    { id: 'automation', icon: Cpu, label: t('nav.automation') },
    { id: 'hooks', icon: Settings, label: t('nav.hooks') },
    { id: 'commands', icon: Terminal, label: t('nav.commands') },
    { id: 'troubleshooting', icon: AlertCircle, label: t('nav.troubleshooting') },
  ];

  return (
    <nav className="navigation">
      {sections.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          className={`nav-item ${activeSection === id ? 'active' : ''}`}
          onClick={() => onSectionChange(id)}
        >
          <Icon className="nav-icon" />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}