import React, { useEffect, useState } from "react";
import services from "../lib/config";
import { PostCard } from "../components";
function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    services.getPosts().then((Allposts) => {
      if (Allposts) setPosts(Allposts.documents);
    });
  }, []);
  if (posts.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-700">
            No posts available
          </p>
          <p className="text-gray-500">Please check back later.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
