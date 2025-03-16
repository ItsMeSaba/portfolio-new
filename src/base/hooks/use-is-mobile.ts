import { useEffect, useState } from "react";

interface Props {
  breakpoint?: number;
}

export function useIsMobile(props: Props = {}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < (props?.breakpoint || 768));
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [props?.breakpoint]);

  return isMobile;
}
