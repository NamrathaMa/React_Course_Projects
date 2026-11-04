import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="nav-bar-section">
      <span className="brand">🌼 Job Tracker</span>
      <NavLink to="/" end>
        Board
      </NavLink>
      <NavLink to="/jobs/new">Add Job</NavLink>
      <NavLink to="/stats">Stats</NavLink>
    </nav>
  );
}
