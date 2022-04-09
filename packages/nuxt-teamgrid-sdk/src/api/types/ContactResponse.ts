enum GENDER {
  MALE = "male",
  FEMALE = "female",
}

enum EmailType {
  PRIVATE = "private",
  BUSINESS = "business",
  OTHER = "other",
}

enum AddressType {
  PRIVATE = "private",
  BUSINESS = "business",
  OTHER = "other",
}

enum WebsiteType {
  PRIVATE = "private",
  BUSINESS = "business",
  OTHER = "other",
}

enum SocialNetworkType {
  FACEBOOK = "facebook",
  TWITTER = "twitter",
  LINKEDIN = "linkedin",
  XING = "xing",
}

enum PhoneNumberType {
  MOBILE = "mobile",
  LANDLINE = "landline",
  BUSINESS = "business",
  FAX = "fax",
  DIRECT = "direct",
  OTHER = "other",
}

interface Email {
  type: EmailType;
  email: string;
}

interface PhoneNumber {
  type: PhoneNumberType;
  number: string;
}

interface Addresse {
  type: AddressType;
  address: {
    fullAddress: string;
    lat: number;
    lng: number;
    street: string;
    street_number: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
}

interface Website {
  type: WebsiteType;
  url: string;
}

interface SocialNetwork {
  type: SocialNetworkType;
  username: string;
}

interface User {
  readonly userId: string;
  hourlyRate?: number;
}

interface Service {
  readonly serviceId: string;
  billable: boolean;
  hourlyRate?: number;
}

interface Company {
  readonly companyId: string;
  position: string;
  phone: string;
  email: string;
  address: {
    fullAddress: string;
    lat: number;
    lng: number;
    street: string;
    street_number: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
}

interface Contact {
  readonly _id: string;
  customerId: string;
  emails: Email[];
  phoneNumbers: PhoneNumber[];
  addresses: Addresse[];
  websites: Website[];
  socialNetworks: SocialNetwork[];
  billing: {
    accounting: {
      type: 0 | 1 | 2 | 3;
      hourlyRate?: number; // Hourly rate for this contact. Only applies if billing.accounting.type is 2
    };
    budget: {
      type: 0 | 1 | 4 | 5 | 100;
      hours?: number; // Budget in hours. Only applies if billing.budget.type is 0 or 4
      fees?: number; // Budget in fees. Only applies if billing.budget.type is 1 or 5
    };
    users: User[];
    services: Service[];
  };
  createdAt: Date;
  createdBy: string;
}

interface ContactCompanyResponse extends Contact {
  type: "company";
  companyTitle: string;
}

interface ContactPersonResponse extends Contact {
  type: "person";
  gender: GENDER;
  salutation: string;
  firstname: string;
  lastname: string;
  birthday: string;
  companies: Company[];
}

interface ContactQueryParam {
  page: number;
  limit: number;
}

type ContactResponse = ContactCompanyResponse | ContactPersonResponse;

export { ContactResponse, ContactQueryParam };
