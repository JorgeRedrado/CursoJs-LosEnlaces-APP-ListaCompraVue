const miapp = new Vue({
  el: "#contenedor",
  data: {
    titulo: "Lista de la Compra con Vue.js",
    articulo: "",
    cantidad: 0,
    prioridad: "Baja",
    listado: []
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
