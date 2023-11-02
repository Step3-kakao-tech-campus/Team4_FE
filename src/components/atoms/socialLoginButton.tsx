import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import { editRedirectUrl } from '../../store/slices/redirectUrlSlice';

interface SocialLoginButtonProps {
  name: 'kakao' | 'google';
}

function SocialLoginButton({ name }: SocialLoginButtonProps) {
  const { t } = useTranslation();
  const currentLocation = useLocation();
  const dispatch = useDispatch();

  const onClickHandleSocialLogin = () => {
    dispatch(editRedirectUrl({
      url: currentLocation.pathname,
    }));
  };

  if (name === 'kakao') {
    return (
      <a href="http://localhost:8080/oauth2/authorization/kakao">
        <button
          type="button"
          onClick={() => { onClickHandleSocialLogin(); }}
          className="mb-2 flex h-[40px] w-[250px] items-center justify-center rounded-xl bg-white shadow-md"
        >
          <img src="/img/social-login/kakao-ballon.png" alt={t('loginModal.kakaoLogo')} className="w-6" />
          <span className="text-md ml-4">{t('loginModal.loginKakao')}</span>
        </button>
      </a>
    );
  }
  if (name === 'google') {
    return (
      <a href="http://localhost:8080/oauth2/authorization/google">
        <button
          type="button"
          onClick={() => { onClickHandleSocialLogin(); }}
          className="mb-2 flex h-[40px] w-[250px] items-center justify-center rounded-xl bg-white shadow-md"
        >
          <img src="/img/social-login/google-logo.png" alt={t('loginModal.googleLogo')} className="w-6" />
          <span className="text-md ml-4 font-roboto">{t('loginModal.loginGoogle')}</span>
        </button>
      </a>
    );
  }
  return (<div>해당하는 소셜 로그인 버튼이 없습니다.</div>);
}

export default SocialLoginButton;
