import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const navigate = useNavigate();
  useEffect(()=>{
    axios.get("http://localhost:5050/notes").then((res)=>{
        setNotes(res.data.notes);
    })
  })
  const handleDelete = async(id) =>{
    const url = `http://localhost:5050/notes/${id}`
    axios.delete(url).then((res) => {
        console.log("Deleted Successfully" + res);
      })
      .catch((err) => {
        console.log("Error" + err);
      });
  }
  return (
    <div className="min-h-screen bg-[#d8dcff] p-6">
     
    <button onClick={() => navigate("/create-note")} className="hover:shadow-lg p-2 shadow-md rounded-xl bg-[#aeadf0] text-white">+&nbsp;Create Notes</button>
      <h1 className="text-3xl font-bold mb-6 text-center text-[#565676]">
        NOTES
      </h1>
      
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mt-10">
        {notes.map((note) => (
          <div
  key={note.id}
  className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition border border-black flex flex-col text-[#565676]"
>
  {/* Content Section */}
  <div>
    <h2 className="text-xl font-semibold mb-2">
      {note.title}
    </h2>

    <p className="text-gray-600">
      {note.content}
    </p>
    <p className="mt-2">
      Created {dayjs(note.createdAt).fromNow()}
    </p>
  </div>
  
  {/* Button Section */}
  <div className="flex flex-row gap-5 mt-auto pt-4">
     
    <button onClick={()=>{
      setSelectedNote(note);
      setIsOpen(true);
    }} className="bg-[#C38D94] p-2 border border-gray-200 text-white rounded-xl ">Edit</button>
    <button onClick={()=>handleDelete(note._id)} className="bg-[#a76571] p-2 border border-gray-200 text-white rounded-xl hover:shadow-lg">Delete</button>
  </div>
</div>
        ))}
      </div>
      {isOpen && (
  <div className="fixed inset-0 bg-[#565676] bg-opacity-40 flex items-center justify-center">
    <div className="bg-white p-6 rounded-xl w-full max-w-md space-y-4">
      
      <h2 className="text-xl font-semibold">Edit Note</h2>

      <input
        type="text"
        value={selectedNote.title}
        onChange={(e) =>
          setSelectedNote({ ...selectedNote, title: e.target.value })
        }
        placeholder="Enter new title"
        className="w-full border px-3 py-2 rounded"
      />

      <textarea
        value={selectedNote.content}
        onChange={(e) =>
          setSelectedNote({ ...selectedNote, content: e.target.value })
        }
        placeholder="Enter new content"
        rows="6"
        className="w-full border px-3 py-2 rounded"
      />

      <div className="flex justify-end gap-4">
        <button onClick={() => setIsOpen(false)}>Cancel</button>

        <button
          onClick={async () => {
            await axios.patch(
              `http://localhost:5050/notes/${selectedNote._id}`,
              selectedNote
            );

            // Update UI instantly without reload
            setNotes((prev) =>
              prev.map((n) =>
                n._id === selectedNote._id ? selectedNote : n
              )
            );

            setIsOpen(false);
          }}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Update
        </button>
      </div>

    </div>
  </div>
)}
    </div>
  );
}