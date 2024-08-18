import { signInWithGoogle, signOutFromGoogle } from "./api/auth";
import "./App.css";
import { useAuth } from "./hooks/useAuth";

export interface UserType {
  userId: string;
  username: string;
  email: string;
}

function App() {
  const { user, loading } = useAuth();

  const onClickLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const onClickLogout = async () => {
    try {
      await signOutFromGoogle();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div>
        {user ? (
          <div>
            <h1>Welcome</h1>
            <button onClick={onClickLogout}>LogOut</button>
          </div>
        ) : (
          <button onClick={onClickLogin}>Login</button>
        )}
      </div>
    </>
  );
}

export default App;
