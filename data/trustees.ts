export type Trustee = {
  name: string;
  role: string;
  image?: string;
  mail?: string;
  committeeIds?: string[];
};

export const boardTrustees: Trustee[] = [
  {
    name: "Hannah Veit",
    role: "President",
    mail: "ordf",
  },
  {
    name: "Dante Julio Cosentino",
    role: "vice President",
    mail: "vordf",
  },
  {
    name: "Benedek Boldizsár",
    role: "Cashier",
    mail: "kassor",
  },
  {
    name: "Leonard Lindgren",
    role: "Secretary",
    mail: "sekr",
  },
  {
    name: "Alexander Lapin Pashchenko",
    role: "President of the Business Relations Committee",
    mail: "naringsliv",
  },
  {
    name: "Simon Hedström",
    role: "President of the Study Social Committee",
    mail: "studiesocialt",
  },
  {
    name: "Elina Wang",
    role: "President of the Communications Committee",
    mail: "kommunikation",
  },
  {
    name: "Denise Hommik",
    role: "President of the Study Committee",
    mail: "sno",
  },
  {
    name: "Julle Juliusson Keuschnig",
    role: "President of the JML Committee",
    mail: "jml",
  },
  {
    name: "Albin Durfors",
    role: "Board Member",
    mail: "ledamot",
  },
];

export const committeeTrustees: Trustee[] = [
  {
    name: "Benjamin Kalatsjan-Kirejevas",
    role: "Root",
    mail: "root",
  },
  {
    name: "Moa Fredriksson",
    role: "Sudo",
    mail: "sudo",
  },
  {
    name: "Isak Ahlberg",
    role: "President of the Sports Committee",
    mail: "sport",
  },
  {
    name: "Erik Losin",
    role: "vice President of the Sports Committee",
    mail: "sport",
  },
  {
    name: "Danni Norén",
    role: "vice President of the JML Committee",
    mail: "jml",
  },
  {
    name: "Vladimir Li",
    role: "vice President of the Communications Committee",
    mail: "kommunikation",
  },
  {
    name: "Simon Hedström",
    role: "History Responsible",
    mail: "historia",
  },
  {
    name: "Gustav Appelros",
    role: "INGEN",
    mail: "ingen",
  },
  {
    name: "Justus Kluge",
    role: "NÅGON",
    mail: "nagon",
  },
  {
    name: "Rozhan Asadi",
    role: "vice President of the Business",
    mail: "naringsliv",
  },
  {
    name: "Vakant Vakantsson",
    role: "KAM Responsile",
    mail: "kam",
  },
];
