import { Suspense } from "react";
import TokenTable from "@/features/tokens/components/TokenTable";
import TokenErrorBoundary from "@/features/tokens/states/ErrorBoundary";

export const metadata = {
  title: "Token Discovery — Pulse",
  description: "Real-time token analytics dashboard with price updates and sorting.",
};

export default function PulsePage() {
  return (
    <main className="min-h-screen bg-[#0B0F1A] text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-xl font-semibold mb-4">
          Token Discovery
        </h1>

        <TokenErrorBoundary>
          <Suspense fallback={<p className="text-gray-400">Loading...</p>}>
            <TokenTable />
          </Suspense>
        </TokenErrorBoundary>
      </div>
    </main>
  );
}
