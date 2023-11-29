import React from "react";
import { form, form_group, btn, form_title } from "./CreatePostForm.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
// import { useSession } from "next-auth/react";

export default function CreatePostForm() {
  const router = useRouter();
  //   const { data: session } = useSession();

  const createPostForm = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { title, content, _id } = Object.fromEntries(formData);

    const post = {
      title,
      content,
      _id,
    };

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
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
      <h1 className={form_title}>add new post</h1>
      <form className={form} onSubmit={createPostForm}>
        <div className={form_group}>
          <label htmlFor="title">title</label>
          <input
            type="text"
            id="title"
            placeholder="enter title"
            name="title"
          />
        </div>
        <div className={form_group}>
          <label htmlFor="content">content</label>
          <textarea
            id="content"
            rows="3"
            name="content"
            placeholder="write your post"
          ></textarea>
        </div>
        <button type="submit" className={btn}>
          post
        </button>
      </form>
    </>
  );
}
