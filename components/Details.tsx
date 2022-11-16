import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';





const Details = ({ route }: any) => {
  const { recipe } = route.params;


  return (

    <ScrollView>

      <View style={styles.details}>
        <View style={styles.subcontainer}>
          <Image style={styles.recipeimage}
            // source={{ uri: `${recipe.image}` }}
            source={{ uri: `${recipe.image}` }}

          />
          <Text style={styles.recipetitle}>
            {/* {`${recipe.label}`} */}
            {`${recipe.label}`}
          </Text>

          <View style={styles.detailtab}>
            <View style={styles.tab}>
              <FontAwesome5 name="burn" size={20} color="#5b615d" />
              <Text style={styles.tabtext}>
                {`${recipe.calories}`} 
                Calories</Text>
            </View>
            <View style={styles.tab}>
              <MaterialIcons name="food-bank" size={20} color="#5b615d" />
              <Text style={styles.tabtext}>{`${recipe.cuisineType}`} Cuisine</Text>
            </View>
            <View style={styles.tab}>
              <Feather name="clock" size={20} color="#5b615d" />
              <Text style={styles.tabtext}>{`${recipe.totalTime}`} Min</Text>
            </View>
          </View>


        </View>

        <View style={styles.ingredients}>
          <Text style={styles.titletext}>Ingredients</Text>
            <Text style={styles.ingredientsdata}>{`${recipe.ingredients.map((item: any) => item['food'])}`}</Text>
        </View>

      

        <View style={styles.preparedish}>
          <Text style={styles.titletext}>Prepare your Dish</Text>
          <Text style={styles.preparedishdata}>{`${recipe.ingredientLines}`}</Text>
        </View>



      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  details: {
    marginBottom: 30,
    // padding: 5,
  },

  recipeimage: {
    width: '100%',
    height: 200,
    // borderRadius: 20
  },
  subcontainer: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cbd4cf'

  },



  recipetitle: {
    fontSize: 22,
    color: '#363a38',
    fontWeight: '700',
    textAlign: 'left',
    marginTop: 2,
    padding: 5

  },



  detailtab: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 25,
    flexWrap:'wrap'
  },

  tab: {
    borderRadius: 8,
    padding: 5,

    fontWeight: '600',
    flexDirection: 'row',
    alignContent: 'space-around'

  },

  tabtext: {
    fontSize: 14,
    color: '#5bd29a',
    textTransform: 'capitalize',
    padding: 5

  },

  ingredients: {
    margin: 10,
   //flexDirection: 'row',
   flex:1,
   // flexWrap: 'wrap',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cbd4cf'
  },

  titletext: {
    fontWeight: '700',
    fontSize: 18,
    color: '#363a38',

  },
  ingredientsdata:{
    fontSize: 16,
    color: '#363a38',
    textTransform: 'capitalize',
    paddingTop:5,
    flex: 1, 
    flexWrap: 'wrap',
    
   

  },
 

 
  preparedish:{
    margin: 10,
    // flexDirection: 'row',
   //  flexWrap: 'wrap',
     paddingBottom: 10,
     borderBottomWidth: 1,
     borderBottomColor: '#cbd4cf'
  },

  preparedishdata:{
    flex: 1, 
    flexWrap: 'wrap',
    fontSize: 16,
    color: '#363a38',
  }



})

export default Details