import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import EditUserForm from "./EditUserForm";
import { selectUserById } from "./userApiSlice";

function EditUser() {
  const { id } = useParams();

  const user = useSelector((state) => selectUserById(state, id));

  const content = user ? <EditUserForm user={user} /> : <Loading />;

  return content;
}

export default EditUser;
