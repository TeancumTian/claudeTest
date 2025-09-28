import { useTranslation } from 'react-i18next';
import { CodeBlock } from '../CodeBlock';
import { Settings, Info } from 'lucide-react';

interface HookType {
  name: string;
  description: string;
  example: string;
  tip?: string;
}

export function Hooks() {
  const { t } = useTranslation();
  const hookTypes = t('hooks.types', { returnObjects: true }) as HookType[];

  return (
    <section className="section">
      <h2 className="section-title">{t('hooks.title')}</h2>
      <p className="section-subtitle">{t('hooks.subtitle')}</p>

      <div className="content-card">
        <p>{t('hooks.intro')}</p>
      </div>

      <div className="hooks-grid">
        {hookTypes.map((hook, index) => (
          <div key={index} className="hook-card">
            <div className="hook-header">
              <Settings className="hook-icon" />
              <h3>{hook.name}</h3>
            </div>
            <p>{hook.description}</p>
            <CodeBlock code={hook.example} />
            {hook.tip && (
              <div className="tip">
                <Info className="icon-tiny" />
                <span>{hook.tip}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="content-card">
        <h3>{t('hooks.config.title')}</h3>
        <p>{t('hooks.config.description')}</p>
        <CodeBlock
          code={t('hooks.config.example')}
          language="json"
          showLineNumbers
        />
      </div>
    </section>
  );
}