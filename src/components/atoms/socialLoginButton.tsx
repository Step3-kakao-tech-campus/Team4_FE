import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

interface SocialLoginButtonProps {
  name: 'kakao' | 'google';
  size?: 'medium' | 'large';
}

function SocialLoginButton({ name, size = 'medium' }: SocialLoginButtonProps) {
  const { t } = useTranslation();
  const currentLocation = useLocation();

  const onClickHandleSocialLogin = (socialType: string) => {
    localStorage.setItem('previouseUrl', currentLocation.pathname);
    window.location.href = `https://kauth.${socialType}.com/oauth/authorize?client_id=f46f96e8851e0a56496f0d93d20f869a&redirect_uri=https://k4cd71a7a9c51a.user-app.krampoline.com/login/oauth2/code/kakao&response_type=code`;
  };

  if (name === 'kakao') {
    return (
      <button
        type="button"
        onClick={() => { onClickHandleSocialLogin('kakao'); }}
        className={`mb-2 flex h-[40px] items-center justify-center rounded-xl bg-white shadow-md ${size === 'medium' ? 'px-14' : 'px-20'}`}
      >
        <img src="/img/social-login/kakao-ballon.png" alt={t('loginModal.kakaoLogo')} className="w-6" />
        <span className="text-md ml-4 font-roboto">{t('loginModal.loginKakao')}</span>
      </button>
    );
  }
  if (name === 'google') {
    return (
      <button
        type="button"
        onClick={() => { onClickHandleSocialLogin('google'); }}
        className={`flex h-[40px] items-center justify-center rounded-xl bg-white shadow-md ${size === 'medium' ? 'px-4' : 'px-12'}`}
      >
        <img src="/img/social-login/google-logo.png" alt={t('loginModal.googleLogo')} className="w-6" />
        <span className="text-md ml-4 font-roboto">{t('loginModal.loginGoogle')}</span>
      </button>
    );
  }
  return (<div>해당하는 소셜 로그인 버튼이 없습니다.</div>);
}

export default SocialLoginButton;
