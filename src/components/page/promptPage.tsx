import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getPrompt } from '../../apis/prompt';
import PromptTemplate from '../template/promptTemplate';

function PromptPage() {
  const { promptId } = useParams();
  const { data, isLoading, isFetching } = useQuery({
    queryKey: [`getPrompt?cursor=${promptId}`],
    queryFn: () => {
      if (promptId === undefined) {
        return getPrompt(0);
      }
      return getPrompt(+promptId);
    },
  });

  if (data && !isLoading && !isFetching) {
    return (
      <PromptTemplate
        prompt={data}
      />
    );
  }
  return (
    <div>Loading..</div>
  );
}

export default PromptPage;
