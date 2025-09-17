"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="logo">
          MJRobillard
        </Link>
        
        <ul className="nav-links">
          <li>
            <a href="#about" className="hover:text-accent transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#timeline" className="hover:text-accent transition-colors">
              Timeline
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-accent transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
          </li>
        </ul>
        
        <div className="controls">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}


