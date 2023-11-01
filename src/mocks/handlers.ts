import { rest } from 'msw';
import { writedReviewData } from './data/writedReview';
import recentlyViewdStoreData from './data/recentlyViewdStore';
import { coinRechargeData, coinUsageData } from './data/coinData';
import { reviewDetailData } from './data/reviewDetailData';
import { storeMarkers } from './data/storeMarker';

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
          information: '영업시간: 월-금 10:00~22:00\n토 10:00~14:00\n일 휴무',
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

  rest.get('/stores/:storeId/reviews/:reviewId', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(reviewDetailData),
  )),

  rest.post('/stores/:storeId/reviews/:reviewId', (req, res, ctx) => res(
    ctx.status(201),
    ctx.json({
      success: true,
      response: {
        reviewId: 1,
      },
      error: null,
    }),
  )),

  rest.get('/', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      success: true,
      response: storeMarkers,
      error: null,
    }),
  )),

  rest.post('/stores/:storeId/reviews', (req, res, ctx) => res(
    ctx.status(201),
    ctx.json({
      success: true,
      response: {
        reviewId: 1,
      },
      error: null,
    }),
  )),

  rest.get('/gpt/store/:storeId/review/best', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      data: {
        isExist: false,
        content: {
          BEST: '수육이 최고에요. 맛있어서 다시 오고 싶어요. 깔끔하고 개운해요. 특히 깍두기와 김치가 맛있어요. 진짜 맛있는 곳이에요.',
        },
      },
    }),
  )),

  rest.get('/gpt/store/:storeId/review/worst', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      data: {
        isExist: true,
        content: {
          WORST: '음식이 자극적이고 양이 부족하며, 맛은 짜고 기다리기도 하고, 일본인들이 많이 찾아오는 것 같은 맛집이다.',
        },
      },
    }),
  )),
  
  rest.post('/stores/:storeId/reviews/:reviewId/like', (req, res, ctx) => res(
    ctx.status(201),
    ctx.json({
      success: true,
      response: {
        reviewId: 1,
      },
      error: null,
    }),
  )),

  rest.post('/stores/:storeId/reviews/:reviewId/like-cancel', (req, res, ctx) => res(
    ctx.status(201),
    ctx.json({
      success: true,
      response: {
        reviewId: 1,
      },
      error: null,
    }),
  )),

  rest.get('/prompt/:promptId', (req, res, ctx) => {
    const { promptId } = req.params;

    if (Number.isNaN(+promptId)) {
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
      ctx.status(201),
      ctx.json({
        success: true,
        response: {
          짜장면: 2,
          탕수육: 3,
          삼겹살: 5,
        },
        error: null,
      }),
    );
  }),
];
