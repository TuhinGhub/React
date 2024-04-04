import React, { useState } from 'react';

// Custom hook useClipboard
const useClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => setCopied(true))
      .catch((error) => {
        console.error('Failed to copy:', error);
        setCopied(false);
      });
  };

  return { copied, copyToClipboard };
};

// Component using useClipboard hook
const ClipboardCopyButton = ({ text }) => {
  const { copied, copyToClipboard } = useClipboard();

  const handleCopyClick = () => {
    copyToClipboard(text);
  };

  return (
    <div>
      <input type="text" value={text} readOnly />
      <button onClick={handleCopyClick}>{copied ? 'Copied!' : 'Copy'}</button>
    </div>
  );
};

export default ClipboardCopyButton;
