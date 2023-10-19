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
          response: {},
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
];
