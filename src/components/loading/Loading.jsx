// import Skeleton from "react-loading-skeleton";
import React from "react";
import "./Loading.scss";

// const Loading = () => {

//   return Array(1)
//     .fill({})
//     .map(() => {
//       return (
//         <div className="col-12 bg-primary text-center p-4 w-50 mx-auto my-5 rounded">
//          <div className="d-flex justify-content-around">
//          <Skeleton className="mb-4" circle={true} height={100} width={100} />
//           <Skeleton className="mb-4" circle={true} height={100} width={100} />
//           <Skeleton className="mb-4" circle={true} height={100} width={100} />
//           <Skeleton className="mb-4" circle={true} height={100} width={100} />
//          </div>
//           {/* <Skeleton className="mb-3"  height={100 } width={500} /> */}
//           <Skeleton className="mb-3"  height={200 } width={500} />
//           <Skeleton className="mb-3"  height={70 } width={500} />
//         </div>
//       );
//     });
// };

// export default Loading;

const Loading = () => {
  return (
    <>
      <div className="main__loading">
        <div className="circle__loading"></div>
      </div>
    </>
  );
};
export default Loading;
