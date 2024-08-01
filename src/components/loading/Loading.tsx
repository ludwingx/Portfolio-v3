// components/LoadingSpinner.tsx
import React from 'react';
import styles from './loading.module.css'; // Asegúrate de tener estilos adecuados

const Loading: React.FC = () => {
  return (
    <div className={styles.spinner}>
      {/* Puedes usar un spinner CSS o una biblioteca de UI aquí */}
      <div className={styles.spinnerIcon}></div>
    </div>
  );
};

export default Loading;
