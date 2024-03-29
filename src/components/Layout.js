import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div id="container">
      <header>
        <Link to="/">
          <h1>Movie archives</h1>
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
