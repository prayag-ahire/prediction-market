import { createClient } from "@supabase/supabase-js";
export const UseSupabase = () => {
  const supabase = createClient(
    "https://dttrtfkndflccxmkaakg.supabase.co",
    "sb_publishable_wKupiDSwaUtl_NFYMkfXfw_mN2mW_fm",
  );
  return supabase;
};
