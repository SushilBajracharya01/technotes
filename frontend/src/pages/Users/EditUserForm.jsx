import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROLES } from "../../config/roles";
import { useDeleteUserMutation, useUpdateUserMutation } from "./userApiSlice";

export default function EditUserForm({ user }) {
  const [updateUser, { isLoading, isSuccess, error }] = useUpdateUserMutation();

  const [
    deleteUser,
    { isSuccess: isDelSuccess, isError: isDelError, error: delError },
  ] = useDeleteUserMutation();

  const navigate = useNavigate();

  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState(user.roles);
  const [active, setActive] = useState(user.active);

  useEffect(() => {
    if (isSuccess || isDelSuccess) {
      setUsername("");
      setPassword("");
      setRoles([]);
      navigate("/dash/users");
    }
  }, [isSuccess, isDelSuccess, navigate]);

  const onUsernameChanged = (e) => setUsername(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);
  const onActiveChanged = (e) => setActive((prev) => !prev);

  const onRolesChanged = (e) => {
    const values = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );

    setRoles(values);
  };

  let canSave;

  if (password) {
    canSave =
      [roles.length, username.length, password.length].every(Boolean) &&
      !isLoading;
  } else {
    canSave = [roles.length, username.length].every(Boolean) && !isLoading;
  }

  const onSaveUserClicked = async (e) => {
    e.preventDefault();

    if (password) {
      await updateUser({ id: user.id, username, password, roles, active });
    } else {
      await updateUser({ id: user.id, username, roles, active });
    }
  };

  const onDeleteUserClicked = async (e) => {
    e.preventDefault();
    await deleteUser({ id: user.id });
  };

  const options = Object.values(ROLES).map((role) => {
    return (
      <option key={role} value={role}>
        {role}
      </option>
    );
  });

  const errContent = (error?.data?.message || delError?.data?.message) ?? "";

  return (
    <div>
      <p>{errContent}</p>

      <form onSubmit={onSaveUserClicked}>
        <h2>Edit User</h2>

        <button type="submit" disabled={!canSave}>
          Save
        </button>

        <button type="button" onClick={onDeleteUserClicked}>
          Delete
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

        <div>
          <label htmlFor="active">Active</label>
          <input
            id="active"
            type="checkbox"
            value={active}
            onChange={onActiveChanged}
            autoComplete="off"
          />
        </div>
      </form>
    </div>
  );
}
