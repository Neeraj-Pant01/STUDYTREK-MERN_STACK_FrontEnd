// import { useState } from 'react';
// import { FiX, FiMaximize, FiMinimize } from 'react-icons/fi';

// const VideoPlayer = ({ videoUrl, title, onClose }) => {
//   const [isLargeScreen, setIsLargeScreen] = useState(false);

//   // Toggle between small and large screen modes
//   const toggleScreenSize = () => {
//     setIsLargeScreen((prev) => !prev);
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
//       <div
//         className={`bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ${
//           isLargeScreen ? 'w-[96vw] h-[96vh]' : 'w-[90vw] max-w-3xl'
//         }`}
//       >
//         <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-500 to-purple-600">
//           <h2 className="text-xl md:text-2xl font-semibold text-white truncate">{title}</h2>
//           <div className="flex gap-2">
//             <button
//               onClick={toggleScreenSize}
//               className="text-white hover:bg-white/20 p-2 rounded-full transition duration-200"
//               title={isLargeScreen ? 'Switch to Small Screen' : 'Switch to Large Screen'}
//             >
//               {isLargeScreen ? <FiMinimize size={20} /> : <FiMaximize size={20} />}
//             </button>
//             <button
//               onClick={onClose}
//               className="text-white hover:bg-white/20 p-2 rounded-full transition duration-200"
//               title="Close"
//             >
//               <FiX size={20} />
//             </button>
//           </div>
//         </div>
//         <div className="p-4">
//           <div className="relative aspect-video">
//             <button
//               onClick={onClose}
//               className="text-white absolute top-5 left-3 hover:bg-white/20 p-2 rounded-full transition duration-200"
//               title="Close"
//             >
//               <FiX size={20} />
//             </button>
//             <iframe
//               src={videoUrl}
//               className="w-full h-full rounded-lg"
//               allow="autoplay; encrypted-media"
//               allowFullScreen
//               title={title}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;



import { FiX } from 'react-icons/fi';

const VideoPlayer = ({ videoUrl, title, onClose }) => {

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div
        className={`bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 w-[90vw] max-w-3xl`}
      >
        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-500 to-purple-600">
          <h2 className="text-xl md:text-2xl font-semibold text-white truncate">{title}</h2>
          <div className="flex gap-2">
            {/* <button
              onClick={toggleScreenSize}
              className="text-white hover:bg-white/20 p-2 rounded-full transition duration-200"
              title={isLargeScreen ? 'Switch to Small Screen' : 'Switch to Large Screen'}
            >
              {isLargeScreen ? <FiMinimize size={20} /> : <FiMaximize size={20} />}
            </button> */}
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 p-2 rounded-full transition duration-200"
              title="Close"
            >
              <FiX size={20} />
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="relative aspect-video">
            <button
              onClick={onClose}
              className="text-white absolute top-5 left-3 hover:bg-white/20 p-2 rounded-full transition duration-200"
              title="Close"
            >
              <FiX size={20} />
            </button>
            <iframe
              src={videoUrl}
              className="w-full h-full rounded-lg"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;