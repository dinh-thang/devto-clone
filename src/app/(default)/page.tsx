import Menu from "~/app/_components/SideMenu/Menu";
import NavBar from "~/app/_components/Bar/NavBar";
import PostsContainer from "~/app/_components/Container/PostsContainer";
import DiscussionBar from "~/app/_components/Bar/DiscussionBar";
import DiscussionBar2 from "~/app/_components/Bar/DiscussionBar2";

export default async function Home() {

  return (
    <div>
      <div className="grid grid-cols-11 gap-4 w-full">
        <div className="col-start-1 col-span-2">
          <Menu/>
        </div>

        <div className="col-start-3 col-span-6">
          <NavBar currentTab="Relevant" className="mb-2"/>
          <PostsContainer/>
        </div>

        <div className="col-start-9 col-span-3">
          <DiscussionBar title={"Active discussions"} className="mb-4"/>
          <DiscussionBar2 className="" title={"#discuss"} sub={"Discussion threads targeting the whole community"}/>
        </div>
      </div>
    </div>
  );
}