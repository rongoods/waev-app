import styled from "styled-components";
import { FormContainer, Input, Label } from "../../components/testForm/Form";
import { StyledButton } from "../testStyledButton/StyledButton";
import { useRouter } from "next/router.js";
import { mutate } from "swr";

export default function Comments({ comments }) {
  const Article = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid black;
    border-radius: 2px;
    padding: 0.5rem;
    text-align: center;
    margin: 5px;
    p {
      border-bottom: solid 1px black;
      padding: 20px;
    }
  `;
  const router = useRouter();
  const { id } = router.query;

  async function handleSubmitComment(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    data.postId = id;

    const response = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) mutate();
  }

  return (
    <Article>
      <FormContainer onSubmit={handleSubmitComment}>
        <Label htmlFor="comment">Your Comment</Label>
        <Input type="text" name="comment" placeholder="comment.." />
        <StyledButton type="submit">Send</StyledButton>
      </FormContainer>
      {comments && (
        <>
          {comments.map(({ comment }, idx) => {
            return (
              <div key={idx}>
                <span>{comment}</span>
              </div>
            );
          })}
        </>
      )}
    </Article>
  );
}

// ------------------------------------------------------------

//-------------------------------------------------------------

// import styled from "styled-components";
// import { FormContainer, Input, Label } from "../../components/testForm/Form";
// import { StyledButton } from "../testStyledButton/StyledButton";
// import { useRouter } from "next/router.js";
// import { mutate } from "swr";

// export default function Comments({ comments, postId }) {
//   const Article = styled.article`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     border: 3px solid black;
//     border-radius: 2px;
//     padding: 0.5rem;
//     text-align: center;
//     margin: 5px;
//     p {
//       border-bottom: solid 1px black;
//       padding: 20px;
//     }
//   `;
//   const router = useRouter();
//   const { _id } = router.query;
//   console.log(comments);
//   async function handleSubmitComment(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const { content } = Object.fromEntries(formData);

//     const comment = {
//       content,
//       postId: postId,
//     };
//     //     const response = await fetch("/api/comments", {
//     //       method: "POST",
//     //       headers: {
//     //         "Content-Type": "application/json",
//     //       },
//     //       body: JSON.stringify(data),
//     //     });

//     //     if (response.ok) mutate();
//     //   }

//     try {
//       const response = await fetch("/api/comments", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(comment),
//       });

//       const data = await response.json();

//       if (data.success) {
//         mutate("/");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <Article>
//       <FormContainer onSubmit={handleSubmitComment}>
//         {/* <Label htmlFor="name">Your Name</Label>
//         <Input type="text" name="name" placeholder="name" /> */}
//         <Label htmlFor="comment">Your Comment</Label>
//         <Input type="text" name="comment" placeholder="comment here..." />
//         <StyledButton type="submit">Send</StyledButton>
//       </FormContainer>
//       {comments && (
//         <>
//           {/* <h1> {comments.length} fans commented on this place:</h1> */}
//           {comments.map(({ comment }, idx) => {
//             return (
//               <div key={idx}>
//                 {/* <p>
//                   <small>
//                     <strong>{name}</strong> commented on {locationName}
//                   </small>
//                 </p> */}
//                 <span>{comment}</span>
//               </div>
//             );
//           })}
//         </>
//       )}
//     </Article>
//   );
// }
