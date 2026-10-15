// NHBRC provincial customer care offices.
//
// ⚠️ SOURCE & ACCURACY: compiled from NHBRC's published regional contact list (as mirrored on
// pressoffice.mg.co.za/nhbrc/about) and NHBRC press releases. The list is undated and some offices
// have moved over the years (e.g. Pretoria, Bloemfontein, Kimberley, Witbank moved in 2018).
// → Have NHBRC confirm every address and number before going live.
// → Opening hours: no official hours were found, so a shared placeholder (config.contact.hours /
//   NHBRC_HOURS in .env) is used. Set the correct hours there, or add an `hours` field to any
//   office below to override it.

export const PROVINCES = [
  {
    id: 'gp', name: 'Gauteng',
    offices: [
      { town: 'Sunninghill', name: 'Sunninghill (Head Office)', address: '27 Leeuwkop Road, Sunninghill, Johannesburg', tel: '011 317 0000' },
      // NHBRC's 2020 notice gives the Hatfield address; the regional list gives the phone number.
      { town: 'Pretoria', name: 'Pretoria', address: 'iParioli Office Park, Block A3, 1166 Park Street, Hatfield, Pretoria', tel: '012 444 2600' },
      { town: 'Soshanguve', name: 'Soshanguve', address: 'Eric Molobi Housing Innovation Hub, Juventus Street, Soshanguve', tel: '087 310 4354' },
    ],
  },
  {
    id: 'wc', name: 'Western Cape',
    offices: [
      { town: 'Bellville', name: 'Cape Town (Bellville)', address: 'Barinor Vineyards South, The Vineyards Office Estate, 99 Jip de Jager Drive, Bellville', tel: '021 913 9210' },
      { town: 'George', name: 'George', address: '14 Fairview Office Park, 1st Street, George', tel: '044 871 1209' },
    ],
  },
  {
    id: 'ec', name: 'Eastern Cape',
    offices: [
      { town: 'Gqeberha', name: 'Port Elizabeth (Gqeberha)', address: '40 Pickering Street, Newton Park, Port Elizabeth', tel: '041 365 0301' },
      { town: 'East London', name: 'East London', address: '8 Princes Road, Vincent, East London', tel: '043 721 1377' },
    ],
  },
  {
    id: 'kzn', name: 'KwaZulu-Natal',
    offices: [
      { town: 'Durban', name: 'Durban', address: 'Suite 502, 5th Floor, The Marine Building, 22 Dorothy Nyembe Street, Durban', tel: '031 374 8100' },
      { town: 'Newcastle', name: 'Newcastle', address: 'Suite 3, 1st Block A, 2 Whyte Street, Newcastle', tel: '034 312 3507' },
    ],
  },
  {
    id: 'lp', name: 'Limpopo',
    offices: [
      { town: 'Polokwane', name: 'Polokwane', address: 'Suite 202, Gabbles Building, 81 Hans van Rensburg Street, Polokwane', tel: '015 297 7519' },
      { town: 'Tzaneen', name: 'Tzaneen', address: '61F Bert Booysen Street, off Boundary Street, Tzaneen', tel: '015 307 6459' },
      { town: 'Thulamela', name: 'Thulamela', address: 'Room 105, 1st Floor, Old Agriven Building ext., Civic Centre, Thulamela Municipality', tel: '015 962 7500' },
      { town: 'Bela Bela', name: 'Bela Bela', address: '18 Sutter Avenue, Warmbaths (Bela Bela)', tel: '014 736 6043' },
    ],
  },
  {
    id: 'mp', name: 'Mpumalanga',
    offices: [
      { town: 'Mbombela', name: 'Mbombela (Nelspruit)', address: 'Suite 201, Medcen Building, 14 Henshall Street, Mbombela', tel: '013 755 3319' },
      { town: 'Witbank', name: 'Emalahleni (Witbank)', address: 'Block 5C D, 1st Floor, Bureau de Paul Business Park, Route N4, Corridor Crescent', tel: '013 656 1641' },
    ],
  },
  {
    id: 'nw', name: 'North West',
    offices: [
      { town: 'Rustenburg', name: 'Rustenburg', address: '@Office Building North, Block 06, 67 Brink Street, Rustenburg', tel: '014 594 9900' },
      { town: 'Klerksdorp', name: 'Klerksdorp', address: 'Office 174, 1st Floor, Sanlam Park Building, 29 President Kruger Street, Klerksdorp', tel: '018 462 0304' },
      { town: 'Mahikeng', name: 'Mahikeng (Mmabatho)', address: 'Shop 38, Mega City Shopping Centre, cnr Sekame & Dr James Moroka Drive, Mmabatho', tel: '018 384 2669' },
    ],
  },
  {
    id: 'fs', name: 'Free State',
    offices: [
      { town: 'Bloemfontein', name: 'Bloemfontein', address: 'Unit 4 Hydro Park, 98 Kellner Street, Westdene, Bloemfontein', tel: '051 448 7955' },
      { town: 'Bethlehem', name: 'Bethlehem', address: '6A cnr President Boshoff & Bruwer Streets, Bethlehem', tel: '058 303 0440' },
    ],
  },
  {
    id: 'nc', name: 'Northern Cape',
    offices: [
      { town: 'Kimberley', name: 'Kimberley', address: '13 Bishops Avenue, Block B, Sanlam Business Complex, Kimberley', tel: '053 832 6850' },
    ],
  },
];
