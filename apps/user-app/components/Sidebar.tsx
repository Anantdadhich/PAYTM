"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const Sidebar = ({
  href,
  title,
  icon,
}: {
  href: string;
  title: string;
  icon: React.ReactNode;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const selected = pathname === href;

  return (
    <div
      className={`flex items-center gap-4 p-4 pl-6 rounded-lg transition-all duration-300 cursor-pointer group ${
        selected
          ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg"
          : "hover:bg-gray-100 text-gray-600"
      }`}
      onClick={() => {
        router.push(href);
      }}
    >
      {/* Icon */}
      <div
        className={`text-2xl transition-colors ${
          selected
            ? "text-white"
            : "text-gray-500 group-hover:text-purple-600"
        }`}
      >
        {icon}
      </div>

      {/* Title */}
      <div
        className={`text-sm font-semibold transition ${
          selected ? "text-white" : "group-hover:text-purple-700"
        }`}
      >
        {title}
      </div>
    </div>
  );
};
