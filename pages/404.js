import { useRouter } from "next/router";
import Link from "next/link";

function ErrorPage() {
  const router = useRouter();
  console.log("ROUTER LOG", router.query);

  return (
    <div>
      <h1>Page not found</h1>
      <Link href={{ pathname: "/" }}>Back to Home</Link>
    </div>
  );
}

export default ErrorPage;
