import { rest } from 'msw';
import { writedReviewData } from './data/writedReview';
import recentlyViewdStoreData from './data/recentlyViewdStore';
import { coinRechargeData, coinUsageData } from './data/coinData';

export const handlers = [
  rest.get('/search', (req, res, ctx) => {
    const searchString = req.url.searchParams.get('q');

    if (searchString === null || searchString.length < 2) {
      return res(
        ctx.status(400),
        ctx.json({
          success: false,
          response: null,
          error: {
            status: 400,
            message: '잘못된 요청입니다.',
          },
        }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: [
          {
            storeId: 1,
            storeName: '몽중헌 판교점',
            category: '중식당',
            review: '닭껍질이 엄청 맛있습니다',
            image: '/image/fakeDb/store/store1.png',
            reviewCount: 2000,
            rating: 4.3,
          },
          {
            storeId: 2,
            storeName: '고반식당 판교아브뉴프랑점',
            category: '돼지고기 구이',
            review: '숙성고기 맛집',
            image: '/image/fakeDb/store/store2.png',
            reviewCount: 500,
            rating: 4.6,
          },
          {
            storeId: 3,
            storeName: '비앙또아 판교점',
            category: '양식',
            review: '줄 서서 먹는 브런치 카페',
            image: '/image/fakeDb/store/store3.png',
            reviewCount: 500,
            rating: 4.4,
          },
          {
            storeId: 1,
            storeName: '몽중헌 판교점',
            category: '중식당',
            review: '닭껍질이 엄청 맛있습니다',
            image: '/image/fakeDb/store/store1.png',
            reviewCount: 2000,
            rating: 4.3,
          },
          {
            storeId: 2,
            storeName: '고반식당 판교아브뉴프랑점',
            category: '돼지고기 구이',
            review: '숙성고기 맛집',
            image: '/image/fakeDb/store/store2.png',
            reviewCount: 500,
            rating: 4.6,
          },
          {
            storeId: 3,
            storeName: '비앙또아 판교점',
            category: '양식',
            review: '줄 서서 먹는 브런치 카페',
            image: '/image/fakeDb/store/store3.png',
            reviewCount: 500,
            rating: 4.4,
          },
          {
            storeId: 1,
            storeName: '몽중헌 판교점',
            category: '중식당',
            review: '닭껍질이 엄청 맛있습니다',
            image: '/image/fakeDb/store/store1.png',
            reviewCount: 2000,
            rating: 4.3,
          },
          {
            storeId: 2,
            storeName: '고반식당 판교아브뉴프랑점',
            category: '돼지고기 구이',
            review: '숙성고기 맛집',
            image: '/image/fakeDb/store/store2.png',
            reviewCount: 500,
            rating: 4.6,
          },
          {
            storeId: 3,
            storeName: '비앙또아 판교점',
            category: '양식',
            review: '줄 서서 먹는 브런치 카페',
            image: '/image/fakeDb/store/store3.png',
            reviewCount: 500,
            rating: 4.4,
          },
          {
            storeId: 2,
            storeName: '고반식당 판교아브뉴프랑점',
            category: '돼지고기 구이',
            review: '숙성고기 맛집',
            image: '/image/fakeDb/store/store2.png',
            reviewCount: 500,
            rating: 4.6,
          },
        ],
        error: null,
      }),
    );
  }),

  rest.get('/stores/:storeId', (req, res, ctx) => {
    const { storeId } = req.params;

    if (Number.isNaN(+storeId)) {
      return res(
        ctx.status(400),
        ctx.json({
          success: false,
          response: null,
          error: {
            status: 400,
            message: '잘못된 요청입니다.',
          },
        }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: {
          storeId: 1,
          storeName: '몽중헌 판교점',
          storeImage: '/image/fakeDb/store/store1.png',
          reviewCount: 2000,
          rating: 4.3,
          information: '음식점 정보',
        },
        error: null,
      }),
    );
  }),

  rest.get('/stores/:storeId/reviews', (req, res, ctx) => {
    const { storeId } = req.params;

    if (Number.isNaN(+storeId)) {
      return res(
        ctx.status(400),
        ctx.json({
          success: false,
          response: null,
          error: {
            status: 400,
            message: '잘못된 요청입니다.',
          },
        }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: [
          {
            storeId: 1,
            reviewId: 1,
            storeImage: '/image/fakeDb/store/store1.png',
            storeName: '몽중헌 판교점',
            profileImage: '/image/fakeDb/userPage/userImage.png',
            reviewerName: '춘식이',
            reviewRating: '4.5',
            visitedCount: 2,
            createdAt: '3일 전',
          },
          {
            storeId: 1,
            reviewId: 2,
            storeImage: '/image/fakeDb/store/store1.png',
            storeName: '몽중헌 판교점',
            profileImage: '/image/fakeDb/userPage/userImage.png',
            reviewerName: '춘식이',
            reviewRating: '4.5',
            visitedCount: 2,
            createdAt: '3일 전',
          },
          {
            storeId: 1,
            reviewId: 3,
            storeImage: '/image/fakeDb/store/store1.png',
            storeName: '몽중헌 판교점',
            profileImage: '/image/fakeDb/userPage/userImage.png',
            reviewerName: '춘식이',
            reviewRating: '4.5',
            visitedCount: 2,
            createdAt: '3일 전',
          },
        ],
        error: null,
      }),
    );
  }),

  rest.get('/mypage/write-reviews', (req, res, ctx) => {
    const cursor = Number(req.url.searchParams.get('cursor'));
    const limits = Number(req.url.searchParams.get('limits'));
    if (cursor === 1 && limits === 8) {
      return res(
        ctx.status(200),
        ctx.json(writedReviewData[0]),
      );
    }
    if (cursor === 9 && limits === 8) {
      return res(
        ctx.status(200),
        ctx.json(writedReviewData[1]),
      );
    }
    return res(
      ctx.status(200),
      ctx.json(writedReviewData[2]),
    );
  }),

  rest.get('/mypage/liked-reviews', (req, res, ctx) => {
    const cursor = Number(req.url.searchParams.get('cursor'));
    const limits = Number(req.url.searchParams.get('limits'));
    if (cursor === 1 && limits === 8) {
      return res(
        ctx.status(200),
        ctx.json(writedReviewData[0]),
      );
    }
    if (cursor === 9 && limits === 8) {
      return res(
        ctx.status(200),
        ctx.json(writedReviewData[1]),
      );
    }
    return res(
      ctx.status(200),
      ctx.json(writedReviewData[2]),
    );
  }),

  rest.get('/mypage/recent-stores', (req, res, ctx) => {
    const cursor = Number(req.url.searchParams.get('cursor'));
    const limits = Number(req.url.searchParams.get('limits'));
    if (cursor === 1 && limits === 6) {
      return res(
        ctx.status(200),
        ctx.json(recentlyViewdStoreData[0]),
      );
    }
    if (cursor === 7 && limits === 6) {
      return res(
        ctx.status(200),
        ctx.json(recentlyViewdStoreData[1]),
      );
    }
    return res(
      ctx.status(200),
      ctx.json(recentlyViewdStoreData[2]),
    );
  }),
  rest.put('/mypage/edit-profile', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({ status: 200 }),
  )),
  rest.get('/mypage/profile', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      language: '한국어',
      gender: '남자',
      nickname: '닉네임',
      profileImage: '/image/fakeDb/userPage/userImage.png',
    }),
  )),

  rest.get('/mypage/charge-coin', (req, res, ctx) => {
    const cursor = Number(req.url.searchParams.get('cursor'));
    const limits = Number(req.url.searchParams.get('limits'));
    if (cursor === 1 && limits === 12) {
      return res(
        ctx.status(200),
        ctx.json(
          coinRechargeData[0],
        ),
      );
    }
    if (cursor === 13 && limits === 12) {
      return res(
        ctx.status(200),
        ctx.json(
          coinRechargeData[1],
        ),
      );
    }
    return res(
      ctx.status(200),
      ctx.json(
        coinRechargeData[2],
      ),
    );
  }),
  rest.get('/mypage/usage-coin', (req, res, ctx) => {
    const cursor = Number(req.url.searchParams.get('cursor'));
    const limits = Number(req.url.searchParams.get('limits'));
    if (cursor === 1 && limits === 12) {
      return res(
        ctx.status(200),
        ctx.json(
          coinUsageData[0],
        ),
      );
    }
    if (cursor === 13 && limits === 12) {
      return res(
        ctx.status(200),
        ctx.json(
          coinUsageData[1],
        ),
      );
    }
    return res(
      ctx.status(200),
      ctx.json(
        coinUsageData[2],
      ),
    );
  }),
  rest.get('/reviews/:reviewId', (req, res, ctx) => {
    const { reviewId } = req.params;

    if (Number.isNaN(+reviewId)) {
      return res(
        ctx.status(400),
        ctx.json({
          success: false,
          response: null,
          error: {
            status: 400,
            message: '잘못된 요청입니다.',
          },
        }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: {
          content: 'Lorem ipsum dolor sit amet consectetur. Tellus erat arcu mauris maecenas condimentum tellus laoreet sagittis eleifend. Auctor massa praesent non ac et vitae. Nisl enim est faucibus nunc sociis faucibus. Tellus risus iaculis id in id. Eget bibendum dictum morbi sit diam rutrum at. Risus condimentum curabitur arcu aliquam lorem. Purus feugiat ac id scelerisque. Vel eget imperdiet leo at arcu platea vivamus gravida leo.',
          peopleCount: 2,
          rating: 5,
          reviewImages: [{
            imageData: '/image/fakeDb/review/reviewImage.png',
            tags: [{
              imageIndex: 0,
              tagindex: 0,
              name: '짜장면',
              locationX: 61.8,
              locationY: 26.8,
              rating: 5,
            },
            {
              imageIndex: 0,
              tagindex: 1,
              name: '탕수육',
              locationX: 80.8,
              locationY: 6.8,
              rating: 1,
            }],
          }, {
            imageData: '/image/fakeDb/store/store2.png',
            tags: [{
              imageIndex: 1,
              tagindex: 0,
              name: '삼겹살',
              locationX: 40.8,
              locationY: 40.8,
              rating: 4,
            }],
          }],
          totalPrice: 33000,
        },
        error: null,
      }),
    );
  }),
];
