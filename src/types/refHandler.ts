export interface RefHandler {
  getInputValue: () => string | undefined;
}

export interface WriteReviewRefHandler {
  getContent: () => string | undefined;
  getPeopleCount: () => string | undefined;
  getTotalPrice: () => string | undefined;
}
