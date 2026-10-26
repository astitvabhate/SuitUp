import { getHealth } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function Home() {
  let status = "backend unreachable";
  try {
    const h = await getHealth();
    status = `API: ${h.status} · DB: ${h.db}`;
  } catch {}

  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold">Cases</h1>
      <p className="text-slate-600">Case list arrives in Milestone 3.</p>
      <p className="text-sm text-slate-500">{status}</p>
    </div>
  );
}
