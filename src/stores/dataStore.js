import { defineStore } from "pinia";

export const useDataStore = defineStore("dataStore", {
  state: () => ({
    onama: {
      title: "O nama",
      text: "Znanje stečeno na fakultetu omogućilo nam je da se bavimo instrukcijama iz raznih područja. Iskustvo i znanje koje smo tim putem stekli potaknulo nas je da proširimo svoju djelatnost te olakšamo učenje većem broju učenika i studenata. Tako smo došli na ideju da otvorimo vlastitu školu za poduke. Odlučili smo ozbiljno pristupiti ideji te uložiti puno truda i vremena kako bi realizirali naš projekt. S vremenom, kao učenici i studenti, upoznali smo se s obrazovnim sustavom i njegovim nedostatcima pa ovim putem želimo ponuditi pomoć svima onima koji nailaze na razne prepreke, na kakve smo i sami nailazili prilikom obrazovnog procesa. Baš zato što smo mladi i osvješteni vjerujemo da možemo prenositi znanje na jednostavan i zanimljiv način.",
      sections: [
        "Znanje stečeno na fakultetu omogućilo nam je da se bavimo instrukcijama iz raznih područja. Iskustvo i znanje koje smo tim putem stekli potaknulo nas je da proširimo svoju djelatnost te olakšamo učenje većem broju učenika i studenata. Tako smo došli na ideju da otvorimo vlastitu školu za poduke.",
        "Odlučili smo ozbiljno pristupiti ideji te uložiti puno truda i vremena kako bi realizirali naš projekt. S vremenom, kao učenici i studenti, upoznali smo se s obrazovnim sustavom i njegovim nedostatcima pa ovim putem želimo ponuditi pomoć svima onima koji nailaze na razne prepreke, na kakve smo i sami nailazili prilikom obrazovnog procesa.",
        "Baš zato što smo mladi i osvješteni vjerujemo da možemo prenositi znanje na jednostavan i zanimljiv način.",
        "Škola Parallel počela je s radom u Rijeci 1. veljače 2022. godine.",
      ],
    },
    programi: {
      title: "Popis programa",
      list: "Matematika, Fizika, Kemija, Biologija, Hrvatski jezik, Engleski jezik, Informatika, Povijest, Geografija, Tehnička kultura, Statistika, Programiranje, Osnove elektrotehnike, Računalstvo, Mjerenja u elektrotehnici, Uvod u elektroniku, Elektronika, Elektrotehnika, Opća i anorganska kemija, Organska kemija, Analitička kemija, Biokemija, Fizikalna kemija, Mikrobiologija, Stabilnost broda, Poznavanje broda, Rukovanje teretom, Astronomska navigacija, Terestrička navigacija, Elektronička navigacija, Brodski strojevi i uređaji, Tehnička mehanika, Tehnički materijali, Termodinamika Hidraulika i pneumatika Robotika, Industrijska automatizacija, Regulacija i upravljanje",
    },
  }),
  actions: {},
});
