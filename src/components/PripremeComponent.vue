<template>
  <div class="bg-white rounded-5 mx-1 my-1 my-5 pripreme-wrapper">
    <div
      class="d-flex justify-content-between mx-4 display-5 my-2 py-3 rounded-4 parallelFont fs-1"
    >
      <p></p>
      Programi priprema
      <i
        @click="togglePripreme()"
        class="fa fa-close fs-1 d-inline-block"
        aria-hidden="true"
      ></i>
    </div>
    <ul class="list-group list-group-flush p-3 rounded-5 shadow m-1 mx-1 my-1">
      <li
        class="list-group-item h4 d-flex justify-content-between parallelFont"
        v-for="program in programiPriprema"
        :class="{ activated: program.isActive }"
        @click="editTest(program)"
      >
        <div>
          <span class="w-100">{{ program.ime }} </span
          ><span class="text-muted d-flex justify-content-start">{{
            program.brojSati
          }}</span>
        </div>
        <span
          class="fs-5 d-flex justify-content-end align-items-end overflow-visible word-wrap"
          >{{ program.cijena }} EUR
          <!-- ({{
                (Math.round(program.cijena * 7.5345 * 100) / 100).toFixed(2)
              }}
              kn)--></span
        >
      </li>
      <div
        class="h3 d-flex justify-content-evenly text-center fw-bold shadow-lg my-2 mx-4 py-3 rounded-3" :class="iznos == 0 ? 'price' : 'activated'" 
      >
        {{ iznos }} EUR ({{
          (Math.round(iznos * 7.5345 * 100) / 100).toFixed(2)
        }}
        kn)
      </div>
      <div class="row d-flex justify-content-evenly">
        <button class="d-flex justify-content-center btn col-5 d-inline-block" :class="iznos == 0 ? 'disabled' : ''" >
          <i class="fa fa-envelope text-center" style="font-size: 80px"></i>
        </button>
        <button class="d-flex justify-content-center btn col-5 d-inline-block" :class="iznos == 0 ? 'disabled' : ''">
          <i class="fa fa-phone text-center" style="font-size: 80px"></i>
        </button>
      </div>
      <div
        class="card-header d-flex justify-content-center align-items-center text-center display-5 my-2 shadow rounded-4 parallelFont fs-1 py-4"
      >
        Ubrzani programi priprema
      </div>
      <li
        class="list-group-item h4 d-flex justify-content-between parallelFont"
        v-for="program in ubrzaniProgramiPriprema"
        :class="{ activated: program.isActive }"
        @click="editTest(program)"
      >
        <div>
          <span class="w-100">{{ program.ime }} </span
          ><span class="text-muted d-flex justify-content-start">{{
            program.brojSati
          }}</span>
        </div>
        <span
          class="fs-5 d-flex justify-content-end align-items-end overflow-visible word-wrap"
          >{{ program.cijena }} EUR
          <!-- ({{
                (Math.round(program.cijena * 7.5345 * 100) / 100).toFixed(2)
              }}
              kn)--></span
        >
      </li>
    </ul>
    <!-- <p class="h6 mx-5 text-center">
      Fiksni tečaj konverzije 1 EUR = 7,53450 kn.
    </p> -->
    <!-- <p class="fs-7 mx-5 text-center">
      Izvedbeni program priprema za državnu maturu je osmišljen u skladu sa
      službenim ispitnim katalozima koje izdaje Nacionalni centar za vanjsko
      vrednovanje obrazovanja.
    </p> -->
  </div>
</template>

<script>
import { useToggle } from "../stores/toggle";
// import { useToast } from "vue-toastification";
// const toast = useToast();

// setTimeout(() => {
//   toast(
//     "Upisi na pripreme za državnu maturu traju od 1. veljače 2023. do 15. ožujka 2023. Upiši se i rezerviraj svoje mjesto.",
//     {
//       timeout: 15000,
//     }
//   );
// }, 100);

// setTimeout(() => {
//   toast(
//     "Ukoliko upišete pripreme iz dva predmeta odobravamo 10% popusta. Ukoliko upišete pripreme iz tri ili više predmeta odobravamo 20% popusta.",
//     {
//       timeout: 15000,
//     }
//   );
// }, 15000);

// setTimeout(() => {
//   toast("Moguće je obročno plaćanje. ", {
//     timeout: 15000,
//   });
// }, 30000);

export default {
  data() {
    return {
      activated: false,
      iznos: 0,

      programiPriprema: [
        {
          ime: "Matematika A razina",
          brojSati: "70 školskih sati",
          cijena: 390,
          isActive: false,
        },
        {
          ime: "Matematika B razina",
          brojSati: "50 školskih sati",
          cijena: 280,
          isActive: false,
        },
        {
          ime: "Engleski jezik A razina",
          brojSati: "40 školskih sati",
          cijena: 240,
          isActive: false,
        },
        {
          ime: "Engleski jezik B razina",
          brojSati: "30 školskih sati",
          cijena: 180,
          isActive: false,
        },
        {
          ime: "Hrvatski",
          brojSati: "60 školskih sati",
          cijena: 340,
          isActive: false,
        },
        {
          ime: "Fizika",
          brojSati: "60 školskih sati",
          cijena: 340,
          isActive: false,
        },
        {
          ime: "Kemija",
          brojSati: "60 školskih sati",
          cijena: 340,
          isActive: false,
        },
      ],
      ubrzaniProgramiPriprema: [
        {
          ime: "Matematika A razina",
          brojSati: "35 školskih sati",
          cijena: 200,
          isActive: false,
        },
        {
          ime: "Fizika",
          brojSati: "30 školskih sati",
          cijena: 180,
          isActive: false,
        },
        {
          ime: "Kemija",
          brojSati: "30 školskih sati",
          cijena: 180,
          isActive: false,
        },
      ],
    };
  },
  methods: {
    editTest(program) {
      if (program.isActive) {
        program.isActive = false;
        this.iznos = this.iznos - program.cijena;
      } else {
        program.isActive = true;
        this.iznos = this.iznos + program.cijena;
      }
    },
    togglePripreme() {
      useToggle().togglePripreme();
    },
  },
  computed: {},
  updated() {},
};
</script>

<style scoped>
.card-header {
  background-image: linear-gradient(
    90deg,
    rgba(149, 255, 0, 0.223) 0.2%,
    rgba(53, 252, 79, 0.167) 99.1%
  );
}
.fa-close {
  cursor: pointer;
  font-size: 60px;
}
.popup {
  border-radius: 12px 12px 0 0;
  overflow: scroll;
  height: 85vh;
  z-index: 1032;
}

.word-wrap {
  white-space: nowrap;
}

.pripreme {
  width: 100vw;
  min-width: 1050px;
}

.price {
  background-color: rgba(255, 64, 0, 0.386);
  border: 1px solid rgba(255, 64, 0, 0.386);
}

.list-group-item:hover {
  border-radius: 10px;
  font-style: italic;
  cursor: pointer;
  margin-inline: 4px;
}

.list-group-item {
  border-radius: 6px;
  font-style: italic;
  cursor: pointer;
  margin-inline: 2px;
  background-color: rgba(0, 234, 255, 0.097);
}

.boxed {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}

.activated {
  background-color: rgba(0, 255, 0, 0.504);
}

.activated:hover {
  background-color: rgba(0, 255, 0, 0.354);
}

.hoverbutton:hover {
  background-color: lightgreen;
}

.pripreme-wrapper {
  top: 5vh;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border: 1px solid rgba(156, 252, 248, 1) 11.2%, rgba(110, 123, 251, 1) 91.1%;
  z-index: 1034;
}
</style>
