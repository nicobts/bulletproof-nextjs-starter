import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-100 p-4">
        <nav>
          <ul>
            <li>
              <Link href="/dashboard/tenants">Tenants</Link>
            </li>
            <li>
              <Link href="/dashboard/users">Users</Link>
            </li>
            <li>
              <Link href="/dashboard/todos">Todos</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
