import React from "react";
// import {
//   form,
//   form_group,
//   btn,
//   form_title,
// } from "./CreateCommentForm.module.css";
import { useRouter } from "next/router";
// import { useSession } from "next-auth/react";

export default function CreateCommentForm() {
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
        router.push("/");
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
