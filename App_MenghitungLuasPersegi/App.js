import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, Button, StyleSheet, View } from "react-native";

const App = () => {
  const [sisi, setSisi] = useState("");
  const [luas, setLuas] = useState(null);

  const hitungLuas = () => {
    if (sisi) {
      const hasil = parseFloat(sisi) * parseFloat(sisi);
      setLuas(hasil);
    } else {
      setLuas(null);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hitung Luas Persegi</Text>

      <TextInput
        style={styles.input}
        placeholder="Masukkan panjang sisi"
        keyboardType="numeric"
        value={sisi}
        onChangeText={setSisi}
      />

      <Button title="Hitung" onPress={hitungLuas} />

      {luas !== null && (
        <View style={styles.resultBox}>
          <Text style={styles.result}>Luas: {luas}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#888",
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  resultBox: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#e0f7fa",
    borderRadius: 8,
  },
  result: {
    fontSize: 20,
    fontWeight: "600",
    color: "#00796b",
  },
});

export default App;
