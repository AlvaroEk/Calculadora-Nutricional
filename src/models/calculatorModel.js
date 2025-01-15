// backend/models/nutricionModel.js

class NutricionModel {
  constructor(peso, altura, edad, sexo, actividad, objetivo, tasa) {
    this.peso = peso;
    this.altura = altura;
    this.edad = edad;
    this.sexo = sexo;
    this.actividad = actividad;
    this.objetivo = objetivo;
    this.tasa = tasa || 0; // Tasa de pérdida o ganancia (opcional)
  }

  obtenerDatos() {
    return {
      peso: this.peso,
      altura: this.altura,
      edad: this.edad,
      sexo: this.sexo,
      actividad: this.actividad,
      objetivo: this.objetivo,
      tasa: this.tasa
    };
  }
}

module.exports = NutricionModel;
