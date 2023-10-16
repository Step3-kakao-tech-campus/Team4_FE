import { rest } from 'msw';

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
            createdAt: new Date(),
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
            createdAt: new Date(),
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
            createdAt: new Date(),
          },
        ],
        error: null,
      }),
    );
  }),
];
