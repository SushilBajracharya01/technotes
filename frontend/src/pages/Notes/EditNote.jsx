import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { selectAllUsers } from "../Users/userApiSlice";
import EditNoteForm from "./EditNoteForm";
import { selectNoteById } from "./notesApiSlice";

export default function EditNote() {
  const { id } = useParams();

  const user = useSelector(selectAllUsers);
  const note = useSelector((state) => selectNoteById(id));

  const content =
    note && user ? <EditNoteForm note={note} user={user} /> : <Loading />;

  return content;
}
