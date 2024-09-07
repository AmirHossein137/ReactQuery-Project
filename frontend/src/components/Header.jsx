import { NavLink } from "react-router-dom";

const headerLink = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Add Product", href: "/add-product" },
  { id: 3, name : "Pagination" , href : "/pagination" },
  { id: 4, name : "InfinityQuery" , href:"/infinityQuery"},
  { id: 5, name : "ParallelQueries" , href : "/parallelqueries" }
];

const Header = () => {
  return (
    <div className="flex items-center gap-4 bg-gray-100 shadow rounded-lg p-4 mt-2">
      {headerLink?.map((link) => (
        <NavLink
          key={link.id}
          to={link.href}
          className={({ isActive }) => {
            return (
              "py-2 px-5 rounded-lg " +
              (isActive ? "bg-rose-500 text-white font-bold" : "bg-transparent")
            );
          }}
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Header;
