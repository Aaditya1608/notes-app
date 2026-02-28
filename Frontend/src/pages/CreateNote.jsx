import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function CreateNote() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      content: e.target.content.value,
    };

    axios
      .post("http://localhost:5050/create-note", formData)
      .then((res) => {
        navigate("/notes");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        alert("Error creating post");
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6 w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">Create Note</h2>

        <input
          type="text"
          name="title"
          placeholder="Enter title"
          className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />

        <textarea
          placeholder="Write your note..."
          name="content"
          rows="4"
          className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Add Note
        </button>
      </form>
    </div>
  );
}
