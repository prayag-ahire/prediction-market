import { UseUser } from "./hooks/useUser";
import { UseSupabase } from "./hooks/useSupabase";

function App() {
  const claims = UseUser();
  const supabase = UseSupabase();
  return (
    <div>
      {!claims && (
        <button
          onClick={async () => {
            await supabase.auth.signInWithWeb3({
              chain: "solana",
              statement: "I confirm I want to Signin to predication market.",
              wallet: window.solana,
            });
          }}
        >
          Signin with Solana
        </button>
      )}
      {claims && (
        <button
          onClick={async () => {
            await supabase.auth.signOut();
          }}
        >
          Sign Out
        </button>
      )}
    </div>
  );
}

export default App;
