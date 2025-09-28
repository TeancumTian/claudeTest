import { useTranslation } from 'react-i18next';
import { CodeBlock } from '../CodeBlock';
import { AlertCircle, Info } from 'lucide-react';

interface Issue {
  problem: string;
  solution: string;
  command?: string;
  tip?: string;
}

export function Troubleshooting() {
  const { t } = useTranslation();
  const issues = t('troubleshooting.issues', { returnObjects: true }) as Issue[];

  return (
    <section className="section">
      <h2 className="section-title">{t('troubleshooting.title')}</h2>
      <p className="section-subtitle">{t('troubleshooting.subtitle')}</p>

      <div className="issues-list">
        {issues.map((issue, index) => (
          <div key={index} className="issue-card">
            <div className="issue-header">
              <AlertCircle className="issue-icon" />
              <h3>{issue.problem}</h3>
            </div>
            <div className="issue-content">
              <p className="solution">{issue.solution}</p>
              {issue.command && <CodeBlock code={issue.command} />}
              {issue.tip && (
                <div className="tip">
                  <Info className="icon-tiny" />
                  <span>{issue.tip}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}