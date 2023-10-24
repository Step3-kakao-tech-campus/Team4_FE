import {
  useState, SetStateAction, Dispatch, useRef,
} from 'react';
import { useTranslation } from 'react-i18next';
import Input from '../atoms/input';
import Button from '../atoms/button';
import Icon from '../atoms/icon';
import { ReviewImageTagInfo } from '../../types/review';
import { RefHandler } from '../../types/refHandler';

interface DefaultTagProps {
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function DefaultTag({ name, onClick }: DefaultTagProps) {
  return (
    <div className="relative flex w-[10rem] flex-col items-center">
      <button
        type="button"
        className="flex rounded-lg bg-black px-3 py-2"
        onClick={onClick}
      >
        <span className="text-sm text-white">{name}</span>
      </button>
      <div className="w-4 border-[0.5rem] border-transparent border-t-black" />
    </div>
  );
}

interface MenuTagProps {
  tagIndex: number;
  name: string;
  mode: 'modify' | 'prompt';
  onPromptEvent?: React.MouseEventHandler<HTMLButtonElement>;
  onDeleteEvent?: React.MouseEventHandler<HTMLButtonElement>;
  reviewImageTags?: ReviewImageTagInfo[];
  setReviewImageTags?: Dispatch<SetStateAction<ReviewImageTagInfo[]>>;
}

export default function MenuTag({
  tagIndex,
  name,
  mode,
  onPromptEvent = () => {},
  onDeleteEvent = () => {},
  reviewImageTags,
  setReviewImageTags,
}: MenuTagProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();

  const inputRef = useRef<RefHandler>(null);

  const modifyMenuTag = (tagIndexToModify: number, modifiedName: string) => {
    if (reviewImageTags !== undefined && setReviewImageTags !== undefined) {
      const prevTags = reviewImageTags.slice();
      prevTags[tagIndexToModify] = {
        ...prevTags[tagIndexToModify],
        name: modifiedName,
      };

      setReviewImageTags([
        ...prevTags.slice(0, tagIndexToModify),
        prevTags[tagIndexToModify],
        ...prevTags.slice(tagIndexToModify + 1),
      ]);
    }
  };

  if (mode === 'modify') {
    return (
      <div>
        {isExpanded ? (
          <div className="relative flex w-[10rem] flex-col items-center">
            <div className="flex flex-col gap-2 rounded-xl bg-black px-4 py-2">
              <button
                type="button"
                onClick={onDeleteEvent}
                className="absolute right-2 top-2 text-white"
              >
                <Icon name="OutlineClose" size="1rem" ariaLabel="메뉴 태그 삭제" />
              </button>
              <div className="mr-3">
                <Input ref={inputRef} mode="singleLine" defaultValue={name} />
              </div>
              <div className="flex flex-row justify-around">
                <Button
                  size="small"
                  textColor="text-black"
                  onClick={() => {
                    modifyMenuTag(tagIndex, inputRef.current?.getInputValue() || '');
                  }}
                >
                  {t('menuTag.modify')}
                </Button>
                <Button
                  size="small"
                  backgroundColor="bg-matgpt-gray"
                  textColor="text-black"
                  onClick={() => setIsExpanded(false)}
                >
                  {t('menuTag.cancel')}
                </Button>
              </div>
            </div>
            <div className="w-4 border-[0.5rem] border-transparent border-t-black" />
          </div>
        ) : (
          <DefaultTag name={name === '' ? '메뉴 이름을 입력해주세요.' : name} onClick={() => setIsExpanded(true)} />
        )}
      </div>
    );
  }

  if (mode === 'prompt') {
    return (
      <div>
        {isExpanded ? (
          <div className="relative flex w-[10rem] flex-col items-center">
            <section className="flex flex-col gap-1 rounded-xl bg-black px-4 py-2 text-white">
              <h3 className="font-bold">{name}</h3>
              <p className="text-xs">{t('menuTag.prompt')}</p>
              <div className="mt-1 flex flex-row justify-around">
                <Button
                  size="small"
                  textColor="text-black"
                  onClick={onPromptEvent}
                >
                  {t('menuTag.add')}
                </Button>
                <Button
                  size="small"
                  backgroundColor="bg-matgpt-gray"
                  textColor="text-black"
                  onClick={() => setIsExpanded(false)}
                >
                  {t('menuTag.cancel')}
                </Button>
              </div>
            </section>
            <div className="w-4 border-[0.5rem] border-transparent border-t-black" />
          </div>
        ) : (
          <DefaultTag name={name} onClick={() => setIsExpanded(true)} />
        ) }
      </div>
    );
  }

  return (
    <>
    </>
  );
}
