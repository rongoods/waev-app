// import React, { useState, useEffect } from "react";

// const TimePicker = () => {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//   return (
//     <div>
//       <h1>Current Date: {time.toLocaleDateString()}</h1>
//     </div>
//   );
// }

// export default function CurrentDate() {
//     const [date, setDate] = useState(new Date());

//     useEffect(() => {
//       const timer = setInterval(() => {
//         setDate(new Date());
//       }, 1000);

//       return () => {
//         clearInterval(timer);
//       };
//     }, []);

//     return (
//       <div>
//         <h1>Current Date: {date.toDateString()}</h1>
//       </div>
//     );
//   }

import React, { useState, useEffect } from "react";

export const DateTime = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 600);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <p>
        {" "}
        {date.toLocaleTimeString()} {date.toLocaleDateString()}
      </p>
    </div>
  );
};

export default DateTime;
