import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-2">
      <h1 className="text-xl font-semibold">Welcome to Coursera</h1>
      {/* <Link href="/instructor"><h3 className="text-lg font-medium">Register/Login as a Instructor</h3></Link> */}
      {/* <Link href="/student"><h3 className="text-lg font-medium">Register/Login as a Student</h3></Link> */}
    </main>
  );
}
