const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export function isImageType(fileType: string) {
  return fileType === 'image/jpeg' || fileType === 'image/png' || fileType === 'image/jpeg';
}

export function isValidFileSize(fileSize: number) {
  return fileSize <= MAX_FILE_SIZE;
}
