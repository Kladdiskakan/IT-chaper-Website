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
    mail: "ordf@kth.it",
  },
  {
    name: "Dante Julio Cosentino",
    role: "vice President",
    mail: "vordf@kth.it",
  },
  {
    name: "Benedek Boldizsár",
    role: "Cashier",
    mail: "kassor@kth.it",
  },
  {
    name: "Leonard Lindgren",
    role: "Secretary",
    mail: "sekr@kth.it",
  },
  {
    name: "Alexander Lapin Pashchenko",
    role: "President of the Business Relations Committee",
    mail: "naringsliv@kth.it",
  },
  {
    name: "Simon Hedström",
    role: "President of the Study Social Committee",
    mail: "studiesocialt@kth.it",
  },
  {
    name: "Elina Wang",
    role: "President of the Communications Committee",
    mail: "kommunikation@kth.it",
  },
  {
    name: "Denise Hommik",
    role: "President of the Study Committee",
    mail: "sno@kth.it",
  },
  {
    name: "Julle Juliusson Keuschnig",
    role: "President of the JML Committee",
    mail: "jml@kth.it",
  },
  {
    name: "Albin Durfors",
    role: "Board Member",
    mail: "ledamot@kth.it",
  },
];

export const committeeTrustees: Trustee[] = [
  {
    name: "Benjamin Kalatsjan-Kirejevas",
    role: "Root",
    mail: "root@kth.it",
  },
  {
    name: "Moa Fredriksson",
    role: "Sudo",
    mail: "sudo@kth.it",
  },
  {
    name: "Isak Ahlberg",
    role: "President of the Sports Committee",
    mail: "sport@kth.it",
  },
  {
    name: "Erik Losin",
    role: "vice President of the Sports Committee",
    mail: "sport@kth.it",
  },
  {
    name: "Danni Norén",
    role: "vice President of the JML Committee",
    mail: "jml@kth.it",
  },
  {
    name: "Vladimir Li",
    role: "vice President of the Communications Committee",
    mail: "kommunikation@kth.it",
  },
  {
    name: "Simon Hedström",
    role: "History Responsible",
    mail: "historia@kth.it",
  },
  {
    name: "Gustav Appelros",
    role: "INGEN",
    mail: "ingen@kth.it",
  },
  {
    name: "Justus Kluge",
    role: "NÅGON",
    mail: "nagon@kth.it",
  },
  {
    name: "Rozhan Asadi",
    role: "vice President of the Business",
    mail: "naringsliv@kth.it",
  },
  {
    name: "Vakant Vakantsson",
    role: "KAM Responsile",
    mail: "kam@kth.it",
  },
  {
    name: "Malin Andréasson",
    role: "QM",
    mail: "qm@qmisk.com",
  },
  {
    name: "Evelina Berg",
    role: "vQM",
    mail: "vqm@qmisk.com",
  },
  {
    name: "Sanna Lindberg",
    role: "Cashier QMISK",
    mail: "skm@qmisk.com",
  },
  {
    name: "Viktor Sandström",
    role: "StURe",
    mail: "sture@kth.it",
  },
  {
    name: "Julle Juliusson Keuschnig",
    role: "Lill-StURe",
    mail: "sture@kth.it",
  },
  {
    name: "Marcus Söderlund",
    role: "PAS CINTE",
    mail: "cintepas@kth.it",
  },
  {
    name: "Benjamin Kalatsjan-Kirejevas",
    role: "PAS TIDAB",
    mail: "tidabpas@kth.it",
  },
  {
    name: "Madelaine Bunao",
    role: "PAS TIEDB",
    mail: "tiedbpas@kth.it",
  },
  {
    name: "Benedek Boldizsár",
    role: "PAS TCOMK",
    mail: "tcomkpas@kth.it",
  },
  {
    name: "Jonathan Lundström",
    role: "PAS MASTER",
    mail: "masterpas@kth.it",
  },
  {
    name: "Nils Granqvist",
    role: "International Coordinator",
    mail: "international@kth.it",
  },
  {
    name: "Tor Dyreklev",
    role: "TMEIT Cashier",
    mail: "tmeit@kth.it",
  },
  {
    name: "Marcus Söderlund",
    role: "TM",
    mail: "tm@tmeit.se",
  },
  {
    name: "Dante Solender",
    role: "vTM",
    mail: "vtm@tmeit.se",
  },
  {
    name: "Adem Ramström",
    role: "Head Responsible Safety Officer",
    mail: "sso@kth.it",
  },
  {
    name: "Alin-Cristan Serban",
    role: "Safety Officer",
    mail: "sso@kth.it",
  },
  {
    name: "Ludvig Hellman Öhman",
    role: "Safety Officer",
    mail: "sso@kth.it",
  },
  {
    name: "Moa Fredriksson",
    role: "Safety Officer",
    mail: "sso@kth.it",
  },
  {
    name: "Daniel Nordin",
    role: "Election Committee Convener",
    mail: "val@kth.it",
  },
  {
    name: "Dante Julio Cosentino",
    role: "Election Committee",
    mail: "val@kth.it",
  },
  {
    name: "Benjamin Kalatsjan-Kirejevas",
    role: "Election Committee",
    mail: "val@kth.it",
  },
  {
    name: "Zak Ora",
    role: "Election Committee",
    mail: "val@kth.it",
  },
  {
    name: "Victor Karlström",
    role: "Election Committee",
    mail: "val@kth.it",
  },
  {
    name: "Simon Hedström",
    role: "Election Committee",
    mail: "val@kth.it",
  },
  {
    name: "Dylan Horn Kreiner",
    role: "vice Cashier",
    mail: "kassor@kth.it",
  },
  {
    name: "Evelina Berg",
    role: "Auditor",
    mail: "revisor@kth.it",
  },
  {
    name: "Katya Holmberg",
    role: "Auditor",
    mail: "revisor@kth.it",
  },
  {
    name: "Simon Hocker",
    role: "Standard Bearer",
  },
  {
    name: "Elina Wang",
    role: "Standard Bearer",
  },
  {
    name: "Hugo Bachér",
    role: "Power Outlet Coordinator",
  },
];
