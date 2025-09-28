import { useTranslation } from 'react-i18next';
import { CodeBlock } from '../CodeBlock';
import { Cpu, AlertTriangle, Info, CheckCircle } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  command?: string;
  warning?: string;
  tip?: string;
  note?: string;
}

interface Example {
  task: string;
  command: string;
}

export function Automation() {
  const { t } = useTranslation();
  const features = t('automation.features', { returnObjects: true }) as Feature[];
  const examples = t('automation.examples.items', { returnObjects: true }) as Example[];

  return (
    <section className="section">
      <h2 className="section-title">{t('automation.title')}</h2>
      <p className="section-subtitle">{t('automation.subtitle')}</p>

      <div className="content-card">
        <p>{t('automation.intro')}</p>
      </div>

      <div className="features-list">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-header">
              <Cpu className="feature-icon" />
              <h3>{feature.title}</h3>
            </div>
            <p>{feature.description}</p>
            {feature.command && <CodeBlock code={feature.command} />}
            {feature.warning && (
              <div className="warning">
                <AlertTriangle className="icon-tiny" />
                <span>{feature.warning}</span>
              </div>
            )}
            {feature.tip && (
              <div className="tip">
                <Info className="icon-tiny" />
                <span>{feature.tip}</span>
              </div>
            )}
            {feature.note && (
              <div className="note">
                <CheckCircle className="icon-tiny" />
                <span>{feature.note}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="content-card">
        <h3>{t('automation.examples.title')}</h3>
        <div className="examples-grid">
          {examples.map((example, index) => (
            <div key={index} className="example-card">
              <h4>{example.task}</h4>
              <CodeBlock code={example.command} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}