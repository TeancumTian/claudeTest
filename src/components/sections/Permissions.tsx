import { useTranslation } from 'react-i18next';
import { CodeBlock } from '../CodeBlock';
import { Shield, AlertTriangle, Info } from 'lucide-react';

export function Permissions() {
  const { t } = useTranslation();

  return (
    <section className="section">
      <h2 className="section-title">{t('permissions.title')}</h2>
      <p className="section-subtitle">{t('permissions.subtitle')}</p>

      <div className="content-card">
        <p>{t('permissions.intro')}</p>
      </div>

      <div className="methods-grid">
        <div className="method-card">
          <Shield className="method-icon" />
          <h3>{t('permissions.methods.interactive.title')}</h3>
          <p>{t('permissions.methods.interactive.description')}</p>
          <CodeBlock code="claude" />
          <div className="tip">
            <Info className="icon-tiny" />
            <span>{t('permissions.methods.interactive.tip')}</span>
          </div>
        </div>

        <div className="method-card danger">
          <AlertTriangle className="method-icon text-warning" />
          <h3>{t('permissions.methods.skipAll.title')}</h3>
          <p>{t('permissions.methods.skipAll.description')}</p>
          <CodeBlock code="claude --dangerously-skip-permissions" />
          <div className="warning">
            <AlertTriangle className="icon-tiny" />
            <span>{t('permissions.methods.skipAll.warning')}</span>
          </div>
        </div>

        <div className="method-card">
          <Shield className="method-icon" />
          <h3>{t('permissions.methods.toggle.title')}</h3>
          <p>{t('permissions.methods.toggle.description')}</p>
          <div className="keyboard-shortcut">
            <kbd>Shift</kbd> + <kbd>Tab</kbd>
          </div>
          <div className="tip">
            <Info className="icon-tiny" />
            <span>{t('permissions.methods.toggle.tip')}</span>
          </div>
        </div>
      </div>

      <div className="content-card">
        <h3>{t('permissions.bestPractices')}</h3>
        <ul className="best-practices">
          {(t('permissions.practices', { returnObjects: true }) as string[]).map((practice, index) => (
            <li key={index}>{practice}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}