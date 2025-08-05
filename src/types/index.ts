export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;  // Made optional
  videoUrl: string;
  category: string;
  duration: string;
  featured?: boolean;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  portfolio?: string;
}