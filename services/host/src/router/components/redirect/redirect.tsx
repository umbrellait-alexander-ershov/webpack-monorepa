import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import type { RedirectProps } from "./redirect.types";

export const Redirect = ({ pathTo }: RedirectProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(pathTo);
  }, []);

  return <div>redirect</div>;
};
