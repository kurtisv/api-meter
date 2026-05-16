export function CodePanel() {
  return (
    <div className="border border-slate-800 bg-slate-950 p-5 text-slate-100 shadow-xl">
      <div className="mb-5 flex items-center justify-between border-b border-slate-800 pb-3">
        <p className="text-sm font-medium text-slate-300">metered request</p>
        <span className="bg-teal-400/15 px-2.5 py-1 text-xs font-medium text-teal-200">
          41ms
        </span>
      </div>
      <pre className="overflow-x-auto text-sm leading-7">
        <code>{`curl https://api.apimeter.dev/v1/events \\
  -H "Authorization: Bearer ak_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "customerId": "cus_atlas",
    "metric": "search.requests",
    "quantity": 42,
    "metadata": {
      "route": "/v1/search",
      "plan": "Scale"
    }
  }'`}</code>
      </pre>
    </div>
  );
}
