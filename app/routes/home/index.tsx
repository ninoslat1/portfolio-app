import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import Profile from "./profile";
import About from "./about";
import Home from "./home";
import ThemeContextWrapper from "~/templates/ThemeContextWrapper";
import ThemeToggle from "~/components/ThemeToggle";
import { projectList } from "lib/projectList";
import { TGithubProj } from "lib/types";
import { useLoaderData } from "@remix-run/react";
import Projects from "./projects";

const IMAGE_SIZE: number = 75;

export const meta: MetaFunction = () => {
    return [{ title: "My Portfolio" }];
};

export const loader: LoaderFunction = async () => {
    const project = await projectList();
    return json(project);
}

export default function Index() {
    const projectData = useLoaderData<TGithubProj[]>();

    return (
        <ThemeContextWrapper>
            <div className="flex flex-col items-center gap-4 dark:bg-slate-900 bg-slate-100/50">
                <div className="absolute right-5 top-5">
                    <div className="flex items-center gap-2">
                        <ThemeToggle />
                        <p className="text-sm dark:text-white text-black">Created with 💗 and</p>
                        <img src={'/logo-dark.png'} width={IMAGE_SIZE} height={IMAGE_SIZE} />
                    </div>
                </div>
                <div className="block h-screen w-full justify-center py-16 px-4">
                    <div className="w-full">
                        <TabGroup>
                            <TabList className={'flex gap-4 mx-auto justify-center'}>
                                <Tab className="tabs-btn">Home</Tab>
                                <Tab className="tabs-btn">Projects</Tab>
                                <Tab className="tabs-btn">About</Tab>
                                <Tab className="tabs-btn">Profile</Tab>
                            </TabList>
                            <TabPanels className="py-5">
                                <TabPanel className="tabs-panel">
                                    <Home />
                                </TabPanel>
                                <TabPanel className="tabs-panel">
                                    <Projects project={projectData} />
                                </TabPanel>
                                <TabPanel className="tabs-panel">
                                    <About />
                                </TabPanel>
                                <TabPanel className="tabs-panel">
                                    <Profile />
                                </TabPanel>
                            </TabPanels>
                        </TabGroup>
                    </div>
                </div>
            </div>
        </ThemeContextWrapper>
    );
}