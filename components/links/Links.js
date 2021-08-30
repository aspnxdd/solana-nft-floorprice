import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";

export default function Links() {
  return (
    <>
      <div className="main-links">
        <Link href="/fetch/solanadogesnfts">
          <a className="a-link">
            <HiChevronRight /> SolanaDoges{" "}
          </a>
        </Link>
        <Link href="/fetch/thugbirdz">
          <a className="a-link">
            <HiChevronRight /> Thugbirdz{" "}
          </a>
        </Link>
        <Link href="/fetch/degenapes">
          <a className="a-link">
            <HiChevronRight /> Degen Ape Academy{" "}
          </a>
        </Link>
        <Link href="/fetch/abstratica">
          <a className="a-link">
            <HiChevronRight /> Abstratica{" "}
          </a>
        </Link>
        <Link href="/fetch/solpops">
          <a className="a-link">
            <HiChevronRight /> Solpops{" "}
          </a>
        </Link>
        <Link href="/fetch/soliens">
          <a className="a-link">
            <HiChevronRight /> Soliens{" "}
          </a>
        </Link>
        <Link href="/fetch/soldalas">
          <a className="a-link">
            <HiChevronRight /> Soldalas{" "}
          </a>
        </Link>
        <Link href="/fetch/solanimals">
          <a className="a-link">
            <HiChevronRight /> Solanimals{" "}
          </a>
        </Link>
        <Link href="/fetch/pixelpenguin">
          <a className="a-link">
            <HiChevronRight /> PixelPenguins{" "}
          </a>
        </Link>
        <Link href="/fetch/frakt">
          <a className="a-link">
            <HiChevronRight /> Frakt{" "}
          </a>
        </Link>
        <Link href="/fetch/solchihuahua">
          <a className="a-link">
            <HiChevronRight /> SolChihuahua{" "}
          </a>
        </Link>
      </div>
    </>
  );
}
