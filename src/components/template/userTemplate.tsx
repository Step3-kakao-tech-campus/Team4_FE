import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AiOutlineLeft, AiOutlineBell } from 'react-icons/ai';
import MyPageList from '../molecules/myPageList';
import Button from '../atoms/button';
import NavigationBar from '../layouts/navigationBar';

function UserTemplate() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="bg-gradient-to-b from-matgpt-blue from-65% to-white to-45%">
        <div className="flex justify-between items-center pt-5 text-white text-lg">
          <AiOutlineLeft className="ml-4" />
          <span>{t('userPage.pageTitle')}</span>
          <AiOutlineBell className="mr-4" />
        </div>
        <div className="flex flex-col items-center pt-12">
          <img src="/image/fakeDb/userPage/userImage.png" alt={t('userPage.userImage')} className="w-[9rem]" />
          <span className="py-3 font-bold text-xl">{t('userPage.userName')}</span>
          <Link to="/profileEditingPage">
            <Button>{t('userPage.configProfile')}</Button>
          </Link>
        </div>
      </div>
      <div>
        <MyPageList text={t('userPage.likedRestaurant')} linkTo="/likedRestaurant" />
        <MyPageList text={t('userPage.recentlyViewedRestaurant')} linkTo="/recentlyViewedRestaurant" />
        <MyPageList text={t('userPage.writtenReview')} linkTo="/writtenReview" />
        <MyPageList text={t('userPage.likedReview')} linkTo="/likedReview" />
        <MyPageList text={t('userPage.coinRechargeHistory')} linkTo="/coinRechargeHistory" />
        <MyPageList text={t('userPage.coinUsageHistory')} linkTo="/coinUsageHistory" />
        <MyPageList text={t('userPage.language')} linkTo="/language" />
        <div className="text-center text-matgpt-gray mb-8 pb-8">
          <span>{t('userPage.logout')}</span>
        </div>
      </div>
      <NavigationBar />
    </div>
  );
}

export default UserTemplate;
