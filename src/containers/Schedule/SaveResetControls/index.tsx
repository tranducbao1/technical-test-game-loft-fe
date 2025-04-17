// components/RepeatModal.jsx

const SaveResetControls: React.FC<Props> = () => {
  return (
    <div className="space-x-2">
      <button className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
      <button className="bg-red-500 text-white px-4 py-2 rounded">Reset</button>
    </div>
  );
};

type Props = {};

export default SaveResetControls;

// export default function RepeatModal({ onClose }) {
//   const [repeatWFH, setRepeatWFH] = useState(true);
//   const [repeatWAO, setRepeatWAO] = useState(true);
//   const [weeks, setWeeks] = useState(1);

//   const handleRepeat = () => {
//     // TODO: call repeat API with selected values
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
//       <div className="bg-white p-4 rounded w-[300px]">
//         <h2 className="text-lg font-bold mb-2">Repeat Settings</h2>
//         <label className="block mb-2">
//           <input
//             type="checkbox"
//             checked={repeatWFH}
//             onChange={(e) => setRepeatWFH(e.target.checked)}
//           />{' '}
//           Repeat WFH
//         </label>
//         <label className="block mb-2">
//           <input
//             type="checkbox"
//             checked={repeatWAO}
//             onChange={(e) => setRepeatWAO(e.target.checked)}
//           />{' '}
//           Repeat WAO
//         </label>
//         <label className="block mb-2">
//           Repeat for
//           <input
//             type="number"
//             value={weeks}
//             min={1}
//             max={10}
//             onChange={(e) => setWeeks(Number(e.target.value))}
//             className="w-full border px-2 py-1 mt-1"
//           />{' '}
//           weeks
//         </label>
//         <div className="flex justify-end space-x-2 mt-4">
//           <button onClick={onClose} className="text-gray-500">
//             Cancel
//           </button>
//           <button onClick={handleRepeat} className="bg-blue-500 text-white px-3 py-1 rounded">
//             Repeat
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
