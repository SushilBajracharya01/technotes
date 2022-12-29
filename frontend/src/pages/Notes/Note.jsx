import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectNoteById } from "./notesApiSlice";

export default function Note({ noteId }) {
  const note = useSelector((state) => selectNoteById(state, noteId));
  const navigate = useNavigate();

  const handleEdit = () => navigate(`/dash/notes/${noteId}`);

  if (note) {
    return (
      <tr className="bg-white border-b hover:bg-gray-50 text-center text-gray-800">
        <td
          className={`py-3 ${
            note.completed ? "text-green-600" : "text-red-600"
          }`}
        >
          {note.completed ? "Completed" : "Open"}
        </td>
        <td className={`py-3`}>{note.title}</td>
        <td className={`py-3`}>{note.text}</td>
        <td className={`py-3`}>{note.username}</td>
        <td className={`py-3`}>
          <button className="icon-button table__button" onClick={handleEdit}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </td>
      </tr>
    );
  } else return null;
}
