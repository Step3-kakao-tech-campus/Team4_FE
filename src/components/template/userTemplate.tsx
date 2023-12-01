import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import MyPageList from '../molecules/myPageList';
import Button from '../atoms/button';
import PageTitleCard from '../molecules/pageTitleCard';
import { logout } from '../../apis/login';

function UserTemplate() {
  const { t } = useTranslation();

  const onClickLogout = () => {
    if (localStorage.getItem('accessToken') === null) {
      alert('로그인 상태가 아닙니다.');
      return;
    }

    const accessToken = localStorage.getItem('accessToken') || '';
    const refreshToken = localStorage.getItem('refreshToken') || '';

    logout(accessToken.split(' ')[1], refreshToken.split(' ')[1]).then(() => {
      localStorage.removeItem('email');
      localStorage.removeItem('nickname');
      localStorage.removeItem('profileImageUrl');
      localStorage.removeItem('gender');
      localStorage.removeItem('age');
      localStorage.removeItem('language');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('accessTokenExpiresIn');
      window.location.reload();
    }).catch((err) => {
      alert(err);
    });
  };

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
        <div className="flex justify-center">
          <button
            type="button"
            className="underline decoration-solid"
            onClick={onClickLogout}
          >
            {t('login.logout')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserTemplate;
