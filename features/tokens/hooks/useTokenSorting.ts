"use client";
import { useMemo } from "react";
import { Token, SortKey, SortDir } from "@/features/tokens/states/tokenSlice";

export function useTokenSorting(
  tokens: Token[],
  sortKey: SortKey,
  sortDir: SortDir
) {
 return useMemo(() => {
  return [...tokens].sort((a, b) => {
    const A = a[sortKey];
    const B = b[sortKey];

    // Handle string values safely
    if (typeof A === "string" && typeof B === "string") {
      return (A as string).localeCompare(B as string);
    }

    // Numeric fallback
    const numA = Number(A);
    const numB = Number(B);

    return sortDir === "asc" ? numA - numB : numB - numA;
  });
}, [tokens, sortKey, sortDir]);
}
