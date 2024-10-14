const lg = console.log;

const list = ["éi", "az", "ù", "àb", "eei", "û", "u"];

lg(list.sort(Intl.Collator("fr").compare));

/* Numbers */
lg(Intl.NumberFormat("fr").format(1000.45));
lg(Intl.NumberFormat("en").format(10000.45));
