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
          style={{ marginLeft: "5px" }}
        />
      </a>

      {isOpen && submenuItems.length > 0 && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            backgroundColor: "white",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            listStyle: "none",
            padding: "0.5rem 0",
            margin: 0,
            zIndex: 1000,
            minWidth: "150px",
          }}
        >
          {submenuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                style={{
                  display: "block",
                  padding: "0.5rem 1rem",
                  color: "#1A1A1A",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
