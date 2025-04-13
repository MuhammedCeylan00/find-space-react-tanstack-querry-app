export interface IPlace {
  id: string;
  name: string;
  description: string;
  lat: number;
  lng: number;
  comments: string[];
}

export interface IMapProps {
  place?: IPlace | null;
  places?: IPlace[] | null;
  mapTitle?: string;
  mapDescription?: string;
  isReviewPage?: boolean;
  addReviewInput?: (placeId: string) => void;
}

export interface IWelcomeCardProps {
  title: string;
  description: string;
};