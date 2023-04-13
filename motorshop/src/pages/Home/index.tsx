import CarShowcase from "../../components/CarShowcase";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Home() {
  
  return (
    <div className="flex flex-col">
      <Header />
      <CarShowcase />
      <Footer />
    </div>
  );
}
