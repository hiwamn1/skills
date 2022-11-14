import React, { useRef, useEffect, useState, useMemo } from "react";
import Button from "../../ui/button/Button";

//........................................................example 1
// const TestMemo = () => {
//   const [number, setNumber] = useState(0);
//   const [isDark, setIsDark] = useState(false);
//   const doubleNumber = useMemo(() => {
//    return handler(number);
//   }, [number]);
//   const themStyle = useMemo(()=>{
//     return {
//       backgroundColor: isDark ? "black" : "#fff",
//       color: isDark ? "white" : "black",
//     }
//   },[isDark])
//   useEffect(()=>{
//     console.log('update isDark')
//   },[themStyle])
//   return (
//     <>
//       <div className="testmemo2">
//         <input
//           type="number"
//           value={number}
//           onChange={(e) => setNumber(e.target.value)}
//         />
//         <Button onClick={changeThem}>Change Them</Button>
//         <p
//           style={themStyle}
//         >
//           {doubleNumber}
//         </p>
//       </div>
//     </>
//   );
//   function handler(num) {
//     for (let i = 0; i < 500; i++) {
//       console.log('repeat')
//     }
//     const result = num * 2;
//     return result;
//   }
//   function changeThem() {
//     // setIsDark(!isDark);
//     setIsDark((preveThem) => !preveThem);
//   }
// };
// export default TestMemo;

//.............................................................Me

// const TestMemo = () => {
//   const [number, setNumber] = useState(0);
//   const [amount, setAmount] = useState(0);
//   const [isDark, setIsDark] = useState(false);

//   useEffect(()=>{
//     console.log('update isDark')
//   },[isDark])

//   return (
//     <>
//       <div className="testmemo2">
//         <input
//           type="number"
//           value={number}
//           onChange={(e) => changeHandler(e)}
//         />
//         <Button onClick={changeThem}>Change Them</Button>
//         <p
//           style={{
//             backgroundColor: isDark ? "black" : "#fff",
//             color: isDark ? "white" : "black",
//           }}
//         >
//           {amount}
//         </p>
//       </div>
//     </>
//   );
//   function changeHandler(e) {
//     for (let i = 0; i < 2000; i++) {
//       console.log("repeat agine");
//     }
//     setNumber(e.target.value);
    
//     let result = e.target.value * 2;
//     setAmount(result);
//   }
//   function changeThem() {
//     // setIsDark(!isDark);
//     setIsDark((preveThem) => !preveThem);
//   }
// };
// export default TestMemo;

//..............................................example 2

const TestMemo = () => {
  const [count, setCount] = useState(0);
  const [comments, setComments] = useState([]);
  const isCurrent = useRef(true);
  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  }, []);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => setComments(json));
  }, []);

  const computedLongestComment = () => {
    console.log("repeat again");
    let maxComment = "";
    comments.forEach((item) => {
      if (item.body.length > maxComment.length) {
        maxComment = item.body;
      }
    });
    return maxComment;
  };

  const longestComment = useMemo(() => computedLongestComment(), [comments]);

  return (
    <>
      <div
        className="test__memo"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1>count : {count}</h1>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
        <p>{longestComment}</p>
      </div>
    </>
  );
};
export default TestMemo;
