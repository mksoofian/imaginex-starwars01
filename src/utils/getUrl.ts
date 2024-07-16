// "use client";
// import { useEffect, useState } from "react";

// export default function GetURL(string: string) {
//   const [result, setResult] = useState("");

//   useEffect(() => {
//     fetch(string)
//       .then((res) => res.json())
//       .then((data) => {
//         Object.entries(data).map(([key, value]) => {
//           if (key.includes("title")) {
//             setResult(data.title);
//           } else setResult(data.name);
//         });
//       })
//       .catch((error) => "Oops, something went wrong.");
//   }, []);

//   return result;
// }
