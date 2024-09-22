import { IconSvg } from 'helpers/iconSvg';
import { AuthBox, LoginBtn, RegBtn } from './AuthMenu.styled';

const AuthMenu = () => {
  return (
    <AuthBox>
      <LoginBtn type="button">
        <IconSvg id="icon-log-in" width="20" height="20" />
        Log in
      </LoginBtn>
      <RegBtn type="button">Registration</RegBtn>
    </AuthBox>
  );
};

export default AuthMenu;
