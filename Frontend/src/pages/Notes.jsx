import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { CiEdit } from "react-icons/ci";
import { MdDelete,MdOutlineContentCopy  } from "react-icons/md";
import { TbCopyCheckFilled } from "react-icons/tb";
import Header from '../components/Header'
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isSure, setIsSure] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const handleCopy = async (note) =>{
    try{
      const textToCopy = `Title:\n${note.title}\n\nContent:\n${note.content}`;
      await navigator.clipboard.writeText(textToCopy);

      setCopiedId(note._id);
      setTimeout(() => setCopiedId(null),2000);
    }catch(err){
      console.error("Copy failed: ",err)
    }
  }
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
    <>
    <Header/>
    <div className="min-h-screen bg-[#F4D6CC] p-6">
    
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mt-10">
        {notes.map((note) => (
          <div
  key={note.id}
  className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition border border-black flex flex-col text-[#565676]"
>
  {/* Content Section */}
  <div className="flex-grow">
    <h2 className="text-xl font-semibold mb-2">
      {note.title}
    </h2>

    <p className="text-gray-600">
      {note.content}
    </p>
    
  </div>
  
  {/* Button Section */}
  <div className="mt-auto pt-4">
  <p className="text-sm text-gray-500 mb-2">
    Created {dayjs(note.createdAt).fromNow()}
  </p>

  <div className="flex items-center justify-between mt-4">

  {/* Left Side (Edit + Delete) */}
  <div className="flex gap-5">
    <button
      onClick={() => {
        setSelectedNote(note);
        setIsOpen(true);
      }}
      className="bg-[#F4B860] p-2 border border-gray-200 text-white rounded-xl"
    >
      <CiEdit />
    </button>

    <button
      onClick={() => {
        setSelectedNote(note);
        setIsSure(true);
      }}
      className="bg-[#C83E4D] p-2 border border-gray-200 text-white rounded-xl hover:shadow-lg"
    >
      <MdDelete />
    </button>
  </div>

  {/* Right Side (Copy) */}
  <button
    onClick={() => handleCopy(note)}
    className="bg-[#565676] p-2 border border-gray-200 text-white rounded-xl hover:shadow-lg"
  >
    {copiedId === note._id ? <TbCopyCheckFilled /> : <MdOutlineContentCopy />}
  </button>

</div>
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
{
  isSure && (
    <div className="fixed inset-0 bg-[#565676] bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-full max-w-md space-y-4">
        <p className="text-xl">Confirm Deletion</p>
        <div> Are you sure you want to delete this note?</div>
        <div className="flex flex-row gap-5">
        <button className="bg-[#a76571] text-white p-2 rounded-xl" onClick={()=>{handleDelete(selectedNote._id);
          setIsSure(false);
        }}>Delete</button>
        <button className="bg-black text-white p-2 rounded-xl" onClick={()=>{setIsSure(false)}}>Exit</button>
        </div>
      </div>
    </div>
  )
}
    </div>
    </>
  );
}