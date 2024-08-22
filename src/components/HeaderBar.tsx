import { FC, ReactNode } from "react";
import { BackButton } from "./BackButton";
import { Button } from "./ui";

type HeaderProps = {
  children?: ReactNode;
};

export const HeaderBar: FC<HeaderProps> = ({ children }) => {
  return (
    <header className="grid h-24 bg-secondary">
      <nav className="place-self-end0 mx-auto flex w-full max-w-screen-xl flex-row items-center justify-between gap-2 p-4">
        <BackButton />
        {children}

        <Button variant="ghost" size="icon" />
      </nav>
    </header>
  );
};
