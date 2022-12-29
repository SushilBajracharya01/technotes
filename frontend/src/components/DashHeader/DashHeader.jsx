import { faBackward, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSendLogoutMutation } from "../../app/auth/authApiSlice";
import Button from "../../elements/Button";

const DASH_REGEX = /^\/dash(\/)?$/;
const NOTES_REGEX = /^\/dash\/notes(\/)?$/;
const USERS_REGEX = /^\/dash\/users(\/)?$/;

/**
 *
 */
export default function DashHeader() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onGoBackClicked = () => navigate(-1);

  const [sendLogout, { isLoading, isSuccess, isError, error }] =
    useSendLogoutMutation();

  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

  if (isLoading) return <p>Loading ...</p>;

  if (isError) return <p>Error: {error.data?.message}</p>;

  let dashClass = null;
  if (
    !DASH_REGEX.test(pathname) &&
    !NOTES_REGEX.test(pathname) &&
    !USERS_REGEX.test(pathname)
  ) {
    dashClass = "dash-header__container--small";
  }

  const handleLogout = () => {
    sendLogout();
    navigate("/login");
  };

  return (
    <div className="container px-4 sm:px-0 mx-auto ">
      <header className="backdrop-blur-md py-4 ">
        <div className={`flex justify-between items-center ${dashClass}`}>
          <Link to="/dash/notes">
            <h1 className="font-bold text-xl text-slate-100">TechNotes</h1>
          </Link>

          <nav className="dash-header__nav">
            <Button
              variant="secondary"
              onClick={handleLogout}
              label="Sign Out"
              icon={
                <FontAwesomeIcon icon={faRightFromBracket} className="mr-2" />
              }
            />
          </nav>
        </div>
      </header>

      {pathname !== "/dash" && (
        <div className="mt-4 text-center sm:text-left">
          <Button
            icon={<FontAwesomeIcon className="mr-2" icon={faBackward} />}
            variant="outline-primary"
            label="Go Back"
            className="mb-4"
            onClick={onGoBackClicked}
          />
        </div>
      )}
    </div>
  );
}
