export interface CompanyConfig {
  name: string;
  domain: string;
  supportEmail?: string;
  description?: string;
  tone?: 'professional' | 'friendly' | 'casual';
  industry?: string;
  logo?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

// Default configuration - this will be replaced with dynamic config later
export const defaultCompanyConfig: CompanyConfig = {
  name: "Aven",
  domain: "aven.com",
  supportEmail: "support@aven.com",
  description: "Home equity line of credit services",
  tone: "friendly",
  industry: "financial services",
  logo: "/aven-logo.png",
  primaryColor: "#12A594",
  secondaryColor: "#1a1a1a"
};

// This will eventually be replaced with database calls
export const getCompanyConfig = (): CompanyConfig => {
  // For now, return default config
  // Later: fetch from database based on current company
  return defaultCompanyConfig;
};
