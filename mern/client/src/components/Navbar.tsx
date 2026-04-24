import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="p-2 bg-[var(--nav)]">
      <nav className="flex justify-start items-center">    
        <NavLink to="/">
        <img alt="TEMP logo" className="h-7 inline pr-3" src="../src/assets/react.svg"></img>
            PC Builder
        </NavLink>

        <NavLink to="/3d-guide" className="ml-auto mr-5 p-1 hover:bg-[var(--nav-hover)] rounded-lg">
            3d Walkthrough
        </NavLink>

        <NavLink to="/my-builds" className="ml-5 mr-5  p-1 hover:bg-[var(--nav-hover)] rounded-lg">
            My Builds
        </NavLink>

        <NavLink to="/sign-in" className="ml-5 mr-5 text-[var(--text-acc)]  p-1 hover:bg-[var(--nav-hover)] rounded-lg">
            Sign-in
        </NavLink>
      </nav>
    </div>
  );
};