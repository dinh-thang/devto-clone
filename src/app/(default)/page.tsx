import {HydrateClient} from "~/trpc/server";
import Menu from "~/app/_components/SideMenu/Menu";
import NavBar from "~/app/_components/NavBar/NavBar";

export default async function Home() {
  return (
    <HydrateClient>
      <div className="grid grid-cols-6 gap-4 w-full h-full">
        <div className="col-span-1">
          <Menu/>
        </div>

        <div className="col-span-4">
          <NavBar/>
        </div>
        <div className="col-span-1 bg-white">
        </div>
      </div>
    </HydrateClient>
  );
}