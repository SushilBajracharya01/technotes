import ErrorAlert from "../../components/ErrorAlert";
import Loading from "../../components/Loading";
import Note from "./Note";
import { useGetNotesQuery } from "./notesApiSlice";

/**
 *
 */
export default function Notes() {
  const {
    data: notes,
    error,
    isLoading,
    isError,
    isSuccess,
  } = useGetNotesQuery(undefined, {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let content;
  if (isLoading) {
    content = <Loading />;
  }

  if (isError) {
    content = <ErrorAlert message={error?.data?.message} />;
  }

  if (isSuccess) {
    const { ids } = notes;
    const tableContent = ids?.length
      ? ids.map((noteId) => <Note key={noteId} noteId={noteId} />)
      : null;

    content = (
      <>
        <h2 className="text-2xl font-semibold mb-3">Notes</h2>
        <table className="table-fixed w-full text-gray-500">
          <thead className="text-sm text-gray-700 bg-gray-50 uppercase">
            <tr>
              <th scope="col" className="py-3">
                Status
              </th>
              <th scope="col" className="py-3">
                Title
              </th>
              <th scope="col" className="py-3">
                Text
              </th>
              <th scope="col" className="py-3">
                User
              </th>
              <th scope="col" className="py-3">
                Edit
              </th>
            </tr>
          </thead>

          <tbody>{tableContent}</tbody>
        </table>
      </>
    );
  }

  return content;
}
