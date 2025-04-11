import React from "react";
import { ChevronDown } from "lucide-react";

export default function NavigationLink({ label }) {
  return (
    <a
      href="#"
      className="d-flex align-items-center"
      style={{ color: "#1A1A1A" }}
    >
      {label} <ChevronDown size={16} className="ms-1" />
    </a>
  );
}
