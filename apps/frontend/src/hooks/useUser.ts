import { useEffect, useState } from "react";
import { UseSupabase } from "./useSupabase";

export const UseUser = () => {
  const [claims, setclaims] = useState(null);
  const supabase = UseSupabase();
  useEffect(() => {
    supabase.auth.getClaims().then(({ data: { claims } }) => {
      setclaims(claims);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      supabase.auth.getClaims().then(({ data: { claims } }) => {
        setclaims(claims);
      });
    });
    return () => subscription.unsubscribe();
  }, [];

  return claims;
};
