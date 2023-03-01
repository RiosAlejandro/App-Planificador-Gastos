/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { formatearCantidad } from '../helpers/index';
import CircularProgress from 'react-native-circular-progress-indicator';

const ControlPresupuesto = ({presupuesto, gastos, resetearApp}) => {

  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => Number(
      gasto.cantidad) + total, 0);
    const totalDisponible = presupuesto - totalGastado;

    const nuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) * 100
    );

    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
  }, 1000);
    setGastado(totalGastado);
    setDisponible(totalDisponible);
  }, [gastos, presupuesto]);

  return (
      <View style={styles.contenedor}>
        <View style={styles.centrarGrafica}>
          <CircularProgress
            value={porcentaje}
            duration={1000}
            radius={150}
            valueSuffix={'%'}
            title="Gastado"
            inActiveStrokeColor="#f5f5f5"
            inActiveStrokeWidth={20}
            activeStrokeColor="#3b82f6"
            activeStrokeWidth={20}
            titleStyle={{fontWeight: 'bold', fontSize: 23}}
            titleColor= "#64748b"
          />
        </View>

        <View style={styles.contenedorTexto}>
          <Pressable
            style={styles.boton}
            onPress={resetearApp}
          >
            <Text style={styles.textoBoton}>Reiniciar App</Text>
          </Pressable>

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
  contenedorTexto: {
    marginTop: 50,
  },
  boton:{
    backgroundColor: '#db2777',
    padding: 10,
    marginBottom: 40,
    borderRadius: 5,
  },
  textoBoton:{
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
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
