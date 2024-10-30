import type { MetaFunction } from "@remix-run/node";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

const IMAGE_SIZE:number = 75

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="">
      <div className="flex flex-col items-center gap-4">
        <div className="absolute right-5 top-5">
            <div className="flex items-center gap-2">
                <p className="text-sm">Created with 💗 and</p>
                <img src={'/logo-dark.png'} width={IMAGE_SIZE} height={IMAGE_SIZE}/>
            </div>
        </div>
        <div className="block h-screen w-full justify-center py-16 px-4">
            <div className="w-full">
                <TabGroup>
                    <TabList className={'flex gap-4 mx-auto justify-center'}>
                        <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">Home</Tab>
                        <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">Projects</Tab>
                        <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">About</Tab>
                        <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">Profile</Tab>
                    </TabList>
                    <TabPanels className="mt-3">
                        <TabPanel className="rounded-xl bg-white/5 p-3">Content 1</TabPanel>
                        <TabPanel className="rounded-xl bg-white/5 p-3">Content 2</TabPanel>
                        <TabPanel className="rounded-xl bg-white/5 p-3">Content 3</TabPanel>
                        <TabPanel className="rounded-xl bg-white/5 p-3">Content 4</TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
      </div>
    </div>
  );
}
