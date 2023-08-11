import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Nabeel-Social</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className="w-full mt-2 flex justify-center items-center">
        <h1 className="text-md">Nabeel Socials</h1>
      </div>
    </main>
  );
}
