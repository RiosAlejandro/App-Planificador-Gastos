import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Imagen = () => {
  return (
    <Image
      style={styles.imagen}
      source={'../img/nuevoGasto.png'}
    />
   );
};

const styles = StyleSheet.create({
  imagen: {
    width: 60,
    height: 60,
  },
});

export default Imagen;
