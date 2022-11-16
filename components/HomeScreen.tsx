import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, SafeAreaView, ActivityIndicator, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const HomeScreen = ({ navigation }: any) => {

  const [recipes, setRecipes] = useState();
  const [searchQuery, setSearchQuery] = useState('');
  const [numberOfrecipes, setNumberOfrecipes] = useState('5')
  const [loading, setLoading] = useState(false);

  const apiId = '69a5690b';
  const apiKey = `39a78dbb650b565d3f9c24fe78d16857`;
  const apiUrl = `https://api.edamam.com/search?q==${searchQuery}&app_id=${apiId}&app_key=${apiKey}&from=0&to=${numberOfrecipes}&calories=591-722&health=alcohol-free`;
  async function apiCall() {
    setLoading(true);
    let resp = await fetch(apiUrl);
    let respJson = await resp.json();
    setRecipes(respJson.hits);
    setLoading(false);
    Keyboard.dismiss()
    setSearchQuery('')
    console.log(respJson)
  }

  useEffect(() => {
    setLoading(true)
    apiCall()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.questiontext}>
        What Recipe Would You Like to Search?
      </Text>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <TextInput placeholder='Search for recipes...'
          style={styles.inputField}
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
        <TextInput
          onChangeText={text => setNumberOfrecipes(text)}
          style={[styles.inputField, { width: '20%', fontSize: 18, marginLeft: 15, color: '#40936c', fontWeight: 'bold' }]}
          value={numberOfrecipes}
          keyboardType='number-pad'
        />
      </View>
      <TouchableOpacity style={styles.button}
        onPress={apiCall}
      // title='submit'
      >
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

      <SafeAreaView style={{ flex: 1 }}>
        {loading ? <ActivityIndicator size='large' color='008080' /> :
          <FlatList
           
            data={recipes}
            renderItem={({ item }) => (
              <View style={styles.recipe}>
                <Image style={styles.image}
                  source={{ uri: `${item.recipe.image}` }}
                />

                <View style={{ padding: 20, flexDirection: 'row' }}>
                  <Text style={styles.label}>{item.recipe.label}</Text>
               
                  <TouchableOpacity onPress={() => { navigation.navigate('Details', { recipe: item.recipe }) }}>
                    <Text
                     style={{ marginLeft: 50, fontSize: 20, color: '#008080',fontWeight:'500' }}
                     >
                      Details
                    </Text>
                  </TouchableOpacity>
                
                 
                </View>
              </View>

            )}

            keyExtractor={(item, index) => index.toString()} />}

      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'#EDEDED'
  },
  questiontext:{
    marginTop:5,
    fontSize: 23, 
    fontWeight: '700', 
    width: '90%', 
    color: '#40936c'
  },

  inputField: {
    height: '120%',
    width: '65%',
    backgroundColor: '#F7F7F7',
    borderRadius: 20,
    marginTop: 10,
    paddingLeft: 15,
  },

  buttons: {
    flexDirection: 'row'
  },

  button: {
    backgroundColor: '#40936c',
    width: '90%',
    alignItems: 'center',
    margin: 15,
    height: 40,
    borderRadius: 15,
    justifyContent: 'center',
    marginTop: 50,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },

  image: {
    width: '100%',
    height: 200,
    borderRadius: 20
  },

  label: {
    fontSize: 15,
    width: '60%',
    color: '#40936c',
    fontWeight: '700'
  },
  

  recipe: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: 'white',
    margin: 10,
    marginBottom: 40
  },


})

export default HomeScreen