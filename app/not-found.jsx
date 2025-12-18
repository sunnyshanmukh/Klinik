import Breadcrump from "./components/Breadcrump/Breadcrump";
import NotFound from "./components/404/404";
export default function NotFoundPage() {
  return (
    <div>
      <Breadcrump Title="404 Error"/>
        <NotFound />
     </div>
  );
}