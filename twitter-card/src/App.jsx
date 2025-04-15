import "./index.css";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
function App() {
  const users = [
    { initialIsFollowing: false, userName: "orionwilx", name: "Wilman Zuleta" },
    { initialIsFollowing: true, userName: "caro-ov", name: "Adrina Olivares" },
    { initialIsFollowing: false, userName: "unknown", name: "unknown" },
  ];

  return (
    <section className="App">
      <h2 className="info">A quien quieres seguir ?</h2>
      {users.map(({ name, userName, initialIsFollowing }) => {
        return (
          <TwitterFollowCard
            key={userName}
            name={name}
            userName={userName}
            initialIsFollowing={initialIsFollowing}
          />
        );
      })}
    </section>
  );
}

export default App;
// This is a simple React component that renders a heading "Twitter Card" inside a div.
