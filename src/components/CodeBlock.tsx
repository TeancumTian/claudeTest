import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({ code, language = 'bash', showLineNumbers = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <div className="code-block">
      <div className="code-header">
        <span className="code-language">{language}</span>
        <button onClick={handleCopy} className="copy-button">
          {copied ? (
            <>
              <Check className="icon-tiny" />
              <span>{t('common.copied')}</span>
            </>
          ) : (
            <>
              <Copy className="icon-tiny" />
              <span>{t('common.copy')}</span>
            </>
          )}
        </button>
      </div>
      <pre className="code-content">
        <code>
          {showLineNumbers
            ? lines.map((line, index) => (
                <div key={index} className="code-line">
                  <span className="line-number">{index + 1}</span>
                  <span>{line}</span>
                </div>
              ))
            : code}
        </code>
      </pre>
    </div>
  );
}