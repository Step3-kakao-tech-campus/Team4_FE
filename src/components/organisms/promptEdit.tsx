import React from 'react';
import { useMutation } from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Icon from '../atoms/icon';
import PromptList from '../molecules/promptList';
import Button from '../atoms/button';
import { createPrompt } from '../../apis/prompt';

interface PromptEditProps {
  prompts: { [key: string]: number },
  setPrompts: React.Dispatch<React.SetStateAction<{}>>,
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>,
}

function PromptEdit({ prompts, setPrompts, setIsClick }: PromptEditProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { storeId, reviewId } = useParams();
  const promptId = 1;
  const { mutate: createPromptMutation } = useMutation({ // post 요청 성공 시 promptId 값 받음 후에 수정 해야 함
    mutationKey: 'createPrompt',
    mutationFn: () => {
      if (storeId === undefined || reviewId === undefined) { return createPrompt(0, 0, {}); }
      return createPrompt(+storeId, +reviewId, prompts);
    },
    onSuccess: () => { alert(t('reviewDetailPage.successPromptCreate')); navigate(`/prompt/${promptId}`); },
    onError: () => { alert(t('reviewDetailPage.failPromptCreate')); },
  });

  const onHandleCreatePrompt = () => {
    if (Object.keys(prompts).length < 1) {
      alert(t('reviewDetailPage.noMenuToCreate'));
      return;
    }
    createPromptMutation();
  };

  return (
    <div>
      <div className="my-6 flex items-center justify-between">
        <h1 className="ml-4 text-3xl">{t('reviewDetailPage.orderPrompt')}</h1>
        <div>
          <span className="text-2xl">
            {t('reviewDetailPage.sum')}
            {Object.keys(prompts).length}
            {t('reviewDetailPage.num')}
          </span>
        </div>
        <button type="button" className="mr-2" onClick={() => { setIsClick(false); }}>
          <Icon name="OutlineClose" ariaLabel={t('reviewDetailPage.closePrompt')} size="2rem" />
        </button>
      </div>
      <div className="mb-36">
        {
          Object.keys(prompts).map((key) => (
            <div key={key}>
              <PromptList
                menu={key}
                number={prompts[key]}
                setPrompts={setPrompts}
                prompts={prompts}
              />
            </div>
          ))
        }
      </div>
      <Button onClick={() => { onHandleCreatePrompt(); }} size="medium" extraStyle="w-full max-w-[500px] fixed bottom-20">
        {t('reviewDetailPage.createPrompt')}
      </Button>
    </div>
  );
}

export default PromptEdit;
