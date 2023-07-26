import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  return (
    <div
      style={{
        background:
        "linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url(https://images.squarespace-cdn.com/content/v1/5e9515801a2cc96f64040ef3/b9c6d0fa-be93-404a-ba01-c5b192df1553/photo_SXM2022021500001571.jpg), lightgray 50% / cover no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ fontSize: "80px",color:'white' }}>Welcome to My Avatar Project!</h1>
      <div>
        <button
          style={{
            backgroundColor: "#24bbdc",
            padding: "10px 30px",
            fontSize: "20px",
            borderRadius: "10px",
            border: "none",
            marginRight: "30px",
          }}
          onClick={() => router.push("/avatar")}
        >
          Create Avatar
        </button>
        <button
          style={{
            backgroundColor: "#24bbdc",
            padding: "10px 30px",
            fontSize: "20px",
            borderRadius: "10px",
            border: "none",
          }}
          onClick={() => router.push("/room")}
        >
          Join Room
        </button>
      </div>
    </div>
  );
}
