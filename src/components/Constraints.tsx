import React, { ReactNode } from "react";

export const Constraints = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto h-full w-full max-w-screen-xl p-4">{children}</div>
  );
};
