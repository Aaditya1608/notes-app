import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
export default function Notes() {
  const [notes, setNotes] = useState([]);
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
  </div>

  {/* Button Section */}
  <div className="flex flex-row gap-5 mt-auto pt-4">
    <button className="bg-[#C38D94] p-2 border border-gray-200 text-white rounded-xl ">Edit</button>
    <button onClick={()=>handleDelete(note._id)} className="bg-[#a76571] p-2 border border-gray-200 text-white rounded-xl hover:shadow-lg">Delete</button>
  </div>
</div>
        ))}
      </div>
    </div>
  );
}