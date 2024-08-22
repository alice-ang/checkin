import { FC, ReactNode } from "react";
import { BackButton } from "./BackButton";
import { Button } from "./ui";

type HeaderProps = {
  children?: ReactNode;
};

export const HeaderBar: FC<HeaderProps> = ({ children }) => {
  return (
    <header className="grid h-24 bg-secondary">
      <nav className="mx-auto flex w-full max-w-3xl flex-row items-center justify-between gap-2 place-self-end p-4">
        <BackButton />
        {children}

        <Button variant="ghost" size="icon" />
      </nav>
    </header>
  );
};
