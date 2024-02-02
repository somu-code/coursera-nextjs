import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <nav className="flex flex-row justify-between items-center">
        <div className="nav-left text-xl font-semibold"><Link href="/">Coursera</Link></div>
        <div className="nav-right flex flex-row items-center gap-4">
          <Button className="text-lg font-medium"><Link href="/instructor">Login as Instructor</Link></Button>
          <Button className="text-lg font-medium"><Link href="/student">Login as Student</Link></Button>
        </div>
      </nav>
    </header>
  )
}
