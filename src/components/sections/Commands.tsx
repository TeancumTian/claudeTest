import { useTranslation } from 'react-i18next';
import { CodeBlock } from '../CodeBlock';
import { Terminal, Command } from 'lucide-react';

interface CommandItem {
  command: string;
  description: string;
}

interface ShortcutItem {
  shortcut: string;
  description: string;
}

export function Commands() {
  const { t } = useTranslation();
  const basicCommands = t('commands.basic.items', { returnObjects: true }) as CommandItem[];
  const advancedCommands = t('commands.advanced.items', { returnObjects: true }) as CommandItem[];
  const shortcuts = t('commands.shortcuts.items', { returnObjects: true }) as ShortcutItem[];

  return (
    <section className="section">
      <h2 className="section-title">{t('commands.title')}</h2>
      <p className="section-subtitle">{t('commands.subtitle')}</p>

      <div className="commands-section">
        <h3>
          <Terminal className="icon-small" />
          {t('commands.basic.title')}
        </h3>
        <div className="commands-list">
          {basicCommands.map((cmd, index) => (
            <div key={index} className="command-item">
              <CodeBlock code={cmd.command} />
              <p className="command-description">{cmd.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="commands-section">
        <h3>
          <Command className="icon-small" />
          {t('commands.advanced.title')}
        </h3>
        <div className="commands-list">
          {advancedCommands.map((cmd, index) => (
            <div key={index} className="command-item">
              <CodeBlock code={cmd.command} />
              <p className="command-description">{cmd.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="content-card">
        <h3>{t('commands.shortcuts.title')}</h3>
        <div className="shortcuts-grid">
          {shortcuts.map((shortcut, index) => (
            <div key={index} className="shortcut-item">
              <div className="shortcut-keys">
                {shortcut.shortcut.split(' + ').map((key, i) => (
                  <span key={i}>
                    {i > 0 && <span className="plus"> + </span>}
                    <kbd>{key}</kbd>
                  </span>
                ))}
              </div>
              <p>{shortcut.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}