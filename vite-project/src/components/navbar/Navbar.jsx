import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
  Input,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
  MagnifyingGlassIcon
} from "@heroicons/react/24/solid";
 
// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    route: "/Dashboard",
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
    route: "/Dashboard"
  },
  {
    label: "My Blogs",
    icon: InboxArrowDownIcon,
    route: "/createBlog",
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];


const APP_ID = "your-app-id";
const INDEX_NAME = "your-index-name";
const API_KEY = "your-algolia-api-key";


 
function ProfileMenu({handleLogout}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
 
  const closeMenu = () => setIsMenuOpen(false);

 
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.1"
            src="https://pics.craiyon.com/2023-07-05/fc5f288ac75d46d99a3cf1d77175504f.webp"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, route }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={() => {
                closeMenu();
                if (route) {
                  navigate(route);
                }
                if(label == "Sign Out" && handleLogout) {
                  handleLogout();
                }
              }}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
 
// nav list menu
const navListMenuItems = [
  {
    title: "@material-tailwind/html",
    description:
      "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
  },
  {
    title: "@material-tailwind/react",
    description:
      "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },
  {
    title: "Material Tailwind PRO",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const renderItems = navListMenuItems.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));
 
  // return (      # Pages dropdown menu !
  //   <React.Fragment>
  //     <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
  //       <MenuHandler>
  //         <Typography as="a" href="#" variant="small" className="font-normal">
  //           <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
  //             <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
  //             Pages{" "}
  //             <ChevronDownIcon
  //               strokeWidth={2}
  //               className={`h-3 w-3 transition-transform ${
  //                 isMenuOpen ? "rotate-180" : ""
  //               }`}
  //             />
  //           </MenuItem>
  //         </Typography>
  //       </MenuHandler>
  //       <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
  //         <Card
  //           color="blue"
  //           shadow={false}
  //           variant="gradient"
  //           className="col-span-3 grid h-full w-full place-items-center rounded-md"
  //         >
  //           <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
  //         </Card>
  //         <ul className="col-span-4 flex w-full flex-col gap-1">
  //           {renderItems}
  //         </ul>
  //       </MenuList>
  //     </Menu>
  //     <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
  //       <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
  //       Pages{" "}
  //     </MenuItem>
  //     <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
  //       {renderItems}
  //     </ul>
  //   </React.Fragment>
  // );
}
 
// nav list component
const navListItems = [
  {
    label: "Account",
    icon: UserCircleIcon,
    href: '/dashboard'
  },
  {
    label: "Blogs",
    icon: CubeTransparentIcon,
    href: '/AllBlogs',
  },
  {
    label: "Create Blog",
    icon: CodeBracketSquareIcon,
    href: '/createBlog'
  },
];
 
function NavList() {
  const navigate = useNavigate();
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon, href }, key) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
          onClick={(e) => {
            e.preventDefault();
            if(href) {
              navigate(href);
            }
          }}
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            <span className="text-gray-900"> {label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}
 
export function ComplexNavbar() {
  const navigate = useNavigate();

  const [isNavOpen, setIsNavOpen] = React.useState(false);
 
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/adminLogin');
  }
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);
 
  return (
    <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6 navbar">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900 navbar-first-div">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
          onClick={(e) =>{
            e.preventDefault();
            navigate("/home");
          }}
        >
          Blog Spot
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        {/* <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton> */}
 









        <ProfileMenu handleLogout={handleLogout} />
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}