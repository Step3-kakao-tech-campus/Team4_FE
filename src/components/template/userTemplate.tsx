import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import MyPageList from '../molecules/myPageList';
import Button from '../atoms/button';
import PageTitleCard from '../molecules/pageTitleCard';

function UserTemplate() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="bg-gradient-to-b from-matgpt-blue from-55% to-white to-45%">
        <div className="flex items-center justify-between text-lg text-white">
          <PageTitleCard pageTitle={t('userPage.pageTitle')} />
        </div>
        <div className="flex flex-col items-center">
          <img src="/image/fakeDb/userPage/userImage.png" alt={t('userPage.userImage')} className="w-[9rem]" />
          <span className="py-3 text-xl font-bold">{t('userPage.userName')}</span>
          <Link to="/profileEditing">
            <Button>{t('userPage.configProfile')}</Button>
          </Link>
        </div>
      </div>
      <div>
        <MyPageList text={t('userPage.likedRestaurant')} linkTo="/likedStores" />
        <MyPageList text={t('userPage.recentlyViewedRestaurant')} linkTo="/recentStores" />
        <MyPageList text={t('userPage.writtenReview')} linkTo="/writtenReview" />
        <MyPageList text={t('userPage.likedReview')} linkTo="/likedReview" />
        <MyPageList text={t('userPage.coinRechargeHistory')} linkTo="/coinRechargeHistory" />
        <MyPageList text={t('userPage.coinUsageHistory')} linkTo="/coinUsageHistory" />
        <MyPageList text={t('userPage.language')} linkTo="/language" />
        <div className="mb-8 pb-8 text-center text-matgpt-gray">
          <span>{t('userPage.logout')}</span>
        </div>
      </div>
    </div>
  );
}

export default UserTemplate;
