export type Necklace = {
  id: string;
  name: string;
  price: number;
  currency: "EUR";
  description: string;
  vintedUrl: string;
  photos: string[]; // [modelFull, backgroundFull] — model first, length 2 (or 3 if expanded)
  featuredPhotoIndex: number; // 0 = model
};
