/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const Filtro = ({filtro, setFiltro, gastos, setGastosFiltrados}) => {

  useEffect(() => {
    if (filtro === '') {
      setGastosFiltrados([]);
    } else {
      const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro);
      setGastosFiltrados(gastosFiltrados);
    }
  }, [filtro]);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>Filtrar Gastos</Text>
      <Picker
        selectedValue={filtro}
        onValueChange={(valor) => {
          setFiltro(valor);
        }}
          >
            <Picker.Item label="-- Seleccione --" value="" />
            <Picker.Item label="Ahorro" value="ahorro" />
            <Picker.Item label="Comida" value="comida" />
            <Picker.Item label="Casa" value="casa" />
            <Picker.Item label="Gastos varios" value="gastos" />
            <Picker.Item label="Ocio" value="ocio" />
            <Picker.Item label="Salud" value="salud" />
            <Picker.Item label="Suscripciones" value="suscripciones" />
          </Picker>
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
    transform: [{ translateY: 0 }],
    marginTop: 80,
  },
  label: {
    fontSize: 22,
    fontWeight: '900',
    color: '#64748b',
  },
});

export default Filtro;
