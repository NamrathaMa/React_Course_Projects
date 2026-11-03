import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Board</Link>
      <Link to="/jobs/new">Add Job</Link>
      <Link to="/stats">Stats</Link>
    </nav>
  );
}
