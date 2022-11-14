import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/apiAxios";
import { token } from "../../local-storage/KeysLocalStorage";
import { setInLocalStorage } from "../../local-storage/LocalStorage";
import Input from "../../ui/input/Input";
import Button from "../../ui/button/Button";
import * as yup from "yup";
import "./Login.scss";
import WithHooks from "../../with hook/WithHooks";
import Loading from "../../components/loading/Loading";

class Login extends React.Component {
  state = {
    userInfo: {
      username: "",
      password: "",
    },
    errorMessage: "",
    errors: [],
    isLoginShow: false,
    isLoading: false,
  };
  schema = yup.object().shape({
    username: yup
      .string("Password format is not correct (letters)")
      .required("The Username field is required"),
    password: yup
      .string("Password format is not correct (letters)")
      .min(5, "The password must be at least 4 characters long")
      .required("The Password field is required"),
  });
  changeIsLoadingHandler = () => {
    this.setState({ isLoading: !this.state.isLoading });
  };
  onTextChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const newUserInfo = { ...this.state.userInfo };
    newUserInfo[name] = value;
    this.setState({ userInfo: newUserInfo });
  };

  validate = async () => {
    try {
      const result = await this.schema.validate(this.state.userInfo, {
        abortEarly: false,
      });
      return result;
    } catch (e) {
      // console.log(e.errors);
      this.setState({ errors: e.errors });
    }
  };

  loginHandler = async (e) => {
    e.preventDefault();
    const resultValidation = await this.validate();
    if (resultValidation) {
      this.setState({ errors: "" });
      const resault = await api.post("/auth/login", resultValidation);
      if (resault.code == 200) {
        setInLocalStorage(token, resault.data.token);
        this.props.navigate("/profile");
      } else {
        this.setState({ errorMessage: resault.message });
      }
    }
  };

  hamburgerShowHideHandler = () => {
    this.setState({ isLoginShow: !this.state.isLoginShow });
  };
  render() {
    let login = null;
    if (this.state.isLoginShow) {
      login = (
        <>
          <div className="login">
            <form
              onSubmit={(e) => this.loginHandler(e)}
              className="login__body"
            >
              <h1 className="login__title">Login</h1>
              <Input
                value={this.state.userInfo.username}
                name="username"
                placeholder="usernam..."
                onChange={(e) => {
                  this.onTextChange(e);
                }}
                type="text"
              />
              <Input
                value={this.state.userInfo.password}
                name="password"
                placeholder="password..."
                onChange={(e) => {
                  this.onTextChange(e);
                }}
                type="password"
              />
              <div className="rules">
                <label htmlFor="checkbox"> Lorem ipsum dolor </label>
                <input id="checkbox" type="checkbox" />
              </div>
              <button className="btn__form" type="submit">
                Login
              </button>
              {this.state.errors.length !== 0 && (
                <ul className="error__yup">
                  {this.state.errors.map((item, idx) => (
                    <li className="error__yup__item" key={idx}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              <p style={{ color: "red" }}>{this.state.errorMessage}</p>
            </form>
          </div>
        </>
      );
    }
    let loginLoading = (
      <>

        <div className="container__login">
          <div onClick={this.hamburgerShowHideHandler} className="pic_skills">
            <div className="pic">
              <div className="over electrician"></div>
            </div>
            <div className="pic">
              <span className="symbole">&spades; </span>
            </div>

            <div className="pic">
              <div className="over giutar"></div>
            </div>
            <div className="pic">
              <span className="symbole">&clubs;</span>
            </div>

            <div className="pic">
              <span className="symbole">&hearts; </span>
            </div>
            <div className="pic">
              <div className="over robot"></div>
            </div>

            <div className="pic">
              <span className="symbole">&diams; </span>
            </div>
            <div className="pic">
              <div className="over archicture"></div>
            </div>

            <div className="pic">
              <div className="over developer"></div>
            </div>
            <div className="pic">
              <span className="symbole">&larr;</span>
            </div>

            <div className="pic">
              <div className="over cake"></div>
            </div>
            <div className="pic">
              <span className="symbole">&uarr; </span>
            </div>

            <div className="pic">
              <span className="symbole">&rarr;</span>
            </div>
            <div className="pic">
              <div className="over hair"></div>
            </div>

            <div className="pic">
              <span className="symbole"> &darr; </span>
            </div>
            <div className="pic">
              <div className="over math"></div>
            </div>

            <div className="pic">
              <div className="over mechanic"></div>
            </div>
            <div className="pic">
              <span className="symbole"> &Delta;</span>
            </div>

            <div className="pic">
              <div className="over painter"></div>
            </div>
            <div className="pic">
              <span className="symbole">&nabla; </span>
            </div>

            <div className="pic">
              <span className="symbole"> &empty; </span>
            </div>
            <div className="pic">
              <div className="over phone"></div>
            </div>

            <div className="pic">
              <span className="symbole">&part; </span>
            </div>
            <div className="pic">
              <div className="over pipe"></div>
            </div>

            <div className="pic">
              <div className="over psychologist"></div>
            </div>
            <div className="pic">
              <span className="symbole">&#36;</span>
            </div>
            <div className="pic">
              <div className="over cooker"></div>
            </div>
            <div className="pic">
              <span className="symbole">&#37;</span>
            </div>

            <div className="pic">
              <span className="symbole">&#38;</span>
            </div>
            <div className="pic">
              <div className="over translate"></div>
            </div>
            <div className="pic">
              <span className="symbole">&#35;</span>
            </div>
            <div className="pic">
              <div className="over signer"></div>
            </div>
          </div>
          {login}
        </div>

      </>
    );
    if (this.state.isLoading) loginLoading = <Loading />;
    return <>
    {loginLoading}
    </>;
  }
}
export default WithHooks(Login);

// const Login = () => {
//   const [userInfo, setUserInfo] = useState({
//     username: "",
//     password: "",
//   });
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isLoginShow, setIsLoginShow] = useState(false);
//   const navigate = useNavigate();

//   function onTextChange(e) {
//     const value = e.target.value;
//     const name = e.target.name;
//     const newUserInfo = { ...userInfo };
//     newUserInfo[name] = value;
//     setUserInfo(newUserInfo);

//   }

//   async function loginHandler() {
//     const resault = await api.post(
//       "http://api.skillsgram.com/api/auth/login",
//       userInfo
//     );
//     if (resault.code == 200) {
//       setInLocalStorage(token, resault.data.token);
//       navigate("/profile");
//     } else {
//       setUserInfo(resault.message);
//     }
//   }

//   function hamburgerShowHideHandler() {
//     setIsLoginShow(!isLoginShow);
//   }

//   let login = null;
//   if (isLoginShow) {
//     login = (
//       <>
//         <div className="login">
//           <div className="login__body">
//             <h1 className="login__title">Login</h1>
//             <Input
//               value={userInfo.username}
//               name="username"
//               placeholder="usernam..."
//               onChange={(e) => {
//                 onTextChange(e);
//               }}
//               type="text"
//             />
//             <Input
//               value={userInfo.password}
//               name="password"
//               placeholder="password..."
//               onChange={(e) => {
//                 onTextChange(e);
//               }}
//               type="password"
//             />
//             <div className="rules">
//               <label htmlFor="checkbox"> Lorem ipsum dolor </label>
//               <input id="checkbox" type="checkbox" />
//             </div>
//             <Button onClick={loginHandler}>Login</Button>
//             <p style={{ color: "red" }}>{errorMessage}</p>
//           </div>
//         </div>
//       </>
//     );
//   }
//   return (
//     <>
//       <div className="container__login">
//         <div onClick={hamburgerShowHideHandler} className="pic_skills">
//           <div className="pic">
//             <div className="over electrician"></div>
//           </div>
//           <div className="pic">
//             <span className="symbole">&spades; </span>
//           </div>

//           <div className="pic">
//             <div className="over giutar"></div>
//           </div>
//           <div className="pic">
//             <span className="symbole">&clubs;</span>
//           </div>

//           <div className="pic">
//             <span className="symbole">&hearts; </span>
//           </div>
//           <div className="pic">
//             <div className="over robot"></div>

//           </div>

//           <div className="pic">
//             <span className="symbole">&diams; </span>
//           </div>
//           <div className="pic">
//             <div className="over archicture"></div>

//           </div>

//           <div className="pic">
//             <div className="over developer"></div>

//           </div>
//           <div className="pic">
//             <span className="symbole">&larr;</span>
//           </div>

//           <div className="pic">
//             <div className="over cake"></div>
//           </div>
//           <div className="pic">
//             <span className="symbole">&uarr; </span>
//           </div>

//           <div className="pic">
//             <span className="symbole">&rarr;</span>
//           </div>
//           <div className="pic">
//             <div className="over hair"></div>
//           </div>

//           <div className="pic">
//             <span className="symbole"> &darr; </span>
//           </div>
//           <div className="pic">
//             <div className="over math"></div>
//           </div>

//           <div className="pic">
//             <div className="over mechanic"></div>
//           </div>
//           <div className="pic">
//             <span className="symbole"> &Delta;</span>
//           </div>

//           <div className="pic">
//             <div className="over painter"></div>
//           </div>
//           <div className="pic">
//             <span className="symbole">&nabla; </span>
//           </div>

//           <div className="pic">
//             <span className="symbole"> &empty; </span>
//           </div>
//           <div className="pic">
//             <div className="over phone"></div>
//           </div>

//           <div className="pic">
//             <span className="symbole">&part; </span>
//           </div>
//           <div className="pic">
//             <div className="over pipe"></div>
//           </div>

//           <div className="pic">
//             <div className="over psychologist"></div>
//           </div>
//           <div className="pic">
//             <span className="symbole">&#36;</span>
//           </div>
//           <div className="pic">
//             <div className="over cooker"></div>
//           </div>
//           <div className="pic">
//             <span className="symbole">&#37;</span>
//           </div>

//           <div className="pic">
//             <span className="symbole">&#38;</span>
//           </div>
//           <div className="pic">
//             <div className="over translate"></div>
//           </div>
//           <div className="pic">
//             <span className="symbole">&#35;</span>
//           </div>
//           <div className="pic">
//             <div className="over signer"></div>
//           </div>
//         </div>
//         {login}
//       </div>
//     </>
//   );
// };

// export default Login;
