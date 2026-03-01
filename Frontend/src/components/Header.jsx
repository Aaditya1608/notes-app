import { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { FaPlus , FaEye} from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";
const styles = {
  "@import": "url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500&display=swap')",
};

export default function Header() {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;1,400&family=DM+Sans:wght@400;500;600&display=swap');

        :root {
          --charcoal: #32373B;
          --slate: #4A5859;
          --blush: #F4D6CC;
          --amber: #F4B860;
          --crimson: #C83E4D;
        }

        .header-root {
          background-color: var(--charcoal);
          border-bottom: 3px solid var(--crimson);
          font-family: 'DM Sans', sans-serif;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 4px 24px rgba(50,55,59,0.5);
        }

        .header-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .header-logo {
          display: flex;
          align-items: baseline;
          gap: 6px;
          text-decoration: none;
          user-select: none;
        }

        .header-logo-main {
          font-family: 'Playfair Display', serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--blush);
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .header-logo-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--crimson);
          margin-bottom: 4px;
          flex-shrink: 0;
        }

        .header-logo-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--amber);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-left: 2px;
        }

        .header-nav {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .header-divider {
          width: 1px;
          height: 28px;
          background: var(--slate);
          margin: 0 4px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          padding: 0.55rem 1.25rem;
          transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
          outline: none;
          text-transform: uppercase;
        }

        .btn:active {
          transform: scale(0.97);
        }

        .btn-create {
          background: var(--crimson);
          color: #fff;
          box-shadow: 0 2px 10px rgba(200,62,77,0.35);
        }

        .btn-create:hover {
          background: #d94456;
          box-shadow: 0 4px 18px rgba(200,62,77,0.55);
          transform: translateY(-1px);
        }

        .btn-view {
          background: transparent;
          color: var(--blush);
          border: 1.5px solid var(--slate);
        }

        .btn-view:hover {
          background: var(--slate);
          border-color: var(--amber);
          color: var(--amber);
          transform: translateY(-1px);
        }

        .btn-icon {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }

        @media (max-width: 600px) {
          .header-logo-sub {
            display: none;
          }
          .header-logo-main {
            font-size: 1.4rem;
          }
          .btn {
            padding: 0.5rem 0.9rem;
            font-size: 0.8rem;
          }
        }
          .active-view {
  background: var(--slate);
  border-color: var(--amber);
  color: var(--amber);
}

.active-create {
  background: #d94456;
  box-shadow: 0 4px 18px rgba(200,62,77,0.6);
}
      `}</style>

      <header className="header-root">
        <div className="header-inner">

          {/* Logo */}
          <a className="header-logo" href="/">
            <span className="header-logo-main">Notia</span>
            <span className="header-logo-dot" />
            <span className="header-logo-sub">Notes</span>
          </a>

          {/* Navigation Buttons */}
          <nav className="header-nav" aria-label="Primary navigation">
            <button
  className={`btn btn-view ${
    location.pathname === "/" ? "active-view" : ""
  }`}
  onClick={() => navigate("/")}
  aria-label="Dashboard"
>
  <BiSolidDashboard/>
  Dashboard
</button>
<div className="header-divider" aria-hidden="true" />
            <button
              className={`btn btn-view ${
    location.pathname === "/notes" ? "active-view" : ""
  }`}
              onClick={()=>navigate('/notes')}
              onMouseEnter={() => setHovered("view")}
              onMouseLeave={() => setHovered(null)}
              aria-label="View Notes"
            >
              <FaEye/>
              View Notes
            </button>

            <div className="header-divider" aria-hidden="true" />

            <button
              className={`btn btn-view ${
    location.pathname === "/create-note" ? "active-view" : ""
  }`}
              onClick={()=>navigate("/create-note")}
              onMouseEnter={() => setHovered("create")}
              onMouseLeave={() => setHovered(null)}
              aria-label="Create new note"
            >
              <FaPlus/>
              Create
            </button>
            

          </nav>
        </div>
      </header>
    </>
  );
}