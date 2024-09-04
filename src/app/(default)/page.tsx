import {HydrateClient} from "~/trpc/server";
import Menu from "~/app/_components/SideMenu/Menu";
import NavBar from "~/app/_components/NavBar/NavBar";
import PostCard from "~/app/_components/Card/PostCard";

export default async function Home() {
  return (
    <HydrateClient>
      <div className="grid grid-cols-6 gap-4 w-full h-full">
        <div className="col-span-1">
          <Menu/>
        </div>

        <div className="col-span-4">
          <NavBar className="mb-2"/>

          <PostCard
            id={"temp"}
            username={"username"}
            userProfileImage={"/devto_ic.svg"}
            timePosted={"time posted"}
            coverImage={"https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fynt5bho2y1xl32q2vkku.png"}
            title={"title"}
            tags={["tag1", "tag2"]}
            numberOfReactions={3}
            content={"How I built my open-source Social media scheduling tool..."}
          />

        </div>

        <div className="col-span-1 bg-white">
        </div>
      </div>
    </HydrateClient>
  );
}