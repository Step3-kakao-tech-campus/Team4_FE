import React, { useState, useEffect } from 'react';
import Icon from '../atoms/icon';

interface DropdownListType {
  value: string,
  children: React.ReactNode;
}

function DropdownList({ value, children }: DropdownListType) {
  const [open, setOpen] = useState(false);

  useEffect(() => () => {
    setOpen((prev) => !prev);
  }, [value]);

  return (
    <div className="relative">
      <button type="button" onClick={() => setOpen((prev) => !prev)} className="my-2 block w-full rounded-t-lg border border-solid border-black p-2">
        <div className="flex justify-between">
          <div>{value}</div>
          <Icon name="OutlineCheck" size="1rem" ariaLabel="선택" />
        </div>
      </button>
      <div className="absolute top-10 z-50 w-full shadow-lg">
        {open && children}
      </div>
    </div>
  );
}

export default DropdownList;
