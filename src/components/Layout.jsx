import clsx from "clsx";
import Navbar from "./Navbar";

function Layout({ children, className }) {
  return (
    <div
      className={clsx(
        "bg-neutral-100 p-4 pb-10 lg:px-25 grid gap-4",
        className,
      )}
    >
      <Navbar></Navbar>
      {children}
    </div>
  );
}

export default Layout;
