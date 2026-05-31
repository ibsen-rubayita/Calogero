export interface Partner {
  id: string;
  name: string;
  logo: string;
  url?: string;
}

export const partners: Partner[] = [
  { id: "strata", name: "StrataWorks", logo: "SW" },
  { id: "axis", name: "Axis Concrete", logo: "AX" },
  { id: "terra", name: "Terra Survey", logo: "TS" },
  { id: "harbor", name: "Harbor Steel", logo: "HS" },
  { id: "nexa", name: "Nexa Plant", logo: "NP" },
  { id: "civic", name: "CivicGrid", logo: "CG" }
];
