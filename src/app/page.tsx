import {HydrateClient} from "~/trpc/server";
import Menu from "~/app/_components/SideMenu/Menu";

export default async function Home() {
  return (
    <HydrateClient>
      <div className="grid grid-cols-4 gap-4 w-full h-full">
        <div className="col-span-1">
          <Menu/>
        </div>
        <div className="bg-white col-span-2">
        </div>
        <div className="col-span-1 bg-white">
        </div>
      </div>
    </HydrateClient>
  );
}