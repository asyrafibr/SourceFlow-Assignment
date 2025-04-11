import React from "react";

export default function MobileDropdownMenu({ items, dropdownRef }) {
  if (!items) {
    return <div className="position-absolute bg-white border rounded shadow p-2 mt-2" style={{ zIndex: 1000 }}>No menu items available</div>;
  }

  return (
    <div
      ref={dropdownRef}
      className="position-absolute bg-white border rounded shadow p-2 mt-2"
      style={{ zIndex: 1000 }}
    >
      {items.map((item, idx) => (
        <a
          key={idx}
          href="#"
          className="d-block text-dark py-1 px-2 dropdown-hover"
        >
          {item}
        </a>
      ))}
    </div>
  );
}
