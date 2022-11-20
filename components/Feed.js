import { SparklesIcon } from "@heroicons/react/outline"
import Input from "./Input"
import Post from "./Post"

export default function Feed() {
  const posts = [
    {
      id: "1",
      name: "fdsfds",
      username: "fdsfds",
      userImg: "/images/slipper-logo.png",
      img: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      timestamp: "5h ago",

    },

    {
      id: "2",
      name: "fdsfds",
      username: "fdsfds",
      userImg: "/images/slipper-logo.png",
      img: "https://images.unsplash.com/photo-1548248823-ce16a73b6d49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80",
      text: "foea",
      timestamp: "5h ago",

    }
  ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold cursol-pointer">Home</h2>
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                <SparklesIcon className="h-5" />
            </div>
        </div>
        <Input />
        {posts.map((post)=>(
          <Post key={post.id} post={post} />
        ))}
    </div>
  )
}
