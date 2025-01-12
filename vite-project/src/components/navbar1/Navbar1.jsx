import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars2Icon } from "@heroicons/react/24/solid";

// Nav list component for non-logged-in users
const navListItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/",
  },
  {
    label: "Contact",
    href: "/",
  },
];

function NavList() {
  const navigate = useNavigate();
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, href }, key) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
          onClick={(e) => {
            e.preventDefault();
            if (href) {
              navigate(href);
            }
          }}
        >
          <span className="text-gray-900">{label}</span>
        </Typography>
      ))}
    </ul>
  );
}

export function NonLoggedInNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
  const navigate = useNavigate();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        {/* Logo/Brand Name */}
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          Blog Spot
        </Typography>

        {/* Navigation Links (Visible on Desktop) */}
        <div className="hidden lg:block">
          <NavList />
        </div>

        {/* Mobile Menu Toggle Button */}
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

        {/* Login Button */}
        <Button
          size="sm"
          variant="text"
          color="blue-gray"
          onClick={() => navigate("/adminLogin")}
        >
          <span>Login</span>
        </Button>
      </div>

      {/* Mobile Navigation Menu (Visible on Small Screens) */}
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}