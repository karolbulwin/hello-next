import Link from "next/link";

const Index = () => (
  <div>
    <Link href="/about">
      <a title="About Page">About Page</a>
    </Link>
    <Link href="/about">
      <button>Go to About Page</button>
    </Link>

    <p>Hello Next.js</p>
    <input placeholder="Enter Some Text" />
  </div>
);

export default Index;
