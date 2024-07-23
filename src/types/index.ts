export type ProjectType = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
};

export type CertificateType = {
  id: number;
  imageUrl: string;
  author: string;
  year: number;
  certificateName: string;
  description: string;
};

export type SocialMediaType = {
  id: number;
  name: string;
  imageUrl: string;
  socialMediaUrl: string;
};

export type SkillType = {
  id: number;
  name: string;
  imageUrl: string;
};
