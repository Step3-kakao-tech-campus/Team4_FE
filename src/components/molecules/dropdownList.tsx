import Icon from '../atoms/icon';

interface DropdownListProps {
  value: string,
  children: React.ReactNode,
  isOpen: boolean,
  setIsOpen: () => void,
}

function DropdownList({
  value, children, isOpen, setIsOpen,
}: DropdownListProps) {
  return (
    <div className="relative">
      <button type="button" onClick={() => setIsOpen()} className="my-2 block w-full rounded-t-lg border border-solid border-black p-2">
        <div className="flex justify-between">
          <div>{value}</div>
          <Icon name="OutlineCheck" size="1rem" ariaLabel="선택" />
        </div>
      </button>
      <div className="absolute top-10 z-50 w-full shadow-lg">
        {isOpen && children}
      </div>
    </div>
  );
}

export default DropdownList;
