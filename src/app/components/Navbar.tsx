import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="space-x-9 bg-gray-800 p-7 ">
        <Link
          href="/about"
          className="text-gray-300 hover:text-white font-bold text-2xl"
        >
          About
        </Link>

        <Link
          href="/contact"
          className="text-gray-300 hover:text-white font-bold text-2xl"
        >
          Contact
        </Link>

        <Link
          href="/team"
          className="text-gray-300 hover:text-white font-bold text-2xl"
        >
          Team
        </Link>

        <Link
          href="/products"
          className="text-gray-300 hover:text-white font-bold text-2xl"
        >
          Products
        </Link>

        <Link
          href="/products/specialProducts"
          className="text-gray-300 hover:text-white font-bold text-2xl"
        >
          Special Products
        </Link>
      </div>

      <div>
        <h1 className="text-center text-5xl m-20 font-bold hover:text-blue-900">
          😍SYEDA MAHA ZAIDI😍
        </h1>
      </div>
    </>
  );
}
