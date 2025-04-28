import React from 'react';

export default function RoundedButton({ label, color = '#FCDF69', fullWidth = false, onClick }) {
  return (
    <button
      className={`btn px-3 ${fullWidth ? 'w-121' : ''}`}
      onClick={onClick}
      style={{
        backgroundColor: color,
        borderRadius: '30px',
        fontSize: '16px',
        fontWeight: 700,
        borderRadius:'30px',
        width:'121px',
        height:'44px'
      }}
    >
      {label}
    </button>
  );
}
