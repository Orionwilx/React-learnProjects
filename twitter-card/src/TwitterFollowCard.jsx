import { useState } from "react";

export function TwitterFollowCard({
  name = "unknown",
  userName = "unknown",
  initialIsFollowing,
  children,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  // ===
  // const state = useState(false);
  // const isFollowing = state[0];
  // const setIsFollowing = state[1];

  const text = isFollowing ? "Siguiendo" : "Seguir";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  const buttonClassName = isFollowing
    ? "tw-follow-card-button is-following"
    : "tw-follow-card-button";

  console.log(isFollowing);
  return (
    <article className="tw-follow-card">
      {/* Esto es el ejemplo por si quieres usar la prop children*/}
      {children}
      <header className="tw-follow-card-header">
        <img
          src={`https://github.com/${userName}.png`}
          alt="Imagen de perfil"
          className="tw-follow-card-avatar"
        />
        <div className="tw-follow-card-info">
          <strong>{name}</strong>
          <span className="tw-follow-card-infoUserName">{`@${userName}`}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-follow-card-text"> {text} </span>
          <span className="tw-follow-card-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
