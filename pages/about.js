import { useRouter } from "next/router";
import Link from "next/link";

function AboutPage() {
  const router = useRouter();
  console.log("ROUTER LOG", router.query);

  return (
    <div>
      <Link href={{ pathname: "/" }}>Home</Link>
      <br></br>
      <br></br>
      <h1>About Page</h1>
    </div>
  );
}

export default AboutPage;
