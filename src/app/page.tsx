import {HydrateClient} from "~/trpc/server";
import BaseCard from "~/app/_components/Card/BaseCard";
import PrimaryBtn from "~/app/_components/Button/PrimaryBtn";
import SecondaryBtn from "~/app/_components/Button/SecondaryBtn";

export default async function Home() {
  return (
    <HydrateClient>
      <BaseCard className="w-52">
        <div className="font-bold">DEV Community is a community of 1,977,735 amazing developers</div>
        <div className="text-black/50 text-[12px] py-3">We&apos;re a place where coders share, stay up-to-date and grow their careers.</div>
        <div className="flex flex-col">
          <PrimaryBtn className="mb-1">Create account</PrimaryBtn>
          <SecondaryBtn className="">Log in</SecondaryBtn>
        </div>
      </BaseCard>
    </HydrateClient>
  );
}