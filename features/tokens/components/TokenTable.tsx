"use client";

import { useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { usePriceFeed } from "@/features/tokens/hooks/usePriceFeed";
import SkeletonRow from "../states/SkeletonRow";
import TokenRow from "./TokenRow";
import { useTokenSorting } from "@/features/tokens/hooks/useTokenSorting";
import { useTabDataQuery } from "../hooks/useTabDataQuery";

import {
  setActiveTab,
  setSort,
  selectActiveTokens,
  updatePrices,
} from "@/features/tokens/states/tokenSlice";

import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";

export default function TokenTable() {
  const dispatch = useDispatch();
  const tokensState = useSelector((state: RootState) => state.tokens);
  const { activeTab, sortKey, sortDir } = tokensState;

  const tokens = selectActiveTokens(tokensState);

  // Fetch + background refresh
  const { isLoading, isError } = useTabDataQuery(activeTab);


  usePriceFeed();


  if (isError) throw new Error("Token API failed");

  const sortedTokens = useTokenSorting(tokens, sortKey, sortDir);
  
  const SortIcon = ({ keyName }: { keyName: "price" | "change" | "volume" }) => {
    const isActive = sortKey === keyName;
    return (
      <span className="flex flex-col leading-none">
        <ArrowUpIcon
          className={`w-3 h-3 ${
            isActive && sortDir === "asc" ? "text-white" : "text-gray-500"
          }`}
        />
        <ArrowDownIcon
          className={`w-3 h-3 -mt-0.5 ${
            isActive && sortDir === "desc" ? "text-white" : "text-gray-500"
          }`}
        />
      </span>
    );
  };

  return (
    <div className="rounded-xl border border-white/10 bg-[#0F1524]">
      {/* Tabs */}
      <div className="flex gap-3 px-4 py-2">
        {[
          ["new", "New Pairs"],
          ["final", "Final Stretch"],
          ["migrated", "Migrated"],
        ].map(([id, label]) => (
          <button
            key={id}
            onClick={() => dispatch(setActiveTab(id as any))}
            className={
              activeTab === id
                ? "text-white font-semibold border-b border-blue-400"
                : "text-gray-400"
            }
          >
            {label}
          </button>
        ))}
      </div>

      {/* Header */}
      <div className="grid grid-cols-6 px-4 py-3 text-xs uppercase text-gray-400 tracking-wide">
        <span>#</span>
        <span>Token</span>

        <span className="flex items-center justify-end gap-1 cursor-pointer"
          onClick={() => dispatch(setSort("price"))}>
          Price <SortIcon keyName="price" />
        </span>

        <span className="flex items-center justify-end gap-1 cursor-pointer"
          onClick={() => dispatch(setSort("change"))}>
          24h % <SortIcon keyName="change" />
        </span>

        <span className="flex items-center justify-end gap-1 cursor-pointer"
          onClick={() => dispatch(setSort("volume"))}>
          Volume <SortIcon keyName="volume" />
        </span>

        <span className="text-right">Trend</span>
      </div>

      {/* Body */}
      <div className="divide-y divide-white/5">
        {isLoading
          ? <>
              <SkeletonRow />
              <SkeletonRow />
              <SkeletonRow />
            </>
          : sortedTokens.map((t, i) => (
              <TokenRow key={t.symbol} index={i + 1} {...t} />
            ))}
      </div>
    </div>
  );
}
