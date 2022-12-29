import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import { selectAllUsers } from "../Users/userApiSlice";
import NewNoteForm from "./NewNoteForm";

export default function NewNote() {
  const users = useSelector(selectAllUsers);
  const content = users ? <NewNoteForm users={users} /> : <Loading />;
  return content;
}
