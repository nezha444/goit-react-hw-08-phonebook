import { selectUser } from 'components/redux/auth/authSelector';
import { logoutThunk } from 'components/redux/auth/authThunk';
import { useDispatch, useSelector } from 'react-redux';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogout = event => {
    dispatch(logoutThunk());
  };

  const user = useSelector(selectUser);

  return (
    <div>
      <p>{user?.email}</p>
      <button onClick={handleLogout} type="button">
        Logout
      </button>
    </div>
  );
};
