import styled from "styled-components";
import { StyledButton } from "../styled-button/StyledButton";
import styles from "./Form.module.css";

export const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 1px solid black;
`;

export const Textarea = styled.textarea`
  font-family: inherit;
  border: 1px solid black;
  padding: 0.5rem;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export default function Form({ onSubmit, formName, defaultData }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  return (
    <FormContainer
      aria-labelledby={formName}
      onSubmit={handleSubmit}
      className={styles.formoutline}
    >
      {/* <Label htmlFor="name">Name</Label>
      <Input
        id="name"
        name="name"
        type="text"
        defaultValue={defaultData?.name}
      />
      <Label htmlFor="image-url">Image Url</Label>
      <Input
        id="image-url"
        name="image"
        type="text"
        defaultValue={defaultData?.image}
      />
      <Label htmlFor="location">Location</Label>
      <Input
        id="location"
        name="location"
        type="text"
        defaultValue={defaultData?.location}
      /> */}
      <Label htmlFor="title">Title</Label>
      <Input
        id="title"
        name="title"
        type="text"
        defaultValue={defaultData?.title}
      />
      <Label htmlFor="content">Content</Label>
      <Textarea
        name="content"
        id="content"
        cols="30"
        rows="10"
        defaultValue={defaultData?.content}
      ></Textarea>
      <StyledButton type="submit">
        {defaultData ? "update post" : "add post"}
      </StyledButton>
    </FormContainer>
  );
}
