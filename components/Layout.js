// nav bar
import Navbar from "../components/navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="overflow-hidden">{children}</div>;
    </>
  );
}
