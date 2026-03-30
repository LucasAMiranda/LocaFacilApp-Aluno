import { CartaoVeiculo } from '@/components/CartaoVeiculo';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem vindo ao Catálogo de Locação de Veículos!</Text>
      <Text style={styles.subtitulo}>Confira os veículos que temos disponíveis:</Text>

      <View style={styles.lista}>
        <CartaoVeiculo nome="Honda Civic G10" preco="120.000" />
        <CartaoVeiculo nome="Toyota Corolla" preco="135.000" />
        <CartaoVeiculo nome="Volkswagen Golf" preco="98.000" />
      </View>

    </View>
  )
    
}

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
    titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#F5A623",
  },
    subtitulo: {
    fontSize: 16,
    color: "blue",
    marginTop: 8,
  },

  lista:  {
    width: '90%', // Para os cartões não colarem na borda da tela
    marginTop: 20,
  }
});
