import { FaPlus, FaStickyNote, FaFeatherAlt } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

import Header from '../components/Header'
import './Dashboard.css'
export default function Dashboard() {

  
  return (
    <>
     <Header />

    <div className="min-h-screen bg-[#F4D6CC] relative overflow-hidden">
      {/* Animated Background Elements */}

      <div className="relative z-10 p-4 md:p-8">
        {/* Header */}
       
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto mt-20 mb-10">
          <div className="relative group">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#F4B860] via-[#C83E4D] to-[#F4B860] rounded-3xl blur-lg group-hover:blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
            
            <div className="relative bg-[#32373B]/90 backdrop-blur-xl rounded-3xl border border-[#F4D6CC]/20 shadow-2xl p-12 text-center">
              {/* Decorative icon */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <FaFeatherAlt className="text-6xl text-[#F4B860] animate-float" />
                  <HiSparkles className="absolute -top-2 -right-2 text-2xl text-[#F4D6CC] animate-pulse" />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#F4D6CC] via-[#F4B860] to-[#F4D6CC] bg-clip-text text-transparent animate-gradient-x bg-300%">
  Notia
</h1>

<p className="text-lg text-[#F4D6CC]/70 tracking-wide">
  Write. Think. Create.
</p>
 
              {/* Decorative dots */}
              <div className="flex justify-center gap-2 mt-8">
                <span className="w-2 h-2 bg-[#F4B860] rounded-full animate-pulse"></span>
                <span className="w-2 h-2 bg-[#C83E4D] rounded-full animate-pulse animation-delay-200"></span>
                <span className="w-2 h-2 bg-[#F4D6CC] rounded-full animate-pulse animation-delay-400"></span>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-4">
  <button className="px-6 py-3 bg-[#F4B860] text-[#32373B] font-semibold rounded-xl shadow-lg hover:scale-105 transition duration-300">
    + Create Note
  </button>

  <button className="px-6 py-3 bg-[#F4B860] text-[#32373B] font-semibold rounded-xl shadow-lg hover:scale-105 transition duration-300">
    View Notes
  </button>
</div>
             
        </div>


        </div>
    </div>
     </>
  );
}
