const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const blankImageSrc = [
  '/blankImages/cake.svg',
  '/blankImages/cocktail.svg',
  '/blankImages/coffee.svg',
  '/blankImages/cutlery.svg',
  '/blankImages/fastfood.svg',
  '/blankImages/restaurantplate.svg',
  '/blankImages/soup.svg',
  '/blankImages/wine.svg',
];

export function isImageType(fileType: string) {
  return fileType === 'image/jpeg' || fileType === 'image/png'
    || fileType === 'image/webp';
}

export function isValidFileSize(fileSize: number) {
  return fileSize <= MAX_FILE_SIZE;
}

export function getRandomBlankImage() {
  const random = Math.floor(Math.random() * 7);

  return blankImageSrc[random];
}
