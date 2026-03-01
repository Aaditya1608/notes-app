import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header"
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
  <>
  <Header/>
  <div className="min-h-screen flex flex-col items-center pt-20 p-4 bg-[#F4D6CC]">
    
    {/* Width wrapper */}
    <div className="w-full max-w-md space-y-4">
      
      <form
        onSubmit={handleSubmit}
        className="bg-[#ffffff] shadow-md rounded-xl p-6 space-y-4"
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
          rows="8"
          className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
        />

        <button
          type="submit"
          className="w-full bg-[#C83E4D] text-white py-2 rounded-lg hover:bg-[#4A5859] transition"
        >
          Add Note
        </button>
      </form>

      <button className="w-full bg-[#4A5859] hover:bg-[#c83e4d] rounded-xl p-2 text-white hover:shadow-xl" onClick={()=>navigate('/notes')}>
        Back to notes
      </button>

    </div>
  </div>
  </>
);
}
