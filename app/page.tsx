import Link from "next/link";
import { redirect } from "next/navigation";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <form
      action={async () => {
        "use server";
        redirect("/mañana.com");
      }}
    >
      <button>Go</button>
      <br />
      <Link href="/mañana.com">Link component</Link>
      <br />
      <a href="/mañana.com">Anchor tag</a>
    </form>
  );
}
