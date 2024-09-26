// components/EmailTemplate.tsx
import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ name, email, phone, message }) => (
  <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6' }}>
    <h1 style={{ color: '#005782' }}>Nuevo mensaje de {name}</h1>

    <p>Has recibido un nuevo mensaje a través de tu formulario de contacto:</p>

    <div style={{ padding: '10px 0', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', margin: '20px 0' }}>
      <p>"{message}"</p>
    </div>

    <h2>Detalles de contacto</h2>
    <p>
      <strong>Email:</strong> <a href={`mailto:${email}`} style={{ color: '#005782' }}>{email}</a><br />
      <strong>Teléfono:</strong> <a href={`tel:${phone}`} style={{ color: '#005782' }}>{phone}</a>
    </p>

    <br />
    <hr style={{ border: '1px solid #ddd' }} />
    <p style={{ fontSize: '12px', color: '#999' }}>
      Este mensaje fue enviado desde tu sitio web. Por favor, responde directamente a este correo si es necesario.
    </p>
  </div>
);
