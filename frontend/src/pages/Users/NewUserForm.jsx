import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROLES } from "../../config/roles";
import { useAddNewUserMutation, userAddNewUserMutation } from "./userApiSlice";

export default function NewUserForm() {
  const [addNewUser, { isLoading, isSuccess, isError, error }] =
    useAddNewUserMutation();

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      setUsername("");
      setPassword("");
      setRoles([]);
      navigate("/dash/users");
    }
  }, [isSuccess, navigate]);

  const onUsernameChanged = (e) => setUsername(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);

  const onRolesChanged = (e) => {
    const values = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );

    setRoles(values);
  };

  const canSave =
    [roles.length, username.length, password.length].every(Boolean) &&
    !isLoading;

  const onSaveUserClicked = async (e) => {
    e.preventDefault();

    if (canSave) {
      await addNewUser({ username, password, roles });
    }
  };

  const options = Object.values(ROLES).map((role) => {
    return (
      <option key={role} value={role}>
        {role}
      </option>
    );
  });

  return (
    <div>
      <p>{error?.data?.message}</p>

      <form onSubmit={onSaveUserClicked}>
        <h2>New User</h2>

        <button type="submit" disabled={!canSave}>
          Save
        </button>

        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={onUsernameChanged}
            autoComplete="off"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={onPasswordChanged}
            autoComplete="off"
          />
        </div>

        <div>
          <label htmlFor="roles">Assigned Roles</label>
          <select
            id="roles"
            name="roles"
            multiple={true}
            size="3"
            value={roles}
            onChange={onRolesChanged}
          >
            {options}
          </select>
        </div>
      </form>
    </div>
  );
}
