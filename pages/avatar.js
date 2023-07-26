import React from "react";

export default function AvatarPage() {
  const subdomain = "demo";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#24bbdc",
      }}
    >
      <h1 style={{ fontSize: "35px" }}>Create Your Avatar</h1>
      <iframe
        src={`https://${subdomain}.readyplayer.me/avatar?frameApi`}
        title="Avatar"
        id="avatar-creator"
        className="avatar-creator"
        allow="camera *; microphone *"
        style={{
          width: "100%",
          height: "90vh",
        }}
      />
    </div>
  );
}
