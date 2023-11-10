import axios from 'axios';

export async function uploadImageToS3(
  presignendUrl: string,
  file: Blob,
) {
  return axios.put(
    `${presignendUrl}`,
    file,
  );
}
