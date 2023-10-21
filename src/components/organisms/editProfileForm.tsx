import React from 'react';
import Input from '../atoms/input';
import Button from '../atoms/button';
import Icon from '../atoms/icon';

interface EditProfileFormType {
  name: string,
}

function EditProfileForm({ name }: EditProfileFormType) {
  return (
    <div>
      <div className="my-6 px-12">
        <form>
          <label htmlFor="nickName">
            <span className="font-bold">닉네임</span>
            <Input mode="singleLine" placeholder={name} id="nickName" />
          </label>
        </form>
      </div>
      <div className="my-6 px-12">
        <div>
          <div className="font-bold ">언어</div>
          <div className="my-2  flex justify-between rounded-lg border border-solid border-black p-2">
            <div> 한국어</div>
            <Icon name="OutlineCheck" size="1rem" ariaLabel="체크표시" />
          </div>
        </div>
        <div>
          <div className="font-bold">성별</div>
          <div className="my-2  flex justify-between rounded-lg border border-solid border-black p-2">
            <div>남자</div>
            <Icon name="OutlineCheck" size="1rem" ariaLabel="체크표시" />
          </div>
        </div>
      </div>
      <div className="my-24 text-center">
        <Button size="medium" extraStyle="px-12 mr-6">변경</Button>
        <Button size="medium" extraStyle="px-12 ml-6" backgroundColor="bg-matgpt-gray">취소</Button>
      </div>
    </div>
  );
}

export default EditProfileForm;
