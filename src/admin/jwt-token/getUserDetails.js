import { jwtDecode } from "jwt-decode";

function getUserDetails() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);

    return {
      username: decoded.sub || null,
      roles: decoded.roles || [],
      issuedAt: decoded.iat || null,
      expiresAt: decoded.exp || null,
    };
  } catch (e) {
    console.error("Invalid token:", e);
    return null;
  }
}

export default getUserDetails;
