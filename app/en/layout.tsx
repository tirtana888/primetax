"use client";

import * as React from "react";

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  React.useEffect(() => {
    const prevLang = document.documentElement.lang;
    document.documentElement.lang = "en";
    return () => {
      document.documentElement.lang = prevLang || "id";
    };
  }, []);

  return <div lang="en">{children}</div>;
}
