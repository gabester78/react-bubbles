// import React from "react";
// import { axiosWithAuth } from "../utils/axiosWithAuth";

// import Bubbles from "./Bubbles";
// import ColorList from "./ColorList";

// class BubblePage extends React.Component {
//   state = {
//     colorList: {
//       color: "",
//       code: {
//         hex: "",
//       },
//       id: "",
//     },
//   };

//   componentDidMount() {
//     this.getData();
//   }

//   getData = () => {
//     axiosWithAuth()
//       .get(`/api/colors`)
//       .then((res) => {
//         this.setState({
//           color: res.data,
//         });
//       })
//       .catch((err) => {
//         console.log(err, "Aww shyt! Something went wrong!");
//       });
//   };

//   // fetch your colors data from the server when the component mounts
//   // set that data to the colorList state property
//   render() {
//     return (
//       <>
//         <ColorList
//           colors={this.state.colorList}
//           updateColors={this.state.setColorList}
//         />
//         <Bubbles colors={this.state.colorList} />
//       </>
//     );
//   }
// }

// export default BubblePage;

import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/colors`)
      .then((res) => {
        setColorList(res.data);
      })
      .catch((err) => {
        console.log(err, "Aww shyt! Something went wrong!");
      });
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
