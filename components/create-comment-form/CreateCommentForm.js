import { useRouter } from "next/router.js";
import { mutate } from "swr";
// import { useSession } from "next-auth/react";

export default function CreateCommentForm({ comments }) {
  const router = useRouter();

  //   const { data: session } = useSession();

  const createCommentForm = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { content, _id } = Object.fromEntries(formData);

    const comment = {
      content,
      _id,
    };

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      });

      const data = await response.json();

      if (data.success) {
        mutate();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h3>add comment</h3>
      <form onSubmit={createCommentForm}>
        <div>
          <textarea
            id="content"
            rows="2"
            name="content"
            placeholder="write a comment"
          ></textarea>
        </div>
        <button type="submit">post</button>
      </form>
    </>
  );
}
