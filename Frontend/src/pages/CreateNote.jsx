import { useState } from "react";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form className="bg-white shadow-md rounded-xl p-6 w-full max-w-md space-y-4">
        <h2 className="text-2xl font-semibold text-center">
          Create Note
        </h2>

        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />

        <textarea
          placeholder="Write your note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
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