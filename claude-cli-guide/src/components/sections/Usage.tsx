import { useTranslation } from 'react-i18next';
import { CodeBlock } from '../CodeBlock';
import { Lightbulb } from 'lucide-react';

interface Tip {
  title: string;
  description: string;
  example: string;
}

export function Usage() {
  const { t } = useTranslation();
  const tips = t('usage.tips', { returnObjects: true }) as Tip[];

  return (
    <section className="section">
      <h2 className="section-title">{t('usage.title')}</h2>
      <p className="section-subtitle">{t('usage.subtitle')}</p>

      <div className="tips-grid">
        {tips.map((tip, index) => (
          <div key={index} className="tip-card">
            <div className="tip-header">
              <Lightbulb className="tip-icon" />
              <h3>{tip.title}</h3>
            </div>
            <p>{tip.description}</p>
            <div className="tip-example">
              <span className="example-label">{t('common.example')}:</span>
              <CodeBlock code={tip.example} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}