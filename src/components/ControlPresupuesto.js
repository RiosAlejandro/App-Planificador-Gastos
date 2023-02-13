import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { formatearCantidad } from '../helpers/index';

const ControlPresupuesto = ({presupuesto, gastos}) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => Number(
      gasto.cantidad) + total, 0);
    const totalDisponible = presupuesto - totalGastado;

    setGastado(totalGastado);
    setDisponible(totalDisponible);
  }, [gastos, presupuesto]);

  return (
    <View style={styles.contenedor}>{/**Agregar sombras */}
      <View style={styles.centrarGrafica}>
        <Image
          source={require('../assets/Materiales Planificador/img/grafico.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.contenedorTexto}>
        <Text style={styles.valor}>
          <Text style={styles.label}>Presupuesto: {''}</Text>
          {formatearCantidad(presupuesto)}
        </Text>
        <Text style={styles.valor}>
          <Text style={styles.label}>Disponible: {''}</Text>
          {formatearCantidad(disponible)}
        </Text>
        <Text style={styles.valor}>
          <Text style={styles.label}>Gastado: {''}</Text>
          {formatearCantidad(gastado)}
        </Text>
      </View>
    </View>
   );
};

const styles = StyleSheet.create({
  contenedor: {
      backgroundColor: '#fff',
      marginHorizontal: 10,
      borderRadius: 10,
      paddingVertical: 40,
      paddingHorizontal: 20,
      transform: [{ translateY: 50 }],
  },
  centrarGrafica: {
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
  },
  contenedorTexto: {
    marginTop: 50,
  },
  valor: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: '700',
    color: '#3b82f6',
  },
});

export default ControlPresupuesto;
