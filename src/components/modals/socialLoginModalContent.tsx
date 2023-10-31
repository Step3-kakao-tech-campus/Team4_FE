import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import SocialLoginButton from '../atoms/socialLoginButton';
import Icon from '../atoms/icon';

function SocialLoginModalContent() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="absolute left-1/2 top-1/2 h-[360px] w-[300px] -translate-x-1/2 -translate-y-1/2
     overflow-auto rounded-[10px] bg-white p-6 shadow-[0_2px_2px_2px_rgba(0,0,0,0.25)]"
    >
      <div className="relative mt-12 text-center">
        <button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
          className="absolute right-[-0.5rem] top-[-3.5em]"
        >
          <Icon name="OutlineClose" size="1rem" ariaLabel={t('loginModal.closeIcon')} />
        </button>
        <div className="mb-6 text-2xl font-bold">
          <span className="text-4xl">
            <span className="text-matgpt-red">MatGP</span>
            T
          </span>
        </div>
        <div className="mb-8 font-bold">
          {t('loginModal.requestLogin')}
        </div>
        <div className="mx-auto w-[250px]">
          <SocialLoginButton name="google" />
          <SocialLoginButton name="kakao" />
        </div>
      </div>
    </div>
  );
}

export default SocialLoginModalContent;
