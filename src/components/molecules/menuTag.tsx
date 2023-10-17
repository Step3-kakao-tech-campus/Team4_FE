import { forwardRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RefHandler } from '../../types/refHandler';
import Input from '../atoms/input';
import Button from '../atoms/button';

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
  name: string;
  mode: 'modify' | 'prompt';
  onModifyEvent?: React.MouseEventHandler<HTMLButtonElement>;
  onPromptEvent?: React.MouseEventHandler<HTMLButtonElement>;
}

const MenuTag = forwardRef<RefHandler, MenuTagProps>((
  {
    name,
    mode,
    onModifyEvent = () => {},
    onPromptEvent = () => {},
  },
  ref,
) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();

  if (mode === 'modify') {
    return (
      <div>
        {isExpanded ? (
          <div className="relative flex w-[10rem] flex-col items-center">
            <div className="flex flex-col gap-2 rounded-xl bg-black px-4 py-2">
              <Input ref={ref} mode="singleLine" defaultValue={name} />
              <div className="flex flex-row justify-around">
                <Button
                  size="small"
                  textColor="text-black"
                  onClick={onModifyEvent}
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
          <DefaultTag name={name} onClick={() => setIsExpanded(true)} />
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
});

export default MenuTag;
