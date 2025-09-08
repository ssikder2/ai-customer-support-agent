import { CompanyConfig } from './companyConfig';

export interface UrlSource {
  id: string;
  url: string;
  type: 'website' | 'documentation' | 'external';
  description?: string;
  enabled: boolean;
  addedAt: Date;
}

// This will eventually be replaced with database calls
export const getCompanyUrls = (companyConfig: CompanyConfig): UrlSource[] => {
  // For now, return default URLs based on company domain
  // Later: fetch from database based on current company
  
  const baseUrls = [
    {
      id: 'home',
      url: `https://${companyConfig.domain}/`,
      type: 'website' as const,
      description: 'Homepage',
      enabled: true,
      addedAt: new Date()
    },
    {
      id: 'about',
      url: `https://${companyConfig.domain}/about`,
      type: 'website' as const,
      description: 'About page',
      enabled: true,
      addedAt: new Date()
    },
    {
      id: 'faq',
      url: `https://${companyConfig.domain}/faq`,
      type: 'documentation' as const,
      description: 'Frequently Asked Questions',
      enabled: true,
      addedAt: new Date()
    },
    {
      id: 'support',
      url: `https://${companyConfig.domain}/support`,
      type: 'documentation' as const,
      description: 'Support documentation',
      enabled: true,
      addedAt: new Date()
    },
    {
      id: 'contact',
      url: `https://${companyConfig.domain}/contact`,
      type: 'website' as const,
      description: 'Contact information',
      enabled: true,
      addedAt: new Date()
    }
  ];

  // Add industry-specific URLs based on company industry
  if (companyConfig.industry === 'financial services') {
    baseUrls.push(
      {
        id: 'privacy',
        url: `https://${companyConfig.domain}/privacy`,
        type: 'documentation' as const,
        description: 'Privacy policy',
        enabled: true,
        addedAt: new Date()
      },
      {
        id: 'terms',
        url: `https://${companyConfig.domain}/terms`,
        type: 'documentation' as const,
        description: 'Terms of service',
        enabled: true,
        addedAt: new Date()
      }
    );
  }

  return baseUrls;
};

export const addCustomUrl = (url: string, description?: string): UrlSource => {
  return {
    id: `custom-${Date.now()}`,
    url,
    type: 'external',
    description: description || 'Custom URL',
    enabled: true,
    addedAt: new Date()
  };
};
