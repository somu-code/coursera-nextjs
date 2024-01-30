import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav>
      <div className="nav-left">Coursera</div>
      <div className="nav-right">
        <Button>Register</Button>
        <Button>Login</Button>
      </div>
    </nav>
  )
}
