import { CountryCodeType } from "./CountryCode";

export function searchCountryCode(
  country: string,
  arr: CountryCodeType
): string {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.toLowerCase() == country.toLowerCase()) {
      return arr[i].dial_code;
    }
  }
  return "";
}

type Location = {
  state: string;
  country: string;
};

export type ContactForm = {
  location: Location;
  locationArt: string;
  email: string;
  phoneNo: number;
};

type ContactList = [ContactForm];

export const list: ContactList = [
  {
    location: {
      state: "Bihar",
      country: "India",
    },
    locationArt: "assets/india.jpg",
    email: "Priyanshukj02@gmail.com",
    phoneNo: 9718852917,
  },
];
