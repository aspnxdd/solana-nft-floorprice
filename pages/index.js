import Link from "next/link";

export default function Home() {
  return (
    <div className="main-links">
      <Link
        href={{
          pathname: "/fetch/solanadogesnfts",
          
        }}
      >
        solanadogesnfts
      </Link>
      <Link href="/fetch/thugbirdz">thugbirdz</Link>
    </div>
  );
}
