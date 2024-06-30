// components/QRCodeGenerator.tsx
import { useState, ChangeEvent } from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [qrText, setQrText] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const generateQRCode = () => {
    setQrText(inputText);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Enter text here"
        style={{ padding: '10px', width: '300px' }}
      />
      <button onClick={generateQRCode} style={{ padding: '10px 20px', marginLeft: '10px' }}>
        Generate QR Code
      </button>
      {qrText && (
        <div style={{ marginTop: '20px' }}>
          <QRCode value={qrText} />
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
