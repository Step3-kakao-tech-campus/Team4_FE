import { useTranslation } from 'react-i18next';
import SocialLoginButton from '../atoms/socialLoginButton';
import Icon from '../atoms/icon';

interface SocialLoginModalContentProps {
  onCloseModalClick: () => void;
}

function SocialLoginModalContent({ onCloseModalClick }:SocialLoginModalContentProps) {
  const { t } = useTranslation();
  return (
    <div>
      <div className="text-center mt-12 relative">
        <button type="button" onClick={() => { onCloseModalClick(); }} className="absolute top-[-3.5em] right-[-0.5rem]">
          <Icon name="OutlineClose" size="1rem" ariaLabel={t('loginModal.closeIcon')} />
        </button>
        <div className="text-2xl font-bold mb-6">
          <span className="text-4xl">
            <span className="text-matgpt-red">MatGP</span>
            T
          </span>
        </div>
        <div className="mb-8 font-bold">
          {t('loginModal.requestLogin')}
        </div>
        <div className="w-[250px] mx-auto">
          <SocialLoginButton name="google" />
          <SocialLoginButton name="kakao" />
        </div>
      </div>
    </div>
  );
}

export default SocialLoginModalContent;
