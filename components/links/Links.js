import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";

export default function Links() {
  return (
    <>
      <div className="main-links">
        <Link href="/fetch/solanadogesnfts">
          <a>
            <HiChevronRight /> SolanaDoges{" "}
          </a>
        </Link>
        <Link href="/fetch/thugbirdz">
          <a>
            <HiChevronRight /> Thugbirdz{" "}
          </a>
        </Link>
        <Link href="/fetch/degenapes">
          <a>
            <HiChevronRight /> Degen Ape Academy{" "}
          </a>
        </Link>
        <Link href="/fetch/abstratica">
          <a>
            <HiChevronRight /> Abstratica{" "}
          </a>
        </Link>
        <Link href="/fetch/solpops">
          <a>
            <HiChevronRight /> Solpops{" "}
          </a>
        </Link>
        <Link href="/fetch/soliens">
          <a>
            <HiChevronRight /> Soliens{" "}
          </a>
        </Link>
        <Link href="/fetch/soldalas">
          <a>
            <HiChevronRight /> Soldalas{" "}
          </a>
        </Link>
        <Link href="/fetch/solanimals">
          <a>
            <HiChevronRight /> Solanimals{" "}
          </a>
        </Link>
        <Link href="/fetch/pixelpenguin">
          <a>
            <HiChevronRight /> PixelPenguins{" "}
          </a>
        </Link>
        <Link href="/fetch/frakt">
          <a>
            <HiChevronRight /> Frakt{" "}
          </a>
        </Link>
      </div>
    </>
  );
}
