import { useTranslation } from 'react-i18next';

interface SocialLoginButtonProps {
  name: 'kakao' | 'google';
}

function SocialLoginButton({ name } :SocialLoginButtonProps) {
  const { t } = useTranslation();
  if (name === 'kakao') {
    return (
      <a href="http://localhost:8080/oauth2/authorization/kakao" className="flex items-center justify-center bg-[#FEE500] w-[250px] h-[40px] rounded-xl mb-2">
        <img src="/img/social-login/kakao-ballon.png" alt={t('loginModal.kakaoLogo')} className="w-6" />
        <span className="ml-4 text-md">{t('loginModal.loginKakao')}</span>
      </a>
    );
  }
  if (name === 'google') {
    return (
      <a href="http://localhost:8080/oauth2/authorization/Google" className="flex items-center justify-center bg-white w-[250px] h-[40px] shadow-md rounded-xl mb-2">
        <img src="/img/social-login/google-logo.png" alt={t('loginModal.googleLogo')} className="w-6" />
        <span className="ml-4 font-roboto text-md">{t('loginModal.loginGoogle')}</span>
      </a>
    );
  }
  return (<div>해당하는 소셜 로그인 버튼이 없습니다.</div>);
}

export default SocialLoginButton;
