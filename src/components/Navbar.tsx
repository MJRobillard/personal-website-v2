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
              thing1
            </Link>
          </li>
          <li>
            <Link href="/copper-chronicles">
            thing1
            </Link>
          </li>
          <li>
            <Link href="/twin-paths">
            thing1
            </Link>
          </li>
          <li>
            <Link href="#contact">
            thing1
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


