import type { MetaFunction } from "@remix-run/node";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Profile from "./profile";
import About from "./about";
import Projects from "./projects";
import Home from "./home";
import { useState } from "react";
import { DEFAULT_STATE, ThemeContext } from "theme/ThemeContext";
import { ThemeToggle } from "~/components/ThemeToggle";

const IMAGE_SIZE:number = 75

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [dark, setDark] = useState(DEFAULT_STATE.dark);
  const toggleTheme = () => {
    setDark(!dark);
  };
  
  return (
    <ThemeContext.Provider value={{ dark, toggleTheme}}>
      <div className="flex flex-col items-center gap-4">
        <div className="absolute right-5 top-5">
            <div className="flex items-center gap-2">
              <ThemeToggle/>
                <p className="text-sm dark:text-white light:text-black">Created with 💗 and</p>
                <img src={'/logo-dark.png'} width={IMAGE_SIZE} height={IMAGE_SIZE}/>
            </div>
        </div>
        <div className="block h-screen w-full justify-center py-16 px-4">
            <div className="w-full">
                <TabGroup>
                    <TabList className={'flex gap-4 mx-auto justify-center'}>
                        <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold dark:text-white light:text-black focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">Home</Tab>
                        <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold dark:text-white light:text-black focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">Projects</Tab>
                        <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold dark:text-white light:text-black focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">About</Tab>
                        <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold dark:text-white light:text-black focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">Profile</Tab>
                    </TabList>
                    <TabPanels className="mt-3">
                        <TabPanel className="rounded-xl bg-white/5 p-3"><Home/></TabPanel>
                        <TabPanel className="rounded-xl bg-white/5 p-3"><Projects/></TabPanel>
                        <TabPanel className="rounded-xl bg-white/5 p-3"><About/></TabPanel>
                        <TabPanel className="rounded-xl bg-white/5 p-3"><Profile/></TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
