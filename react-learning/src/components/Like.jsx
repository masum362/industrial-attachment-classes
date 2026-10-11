import { Heart } from "lucide-react";
import { startTransition, useOptimistic, useState } from "react";
const fakeApi = () => new Promise((r,reject) => setTimeout(reject, 2000));

const Like = () => {
  const [likes, setLikes] = useState({ likes: 12, liked: false });
  const [optimisticPost, toggleOptimistic] = useOptimistic(likes, (state) => ({
    likes: state.liked ? state.likes - 1 : state.likes + 1,
    liked: !state.liked,
  }));


  console.log(optimisticPost);

  const handleLike = () => {
    startTransition(async () => {
      toggleOptimistic();
      await fakeApi();
      setLikes((p) => ({
        likes: p.liked ? p.likes - 1 : p.likes + 1,
        liked: !p.liked,
      }));
    });
  };
  return (
    <button
      onClick={handleLike}
      className="border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50"
    >
      <Heart
        size={18}
        className={optimisticPost.liked ? "fill-red-500 text-red-500" : ""}
      />
      {optimisticPost.likes}
    </button>
  );
};

export default Like;
