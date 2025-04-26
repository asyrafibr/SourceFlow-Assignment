import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function MobileDropdownMenu({ items, dropdownRef }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSubmenu = (index, e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!items || items.length === 0) {
    return (
      <div
        className="position-absolute bg-white border rounded shadow p-2 mt-2"
        style={{ zIndex: 1000 }}
      >
        No menu items available
      </div>
    );
  }

  return (
    <div
      ref={dropdownRef}
      className="position-absolute bg-white border rounded shadow p-2 mt-2"
      style={{ zIndex: 1000,top:"90%" }}
    >
      {items.map((item, idx) => (
        <div key={idx} className="position-relative">
          <div
            className="d-flex justify-content-between align-items-center py-1 px-2 dropdown-hover"
            style={{ cursor: "pointer" }}
            onClick={(e) => item.submenuItems ? toggleSubmenu(idx, e) : null}
          >
            <a
              href={item.href || "#"}
              className="text-dark flex-grow-1"
              onClick={(e) => item.submenuItems && e.preventDefault()}
              style={{ textDecoration: "none" }}
            >
              {item.label}
            </a>
            {item.submenuItems && <ChevronRight size={16} color="#1A1A1A" />}
          </div>

          {openIndex === idx && item.submenuItems && (
            <div
              className="submenu-dropdown position-absolute bg-white border rounded shadow p-2"
              style={{
                top: 0,
                left: "100%",
                zIndex: 1001,
                minWidth: "150px",
                opacity: 0,
                transform: "translateX(10px)",
                animation: "slideInRight 0.2s ease-out forwards",
              }}
            >
              {item.submenuItems.map((subItem, subIdx) => (
                <a
                  key={subIdx}
                  href={subItem.href}
                  className="d-block text-dark py-1 px-2 dropdown-hover"
                >
                  {subItem.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
