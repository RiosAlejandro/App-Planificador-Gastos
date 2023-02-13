import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const ControlPresupuesto = () => {
  return (
    <View style={styles.contenedor}>{/**Agregar sombras */}
      <View style={styles.centrarGrafica}>
        <Image
          source={require('../assets/Materiales Planificador/img/grafico.jpg')}
          style={styles.image}
        />
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
});

export default ControlPresupuesto;
