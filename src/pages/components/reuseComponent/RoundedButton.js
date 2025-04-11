import React from 'react';

export default function RoundedButton({ label, color = '#FCDF69', fullWidth = false, onClick }) {
  return (
    <button
      className={`btn px-3 ${fullWidth ? 'w-100' : ''}`}
      onClick={onClick}
      style={{
        backgroundColor: color,
        borderRadius: '30px',
      }}
    >
      {label}
    </button>
  );
}
