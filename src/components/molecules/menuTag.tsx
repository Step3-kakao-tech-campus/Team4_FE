import {
  useState, useRef,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Input from '../atoms/input';
import Button from '../atoms/button';
import Icon from '../atoms/icon';
import { RefHandler } from '../../types/refHandler';
import { modifyMenuTag, removeMenuTag } from '../../store/slices/menuTagSlice';
import SelectTagRating from './selectTagRating';
import TagRating from './tagRating';

interface DefaultTagProps {
  name: string;
  rating: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function DefaultTag({
  name,
  rating,
  onClick,
}: DefaultTagProps) {
  return (
    <div className="relative w-4 -translate-x-2 -translate-y-2 border-[0.5rem] border-transparent border-t-black">
      <button
        type="button"
        className="absolute left-1/2 top-1/2 flex
          -translate-x-1/2 translate-y-[calc(-100%-0.5rem)] whitespace-nowrap
          break-all rounded-lg bg-black px-3 py-2"
        onClick={onClick}
      >
        <div className="flex items-center gap-1 text-white">
          <span className="text-sm">{name}</span>
          {rating !== 0 ? <TagRating rating={rating} /> : null}
        </div>
      </button>
    </div>
  );
}

interface MenuTagProps {
  tagIndex: number;
  name: string;
  rating: number;
  mode: 'modify' | 'prompt';
  onPromptEvent?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function MenuTag({
  tagIndex,
  name,
  rating,
  mode,
  onPromptEvent = () => {},
}: MenuTagProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [modifyRating, setModifyRating] = useState(rating);
  const { t } = useTranslation();
  const inputRef = useRef<RefHandler>(null);
  const menuTagDispatch = useDispatch();

  const handleModifyTag = (modifiedName: string) => {
    menuTagDispatch(modifyMenuTag({
      tagIndex,
      name: modifiedName,
      rating: modifyRating,
    }));
    setIsExpanded(false);
  };

  const handleDeleteTag = () => {
    menuTagDispatch(removeMenuTag({
      tagIndex,
    }));
  };

  if (mode === 'modify') {
    return (
      <>
        {isExpanded ? (
          <div className="relative w-4 -translate-x-2 -translate-y-2 border-[0.5rem] border-transparent border-t-black">
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-[calc(-100%-0.5rem)] flex-col gap-2 rounded-xl bg-black px-4 py-2">
              <button
                type="button"
                className="absolute right-2 top-2 text-white"
                onClick={() => handleDeleteTag()}
              >
                <Icon name="OutlineClose" size="1rem" ariaLabel="메뉴 태그 삭제" />
              </button>
              <div className="mr-3">
                <Input ref={inputRef} mode="singleLine" defaultValue={name} />
              </div>
              <SelectTagRating
                rating={modifyRating}
                setRating={setModifyRating}
              />
              <div className="flex flex-row justify-around gap-2">
                <Button
                  size="small"
                  backgroundColor="bg-matgpt-gray"
                  textColor="text-black"
                  onClick={() => setIsExpanded(false)}
                >
                  {t('menuTag.cancel')}
                </Button>
                <Button
                  size="small"
                  textColor="text-black"
                  onClick={() => {
                    handleModifyTag(inputRef.current?.getInputValue() || '');
                  }}
                >
                  {t('menuTag.modify')}
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <DefaultTag
            name={name === '' ? '메뉴 이름을 입력해주세요.' : name}
            rating={rating}
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
          <div className="relative w-4 -translate-x-2 -translate-y-2 border-[0.5rem] border-transparent border-t-black">
            <section className="absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-[calc(-100%-0.5rem)] flex-col gap-1 rounded-xl bg-black px-4 py-2 text-white">
              <h3 className="font-bold">{name}</h3>
              <p className="text-xs">{t('menuTag.prompt')}</p>
              <div className="mt-1 flex flex-row justify-around">
                <Button
                  size="small"
                  backgroundColor="bg-matgpt-gray"
                  textColor="text-black"
                  onClick={() => setIsExpanded(false)}
                >
                  {t('menuTag.cancel')}
                </Button>
                <Button
                  size="small"
                  textColor="text-black"
                  onClick={onPromptEvent}
                >
                  {t('menuTag.add')}
                </Button>
              </div>
            </section>
          </div>
        ) : (
          <DefaultTag
            name={name}
            rating={rating}
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
