import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ allowedRoles }) => {
  const { token, role, id: userId } = useSelector((state) => state.user);

  console.log("🔹 Token:", token);
  console.log("🔹 Role:", role);
  console.log("🔹 UserId:", userId);
  console.log("🔹 Allowed Roles:", allowedRoles);
  console.log("Role Type:", typeof role);
console.log("Allowed Roles:", allowedRoles.map(r => typeof r));


  if (!token) {
    console.warn("🔴 No token found, redirecting to /login");
    return <Navigate to="/" replace />;
  }

  if (!allowedRoles.includes(Number(role))) {
    if (!userId) {
      console.error("⚠️ User ID is missing. Redirecting to /login");
      return <Navigate to="/" replace />;
    }
    console.warn(`🔴 Role not allowed (${role}), redirecting to /dashboard/${userId}`);
    return <Navigate to={`/dashboard/${userId}`} replace />;
  }

  console.log("✅ Access granted to protected route.");
  return <Outlet />;
};

export default ProtectedRoute;
