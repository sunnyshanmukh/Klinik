import Breadcrump from "../components/Breadcrump/Breadcrump";
import About from "../components/About/About";
import Feature from "../components/Feature/Feature";
import Team from "../components/Doctor/Doctor";
export default function AboutPage() {
  return (
    <div>
      <Breadcrump Title="About Us"/>
      <About />
      <Feature />
      <Team limit={4}/>
     </div>
  );
}