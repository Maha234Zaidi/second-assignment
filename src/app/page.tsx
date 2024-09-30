import Link from "next/link";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <h2 className="text-center text-3xl font-bold hover:text-blue-900">"Home Page"</h2>
      </>
  );
}
