"use client";
import React from "react";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type TokenRowProps = {
  index: number;
  name: string;
  symbol: string;
  price: number;
  change: number;
  volume: number;
  direction?: "up" | "down" | null;
  icon?: string; 
};

function TokenRowComponent(props: TokenRowProps) {
  const { index, name, symbol, price, change, volume, direction, icon } = props;
  const isPositive = change >= 0;

  const highlight =
    direction === "up"
      ? "bg-green-900/20"
      : direction === "down"
      ? "bg-red-900/20"
      : "";

  return (
    <Dialog>
      <div
        className={`grid grid-cols-6 px-4 py-3 h-14 items-center
        transition-colors duration-200 hover:bg-white/5 cursor-pointer ${highlight}`}
      >
        {/* === Row Click → Opens Modal === */}
        <DialogTrigger asChild>
          <div className="col-span-5 grid grid-cols-5 items-center">
            <span className="text-gray-400">{index}</span>

            <div className="flex items-center gap-2">
              
                              {icon ? (
                  <img
                    src={icon}
                    alt={symbol}
                    className="h-6 w-6 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-6 w-6 rounded-full bg-gray-600" />
                )}


              <div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <p className="text-sm font-medium cursor-help">{name}</p>
                  </TooltipTrigger>

                  <TooltipContent side="top">
                    <div className="text-sm">
                      <div className="font-semibold">{name}</div>
                      <div className="text-xs text-gray-400">{symbol}</div>
                    </div>
                  </TooltipContent>
                </Tooltip>

                <p className="text-xs text-gray-400">{symbol}</p>
              </div>
            </div>

            <span
              className={`text-right text-sm ${
                direction === "up"
                  ? "price-flash-up text-green-400"
                  : direction === "down"
                  ? "price-flash-down text-red-400"
                  : ""
              }`}
            >
              ${price}
            </span>

            <span
              className={`text-right text-sm ${
                isPositive ? "text-green-400" : "text-red-400"
              }`}
            >
              {change}%
            </span>

            <span className="text-right text-sm">${volume}B</span>
          </div>
        </DialogTrigger>

        {/* === Popover (Independent from Modal) === */}
        <Popover>
          <PopoverTrigger asChild>
            <button
              onClick={(e) => e.stopPropagation()}
              aria-label="Open token actions"
              className="px-2 py-1 rounded hover:bg-white/10"
            >
              ⋮
            </button>
          </PopoverTrigger>

          <PopoverContent
            side="bottom"
            align="end"
            className="w-40 bg-[#0F1524] border border-white/10 text-sm"
          >
            <div className="flex flex-col gap-2">
              <button className="text-left text-white hover:text-blue-300">
                View chart
              </button>
              <button className="text-left text-white hover:text-blue-300">
                Add to watchlist
              </button>
              <button className="text-left text-white hover:text-blue-300">
                Open token page
              </button>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* === MODAL === */}
      <DialogContent
        className="bg-[#0F1524] border border-white/10 rounded-xl shadow-xl
        [&>button]:text-white [&>button:hover]:bg-white/10"
      >
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-white">
            {name} <span className="text-white">({symbol})</span>
          </DialogTitle>

          <DialogDescription className="text-gray-400">
            Live token snapshot — price, volume and movement trend.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div className="p-3 rounded-lg bg-white/5">
            <p className="text-white text-xs mb-1">Price</p>
            <p className="font-semibold text-white">${price}</p>
          </div>

          <div className="p-3 rounded-lg bg-white/5">
            <p className="text-white text-xs mb-1">24h Change</p>
            <p
              className={
                isPositive
                  ? "text-green-400 font-semibold"
                  : "text-red-400 font-semibold"
              }
            >
              {change}%
            </p>
          </div>

          <div className="p-3 rounded-lg bg-white/5">
            <p className="text-white text-xs mb-1">Volume</p>
            <p className="font-semibold text-white">${volume}B</p>
          </div>

          <div className="p-3 rounded-lg bg-white/5">
            <p className="text-white text-xs mb-1">Trend</p>
            <p
              className={
                direction === "up"
                  ? "text-green-400"
                  : direction === "down"
                  ? "text-red-400"
                  : "text-gray-300"
              }
            >
              {direction ? direction.toUpperCase() : "Stable"}
            </p>
          </div>
        </div>

    
      </DialogContent>
    </Dialog>
  );
}

export default React.memo(TokenRowComponent);
