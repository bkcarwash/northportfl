import { cookies } from "next/headers";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";

export const metadata = {
  title: "Admin | North Port Car Wash",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const store = await cookies();
  const isAuthed = store.get("npcw_admin")?.value === "1";

  if (!isAuthed) return <AdminLogin />;
  return <AdminDashboard />;
}
