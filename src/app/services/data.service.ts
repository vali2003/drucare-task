import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
data=[
  {
    "id": 0,
    "name": "Elijah",
    "city": "Austin",
    "age": 78,
    "friends": [
      {
        "name": "Michelle",
        "hobbies": [
          "Watching Sports",
          "Reading",
          "Skiing & Snowboarding"
        ]
      },
      {
        "name": "Robert",
        "hobbies": [
          "Traveling",
          "Video Games"
        ]
      }
    ]
  },
  {
    "id": 1,
    "name": "Noah",
    "city": "Boston",
    "age": 97,
    "friends": [
      {
        "name": "Oliver",
        "hobbies": [
          "Watching Sports",
          "Skiing & Snowboarding",
          "Collecting"
        ]
      },
      {
        "name": "Olivia",
        "hobbies": [
          "Running",
          "Music",
          "Woodworking"
        ]
      },
      {
        "name": "Robert",
        "hobbies": [
          "Woodworking",
          "Calligraphy",
          "Genealogy"
        ]
      },
      {
        "name": "Ava",
        "hobbies": [
          "Walking",
          "Church Activities"
        ]
      },
      {
        "name": "Michael",
        "hobbies": [
          "Music",
          "Church Activities"
        ]
      },
      {
        "name": "Michael",
        "hobbies": [
          "Martial Arts",
          "Painting",
          "Jewelry Making"
        ]
      }
    ]
  },
  {
    "id": 2,
    "name": "Evy",
    "city": "San Diego",
    "age": 48,
    "friends": [
      {
        "name": "Joe",
        "hobbies": [
          "Reading",
          "Volunteer Work"
        ]
      },
      {
        "name": "Joe",
        "hobbies": [
          "Genealogy",
          "Golf"
        ]
      },
      {
        "name": "Oliver",
        "hobbies": [
          "Collecting",
          "Writing",
          "Bicycling"
        ]
      },
      {
        "name": "Liam",
        "hobbies": [
          "Church Activities",
          "Jewelry Making"
        ]
      },
      {
        "name": "Amelia",
        "hobbies": [
          "Calligraphy",
          "Dancing"
        ]
      }
    ]
  },
  {
    "id": 3,
    "name": "Oliver",
    "city": "St. Louis",
    "age": 39,
    "friends": [
      {
        "name": "Mateo",
        "hobbies": [
          "Watching Sports",
          "Gardening"
        ]
      },
      {
        "name": "Nora",
        "hobbies": [
          "Traveling",
          "Team Sports"
        ]
      },
      {
        "name": "Ava",
        "hobbies": [
          "Church Activities",
          "Running"
        ]
      },
      {
        "name": "Amelia",
        "hobbies": [
          "Gardening",
          "Board Games",
          "Watching Sports"
        ]
      },
      {
        "name": "Leo",
        "hobbies": [
          "Martial Arts",
          "Video Games",
          "Reading"
        ]
      }
    ]
  },
  {
    "id": 4,
    "name": "Michael",
    "city": "St. Louis",
    "age": 95,
    "friends": [
      {
        "name": "Mateo",
        "hobbies": [
          "Movie Watching",
          "Collecting"
        ]
      },
      {
        "name": "Chris",
        "hobbies": [
          "Housework",
          "Bicycling",
          "Collecting"
        ]
      }
    ]
  },
  {
    "id": 5,
    "name": "Michael",
    "city": "Portland",
    "age": 19,
    "friends": [
      {
        "name": "Jack",
        "hobbies": [
          "Painting",
          "Television"
        ]
      },
      {
        "name": "Oliver",
        "hobbies": [
          "Walking",
          "Watching Sports",
          "Movie Watching"
        ]
      },
      {
        "name": "Charlotte",
        "hobbies": [
          "Podcasts",
          "Jewelry Making"
        ]
      },
      {
        "name": "Elijah",
        "hobbies": [
          "Eating Out",
          "Painting"
        ]
      }
    ]
  },
  {
    "id": 6,
    "name": "Lucas",
    "city": "Austin",
    "age": 76,
    "friends": [
      {
        "name": "John",
        "hobbies": [
          "Genealogy",
          "Cooking"
        ]
      },
      {
        "name": "John",
        "hobbies": [
          "Socializing",
          "Yoga"
        ]
      }
    ]
  },
  {
    "id": 7,
    "name": "Michelle",
    "city": "San Antonio",
    "age": 25,
    "friends": [
      {
        "name": "Jack",
        "hobbies": [
          "Music",
          "Golf"
        ]
      },
      {
        "name": "Daniel",
        "hobbies": [
          "Socializing",
          "Housework",
          "Walking"
        ]
      },
      {
        "name": "Robert",
        "hobbies": [
          "Collecting",
          "Walking"
        ]
      },
      {
        "name": "Nora",
        "hobbies": [
          "Painting",
          "Church Activities"
        ]
      },
      {
        "name": "Mia",
        "hobbies": [
          "Running",
          "Painting"
        ]
      }
    ]
  },
  {
    "id": 8,
    "name": "Emily",
    "city": "Austin",
    "age": 61,
    "friends": [
      {
        "name": "Nora",
        "hobbies": [
          "Bicycling",
          "Skiing & Snowboarding",
          "Watching Sports"
        ]
      },
      {
        "name": "Ava",
        "hobbies": [
          "Writing",
          "Reading",
          "Collecting"
        ]
      },
      {
        "name": "Amelia",
        "hobbies": [
          "Eating Out",
          "Watching Sports"
        ]
      },
      {
        "name": "Daniel",
        "hobbies": [
          "Skiing & Snowboarding",
          "Martial Arts",
          "Writing"
        ]
      },
      {
        "name": "Zoey",
        "hobbies": [
          "Board Games",
          "Tennis"
        ]
      }
    ]
  },
  {
    "id": 9,
    "name": "Liam",
    "city": "New Orleans",
    "age": 33,
    "friends": [
      {
        "name": "Chloe",
        "hobbies": [
          "Traveling",
          "Bicycling",
          "Shopping"
        ]
      },
      {
        "name": "Evy",
        "hobbies": [
          "Eating Out",
          "Watching Sports"
        ]
      },
      {
        "name": "Grace",
        "hobbies": [
          "Jewelry Making",
          "Yoga",
          "Podcasts"
        ]
      }
    ]
  },
  {
    "id": 10,
    "name": "Levi",
    "city": "New Orleans",
    "age": 59,
    "friends": [
      {
        "name": "Noah",
        "hobbies": [
          "Video Games",
          "Fishing",
          "Shopping"
        ]
      },
      {
        "name": "Sarah",
        "hobbies": [
          "Woodworking",
          "Music",
          "Reading"
        ]
      }
    ]
  },
  {
    "id": 11,
    "name": "Lucas",
    "city": "Portland",
    "age": 82,
    "friends": [
      {
        "name": "Luke",
        "hobbies": [
          "Jewelry Making",
          "Yoga"
        ]
      },
      {
        "name": "Noah",
        "hobbies": [
          "Fishing",
          "Movie Watching"
        ]
      },
      {
        "name": "Evy",
        "hobbies": [
          "Gardening",
          "Church Activities",
          "Fishing"
        ]
      }
    ]
  },
  {
    "id": 12,
    "name": "Kevin",
    "city": "Charleston",
    "age": 82,
    "friends": [
      {
        "name": "Oliver",
        "hobbies": [
          "Eating Out"
        ]
      },
      {
        "name": "Michael",
        "hobbies": [
          "Fishing",
          "Writing"
        ]
      }
    ]
  },
  {
    "id": 13,
    "name": "Olivia",
    "city": "San Antonio",
    "age": 34,
    "friends": [
      {
        "name": "Daniel",
        "hobbies": [
          "Yoga",
          "Traveling",
          "Movie Watching"
        ]
      },
      {
        "name": "Zoey",
        "hobbies": [
          "Team Sports",
          "Writing"
        ]
      }
    ]
  },
  {
    "id": 14,
    "name": "Robert",
    "city": "Los Angeles",
    "age": 49,
    "friends": [
      {
        "name": "Michelle",
        "hobbies": [
          "Yoga",
          "Television"
        ]
      },
      {
        "name": "Daniel",
        "hobbies": [
          "Fishing",
          "Martial Arts"
        ]
      },
      {
        "name": "Chloe",
        "hobbies": [
          "Church Activities",
          "Television"
        ]
      },
      {
        "name": "Sarah",
        "hobbies": [
          "Movie Watching",
          "Playing Cards"
        ]
      },
      {
        "name": "Kevin",
        "hobbies": [
          "Golf",
          "Running",
          "Cooking"
        ]
      }
    ]
  },
  {
    "id": 15,
    "name": "Grace",
    "city": "Chicago",
    "age": 98,
    "friends": [
      {
        "name": "Joe",
        "hobbies": [
          "Traveling",
          "Genealogy"
        ]
      },
      {
        "name": "Mateo",
        "hobbies": [
          "Golf",
          "Podcasts"
        ]
      },
      {
        "name": "Mateo",
        "hobbies": [
          "Reading",
          "Cooking"
        ]
      }
    ]
  },
  {
    "id": 16,
    "name": "Michael",
    "city": "New Orleans",
    "age": 78,
    "friends": [
      {
        "name": "Amelia",
        "hobbies": [
          "Running",
          "Housework",
          "Gardening"
        ]
      },
      {
        "name": "Michael",
        "hobbies": [
          "Writing",
          "Golf"
        ]
      },
      {
        "name": "Leo",
        "hobbies": [
          "Running",
          "Church Activities"
        ]
      },
      {
        "name": "Elijah",
        "hobbies": [
          "Volunteer Work",
          "Eating Out"
        ]
      },
      {
        "name": "Mateo",
        "hobbies": [
          "Socializing",
          "Watching Sports",
          "Collecting"
        ]
      },
      {
        "name": "Levi",
        "hobbies": [
          "Eating Out",
          "Walking"
        ]
      }
    ]
  },
  {
    "id": 17,
    "name": "Mateo",
    "city": "Palm Springs",
    "age": 19,
    "friends": [
      {
        "name": "Emily",
        "hobbies": [
          "Playing Cards",
          "Walking"
        ]
      },
      {
        "name": "Sophie",
        "hobbies": [
          "Gardening",
          "Board Games",
          "Volunteer Work"
        ]
      },
      {
        "name": "Camila",
        "hobbies": [
          "Board Games",
          "Dancing"
        ]
      },
      {
        "name": "John",
        "hobbies": [
          "Golf",
          "Playing Cards",
          "Music"
        ]
      }
    ]
  },
  {
    "id": 18,
    "name": "Levi",
    "city": "Chicago",
    "age": 38,
    "friends": [
      {
        "name": "Emma",
        "hobbies": [
          "Tennis",
          "Eating Out"
        ]
      },
      {
        "name": "Emma",
        "hobbies": [
          "Writing",
          "Reading",
          "Eating Out"
        ]
      },
      {
        "name": "Daniel",
        "hobbies": [
          "Collecting",
          "Video Games"
        ]
      },
      {
        "name": "Evy",
        "hobbies": [
          "Shopping",
          "Walking"
        ]
      },
      {
        "name": "Sophie",
        "hobbies": [
          "Dancing",
          "Volunteer Work"
        ]
      },
      {
        "name": "Mia",
        "hobbies": [
          "Podcasts",
          "Woodworking",
          "Martial Arts"
        ]
      }
    ]
  },
  {
    "id": 19,
    "name": "Luke",
    "city": "New York City",
    "age": 49,
    "friends": [
      {
        "name": "Leo",
        "hobbies": [
          "Writing",
          "Playing Cards",
          "Housework"
        ]
      },
      {
        "name": "Emma",
        "hobbies": [
          "Gardening",
          "Running"
        ]
      },
      {
        "name": "Sarah",
        "hobbies": [
          "Golf",
          "Music"
        ]
      },
      {
        "name": "Jack",
        "hobbies": [
          "Board Games",
          "Socializing",
          "Writing"
        ]
      },
      {
        "name": "Jack",
        "hobbies": [
          "Movie Watching",
          "Writing",
          "Fishing"
        ]
      },
      {
        "name": "Michael",
        "hobbies": [
          "Golf",
          "Jewelry Making",
          "Yoga"
        ]
      }
    ]
  },
  {
    "id": 20,
    "name": "Camila",
    "city": "New Orleans",
    "age": 69,
    "friends": [
      {
        "name": "Kevin",
        "hobbies": [
          "Video Games",
          "Collecting",
          "Painting"
        ]
      },
      {
        "name": "Grace",
        "hobbies": [
          "Reading",
          "Volunteer Work"
        ]
      }
    ]
  },
  {
    "id": 21,
    "name": "Amelia",
    "city": "Charleston",
    "age": 70,
    "friends": [
      {
        "name": "John",
        "hobbies": [
          "Quilting",
          "Volunteer Work"
        ]
      },
      {
        "name": "Leo",
        "hobbies": [
          "Painting",
          "Podcasts"
        ]
      }
    ]
  },
  {
    "id": 22,
    "name": "Victoria",
    "city": "Miami Beach",
    "age": 50,
    "friends": [
      {
        "name": "Mia",
        "hobbies": [
          "Cooking",
          "Team Sports"
        ]
      },
      {
        "name": "Lucas",
        "hobbies": [
          "Team Sports",
          "Genealogy"
        ]
      }
    ]
  },
  {
    "id": 23,
    "name": "Kevin",
    "city": "Miami Beach",
    "age": 93,
    "friends": [
      {
        "name": "Jack",
        "hobbies": [
          "Bicycling",
          "Fishing"
        ]
      },
      {
        "name": "Sophie",
        "hobbies": [
          "Martial Arts",
          "Genealogy",
          "Tennis"
        ]
      },
      {
        "name": "Chloe",
        "hobbies": [
          "Yoga"
        ]
      }
    ]
  },
  {
    "id": 24,
    "name": "Daniel",
    "city": "Saint Augustine",
    "age": 43,
    "friends": [
      {
        "name": "Sarah",
        "hobbies": [
          "Calligraphy",
          "Martial Arts",
          "Music"
        ]
      },
      {
        "name": "Evy",
        "hobbies": [
          "Walking",
          "Bicycling"
        ]
      },
      {
        "name": "Kevin",
        "hobbies": [
          "Collecting",
          "Golf"
        ]
      },
      {
        "name": "Mia",
        "hobbies": [
          "Podcasts",
          "Walking"
        ]
      }
    ]
  },
  {
    "id": 25,
    "name": "Olivia",
    "city": "Austin",
    "age": 46,
    "friends": [
      {
        "name": "Mia",
        "hobbies": [
          "Podcasts",
          "Housework"
        ]
      },
      {
        "name": "Robert",
        "hobbies": [
          "Golf",
          "Volunteer Work"
        ]
      },
      {
        "name": "Michelle",
        "hobbies": [
          "Eating Out",
          "Music"
        ]
      },
      {
        "name": "Elijah",
        "hobbies": [
          "Eating Out",
          "Genealogy",
          "Reading"
        ]
      }
    ]
  },
  {
    "id": 26,
    "name": "Michael",
    "city": "Palm Springs",
    "age": 62,
    "friends": [
      {
        "name": "Sarah",
        "hobbies": [
          "Socializing",
          "Playing Cards"
        ]
      },
      {
        "name": "Daniel",
        "hobbies": [
          "Playing Cards",
          "Shopping",
          "Collecting"
        ]
      },
      {
        "name": "Chloe",
        "hobbies": [
          "Music",
          "Movie Watching"
        ]
      },
      {
        "name": "Zoey",
        "hobbies": [
          "Volunteer Work",
          "Calligraphy",
          "Jewelry Making"
        ]
      }
    ]
  },
  {
    "id": 27,
    "name": "Kevin",
    "city": "San Antonio",
    "age": 97,
    "friends": [
      {
        "name": "Sarah",
        "hobbies": [
          "Television",
          "Quilting",
          "Team Sports"
        ]
      },
      {
        "name": "Oliver",
        "hobbies": [
          "Shopping",
          "Martial Arts"
        ]
      }
    ]
  },
  {
    "id": 28,
    "name": "Oliver",
    "city": "Honolulu",
    "age": 79,
    "friends": [
      {
        "name": "Charlotte",
        "hobbies": [
          "Housework",
          "Jewelry Making"
        ]
      },
      {
        "name": "Isabella",
        "hobbies": [
          "Volunteer Work",
          "Movie Watching"
        ]
      },
      {
        "name": "Ava",
        "hobbies": [
          "Traveling",
          "Bicycling"
        ]
      },
      {
        "name": "Chris",
        "hobbies": [
          "Shopping",
          "Church Activities",
          "Dancing"
        ]
      },
      {
        "name": "Sarah",
        "hobbies": [
          "Reading",
          "Movie Watching"
        ]
      },
      {
        "name": "Daniel",
        "hobbies": [
          "Socializing",
          "Collecting",
          "Cooking"
        ]
      }
    ]
  },
  {
    "id": 29,
    "name": "Levi",
    "city": "Miami Beach",
    "age": 46,
    "friends": [
      {
        "name": "Ava",
        "hobbies": [
          "Housework",
          "Video Games",
          "Walking"
        ]
      },
      {
        "name": "Elijah",
        "hobbies": [
          "Golf",
          "Volunteer Work",
          "Painting"
        ]
      },
      {
        "name": "Lucas",
        "hobbies": [
          "Writing",
          "Martial Arts",
          "Television"
        ]
      }
    ]
  },
  {
    "id": 30,
    "name": "Michael",
    "city": "Seattle",
    "age": 18,
    "friends": [
      {
        "name": "Oliver",
        "hobbies": [
          "Shopping",
          "Woodworking"
        ]
      },
      {
        "name": "Emma",
        "hobbies": [
          "Yoga",
          "Genealogy",
          "Traveling"
        ]
      },
      {
        "name": "Evy",
        "hobbies": [
          "Eating Out",
          "Church Activities",
          "Calligraphy"
        ]
      },
      {
        "name": "Noah",
        "hobbies": [
          "Board Games",
          "Television"
        ]
      }
    ]
  },
  {
    "id": 31,
    "name": "Isabella",
    "city": "Savannah",
    "age": 65,
    "friends": [
      {
        "name": "Jack",
        "hobbies": [
          "Church Activities",
          "Housework",
          "Martial Arts"
        ]
      },
      {
        "name": "Oliver",
        "hobbies": [
          "Calligraphy",
          "Cooking"
        ]
      },
      {
        "name": "Grace",
        "hobbies": [
          "Volunteer Work",
          "Podcasts",
          "Tennis"
        ]
      }
    ]
  },
  {
    "id": 32,
    "name": "Chris",
    "city": "Las Vegas",
    "age": 31,
    "friends": [
      {
        "name": "Levi",
        "hobbies": [
          "Shopping",
          "Fishing"
        ]
      },
      {
        "name": "Nora",
        "hobbies": [
          "Dancing",
          "Quilting"
        ]
      },
      {
        "name": "Levi",
        "hobbies": [
          "Reading",
          "Eating Out"
        ]
      },
      {
        "name": "Zoey",
        "hobbies": [
          "Traveling",
          "Golf",
          "Genealogy"
        ]
      },
      {
        "name": "Mia",
        "hobbies": [
          "Video Games",
          "Shopping",
          "Walking"
        ]
      }
    ]
  },
  {
    "id": 33,
    "name": "Kevin",
    "city": "Portland",
    "age": 51,
    "friends": [
      {
        "name": "Olivia",
        "hobbies": [
          "Running",
          "Calligraphy"
        ]
      },
      {
        "name": "Amelia",
        "hobbies": [
          "Tennis",
          "Genealogy"
        ]
      }
    ]
  },
  {
    "id": 34,
    "name": "Sophie",
    "city": "New York City",
    "age": 25,
    "friends": [
      {
        "name": "Levi",
        "hobbies": [
          "Video Games",
          "Board Games",
          "Podcasts"
        ]
      },
      {
        "name": "Joe",
        "hobbies": [
          "Calligraphy",
          "Video Games",
          "Martial Arts"
        ]
      }
    ]
  },
  {
    "id": 35,
    "name": "John",
    "city": "Orlando",
    "age": 67,
    "friends": [
      {
        "name": "Nora",
        "hobbies": [
          "Podcasts",
          "Skiing & Snowboarding",
          "Quilting"
        ]
      },
      {
        "name": "Jack",
        "hobbies": [
          "Tennis",
          "Socializing",
          "Music"
        ]
      },
      {
        "name": "Camila",
        "hobbies": [
          "Walking",
          "Church Activities",
          "Quilting"
        ]
      },
      {
        "name": "Grace",
        "hobbies": [
          "Team Sports",
          "Cooking"
        ]
      },
      {
        "name": "Isabella",
        "hobbies": [
          "Skiing & Snowboarding",
          "Dancing",
          "Painting"
        ]
      },
      {
        "name": "Ava",
        "hobbies": [
          "Tennis",
          "Bicycling"
        ]
      }
    ]
  },
  {
    "id": 36,
    "name": "Emily",
    "city": "New York City",
    "age": 82,
    "friends": [
      {
        "name": "Emma",
        "hobbies": [
          "Church Activities",
          "Writing"
        ]
      },
      {
        "name": "Luke",
        "hobbies": [
          "Running",
          "Calligraphy",
          "Tennis"
        ]
      },
      {
        "name": "Robert",
        "hobbies": [
          "Dancing",
          "Socializing"
        ]
      },
      {
        "name": "Amelia",
        "hobbies": [
          "Genealogy",
          "Calligraphy",
          "Tennis"
        ]
      }
    ]
  },
  {
    "id": 37,
    "name": "Amelia",
    "city": "New Orleans",
    "age": 28,
    "friends": [
      {
        "name": "Victoria",
        "hobbies": [
          "Traveling",
          "Skiing & Snowboarding"
        ]
      },
      {
        "name": "Luke",
        "hobbies": [
          "Martial Arts",
          "Cooking",
          "Dancing"
        ]
      },
      {
        "name": "Olivia",
        "hobbies": [
          "Bicycling",
          "Walking",
          "Podcasts"
        ]
      },
      {
        "name": "Elijah",
        "hobbies": [
          "Traveling",
          "Volunteer Work",
          "Collecting"
        ]
      }
    ]
  },
  {
    "id": 38,
    "name": "Victoria",
    "city": "Austin",
    "age": 71,
    "friends": [
      {
        "name": "Noah",
        "hobbies": [
          "Yoga",
          "Shopping"
        ]
      },
      {
        "name": "Evy",
        "hobbies": [
          "Eating Out",
          "Writing",
          "Shopping"
        ]
      },
      {
        "name": "Camila",
        "hobbies": [
          "Volunteer Work",
          "Team Sports"
        ]
      },
      {
        "name": "Lucas",
        "hobbies": [
          "Volunteer Work",
          "Board Games",
          "Running"
        ]
      }
    ]
  },
  {
    "id": 39,
    "name": "Mia",
    "city": "Honolulu",
    "age": 63,
    "friends": [
      {
        "name": "Sophie",
        "hobbies": [
          "Volunteer Work",
          "Housework",
          "Bicycling"
        ]
      },
      {
        "name": "Evy",
        "hobbies": [
          "Woodworking",
          "Golf"
        ]
      },
      {
        "name": "Ava",
        "hobbies": [
          "Martial Arts",
          "Skiing & Snowboarding",
          "Dancing"
        ]
      },
      {
        "name": "Joe",
        "hobbies": [
          "Collecting",
          "Watching Sports"
        ]
      },
      {
        "name": "Camila",
        "hobbies": [
          "Television",
          "Socializing",
          "Skiing & Snowboarding"
        ]
      },
      {
        "name": "Robert",
        "hobbies": [
          "Martial Arts",
          "Woodworking",
          "Reading"
        ]
      }
    ]
  },
  {
    "id": 40,
    "name": "Daniel",
    "city": "Las Vegas",
    "age": 50,
    "friends": [
      {
        "name": "Kevin",
        "hobbies": [
          "Bicycling",
          "Housework"
        ]
      },
      {
        "name": "Evy",
        "hobbies": [
          "Woodworking",
          "Collecting"
        ]
      }
    ]
  },
  {
    "id": 41,
    "name": "Luke",
    "city": "Nashville",
    "age": 84,
    "friends": [
      {
        "name": "Lucas",
        "hobbies": [
          "Fishing",
          "Shopping"
        ]
      },
      {
        "name": "Victoria",
        "hobbies": [
          "Church Activities",
          "Martial Arts",
          "Television"
        ]
      },
      {
        "name": "Charlotte",
        "hobbies": [
          "Church Activities",
          "Walking"
        ]
      },
      {
        "name": "Evy",
        "hobbies": [
          "Calligraphy",
          "Writing"
        ]
      },
      {
        "name": "Liam",
        "hobbies": [
          "Movie Watching",
          "Board Games"
        ]
      }
    ]
  },
  {
    "id": 42,
    "name": "Joe",
    "city": "Orlando",
    "age": 28,
    "friends": [
      {
        "name": "Sophie",
        "hobbies": [
          "Board Games",
          "Music"
        ]
      },
      {
        "name": "Camila",
        "hobbies": [
          "Woodworking",
          "Yoga",
          "Music"
        ]
      },
      {
        "name": "Jack",
        "hobbies": [
          "Team Sports",
          "Bicycling"
        ]
      }
    ]
  },
  {
    "id": 43,
    "name": "Robert",
    "city": "Boston",
    "age": 89,
    "friends": [
      {
        "name": "Mia",
        "hobbies": [
          "Team Sports",
          "Church Activities",
          "Martial Arts"
        ]
      },
      {
        "name": "Elijah",
        "hobbies": [
          "Housework",
          "Collecting"
        ]
      },
      {
        "name": "Zoey",
        "hobbies": [
          "Watching Sports",
          "Golf",
          "Podcasts"
        ]
      },
      {
        "name": "Sarah",
        "hobbies": [
          "Volunteer Work",
          "Team Sports"
        ]
      },
      {
        "name": "Chloe",
        "hobbies": [
          "Yoga",
          "Walking"
        ]
      },
      {
        "name": "Mateo",
        "hobbies": [
          "Running",
          "Painting",
          "Television"
        ]
      }
    ]
  },
  {
    "id": 44,
    "name": "Mateo",
    "city": "Palm Springs",
    "age": 75,
    "friends": [
      {
        "name": "Sarah",
        "hobbies": [
          "Socializing",
          "Walking",
          "Painting"
        ]
      },
      {
        "name": "Sophie",
        "hobbies": [
          "Skiing & Snowboarding",
          "Bicycling",
          "Eating Out"
        ]
      },
      {
        "name": "Zoey",
        "hobbies": [
          "Podcasts",
          "Socializing",
          "Calligraphy"
        ]
      },
      {
        "name": "Olivia",
        "hobbies": [
          "Dancing",
          "Volunteer Work"
        ]
      },
      {
        "name": "Mia",
        "hobbies": [
          "Watching Sports",
          "Yoga",
          "Martial Arts"
        ]
      },
      {
        "name": "Mateo",
        "hobbies": [
          "Housework",
          "Genealogy"
        ]
      }
    ]
  },
  {
    "id": 45,
    "name": "Michelle",
    "city": "Portland",
    "age": 64,
    "friends": [
      {
        "name": "Ava",
        "hobbies": [
          "Watching Sports",
          "Shopping"
        ]
      },
      {
        "name": "John",
        "hobbies": [
          "Martial Arts",
          "Video Games",
          "Fishing"
        ]
      }
    ]
  },
  {
    "id": 46,
    "name": "Emma",
    "city": "Portland",
    "age": 47,
    "friends": [
      {
        "name": "Zoey",
        "hobbies": [
          "Yoga",
          "Music",
          "Bicycling"
        ]
      },
      {
        "name": "Olivia",
        "hobbies": [
          "Traveling",
          "Movie Watching",
          "Gardening"
        ]
      }
    ]
  },
  {
    "id": 47,
    "name": "Elijah",
    "city": "Chicago",
    "age": 96,
    "friends": [
      {
        "name": "Kevin",
        "hobbies": [
          "Video Games",
          "Watching Sports",
          "Eating Out"
        ]
      },
      {
        "name": "Kevin",
        "hobbies": [
          "Housework",
          "Tennis",
          "Playing Cards"
        ]
      },
      {
        "name": "Liam",
        "hobbies": [
          "Cooking"
        ]
      },
      {
        "name": "Kevin",
        "hobbies": [
          "Genealogy",
          "Housework"
        ]
      }
    ]
  },
  {
    "id": 48,
    "name": "Elijah",
    "city": "Seattle",
    "age": 30,
    "friends": [
      {
        "name": "Kevin",
        "hobbies": [
          "Socializing",
          "Eating Out"
        ]
      },
      {
        "name": "Olivia",
        "hobbies": [
          "Martial Arts",
          "Golf",
          "Cooking"
        ]
      },
      {
        "name": "Daniel",
        "hobbies": [
          "Gardening",
          "Bicycling",
          "Television"
        ]
      }
    ]
  },
  {
    "id": 49,
    "name": "Sophie",
    "city": "Palm Springs",
    "age": 84,
    "friends": [
      {
        "name": "Victoria",
        "hobbies": [
          "Podcasts",
          "Martial Arts"
        ]
      },
      {
        "name": "Nora",
        "hobbies": [
          "Volunteer Work",
          "Bicycling",
          "Reading"
        ]
      },
      {
        "name": "Noah",
        "hobbies": [
          "Television",
          "Watching Sports",
          "Traveling"
        ]
      },
      {
        "name": "Victoria",
        "hobbies": [
          "Bicycling",
          "Woodworking",
          "Tennis"
        ]
      }
    ]
  },
  {
    "id": 50,
    "name": "Sophie",
    "city": "Chicago",
    "age": 52,
    "friends": [
      {
        "name": "Chris",
        "hobbies": [
          "Collecting",
          "Dancing",
          "Cooking"
        ]
      },
      {
        "name": "Emma",
        "hobbies": [
          "Watching Sports",
          "Dancing",
          "Tennis"
        ]
      },
      {
        "name": "Joe",
        "hobbies": [
          "Board Games",
          "Skiing & Snowboarding"
        ]
      },
      {
        "name": "Jack",
        "hobbies": [
          "Calligraphy",
          "Running"
        ]
      },
      {
        "name": "John",
        "hobbies": [
          "Quilting",
          "Golf",
          "Gardening"
        ]
      },
      {
        "name": "John",
        "hobbies": [
          "Watching Sports",
          "Jewelry Making"
        ]
      }
    ]
  },
  {
    "id": 51,
    "name": "Nora",
    "city": "Lahaina",
    "age": 79,
    "friends": [
      {
        "name": "Elijah",
        "hobbies": [
          "Skiing & Snowboarding",
          "Martial Arts"
        ]
      },
      {
        "name": "Kevin",
        "hobbies": [
          "Volunteer Work",
          "Running",
          "Tennis"
        ]
      },
      {
        "name": "Michael",
        "hobbies": [
          "Skiing & Snowboarding",
          "Quilting",
          "Fishing"
        ]
      }
    ]
  },
  {
    "id": 52,
    "name": "Chris",
    "city": "Miami Beach",
    "age": 59,
    "friends": [
      {
        "name": "Amelia",
        "hobbies": [
          "Video Games",
          "Traveling",
          "Cooking"
        ]
      },
      {
        "name": "Kevin",
        "hobbies": [
          "Shopping",
          "Calligraphy"
        ]
      },
      {
        "name": "Luke",
        "hobbies": [
          "Playing Cards",
          "Housework"
        ]
      },
      {
        "name": "Chloe",
        "hobbies": [
          "Painting",
          "Housework",
          "Shopping"
        ]
      }
    ]
  },
  {
    "id": 53,
    "name": "Kevin",
    "city": "Boston",
    "age": 88,
    "friends": [
      {
        "name": "Zoey",
        "hobbies": [
          "Dancing"
        ]
      },
      {
        "name": "Liam",
        "hobbies": [
          "Traveling",
          "Martial Arts"
        ]
      },
      {
        "name": "Robert",
        "hobbies": [
          "Woodworking",
          "Collecting"
        ]
      },
      {
        "name": "Elijah",
        "hobbies": [
          "Collecting",
          "Running"
        ]
      },
      {
        "name": "Daniel",
        "hobbies": [
          "Dancing",
          "Traveling"
        ]
      },
      {
        "name": "Emily",
        "hobbies": [
          "Fishing",
          "Quilting",
          "Team Sports"
        ]
      }
    ]
  },
  {
    "id": 54,
    "name": "Grace",
    "city": "Miami Beach",
    "age": 62,
    "friends": [
      {
        "name": "Joe",
        "hobbies": [
          "Church Activities",
          "Music"
        ]
      },
      {
        "name": "Emily",
        "hobbies": [
          "Genealogy",
          "Watching Sports",
          "Woodworking"
        ]
      },
      {
        "name": "Chris",
        "hobbies": [
          "Team Sports",
          "Skiing & Snowboarding"
        ]
      },
      {
        "name": "Grace",
        "hobbies": [
          "Yoga",
          "Music",
          "Running"
        ]
      }
    ]
  },
  {
    "id": 55,
    "name": "Chloe",
    "city": "Lahaina",
    "age": 97,
    "friends": [
      {
        "name": "Emily",
        "hobbies": [
          "Genealogy",
          "Team Sports",
          "Skiing & Snowboarding"
        ]
      },
      {
        "name": "Joe",
        "hobbies": [
          "Movie Watching",
          "Television"
        ]
      }
    ]
  },
  {
    "id": 56,
    "name": "Zoey",
    "city": "Saint Augustine",
    "age": 75,
    "friends": [
      {
        "name": "Luke",
        "hobbies": [
          "Bicycling",
          "Martial Arts"
        ]
      },
      {
        "name": "Emma",
        "hobbies": [
          "Music",
          "Cooking"
        ]
      }
    ]
  },
  {
    "id": 57,
    "name": "Sophie",
    "city": "Boston",
    "age": 26,
    "friends": [
      {
        "name": "Levi",
        "hobbies": [
          "Writing",
          "Yoga",
          "Movie Watching"
        ]
      },
      {
        "name": "Noah",
        "hobbies": [
          "Board Games",
          "Martial Arts",
          "Shopping"
        ]
      },
      {
        "name": "Camila",
        "hobbies": [
          "Jewelry Making",
          "Skiing & Snowboarding",
          "Fishing"
        ]
      }
    ]
  },
  {
    "id": 58,
    "name": "Emma",
    "city": "Seattle",
    "age": 40,
    "friends": [
      {
        "name": "Victoria",
        "hobbies": [
          "Traveling",
          "Bicycling"
        ]
      },
      {
        "name": "Michelle",
        "hobbies": [
          "Skiing & Snowboarding",
          "Bicycling",
          "Watching Sports"
        ]
      },
      {
        "name": "Michael",
        "hobbies": [
          "Board Games",
          "Watching Sports"
        ]
      },
      {
        "name": "Daniel",
        "hobbies": [
          "Yoga",
          "Shopping"
        ]
      }
    ]
  },
  {
    "id": 59,
    "name": "Luke",
    "city": "San Diego",
    "age": 44,
    "friends": [
      {
        "name": "Mia",
        "hobbies": [
          "Calligraphy",
          "Writing"
        ]
      },
      {
        "name": "Michelle",
        "hobbies": [
          "Podcasts",
          "Movie Watching",
          "Playing Cards"
        ]
      },
      {
        "name": "Charlotte",
        "hobbies": [
          "Bicycling",
          "Golf",
          "Walking"
        ]
      }
    ]
  },
  {
    "id": 60,
    "name": "Chloe",
    "city": "Austin",
    "age": 23,
    "friends": [
      {
        "name": "Camila",
        "hobbies": [
          "Martial Arts",
          "Golf"
        ]
      },
      {
        "name": "Sarah",
        "hobbies": [
          "Writing",
          "Martial Arts",
          "Jewelry Making"
        ]
      },
      {
        "name": "Amelia",
        "hobbies": [
          "Video Games",
          "Bicycling",
          "Eating Out"
        ]
      },
      {
        "name": "Sophie",
        "hobbies": [
          "Socializing",
          "Collecting",
          "Traveling"
        ]
      },
      {
        "name": "Olivia",
        "hobbies": [
          "Team Sports",
          "Woodworking",
          "Collecting"
        ]
      },
      {
        "name": "Elijah",
        "hobbies": [
          "Yoga",
          "Music",
          "Skiing & Snowboarding"
        ]
      }
    ]
  },
  {
    "id": 61,
    "name": "Nora",
    "city": "Orlando",
    "age": 83,
    "friends": [
      {
        "name": "Zoey",
        "hobbies": [
          "Board Games",
          "Woodworking"
        ]
      },
      {
        "name": "Emma",
        "hobbies": [
          "Board Games",
          "Traveling"
        ]
      },
      {
        "name": "Nora",
        "hobbies": [
          "Bicycling",
          "Golf"
        ]
      },
      {
        "name": "Leo",
        "hobbies": [
          "Church Activities",
          "Golf",
          "Socializing"
        ]
      },
      {
        "name": "Oliver",
        "hobbies": [
          "Running",
          "Dancing"
        ]
      },
      {
        "name": "Amelia",
        "hobbies": [
          "Board Games",
          "Volunteer Work"
        ]
      }
    ]
  },
  {
    "id": 62,
    "name": "Kevin",
    "city": "Saint Augustine",
    "age": 76,
    "friends": [
      {
        "name": "Lucas",
        "hobbies": [
          "Playing Cards",
          "Skiing & Snowboarding"
        ]
      },
      {
        "name": "Grace",
        "hobbies": [
          "Movie Watching",
          "Calligraphy",
          "Socializing"
        ]
      },
      {
        "name": "Ava",
        "hobbies": [
          "Podcasts",
          "Yoga",
          "Quilting"
        ]
      }
    ]
  },
  {
    "id": 63,
    "name": "Amelia",
    "city": "Honolulu",
    "age": 84,
    "friends": [
      {
        "name": "Grace",
        "hobbies": [
          "Golf",
          "Reading"
        ]
      },
      {
        "name": "Luke",
        "hobbies": [
          "Genealogy",
          "Martial Arts"
        ]
      },
      {
        "name": "Lucas",
        "hobbies": [
          "Gardening",
          "Music"
        ]
      },
      {
        "name": "Isabella",
        "hobbies": [
          "Board Games",
          "Music"
        ]
      },
      {
        "name": "Noah",
        "hobbies": [
          "Cooking",
          "Eating Out",
          "Quilting"
        ]
      },
      {
        "name": "Levi",
        "hobbies": [
          "Movie Watching",
          "Church Activities",
          "Shopping"
        ]
      }
    ]
  },
  {
    "id": 64,
    "name": "Joe",
    "city": "San Francisco",
    "age": 37,
    "friends": [
      {
        "name": "Michelle",
        "hobbies": [
          "Skiing & Snowboarding",
          "Dancing"
        ]
      },
      {
        "name": "John",
        "hobbies": [
          "Running",
          "Podcasts",
          "Woodworking"
        ]
      }
    ]
  },
  {
    "id": 65,
    "name": "Chloe",
    "city": "Palm Springs",
    "age": 60,
    "friends": [
      {
        "name": "Lucas",
        "hobbies": [
          "Movie Watching",
          "Walking"
        ]
      },
      {
        "name": "Grace",
        "hobbies": [
          "Volunteer Work",
          "Socializing"
        ]
      },
      {
        "name": "Daniel",
        "hobbies": [
          "Church Activities",
          "Gardening"
        ]
      },
      {
        "name": "Michael",
        "hobbies": [
          "Walking",
          "Team Sports",
          "Martial Arts"
        ]
      }
    ]
  },
  {
    "id": 66,
    "name": "Leo",
    "city": "New Orleans",
    "age": 97,
    "friends": [
      {
        "name": "Ava",
        "hobbies": [
          "Martial Arts",
          "Woodworking",
          "Quilting"
        ]
      },
      {
        "name": "Chloe",
        "hobbies": [
          "Fishing",
          "Genealogy",
          "Writing"
        ]
      },
      {
        "name": "Nora",
        "hobbies": [
          "Traveling",
          "Woodworking"
        ]
      },
      {
        "name": "Victoria",
        "hobbies": [
          "Church Activities",
          "Cooking"
        ]
      },
      {
        "name": "Camila",
        "hobbies": [
          "Video Games",
          "Housework"
        ]
      }
    ]
  },
  {
    "id": 67,
    "name": "Robert",
    "city": "Austin",
    "age": 19,
    "friends": [
      {
        "name": "Joe",
        "hobbies": [
          "Writing",
          "Yoga"
        ]
      },
      {
        "name": "Emma",
        "hobbies": [
          "Writing",
          "Socializing"
        ]
      }
    ]
  },
  {
    "id": 68,
    "name": "Robert",
    "city": "Orlando",
    "age": 65,
    "friends": [
      {
        "name": "Mateo",
        "hobbies": [
          "Board Games",
          "Cooking"
        ]
      },
      {
        "name": "Noah",
        "hobbies": [
          "Collecting",
          "Housework",
          "Skiing & Snowboarding"
        ]
      }
    ]
  },
  {
    "id": 69,
    "name": "Mateo",
    "city": "New Orleans",
    "age": 95,
    "friends": [
      {
        "name": "Chloe",
        "hobbies": [
          "Painting",
          "Eating Out",
          "Walking"
        ]
      },
      {
        "name": "Nora",
        "hobbies": [
          "Bicycling",
          "Jewelry Making",
          "Woodworking"
        ]
      },
      {
        "name": "Jack",
        "hobbies": [
          "Cooking",
          "Gardening"
        ]
      },
      {
        "name": "Liam",
        "hobbies": [
          "Reading",
          "Collecting",
          "Podcasts"
        ]
      },
      {
        "name": "Noah",
        "hobbies": [
          "Housework",
          "Team Sports"
        ]
      },
      {
        "name": "Emily",
        "hobbies": [
          "Dancing",
          "Yoga"
        ]
      }
    ]
  },
  {
    "id": 70,
    "name": "Jack",
    "city": "Boston",
    "age": 76,
    "friends": [
      {
        "name": "Ava",
        "hobbies": [
          "Martial Arts",
          "Volunteer Work",
          "Team Sports"
        ]
      },
      {
        "name": "Kevin",
        "hobbies": [
          "Traveling",
          "Bicycling"
        ]
      },
      {
        "name": "Lucas",
        "hobbies": [
          "Podcasts",
          "Jewelry Making",
          "Dancing"
        ]
      },
      {
        "name": "Michelle",
        "hobbies": [
          "Gardening",
          "Shopping",
          "Genealogy"
        ]
      },
      {
        "name": "Michelle",
        "hobbies": [
          "Writing",
          "Tennis"
        ]
      }
    ]
  },
  {
    "id": 71,
    "name": "Liam",
    "city": "Savannah",
    "age": 37,
    "friends": [
      {
        "name": "Michelle",
        "hobbies": [
          "Painting",
          "Volunteer Work"
        ]
      },
      {
        "name": "Kevin",
        "hobbies": [
          "Dancing",
          "Fishing"
        ]
      },
      {
        "name": "Olivia",
        "hobbies": [
          "Television",
          "Running"
        ]
      },
      {
        "name": "Robert",
        "hobbies": [
          "Fishing",
          "Eating Out"
        ]
      },
      {
        "name": "John",
        "hobbies": [
          "Skiing & Snowboarding"
        ]
      },
      {
        "name": "Chloe",
        "hobbies": [
          "Church Activities",
          "Calligraphy",
          "Writing"
        ]
      }
    ]
  },
  {
    "id": 72,
    "name": "Daniel",
    "city": "Los Angeles",
    "age": 63,
    "friends": [
      {
        "name": "Evy",
        "hobbies": [
          "Television",
          "Dancing"
        ]
      },
      {
        "name": "Kevin",
        "hobbies": [
          "Walking",
          "Socializing",
          "Writing"
        ]
      }
    ]
  },
  {
    "id": 73,
    "name": "Olivia",
    "city": "Boston",
    "age": 89,
    "friends": [
      {
        "name": "Ava",
        "hobbies": [
          "Fishing",
          "Playing Cards"
        ]
      },
      {
        "name": "Noah",
        "hobbies": [
          "Movie Watching",
          "Board Games"
        ]
      }
    ]
  },
  {
    "id": 74,
    "name": "Amelia",
    "city": "Orlando",
    "age": 40,
    "friends": [
      {
        "name": "Kevin",
        "hobbies": [
          "Golf",
          "Reading",
          "Shopping"
        ]
      },
      {
        "name": "Liam",
        "hobbies": [
          "Writing",
          "Woodworking"
        ]
      },
      {
        "name": "Amelia",
        "hobbies": [
          "Movie Watching",
          "Music"
        ]
      },
      {
        "name": "Grace",
        "hobbies": [
          "Jewelry Making",
          "Bicycling"
        ]
      }
    ]
  },
  {
    "id": 75,
    "name": "Camila",
    "city": "New Orleans",
    "age": 65,
    "friends": [
      {
        "name": "Mateo",
        "hobbies": [
          "Yoga",
          "Reading",
          "Team Sports"
        ]
      },
      {
        "name": "Mateo",
        "hobbies": [
          "Board Games",
          "Shopping"
        ]
      },
      {
        "name": "Leo",
        "hobbies": [
          "Woodworking",
          "Martial Arts"
        ]
      },
      {
        "name": "Jack",
        "hobbies": [
          "Television",
          "Calligraphy",
          "Playing Cards"
        ]
      },
      {
        "name": "Liam",
        "hobbies": [
          "Fishing",
          "Martial Arts"
        ]
      }
    ]
  },
  {
    "id": 76,
    "name": "Jack",
    "city": "Orlando",
    "age": 42,
    "friends": [
      {
        "name": "Daniel",
        "hobbies": [
          "Podcasts",
          "Collecting"
        ]
      },
      {
        "name": "Robert",
        "hobbies": [
          "Running",
          "Shopping",
          "Quilting"
        ]
      },
      {
        "name": "Chris",
        "hobbies": [
          "Martial Arts",
          "Golf",
          "Quilting"
        ]
      },
      {
        "name": "Amelia",
        "hobbies": [
          "Eating Out",
          "Bicycling",
          "Golf"
        ]
      },
      {
        "name": "Olivia",
        "hobbies": [
          "Skiing & Snowboarding",
          "Church Activities"
        ]
      }
    ]
  },
  {
    "id": 77,
    "name": "Leo",
    "city": "Lahaina",
    "age": 46,
    "friends": [
      {
        "name": "Robert",
        "hobbies": [
          "Traveling",
          "Watching Sports"
        ]
      },
      {
        "name": "Daniel",
        "hobbies": [
          "Video Games",
          "Music"
        ]
      },
      {
        "name": "Michael",
        "hobbies": [
          "Video Games",
          "Gardening"
        ]
      },
      {
        "name": "Emma",
        "hobbies": [
          "Painting",
          "Television"
        ]
      },
      {
        "name": "Sarah",
        "hobbies": [
          "Dancing",
          "Tennis"
        ]
      }
    ]
  },
  {
    "id": 78,
    "name": "Kevin",
    "city": "San Antonio",
    "age": 19,
    "friends": [
      {
        "name": "Leo",
        "hobbies": [
          "Traveling",
          "Television"
        ]
      },
      {
        "name": "Victoria",
        "hobbies": [
          "Fishing",
          "Collecting",
          "Gardening"
        ]
      },
      {
        "name": "Mia",
        "hobbies": [
          "Skiing & Snowboarding",
          "Watching Sports",
          "Martial Arts"
        ]
      }
    ]
  },
  {
    "id": 79,
    "name": "Leo",
    "city": "Sedona",
    "age": 56,
    "friends": [
      {
        "name": "Mateo",
        "hobbies": [
          "Board Games",
          "Reading"
        ]
      },
      {
        "name": "Grace",
        "hobbies": [
          "Reading",
          "Fishing",
          "Woodworking"
        ]
      },
      {
        "name": "Mia",
        "hobbies": [
          "Gardening",
          "Woodworking"
        ]
      },
      {
        "name": "Noah",
        "hobbies": [
          "Video Games",
          "Television",
          "Eating Out"
        ]
      }
    ]
  },
  {
    "id": 80,
    "name": "Charlotte",
    "city": "Orlando",
    "age": 73,
    "friends": [
      {
        "name": "Camila",
        "hobbies": [
          "Golf",
          "Collecting"
        ]
      },
      {
        "name": "Evy",
        "hobbies": [
          "Shopping",
          "Yoga",
          "Genealogy"
        ]
      },
      {
        "name": "Charlotte",
        "hobbies": [
          "Yoga",
          "Volunteer Work"
        ]
      }
    ]
  },
  {
    "id": 81,
    "name": "Robert",
    "city": "Chicago",
    "age": 52,
    "friends": [
      {
        "name": "Noah",
        "hobbies": [
          "Church Activities",
          "Woodworking",
          "Traveling"
        ]
      },
      {
        "name": "Liam",
        "hobbies": [
          "Board Games",
          "Socializing"
        ]
      },
      {
        "name": "Liam",
        "hobbies": [
          "Housework",
          "Music",
          "Calligraphy"
        ]
      },
      {
        "name": "Zoey",
        "hobbies": [
          "Shopping",
          "Fishing",
          "Walking"
        ]
      },
      {
        "name": "Grace",
        "hobbies": [
          "Dancing",
          "Yoga"
        ]
      }
    ]
  },
  {
    "id": 82,
    "name": "Kevin",
    "city": "Palm Springs",
    "age": 75,
    "friends": [
      {
        "name": "Oliver",
        "hobbies": [
          "Running",
          "Traveling"
        ]
      },
      {
        "name": "Luke",
        "hobbies": [
          "Socializing",
          "Martial Arts",
          "Running"
        ]
      }
    ]
  },
  {
    "id": 83,
    "name": "Evy",
    "city": "Palm Springs",
    "age": 51,
    "friends": [
      {
        "name": "Michael",
        "hobbies": [
          "Writing",
          "Podcasts"
        ]
      },
      {
        "name": "Noah",
        "hobbies": [
          "Yoga",
          "Quilting",
          "Fishing"
        ]
      },
      {
        "name": "Sophie",
        "hobbies": [
          "Painting"
        ]
      },
      {
        "name": "Olivia",
        "hobbies": [
          "Martial Arts",
          "Shopping",
          "Podcasts"
        ]
      },
      {
        "name": "Camila",
        "hobbies": [
          "Reading",
          "Collecting"
        ]
      },
      {
        "name": "Noah",
        "hobbies": [
          "Socializing",
          "Housework"
        ]
      }
    ]
  },
  {
    "id": 84,
    "name": "Daniel",
    "city": "Saint Augustine",
    "age": 57,
    "friends": [
      {
        "name": "Emily",
        "hobbies": [
          "Walking",
          "Painting",
          "Reading"
        ]
      },
      {
        "name": "Oliver",
        "hobbies": [
          "Team Sports",
          "Board Games"
        ]
      },
      {
        "name": "Levi",
        "hobbies": [
          "Jewelry Making",
          "Eating Out",
          "Volunteer Work"
        ]
      },
      {
        "name": "Zoey",
        "hobbies": [
          "Movie Watching",
          "Video Games"
        ]
      },
      {
        "name": "Sophie",
        "hobbies": [
          "Watching Sports",
          "Walking",
          "Martial Arts"
        ]
      }
    ]
  },
  {
    "id": 85,
    "name": "Olivia",
    "city": "Charleston",
    "age": 63,
    "friends": [
      {
        "name": "Oliver",
        "hobbies": [
          "Reading",
          "Playing Cards"
        ]
      },
      {
        "name": "Mia",
        "hobbies": [
          "Running",
          "Shopping"
        ]
      },
      {
        "name": "John",
        "hobbies": [
          "Writing",
          "Walking",
          "Tennis"
        ]
      }
    ]
  },
  {
    "id": 86,
    "name": "Amelia",
    "city": "Seattle",
    "age": 96,
    "friends": [
      {
        "name": "Daniel",
        "hobbies": [
          "Dancing",
          "Eating Out"
        ]
      },
      {
        "name": "Levi",
        "hobbies": [
          "Bicycling",
          "Dancing"
        ]
      },
      {
        "name": "Daniel",
        "hobbies": [
          "Writing",
          "Shopping",
          "Tennis"
        ]
      },
      {
        "name": "Michelle",
        "hobbies": [
          "Board Games",
          "Walking",
          "Housework"
        ]
      },
      {
        "name": "Chloe",
        "hobbies": [
          "Genealogy",
          "Dancing",
          "Podcasts"
        ]
      },
      {
        "name": "Joe",
        "hobbies": [
          "Movie Watching",
          "Cooking",
          "Housework"
        ]
      }
    ]
  },
  {
    "id": 87,
    "name": "Luke",
    "city": "Seattle",
    "age": 26,
    "friends": [
      {
        "name": "Isabella",
        "hobbies": [
          "Traveling",
          "Walking",
          "Team Sports"
        ]
      },
      {
        "name": "Amelia",
        "hobbies": [
          "Writing",
          "Housework",
          "Volunteer Work"
        ]
      },
      {
        "name": "Elijah",
        "hobbies": [
          "Golf",
          "Yoga"
        ]
      },
      {
        "name": "Levi",
        "hobbies": [
          "Volunteer Work",
          "Eating Out"
        ]
      },
      {
        "name": "Kevin",
        "hobbies": [
          "Yoga",
          "Genealogy",
          "Volunteer Work"
        ]
      },
      {
        "name": "Levi",
        "hobbies": [
          "Tennis",
          "Television"
        ]
      }
    ]
  },
  {
    "id": 88,
    "name": "Chris",
    "city": "Nashville",
    "age": 34,
    "friends": [
      {
        "name": "Kevin",
        "hobbies": [
          "Podcasts",
          "Team Sports",
          "Traveling"
        ]
      },
      {
        "name": "Elijah",
        "hobbies": [
          "Television",
          "Woodworking",
          "Cooking"
        ]
      },
      {
        "name": "Evy",
        "hobbies": [
          "Podcasts",
          "Genealogy",
          "Calligraphy"
        ]
      },
      {
        "name": "Victoria",
        "hobbies": [
          "Fishing",
          "Church Activities",
          "Collecting"
        ]
      },
      {
        "name": "Camila",
        "hobbies": [
          "Television",
          "Writing"
        ]
      },
      {
        "name": "Michelle",
        "hobbies": [
          "Yoga",
          "Running"
        ]
      }
    ]
  },
  {
    "id": 89,
    "name": "Michelle",
    "city": "Honolulu",
    "age": 85,
    "friends": [
      {
        "name": "Isabella",
        "hobbies": [
          "Calligraphy",
          "Gardening"
        ]
      },
      {
        "name": "Chloe",
        "hobbies": [
          "Shopping",
          "Playing Cards",
          "Tennis"
        ]
      },
      {
        "name": "Evy",
        "hobbies": [
          "Watching Sports",
          "Cooking",
          "Golf"
        ]
      },
      {
        "name": "Elijah",
        "hobbies": [
          "Writing",
          "Tennis",
          "Playing Cards"
        ]
      }
    ]
  },
  {
    "id": 90,
    "name": "Lucas",
    "city": "Los Angeles",
    "age": 78,
    "friends": [
      {
        "name": "Emma",
        "hobbies": [
          "Woodworking",
          "Painting",
          "Television"
        ]
      },
      {
        "name": "Lucas",
        "hobbies": [
          "Bicycling",
          "Volunteer Work"
        ]
      },
      {
        "name": "Grace",
        "hobbies": [
          "Dancing",
          "Running"
        ]
      }
    ]
  },
  {
    "id": 91,
    "name": "Sophie",
    "city": "St. Louis",
    "age": 86,
    "friends": [
      {
        "name": "Joe",
        "hobbies": [
          "Socializing",
          "Music"
        ]
      },
      {
        "name": "Zoey",
        "hobbies": [
          "Running",
          "Playing Cards"
        ]
      },
      {
        "name": "Elijah",
        "hobbies": [
          "Dancing"
        ]
      }
    ]
  },
  {
    "id": 92,
    "name": "Victoria",
    "city": "Saint Augustine",
    "age": 33,
    "friends": [
      {
        "name": "Leo",
        "hobbies": [
          "Socializing",
          "Fishing"
        ]
      },
      {
        "name": "Emily",
        "hobbies": [
          "Video Games",
          "Watching Sports"
        ]
      },
      {
        "name": "Luke",
        "hobbies": [
          "Martial Arts"
        ]
      },
      {
        "name": "Oliver",
        "hobbies": [
          "Traveling",
          "Quilting",
          "Television"
        ]
      },
      {
        "name": "Charlotte",
        "hobbies": [
          "Gardening",
          "Cooking",
          "Housework"
        ]
      }
    ]
  },
  {
    "id": 93,
    "name": "Michael",
    "city": "New Orleans",
    "age": 82,
    "friends": [
      {
        "name": "Jack",
        "hobbies": [
          "Bicycling",
          "Board Games",
          "Movie Watching"
        ]
      },
      {
        "name": "Liam",
        "hobbies": [
          "Painting",
          "Writing",
          "Bicycling"
        ]
      }
    ]
  },
  {
    "id": 94,
    "name": "Michael",
    "city": "Seattle",
    "age": 49,
    "friends": [
      {
        "name": "John",
        "hobbies": [
          "Collecting",
          "Playing Cards",
          "Cooking"
        ]
      },
      {
        "name": "Sarah",
        "hobbies": [
          "Fishing",
          "Walking",
          "Movie Watching"
        ]
      }
    ]
  },
  {
    "id": 95,
    "name": "Victoria",
    "city": "Branson",
    "age": 48,
    "friends": [
      {
        "name": "Amelia",
        "hobbies": [
          "Painting",
          "Volunteer Work",
          "Socializing"
        ]
      },
      {
        "name": "Evy",
        "hobbies": [
          "Skiing & Snowboarding",
          "Volunteer Work"
        ]
      },
      {
        "name": "Amelia",
        "hobbies": [
          "Genealogy",
          "Reading",
          "Yoga"
        ]
      },
      {
        "name": "Sophie",
        "hobbies": [
          "Movie Watching",
          "Golf",
          "Television"
        ]
      },
      {
        "name": "Charlotte",
        "hobbies": [
          "Jewelry Making",
          "Quilting",
          "Playing Cards"
        ]
      },
      {
        "name": "Jack",
        "hobbies": [
          "Playing Cards",
          "Golf"
        ]
      }
    ]
  },
  {
    "id": 96,
    "name": "Grace",
    "city": "Seattle",
    "age": 89,
    "friends": [
      {
        "name": "Chris",
        "hobbies": [
          "Board Games",
          "Golf",
          "Playing Cards"
        ]
      },
      {
        "name": "Emily",
        "hobbies": [
          "Video Games",
          "Golf"
        ]
      },
      {
        "name": "Victoria",
        "hobbies": [
          "Housework",
          "Collecting",
          "Woodworking"
        ]
      }
    ]
  },
  {
    "id": 97,
    "name": "Liam",
    "city": "Nashville",
    "age": 64,
    "friends": [
      {
        "name": "Kevin",
        "hobbies": [
          "Collecting"
        ]
      },
      {
        "name": "Amelia",
        "hobbies": [
          "Golf",
          "Playing Cards",
          "Cooking"
        ]
      },
      {
        "name": "Charlotte",
        "hobbies": [
          "Reading",
          "Board Games",
          "Genealogy"
        ]
      },
      {
        "name": "Leo",
        "hobbies": [
          "Video Games",
          "Writing"
        ]
      },
      {
        "name": "Nora",
        "hobbies": [
          "Jewelry Making",
          "Volunteer Work"
        ]
      }
    ]
  },
  {
    "id": 98,
    "name": "Mia",
    "city": "Miami Beach",
    "age": 77,
    "friends": [
      {
        "name": "Emma",
        "hobbies": [
          "Podcasts",
          "Movie Watching"
        ]
      },
      {
        "name": "Oliver",
        "hobbies": [
          "Playing Cards",
          "Fishing",
          "Eating Out"
        ]
      },
      {
        "name": "Emma",
        "hobbies": [
          "Collecting",
          "Yoga"
        ]
      },
      {
        "name": "Michael",
        "hobbies": [
          "Bicycling",
          "Team Sports"
        ]
      },
      {
        "name": "Ava",
        "hobbies": [
          "Watching Sports",
          "Jewelry Making"
        ]
      },
      {
        "name": "Joe",
        "hobbies": [
          "Video Games",
          "Woodworking",
          "Music"
        ]
      }
    ]
  },
  {
    "id": 99,
    "name": "Mateo",
    "city": "Branson",
    "age": 66,
    "friends": [
      {
        "name": "Isabella",
        "hobbies": [
          "Television",
          "Skiing & Snowboarding"
        ]
      },
      {
        "name": "Noah",
        "hobbies": [
          "Housework",
          "Running",
          "Podcasts"
        ]
      }
    ]
  }
];

  // get(){
  //   return this.http.get('./assets/mydata.json');
  // }

  get(){
    return of (this.data);
  }

  // update(a:any){
  //   this.get().subscribe((result)=>{
  //     var data=result;
  //     console.log(data);
  //     let res=data
  //   //console.log(res)
  //   // this.data.splice(res,1,a);
  //   })

  update(a:any){
    let res=this.data.findIndex(p=>p.name==a.name);
    //console.log(res)
    this.data.splice(res,1,a);
  }

  delete(a:any){
    let res=this.data.findIndex(p=>p.name==a.name);
    this.data.splice(res,1);
  }

  // delete2(a:any){
  //   let res=this.data.findIndex(p=>{});b of a.friends
  //   this.data.splice(res,1);
  // }
    
  }

//   delete(a:any){
//     this.get().subscribe((result)=>{
//       var data=result;
// var data1=JSON.stringify(data);
// for(let b of data1){
//   if(a.name==b.city)
// }
      
//     })
//     let res=this.http.get('./assets/mydata.json');
//     for(let a of res)
//     this.data.splice(res,1);
//   }


