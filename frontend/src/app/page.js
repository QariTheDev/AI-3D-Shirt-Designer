import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function ThreeScene() {
  return (
    <main className="transition-all ease-in-out h-screen">
      <Navbar />
      <Home />
    </main>
  );
}
