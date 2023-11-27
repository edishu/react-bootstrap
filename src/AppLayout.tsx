// Vendors
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="px-6 pt-6">
      <Outlet />
    </div>
  );
};
