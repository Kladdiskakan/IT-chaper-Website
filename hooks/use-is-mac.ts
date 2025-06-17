import { userAgent } from "next/server";
import { useEffect, useState } from "react";

export function useIsMac() {
  const [isMac, setIsMac] = useState(true);

  useEffect(() => {
    const headers = new Headers();
    headers.set("User-Agent", navigator.userAgent);
    const { os } = userAgent({ headers });
    setIsMac(os.name === "Mac OS");
  }, []);

  return isMac;
}
