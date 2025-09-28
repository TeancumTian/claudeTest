import { useTranslation } from 'react-i18next';
import { CodeBlock } from '../CodeBlock';
import { CheckCircle } from 'lucide-react';

export function Installation() {
  const { t } = useTranslation();

  return (
    <section className="section">
      <h2 className="section-title">{t('installation.title')}</h2>
      <p className="section-subtitle">{t('installation.subtitle')}</p>

      <div className="content-card">
        <h3>{t('installation.requirements')}</h3>
        <ul className="requirements-list">
          {(t('installation.requirementsList', { returnObjects: true }) as string[]).map((req, index) => (
            <li key={index}>
              <CheckCircle className="icon-tiny text-green" />
              <span>{req}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="content-card">
        <h3>{t('installation.steps')}</h3>

        <div className="step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h4>{t('installation.step1')}</h4>
            <CodeBlock code="npm install -g @anthropic/claude-cli" />
          </div>
        </div>

        <div className="step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h4>{t('installation.step2')}</h4>
            <CodeBlock code="claude login" />
          </div>
        </div>

        <div className="step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h4>{t('installation.step3')}</h4>
            <CodeBlock code="claude" />
          </div>
        </div>
      </div>

      <div className="content-card">
        <h3>{t('installation.firstProject')}</h3>
        <CodeBlock code={'claude "Create a React app with TypeScript"'} />
        <div className="tip">
          <strong>{t('common.tip')}:</strong> {t('installation.projectTip')}
        </div>
      </div>
    </section>
  );
}