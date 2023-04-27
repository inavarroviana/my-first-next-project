import Image from "next/image";

function HomePage() {
  return (
    <>
      <Image
        width="150"
        height="150"
        src={`/Alocasia-dragon-scale_700x.webp`}
        alt="Local Picture"
      />
      <h1 className="head">This is our app for the time being</h1>
    </>
  );
}
export default HomePage;
