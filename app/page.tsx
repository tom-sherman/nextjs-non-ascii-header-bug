import Link from "next/link";
import { redirect } from "next/navigation";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <form
      action={async () => {
        "use server";
        redirect("/mañana");
      }}
    >
      <button>Go</button>
      <br />
      <Link href="/mañana">Link component</Link>
      <br />
      <a href="/mañana">Anchor tag</a>
      <br />
      <Link href="/redirect">Link to redirect</Link>
      <br />
      <a href="/redirect">Anchor tag to redirect</a>
    </form>
  );
}
