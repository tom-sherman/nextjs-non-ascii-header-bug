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
      <Link href="/mañana">
        Link component with non-ascii chars (works as expected)
      </Link>
      <br />
      <a href="/mañana">Anchor tag with non-ascii chars (works as expected)</a>
      <br />
      <Link href="/dynamic-redirect">
        Link component to dynamic redirect (works as expected)
      </Link>
      <br />
      <a href="/dynamic-redirect">Anchor tag to dynamic redirect</a>
      <br />
      <Link href="/static-redirect">
        Link component to static redirect (works as expected)
      </Link>
      <br />
      <a href="/static-redirect">
        Anchor tag to static redirect (works as expected)
      </a>
    </form>
  );
}
