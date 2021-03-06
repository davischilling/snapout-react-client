export type SocialModel = {
  id: string
  socialType: SocialTypes
  socialUrl: string
}

export enum SocialTypes {
  facebook = 'FACEBOOK',
  instagram = 'INSTAGRAM'
}
