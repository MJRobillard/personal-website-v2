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
            <Link href="/trickster-crossroads">
              Crossroads
            </Link>
          </li>
          <li>
            <Link href="/copper-chronicles">
              Chronicles
            </Link>
          </li>
          <li>
            <Link href="/twin-paths">
              Twin Paths
            </Link>
          </li>
          <li>
            <Link href="#contact">
              Contact
            </Link>
          </li>
        </ul>
        
        <div className="controls">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}


