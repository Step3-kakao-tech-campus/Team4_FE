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

function DefaultTag({
  name,
  onClick,
}: DefaultTagProps) {
  return (
    <div className="relative w-4 border-[0.5rem] border-transparent border-t-black">
      <button
        type="button"
        className="absolute left-1/2 top-1/2 flex
          -translate-x-1/2 translate-y-[calc(-100%-0.5rem)] whitespace-nowrap
          break-all rounded-lg bg-black px-3 py-2"
        onClick={onClick}
      >
        <span className="text-sm text-white">{name}</span>
      </button>
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
      const newTags = prevTags.map((prevTag) => {
        if (prevTag.tagIndex === tagIndexToModify) {
          return {
            ...prevTag,
            name: modifiedName,
          };
        }

        return prevTag;
      });

      setReviewImageTags(newTags);
    }
  };

  if (mode === 'modify') {
    return (
      <>
        {isExpanded ? (
          <div className="relative w-4 border-[0.5rem] border-transparent border-t-black">
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-[calc(-100%-0.5rem)] flex-col gap-2 rounded-xl bg-black px-4 py-2">
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
              <div className="flex flex-row justify-around gap-2">
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
          </div>
        ) : (
          <DefaultTag
            name={name === '' ? '메뉴 이름을 입력해주세요.' : name}
            onClick={() => setIsExpanded(true)}
          />
        )}
      </>
    );
  }

  if (mode === 'prompt') {
    return (
      <div>
        {isExpanded ? (
          <div className="relative w-4 border-[0.5rem] border-transparent border-t-black">
            <section className="absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-[calc(-100%-0.5rem)] flex-col gap-1 rounded-xl bg-black px-4 py-2 text-white">
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
          </div>
        ) : (
          <DefaultTag
            name={name}
            onClick={() => setIsExpanded(true)}
          />
        ) }
      </div>
    );
  }

  return (
    <>
    </>
  );
}
