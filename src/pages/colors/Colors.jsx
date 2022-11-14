import React from "react";
import axios from "axios";

import "./Colors.scss";
import Loading from "../../components/loading/Loading";
import UserContext from "../../context/UserContext";

class Weather extends React.Component {
  state = {
    users: [],
  };
  static contextType = UserContext;

  componentDidMount() {
    console.log(this.context.isTest);

    this.context.changeIsLoadingHandler();
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        this.context.changeIsLoadingHandler();
        return this.setState({ users: response.data });
      })
      // .then((response)=>console.log(response.data))
      .catch((e) => console.log(e.data));
  }
  render() {
    let loading = <Loading />;
    if (!this.context.isLoading) {
      loading = (
        <>
          {this.state.users.map((item, index) => (
            <div className="colors" key={item.id}>
              {/* <h5 className="title__city">{item.title}</h5> */}
              {/* <div className="temp__city">{item.albumId}</div> */}
              {/* <div className="min-max-temp">{item.url}</div> */}
              <img src={item.url} alt="An Image" />
            </div>
          ))}
        </>
      );
    }
    return (
      <>
        <div className="colors__container">{loading}</div>
      </>
    );
  }
}
export default Weather;
