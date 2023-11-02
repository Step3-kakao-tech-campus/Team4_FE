import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import { editRedirectUrl } from '../../store/slices/redirectUrlSlice';

interface SocialLoginButtonProps {
  name: 'kakao' | 'google';
}

function SocialLoginButton({ name }: SocialLoginButtonProps) {
  const { t } = useTranslation();
  const currentLocation = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickHandleSocialLogin = (socialType: string) => {
    dispatch(editRedirectUrl({
      url: currentLocation.pathname,
    }));
    navigate(`http://localhost:8080/oauth2/authorization/${socialType}`);
  };

  if (name === 'kakao') {
    return (
      <button
        type="button"
        onClick={() => { onClickHandleSocialLogin('kakao'); }}
        className="mb-2 flex h-[40px] w-[250px] items-center justify-center rounded-xl bg-white shadow-md"
      >
        <img src="/img/social-login/kakao-ballon.png" alt={t('loginModal.kakaoLogo')} className="w-6" />
        <span className="text-md ml-4">{t('loginModal.loginKakao')}</span>
      </button>
    );
  }
  if (name === 'google') {
    return (
      <button
        type="button"
        onClick={() => { onClickHandleSocialLogin('google'); }}
        className="mb-2 flex h-[40px] w-[250px] items-center justify-center rounded-xl bg-white shadow-md"
      >
        <img src="/img/social-login/google-logo.png" alt={t('loginModal.googleLogo')} className="w-6" />
        <span className="text-md ml-4 font-roboto">{t('loginModal.loginGoogle')}</span>
      </button>
    );
  }
  return (<div>해당하는 소셜 로그인 버튼이 없습니다.</div>);
}

export default SocialLoginButton;
