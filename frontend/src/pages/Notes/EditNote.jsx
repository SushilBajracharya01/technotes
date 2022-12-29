import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { selectAllUsers } from "../Users/userApiSlice";
import EditNoteForm from "./EditNoteForm";
import { selectNoteById } from "./notesApiSlice";

export default function EditNote() {
  const { id } = useParams();

  const users = useSelector(selectAllUsers);
  const note = useSelector((state) => selectNoteById(state, id));

  const content =
    note && users ? <EditNoteForm note={note} users={users} /> : <Loading />;

  return content;
}
