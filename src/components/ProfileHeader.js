import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUserProfile, updateUser } from "../features/userSlice";
// import { updateUserProfile } from "../actions/actionCreators";
// import { cancelUpdateUserProfile } from "../actions/actionCreators";
// import { updateUserFirstAndLastName } from "../actions/actionCreators";
// import { cancelUserFirstAndLastName } from "../actions/actionCreators";

const UserHeader = () => {
  const userFirstName = useSelector((state) => state.user.firstName);
  console.log(userFirstName);
  const userLastName = useSelector((state) => state.user.lastName);
  console.log(userLastName);

  const dispatch = useDispatch();

  useEffect(() => {
    
  })

  return (
    <div className="userHeader">
      <h1>Welcome back</h1>
      <form>
        <div className="formFirstLastNames">
          <div className="user-input-wrapper">
            <input type="text" name="firstName" placeholder={userFirstName} required />
          </div>
          <div className="user-input-wrapper">
            <input type="text" name="lastName" placeholder={userLastName} required />
          </div>
        </div>
        <button
          onClick={() => {
            dispatch(updateUser());
          }}
          type="submit"
          className="update-button"
        >
          Save
        </button>
        <button
          // onClick={() => {
          //   dispatch(cancelUpdateUserProfile());
          // }}
          type="submit"
          className="update-button">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UserHeader;