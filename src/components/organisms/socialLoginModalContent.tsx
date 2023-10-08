import { useTranslation } from 'react-i18next';
import { AiOutlineClose } from 'react-icons/ai';
import SocialLoginButton from '../atoms/socialLoginButton';

interface SocialLoginModalContentProps {
  onCloseModalClick: () => {};
}

function SocialLoginModalContent({ onCloseModalClick }:SocialLoginModalContentProps) {
  const { t } = useTranslation();
  return (
    <div>
      <div className="text-center mt-12 relative">
        <button type="button" onClick={() => { onCloseModalClick(); }} className="absolute top-[-3.5em] right-[-0.5rem]">
          <AiOutlineClose />
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
