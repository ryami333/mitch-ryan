import React from "react";
import throttle from "lodash/throttle";

interface ContextType {
  innerHeight: number;
  innerWidth: number;
}

interface ContainerProps {
  children: React.ReactNode;
}

const Context = React.createContext<ContextType | null>(null);

export default Context;

export function Provider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [state, setState] = React.useState<ContextType>(
    typeof window !== "undefined"
      ? {
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        }
      : { innerWidth: 0, innerHeight: 0 },
  );

  React.useEffect((): (() => void) => {
    const handleResize = throttle((): void =>
      setState({
        // eslint-disable-next-line react/no-unused-state
        innerHeight: window.innerHeight,
        // eslint-disable-next-line react/no-unused-state
        innerWidth: window.innerWidth,
      }),
    );

    window.addEventListener("resize", handleResize);

    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  return <Context.Provider value={state}>{children}</Context.Provider>;
}

export function useWindow(): ContextType {
  const context = React.useContext(Context);

  if (!context) {
    throw new Error("useWindow used outside of Provider");
  }

  return context;
}
