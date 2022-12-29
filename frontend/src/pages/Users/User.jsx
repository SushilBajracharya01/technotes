import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectUserById } from "./userApiSlice";

export default function User({ userId }) {
  const user = useSelector((state) => selectUserById(state, userId));
  const navigate = useNavigate();

  const handleEdit = () => navigate(`/dash/users/${userId}`);

  if (user) {
    const userRolesString = user.roles.toString().replaceAll(",", ", ");

    const cellStatus = user.active ? "" : "table__cell--inactive";

    return (
      <tr className="bg-white border-b hover:bg-gray-50 text-center text-gray-800">
        <td className={`table__cell ${cellStatus} py-3`}>{user.username}</td>
        <td className={`table__cell ${cellStatus} py-3`}>{userRolesString}</td>
        <td className={`table__cell ${cellStatus} py-3`}>
          <button className="icon-button table__button" onClick={handleEdit}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </td>
      </tr>
    );
  } else return null;
}
