import HeaderCarLogo from "@/components/navbar/headerCarLogo";
import HeaderImages from "@/components/navbar/headerImage";

export default function Home() {
  return (
    <>
      <HeaderImages />
      <HeaderCarLogo />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>hello</div>
      </main>
    </>
  );
}