// export default function Tabs({ text, count }) {
//   return (
//     <>
//       <div style={{ border: "solid black 1px" }}>
//         {text} {count}
//       </div>
//     </>
//   );
// }

export default function Tabs({ text, count }) {
  return (
    <>
      <button type="button" style={{ border: "solid black 1px" }}>
        {text} {count}
      </button>
    </>
  );
}
