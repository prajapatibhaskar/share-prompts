"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userPosts, setUserPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch(`/api/users/${params?.id}/posts`);
    const data = await response.json();

    setUserPosts(data);
  };

  useEffect(() => {
    // console.log(session.user.id);
    if (session?.user.id) fetchPosts();
  }, [params.id]);

//   This user cannot EDIT or DELETE a post
//   const handleEdit = (post) => {
//     router.push(`/update-prompt?id=${post._id}`);
//   };
//   const handleDelete = async (post) => {
//     const hasConfirmed = confirm(
//       "Are you sure you want to delete this prompt?"
//     );
//     if (hasConfirmed) {
//       try {
//         await fetch(`/api/prompt/${post._id.toString()}`, {
//           method: "DELETE",
//         });

//         const filteredPosts = posts.filter((p) => p._id !== post._id);
//         setPosts(filteredPosts);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page.Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
      data={userPosts}
    />
  );
};
export default UserProfile;
