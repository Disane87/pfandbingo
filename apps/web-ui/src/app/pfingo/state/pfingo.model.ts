import { Profile } from '../../auth/state/auth.state';

export interface Rating {
  userId: string,
  rating: number
}

export interface Pfingo {
  id: number | string;

  imagePath: string;

  userId: string;

  uploadDateTime: string;

  ratings?: Array<Rating>

  location: {
    lat: number,
    long: number
  }

  user?: Profile;

  isOwn?: boolean;
}

export function createPfingo(params: Partial<Pfingo>) {
  return {

  } as Pfingo;
}
