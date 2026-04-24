import { NavLink } from "react-router-dom"

export default function SecondaryNavbar() {
    return(
        <div className="p-2 bg-[var(--nav-sec)]">
            <nav className="flex justify-start items-center">
                <NavLink to="/trending" className="ml-2 p-1 hover:bg-[var(--nav-hover)] rounded-lg">
                    Trending
                </NavLink>

                <NavLink to="/parts" className="ml-10 p-1 hover:bg-[var(--nav-hover)] rounded-lg">
                    Parts
                </NavLink>

                <NavLink to="/build-guide" className="ml-10 p-1 hover:bg-[var(--nav-hover)] rounded-lg">
                    Build Guide
                </NavLink>

                <NavLink to="/finished-builds" className="ml-10 p-1 hover:bg-[var(--nav-hover)] rounded-lg">
                    Finished Builds
                </NavLink>

                <NavLink to="/pricing" className="ml-10 p-1 hover:bg-[var(--nav-hover)] rounded-lg">
                    Pricing
                </NavLink>

                <NavLink to="/forum" className="ml-10 p-1 hover:bg-[var(--nav-hover)] rounded-lg">
                    Forum
                </NavLink>
            </nav>
        </div>
    );
};