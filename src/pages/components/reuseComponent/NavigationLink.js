"use client";
import React, { useState } from "react";
import dropDown from "../../../../public/images/dropdown.png";
import Image from "next/image";

export default function NavigationLink({ label, submenuItems = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <div style={{ position: "relative", marginRight: "1rem" }}>
      <a
        href="#"
        onClick={toggleDropdown}
        className="d-flex align-items-center"
        style={{ color: "#1A1A1A", fontSize: "16px", fontWeight: 400 }}
      >
        {label}
        <Image
          src={dropDown}
          alt="Dropdown"
          width={10}
          height={5}
          style={{ marginLeft: "5px", transition: "transform 0.3s ease", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </a>

      <div
        style={{
          position: "absolute",
          top: "100%",
          left: 0,
          backgroundColor: "white",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          listStyle: "none",
          padding: "0",
          margin: 0,
          zIndex: 1000,
          minWidth: "180px",
          overflow: "hidden",
          maxHeight: isOpen ? "500px" : "0",
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0)" : "translateY(-10px)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)", // smoother motion
          borderRadius: "8px",
        }}
      >
        {submenuItems.length > 0 && (
          <ul style={{ margin: 0, padding: "0.5rem 0" }}>
            {submenuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  style={{
                    display: "block",
                    padding: "0.5rem 1rem",
                    color: "#1A1A1A",
                    textDecoration: "none",
                    fontSize: "15px",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#f5f5f5")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
