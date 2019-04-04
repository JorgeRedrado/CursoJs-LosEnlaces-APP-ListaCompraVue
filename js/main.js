Vue.component("mensaje-error", {
  template: "#plantilla-mensaje-error"
});

Vue.component("barra-progreso", {
  template: "#plantilla-barra-progreso",
  props: ["porcentaje"]
});

Vue.component("elemento-compra", {
  template: "#plantilla-elemento-compra",
  methods: {
    CambiarEstilo() {
      this.$emit("clickcheck");
    },
    EliminarElemento() {
      this.$emit("clickborrar");
    }
  },
  props: ["producto"]
});

const ListadoCompra = Vue.component("elemento-listadoCompra", {
  template: "#t-listado-compra",
  data() {
    return {
      titulo: "Lista de la Compra con Vue.js",
      articulo: "",
      cantidad: 0,
      prioridad: "Baja",
      listado: []
    };
  },
  computed: {
    ComprasHechas() {
      return this.listado.filter(elemento => elemento.estado);
    },
    Porcentaje() {
      return ((this.ComprasHechas.length * 100) / this.listado.length).toFixed(
        2
      );
    },
    PorcentajeEnTantoPorCien() {
      return this.Porcentaje.toString() + "%";
    }
  },
  methods: {
    Agregar() {
      elemento = {
        art: this.articulo,
        can: this.cantidad,
        pri: this.prioridad,
        estado: false,
        id: Math.random()
          .toString()
          .substring(2, 9)
      };
      this.listado.push(elemento);
      console.log(this.listado);
      this.ResetValores();
    },
    ResetValores() {
      this.articulo = "";
      this.cantidad = 0;
      this.prioridad = "Baja";
    },
    Eliminar(item) {
      indice = this.listado.indexOf(item);
      this.listado.splice(indice, 1);
    },
    CambiarEstado(item) {
      item.estado = !item.estado;
    }
  }
});

const ListadoComprasRealizadas = Vue.component(
  "comp-listado-comprasrealizadas",
  {
    data() {
      return {
        titulo: "Lista de Compras Realizadas"
      };
    },
    /*HTML*/
    template: `
    <div class="row cabecera justify-content-center mt-5" id="cabecera">
    <h1 id="titulo1">
      <i class="material-icons" style="font-size: 1em">shopping_cart</i>
      {{ titulo }}
    </h1>
  </div>
  `
  }
);

const AcercaDe = Vue.component("comp-acercade", {
  data() {
    return {
      titulo: "Información del Sitio Web"
    };
  },
  /*HTML*/
  template: `
    <div class="row cabecera justify-content-center mt-5" id="cabecera">
    <h1 id="titulo1">      
      {{ titulo }}
    </h1>
  </div>
  `
});

const misrutas = [
  { path: "/", component: ListadoCompra },
  { path: "/ComprasRealizadas", component: ListadoComprasRealizadas },
  { path: "/AcercaDe", component: AcercaDe }
];

const router = new VueRouter({
  routes: misrutas
});

const miapp = new Vue({
  el: "#contenedor",
  data: {},
  computed: {},
  methods: {},
  router
});
