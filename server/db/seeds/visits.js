exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('visits').del()
    .then(function () {
      // Inserts seed entries
      return knex('visits').insert([
        {id: 1000, user_id: 2, timestamp: 1519211809934},
        {id: 1001, user_id: 2, timestamp: 1519211899934},
        {id: 1002, user_id: 3, timestamp: 1519231809934},
        {id: 1003, user_id: 1, timestamp: 1519232809934},
        {id: 1004, user_id: 2, timestamp: 1519234809934},
        {id: 1005, user_id: 2, timestamp: 1520113804934},
        {id: 1006, user_id: 3, timestamp: 1520113854934},
        {id: 1007, user_id: 1, timestamp: 1520113874934},
        {id: 1008, user_id: 2, timestamp: 1520113894934},
        {id: 1009, user_id: 2, timestamp: 1520113994934},
        {id: 1010, user_id: 3, timestamp: 1521217675000},
        {id: 1011, user_id: 1, timestamp: 1521218675000},
        {id: 1012, user_id: 2, timestamp: 1521219675000},
        {id: 1013, user_id: 2, timestamp: 1521220675000},
        {id: 1014, user_id: 3, timestamp: 1521224675000},
        {id: 1015, user_id: 1, timestamp: 1521225685000},
        {id: 1016, user_id: 3, timestamp: 1521226685080},
        {id: 1017, user_id: 1, timestamp: 1521227685080},
        {id: 1018, user_id: 2, timestamp: 1521228685180},
        {id: 1019, user_id: 2, timestamp: 1521229685183},
        {id: 1020, user_id: 3, timestamp: 1521239685183},
        {id: 1021, user_id: 1, timestamp: 1521249685183},
        {id: 1022, user_id: 3, timestamp: 1521259685123},
        {id: 1023, user_id: 1, timestamp: 1521269685123},
        {id: 1024, user_id: 3, timestamp: 1521279885123},
        {id: 1025, user_id: 1, timestamp: 1521279985623},
        {id: 1026, user_id: 3, timestamp: 1521280085693},
        {id: 1027, user_id: 1, timestamp: 1521283086693},
        {id: 1028, user_id: 3, timestamp: 1521283185793},
        {id: 1029, user_id: 1, timestamp: 1521284186791},
        {id: 1030, user_id: 3, timestamp: 1521285187791},
        {id: 1031, user_id: 1, timestamp: 1521285688791},
        {id: 1032, user_id: 3, timestamp: 1521285698894},
        {id: 1033, user_id: 1, timestamp: 1521285799896},
        {id: 1034, user_id: 3, timestamp: 1521285800395},
        {id: 1035, user_id: 1, timestamp: 1521385800305},
        {id: 1036, user_id: 3, timestamp: 1521385900305},
        {id: 1037, user_id: 1, timestamp: 1521386040301},
        {id: 1038, user_id: 3, timestamp: 1521387140306},
        {id: 1039, user_id: 1, timestamp: 1521387240306},
        {id: 1040, user_id: 3, timestamp: 1521387350309},
        {id: 1041, user_id: 1, timestamp: 1521387350400},
        {id: 1042, user_id: 3, timestamp: 1521387350500},
        {id: 1043, user_id: 1, timestamp: 1521388450309},
        {id: 1044, user_id: 3, timestamp: 1521389450329},
        {id: 1045, user_id: 1, timestamp: 1521390450723},
        {id: 1046, user_id: 3, timestamp: 1521390510793},
        {id: 1047, user_id: 1, timestamp: 1521390610723},
        {id: 1048, user_id: 3, timestamp: 1521391610923},
        {id: 1049, user_id: 1, timestamp: 1521491660923},
        {id: 1050, user_id: 3, timestamp: 1521491760920},
        {id: 1051, user_id: 1, timestamp: 1521491860923},
        {id: 1052, user_id: 3, timestamp: 1521493860513},
        {id: 1053, user_id: 1, timestamp: 1521494860576},
        {id: 1054, user_id: 3, timestamp: 1521504860216},
        {id: 1055, user_id: 1, timestamp: 1521514860116},
        {id: 1056, user_id: 1, timestamp: 1521514870912},
        {id: 1057, user_id: 3, timestamp: 1521514970112},
        {id: 1058, user_id: 1, timestamp: 1521515972112},
        {id: 1059, user_id: 3, timestamp: 1521525982112},
        {id: 1060, user_id: 1, timestamp: 1521525984112},
        {id: 1061, user_id: 3, timestamp: 1521525989112},
        {id: 1062, user_id: 1, timestamp: 1521526000147},
        {id: 1063, user_id: 3, timestamp: 1521526100120},
        {id: 1064, user_id: 1, timestamp: 1521526104128},
        {id: 1065, user_id: 3, timestamp: 1521626154128},
        {id: 1066, user_id: 1, timestamp: 1521626159128},
        {id: 1067, user_id: 3, timestamp: 1521627159121},
        {id: 1068, user_id: 1, timestamp: 1521627259170},
        {id: 1069, user_id: 3, timestamp: 1521637229270},
        {id: 1070, user_id: 1, timestamp: 1521701150124},
        {id: 1071, user_id: 3, timestamp: 1521701250123},
        {id: 1072, user_id: 1, timestamp: 1521703251183},
        {id: 1073, user_id: 1, timestamp: 1521703452187},
        {id: 1074, user_id: 1, timestamp: 1521703652187},
        {id: 1075, user_id: 3, timestamp: 1521703752187},
        {id: 1076, user_id: 1, timestamp: 1521704152101},
        {id: 1077, user_id: 3, timestamp: 1521714152101},
        {id: 1078, user_id: 1, timestamp: 1521715152171},
        {id: 1079, user_id: 3, timestamp: 1521735152931},
        {id: 1080, user_id: 1, timestamp: 1521745152930},
        {id: 1081, user_id: 3, timestamp: 1522040152030},
        {id: 1082, user_id: 1, timestamp: 1522045152030},
        {id: 1083, user_id: 3, timestamp: 1522145152030},
        {id: 1084, user_id: 1, timestamp: 1522145152030},
        {id: 1085, user_id: 3, timestamp: 1522145182030},
        {id: 1086, user_id: 1, timestamp: 1522145182030},
        {id: 1087, user_id: 3, timestamp: 1522245202030},
        {id: 1088, user_id: 1, timestamp: 1523240200382},
        {id: 1089, user_id: 3, timestamp: 1523340200382},
        {id: 1090, user_id: 1, timestamp: 1523240300382},
        {id: 1091, user_id: 1, timestamp: 1523244300312},
        {id: 1092, user_id: 3, timestamp: 1523344300365},
        {id: 1093, user_id: 1, timestamp: 1523254300312},
        {id: 1094, user_id: 3, timestamp: 1524340300785},
        {id: 1095, user_id: 1, timestamp: 1524551300780},
        {id: 1096, user_id: 3, timestamp: 1524561300280},
        {id: 1097, user_id: 1, timestamp: 1524562300287},
        {id: 1098, user_id: 3, timestamp: 1524572310287},
        {id: 1099, user_id: 1, timestamp: 1524572310287},
        {id: 1100, user_id: 3, timestamp: 1523440200322},
        {id: 1101, user_id: 1, timestamp: 1524000200369}
      ])
    })
}
