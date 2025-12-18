import Breadcrump from "../components/Breadcrump/Breadcrump";
import Team from "../components/Doctor/Doctor";
export default function TeamPage() {
  return (
    <div>
      <Breadcrump Title="Doctors"/>
      <Team limit={8}/>
     </div>
  );
}