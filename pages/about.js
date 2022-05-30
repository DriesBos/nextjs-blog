import { useRouter } from "next/router";

function AboutPage() {
  const router = useRouter();
  console.log("ROUTER LOG", router.query);

  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}

export default AboutPage;
