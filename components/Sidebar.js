import Image from "next/image"
import SidebarMenuItem from "./SidebarMenuItem"
import { BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, HashtagIcon, HomeIcon, InboxIcon, UserIcon } from "@heroicons/react/outline"


export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">

        {/* {logo} */}
        <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
            <>
            <Image width="50" height="50" alt="" src="/images/slipper-logo.png"></Image>
            {/* <Image width="50" height="50" alt="" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"></Image> */}
            </>
        </div>
        {/* {menu} */}
        <div className="mt-4 mb-2.5 xl:items-start">
            <SidebarMenuItem text="Home" Icon={HomeIcon} active />
            <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
            <SidebarMenuItem text="Notifications" Icon={BellIcon} />
            <SidebarMenuItem text="Messages" Icon={InboxIcon} />
            <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
            <SidebarMenuItem text="Profile" Icon={UserIcon} />
            <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />

        </div>

        {/* {button} */}
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>

        {/* {mini-profile} */}
        <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto ">
            <img src="/images/slipper-logo.png" alt="user-img" width="50" height="50" className="h-10 w-10 rounded-full xl:mr-2"/>
            <div className="leading-5 hidden xl:inline">
                <h4 className="font-bold">gon nanasi</h4>
                <p className="text-gray-500">@nanasinogon</p>
                <DotsCircleHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline"/>
            </div>
        </div>
    </div>
  )
}
