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
    </form>
  );
}
