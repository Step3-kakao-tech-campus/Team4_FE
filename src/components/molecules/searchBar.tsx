import Icon from '../atoms/icon';
import Input from '../atoms/input';

interface SearchBarProps {
  isSearching: boolean;
  openSearchPanel: () => void;
  closeSearchPanel: () => void;
}

export default function SearchBar({
  isSearching,
  openSearchPanel,
  closeSearchPanel,
}: SearchBarProps) {
  return (
    <div
      className="relative h-16 bg-matgpt-blue p-3"
      onFocus={openSearchPanel}
    >
      <div className="flex flex-row items-center gap-2">
        {isSearching ? (
          <button
            type="button"
            className="text-white"
            onClick={closeSearchPanel}
          >
            <Icon name="OutlineLeft" size="1.4em" ariaLabel="검색 취소" />
          </button>
        ) : (
          <>
          </>
        )}
        <Input mode="search" />
      </div>
      {isSearching ? (
        <div className="absolute left-0 top-16 z-50 w-full bg-white" />
      ) : (
        <>
        </>
      )}
    </div>
  );
}
