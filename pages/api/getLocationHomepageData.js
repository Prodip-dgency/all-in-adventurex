
import { getLocationsPageData } from "./getLocationsPageData";
import { getLocationActivitySlugList } from "./LocationIndData/getLocationActivitySlugList";
import { getLocationEventSlugList } from "./LocationIndData/getLocationEventSlugList";
import { bookingList } from "./LocationIndData/bookingList"
import { getTotal } from "./AllDataList/getTotal";
import OhterGameSubmenu from "../../comps/headerComps/OhterGameSubmenu";


 export const getLocationHomepageData =  (locationslug) => {

   const locData=getLocationsPageData()

   const getLocSpec=(slug)=>{
      var i=0
      var j=0
      for(i=0;i<locData.states.length;i++){
        for(j=0;j<locData.states[i].cities.length;j++){
          if(locData.states[i].cities[j].slug==slug){
            return locData.states[i].cities[j]
          }
         
        }
        
      }
   }
   

    const extractData=locationslug.toString().split('-')
    const locattionstate=extractData[extractData.length-1].toUpperCase()
    const locationCity=extractData.slice(0, -1).join(' ')
    
    const bookingGame=bookingList('',locationslug)

    const othergame=(slug)=>{
        if(locPagedata[slug].otherphysicalgames)
        {
          return locPagedata[slug].otherphysicalgames
        }
        return false
    }

    

   const locationHomedata=
       {
        "locationlist":getTotal().locationlist,
        "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
        },
        "activitylist":getLocationActivitySlugList(locationslug),
        "eventlist":getLocationEventSlugList(locationslug),
        "bookingData":bookingGame,
        "pagedata": {
                      "locationstate":locattionstate,
                      "locationcity":getLocSpec(locationslug).city,
                      "slug":locationslug,
                      "totalLocations": getTotal().totalLocations,
                      "locationaddress":getLocSpec(locationslug).mall,
                      "totalUniqueGames": locPagedata[locationslug].inpersongames.length,
                      "totalFiveStarReview": "20k+",
                      "totalPlayerEscaped": "90k+",
                      "coverimageL":locPagedata[locationslug].coverimageL,
                      "coverimageM":locPagedata[locationslug].coverimageM,
                      "coverimageM_alt":locPagedata[locationslug].coverimageM_alt,
                      "bookingall":{
                        "shortname":bookingGame.shortname,
                      },
                "locdetail":getLocSpec(locationslug)
                      
        },
        "inpersongames":locPagedata[locationslug].inpersongames,
        "otherphysicalgames":othergame(locationslug),
        "events": locPagedata[locationslug].events,
        "virtualgames": [
          {
            "id":1,
            "category":"virtual",
            "type": "Virtual",
            "title": "Virtual Game Show Room",
            "description": "It's designed to be an interactive live game show experience for online players of all ages and backgrounds to enjoy.",
            "age":"All age(6+)",
            "duration":"30",
            "maxplayers":"6",
            "minplayers":"2",
            "price":"147",
            
            "slug"  :"virtual-games/virtual-game-show-room",
            "bgimg" :"/assets/all-game-slider-bg/allinadventures-virtual-game-showroom.jpg"
           },
           {
            "id":2,
            "category":"virtual",
            "type": "Virtual",
            "title": "6 Virtual Escape Rooms",
            "description": "New generation of escape rooms that are exactly like physical escape rooms, but can be played from anywhere.",
            "age":"All age(6+)",
            "duration":"30",
            "maxplayers":"6",
            "minplayers":"2",
            "price":"147",
            "slug"  :"virtual-games",
            "bgimg" :"/assets/all-game-slider-bg/allinadventures-virtual-game.jpg"
           },
         
                 ],
         "locationreviews": [
          {   "id"  : 1,
               "star":5,
              "title": "IT WAS SUPER FUN!",
               "review_text": "I visited All In Adventures with my friend for my first escape room experience, which was super fun! We had a great time and I will definitely return if I am in the area. Highly recommended!",
               "author" :"Myla S.",
               "author_location" :"Albany, NY, United States",
               "rev_img":"/assets/all-testimonials-image/allinadventures-escape-room-testimonials-private-party.jpg",
               "rev_img_alt":"allinadventures-escape-room-private-party.jpg"
             },
             {   "id"  : 2,
               "star":5,
              "title": "WE HAD A BLAST!",
               "review_text": "My 8-year-old son and I did the Treasure Island and Alcatraz. We had a blast. Definitely a challenge for both, but not terribly difficult for the two of us! Definitely recommended!",
               "author" :"Andrew S.",
               "author_location" :"Buffalo, NY, United States",
               "rev_img":"/assets/all-testimonials-image/allinadventures-escape-room-testimonials-dad-son.jpg",
               "rev_img_alt":"escape room in buffalo ny"
             },
             {   "id"  : 3,
               "star":5,
              "title": "HIGHLY RECOMMENDED!",
               "review_text": "They're so friendly and helpful and made us feel so comfortable! If you're looking for a fun place I'd definitely say this is the place for you and your family. 10/10 highly recommended!",
               "author" :"Yalayna D.",
               "author_location" :"Middletown, NY, United States",
               "rev_img":"/assets/all-testimonials-image/allinadventures-escape-room-testimonials-family-activity.jpg",
               "rev_img_alt":"escape room in middletown ny"
             },
             {   "id"  : 4,
               "star":5,
              "title": "WILL COME AGAIN!",
               "review_text": "It was my daughter's birthday! We had a very fun experience. It's a cool place. The game masters were amazing! They have the best personalities, they made it fun. Will come again.",
               "author" :"Nicole H.",
               "author_location" :"Lawrenceville, GA, United States",
               "rev_img":"/assets/all-testimonials-image/allinadventures-escape-room-testimonials-kids-birthday-party.jpg",
               "rev_img_alt":"escape room in Lawrenceville ga"
             },
             {   "id"  : 5,
               "star":5,
              "title": "THEMED PERFECTLY!",
               "review_text": "The room and puzzle details were themed perfectly and it was a fun, challenging activity to do as a family. We enjoyed it so much that we can't wait to return to try other rooms.",
               "author" :"Jamie H.",
               "author_location" :"Bensalem, PA, United States",
               "rev_img":"/assets/all-testimonials-image/allinadventures-escape-room-testimonials-father-with-family.jpg",
               "rev_img_alt":"escape room in Bensalem pa"
             },
             {   "id"  : 6,
               "star":5,
              "title": "HAPPY AND SATISFIED!",
               "review_text": "The game master made the experience more fun for our group with his humor and was great at providing clues when needed without giving away the answer. Highly recommended for group activity!",
               "author" :"Jayme W.",
               "author_location" :"Kingston, MA, United States",
               "rev_img":"/assets/all-testimonials-image/allinadventures-escape-room-testimonials-female-corporate-team-building.jpg",
               "rev_img_alt":"escape room in Kingston MA"
             },
             {   "id"  : 7,
               "star":5,
              "title": "LOTS OF ROOMS!",
               "review_text": "Great thing about this place was lots of rooms and variety to choose from with varying degrees of difficulty. A beginner or an expert could enjoy this place and be able to come multiple times.",
               "author" :"Ligi J.",
               "author_location" :"West Nyack, NY, United States",
               "rev_img":"/assets/all-testimonials-image/allinadventures-escape-room-testimonials-team-building.jpg",
               "rev_img_alt":"escape room in Milford CT"
             },
             {   "id"  : 8,
               "star":5,
              "title": "10/10 RECOMMENDED!",
               "review_text": "As the bride to be, this was the perfect start to my bachelorette party! Staffs were amazing at getting us started and celebrating our win with us! 10/10 absolutely recommended!",
               "author" :"Brittany W.",
               "author_location" :"Roanoke, VA, United States",
               "rev_img":"/assets/all-testimonials-image/allinadventures-escape-room-testimonials-young-girl-with-friends.jpg",
               "rev_img_alt":"escape room in Roanoke va"
             },
             {   "id"  : 9,
               "star":5,
              "title": "GREAT FAMILY ACTIVITY!",
               "review_text": "We had a great time at All In Adventures! The Super Hero escape room was such a great family activity. Our group ranged from 6 years old to 42 and everyone had a blast!",
               "author" :"Gabriela Y.",
               "author_location" :"Rockaway, NJ, United States",
               "rev_img":"/assets/all-testimonials-image/allinadventures-escape-room-testimonials-kids-with-family.jpg",
               "rev_img_alt":"escape room in Rockaway nj"
             },
             {   "id"  : 10,
               "star":5,
              "title": "TEAM BUILDING EVENT!",
               "review_text": "It was so much fun! I brought my real estate team for a team building event and it was 9 of us. We did the Black Ops escape room and needed clues but we enjoyed it a lot. Would do it again.",
               "author" :"India H.",
               "author_location" :"Bowie, MD, United States",
               "rev_img":"/assets/all-testimonials-image/allinadventures-escape-room-testimonials-business-lady-with-team.jpg",
               "rev_img_alt":"escape room in Bowie md"
             },

           ]
                            }
                            
    

      

      return  locationHomedata


};

const locPagedata={
//==================================NY==============================
  //=====================================================================albany ny
     "albany-ny":{
                  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-albany-ny-crossgates-mall-hero.jpg",
                   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-albany-ny-crossgates-mall-hero.jpg",
                   "coverimageM_alt":"allinadventures escape room albany ny crossgates mall-hero",
                   "pagemeta":{

                          "matatilte":"title",
                          "metakeyword":"keywords",
                          "metadescription":"metadescription"
                   },
                   "inpersongames":[
                    {
                      "id":1,
                      "category":"escapegame",
                      "type": "In-Person",
                       "title": "Escape From Alcatraz",
                       "description": "You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
                       "age":"All age",
                       "duration":"50",
                       "maxplayers":"10",
                       "minplayers":"2",
                       "price":"29.89",
                       "slug"  :"escape-from-alcatraz",
                       "bgimg" :"/assets/all-game-slider-bg/allinadventures-escape-from-alcatraz-game.jpg"
                     },
                     {
                      "id":2,
                      "category":"escapegame",
                       "type": "In-Person",
                       "title": "Treasure Island",
                       "description": "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                       "age":"ll age",
                       "duration":"50",
                       "maxplayers":"10",
                       "minplayers":"2",
                       "price":"29.89",
                       "slug"  :"treasure-island",
                       "bgimg" :"/assets/all-game-slider-bg/allinadventures-treasure-island-game.jpg"
                     },
                     {
                      "id":3,
                      "category":"escapegame",
                      "type": "In-Person",
                      "title": "Zombie Apocalypse",
                      "description": "The zombification virus has mutated and it is up to you to save humanity! Double check your research and create an immunity chemical test!",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"29.89",
                      "slug"  :"zombie-apocalypse",
                      "bgimg" :"/assets/all-game-slider-bg/allinadventures-zombie-apocalypse-game.jpg"
                     },
                     {
                      "id":4,
                      "category":"escapegame",
                      "type": "In-Person",
                      "title": "Sherlock's Library",
                      "description": "London's top detective duo, Sherlock Holmes and Dr. John H. Watson, have been called upon to solve their next big case.",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"29.89",
                      "slug"  :"sherlocks-library",
                      "bgimg" :"/assets/all-game-slider-bg/allinadventures-sherlocks-library-game.jpg"
                     },
                     
                     {
                      "id":5,
                      "category":"escapegame",
                      "type": "In-Person",
                      "title": "Black Ops",
                      "description": "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"29.89",
                      "slug"  :"black-ops",
                      "bgimg" :"/assets/all-game-slider-bg/allinadventures-black-ops-game.jpg"
                     },
                     {
                      "id":6,
                      "category":"escapegame",
                      "type": "In-Person",
                      "title": "Superhero's Adventure",
                      "description": "The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"29.89",
                      "slug"  :"superheros-adventure",
                      "bgimg" :"/assets/all-game-slider-bg/allinadventures-superheros-Adventure-game.jpg"
                     },
                     {
                      "id":7,
                      "category":"escapegame",
                      "type": "In-Person",
                      "title": "Houdini's Magic Cell",
                      "description": "As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"29.89",
                      "slug"  :"houdinis-magic-cell",
                      "bgimg" :"/assets/all-game-slider-bg/allinadventures-houdinis-magic-cell-game.jpg"
                     },
                    
                     {
                      "id":8,
                      "category":"escapegame",
                      "type": "In-Person",
                      "title": "Special Agent",
                      "description": "After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"29.89",
                      "slug"  :"special-agent",
                      "bgimg" :"/assets/all-game-slider-bg/allinadventures-special-agent-game.jpg"
                     },
                     {
                      "id":9,
                      "category":"escapegame",
                      "type": "In-Person",
                      "title": "Hollywood Premiere",
                      "description": "Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"29.89",
                      "slug"  :"hollywood-premiere",
                      "bgimg" :"/assets/all-game-slider-bg/allinadventures-hollywood-premiere-game.jpg"
                     }, 
                    

                      ],
                  
                  "events":             [
                    {
                      "id":1,
                      "category":"event",
                       "type": "In-Person",
                       "title": "BIRTHDAY PARTIES",
                       "description": "A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
                       "slug"  :"birthday-party",
                       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-birthday-party.jpg"
                     },
                    {
                      "id":2,
                      "category":"event",
                       "type": "In-Person",
                       "title": "TEAM BUILDING",
                       "description": "This fun and exciting interactive form of team building will bring your corporate team closer!",
                       "slug"  :"team-building",
                       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-team-building.jpg"
                     },
                     {
                      "id":3,
                      "category":"event",
                       "type": "In-Person",
                       "title": "CORPORATE EVENTS",
                       "description": "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
                       "slug"  :"corporate-events",
                       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-corporate-events.jpg"
                     },
                     
                     {
                      "id":4,
                      "category":"event",
                       "type": "In-Person",
                       "title": "FAMILY FUN ACTIVITIES",
                       "description": "A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
                       "slug"  :"family-fun-activity",
                       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-family-fun-activities.jpg"
                     },
                     {
                      "id":5,
                      "category":"event",
                       "type": "In-Person",
                       "title": "Bachelor Party",
                       "description": "There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
                       "slug"  :"bachelor-party",
                       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelor-party.jpg"
                     },
                     {
                      "id":6,
                      "category":"event",
                       "type": "In-Person",
                       "title": "Bachelorette Party",
                       "description": "Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
                       "slug"  :"bachelorette-party",
                       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelorette-party.jpg"
                     },
                     {
                      "id":7,
                      "category":"event",
                       "type": "In-Person",
                       "title": "PROPOSAL PARTY",
                       "description": "A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
                       "slug"  :"proposal-party",
                       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-proposal-party.jpg"
                     },
                     {
                      "id":8,
                      "category":"event",
                       "type": "In-Person",
                       "title": "DATE NIGHT / NIGHT OUT",
                       "description": "Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
                       "slug"  :"date-night",
                       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-date-night.jpg"
                     },
                     {
                      "id":9,
                      "category":"event",
                       "type": "In-Person",
                       "title": "Private Party",
                       "description": "Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
                       "slug"  :"private-party",
                       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-private-party.jpg"
                     },
                     {
                      "id":10,
                      "category":"event",
                       "type": "In-Person",
                       "title": "Reunion Party",
                       "description": "Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
                       "slug"  :"reunion-party",
                       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-reunion-party.jpg"
                     },
                     {
                      "id":11,
                      "category":"event",
                       "type": "In-Person",
                       "title": "Graduation Party",
                       "description": "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
                       "slug"  :"graduation-party",
                       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-graduation-party.jpg"
                     },
                     
                     {
                      "id":12,
                      "category":"event",
                       "type": "In-Person",
                       "title": "SCHOOL EVENTS / FIELD TRIPS",
                       "description": "Students exercise critical thinking and act to become the super-spies they see in the movies!",
                       "slug"  :"school-events",
                       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-school-event.jpg"
                     },
                     {
                      "id":13,
                      "category":"event",
                       "type": "In-Person",
                       "title": "GENDER REVEAL PARTY",
                       "description": "Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
                       "slug"  :"gender-reveal-party",
                       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-gender-reveal-party-event.jpg"
                     },


                   ],
    
                  },
    //=====================================================================albany ny end
    //=====================================================================buffalo ny
    "buffalo-ny":{
      "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-buffalo-ny-walden-galleria-mall-hero.jpg",
       "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-buffalo-ny-walden-galleria-mall-hero.jpg",
       "coverimageM_alt":"allinadventures escape room buffalo ny walden galleria mall hero",
       "pagemeta":{

              "matatilte":"title",
              "metakeyword":"keywords",
              "metadescription":"metadescription"
       },
       "inpersongames":[
        {
          "id":1,
          "category":"escapegame",
          "type": "In-Person",
           "title": "Escape From Alcatraz",
           "description": "You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
           "age":"All age",
           "duration":"50",
           "maxplayers":"10",
           "minplayers":"2",
           "price":"29.89",
           "slug"  :"escape-from-alcatraz",
           "bgimg" :"/assets/all-game-slider-bg/allinadventures-escape-from-alcatraz-game.jpg"
         },
         {
          "id":2,
          "category":"escapegame",
           "type": "In-Person",
           "title": "Treasure Island",
           "description": "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
           "age":"ll age",
           "duration":"50",
           "maxplayers":"10",
           "minplayers":"2",
           "price":"29.89",
           "slug"  :"treasure-island",
           "bgimg" :"/assets/all-game-slider-bg/allinadventures-treasure-island-game.jpg"
         },
         {
          "id":3,
          "category":"escapegame",
          "type": "In-Person",
          "title": "Zombie Apocalypse",
          "description": "The zombification virus has mutated and it is up to you to save humanity! Double check your research and create an immunity chemical test!",
          "age":"all age",
          "duration":"50",
          "maxplayers":"10",
          "minplayers":"2",
          "price":"29.89",
          "slug"  :"zombie-apocalypse",
          "bgimg" :"/assets/all-game-slider-bg/allinadventures-zombie-apocalypse-game.jpg"
         },
         {
          "id":4,
          "category":"escapegame",
          "type": "In-Person",
          "title": "Sherlock's Library",
          "description": "London's top detective duo, Sherlock Holmes and Dr. John H. Watson, have been called upon to solve their next big case.",
          "age":"all age",
          "duration":"50",
          "maxplayers":"10",
          "minplayers":"2",
          "price":"29.89",
          "slug"  :"sherlocks-library",
          "bgimg" :"/assets/all-game-slider-bg/allinadventures-sherlocks-library-game.jpg"
         },
         
         {
          "id":5,
          "category":"escapegame",
          "type": "In-Person",
          "title": "Black Ops",
          "description": "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
          "age":"all age",
          "duration":"50",
          "maxplayers":"10",
          "minplayers":"2",
          "price":"29.89",
          "slug"  :"black-ops",
          "bgimg" :"/assets/all-game-slider-bg/allinadventures-black-ops-game.jpg"
         },
         {
          "id":6,
          "category":"escapegame",
          "type": "In-Person",
          "title": "Superhero's Adventure",
          "description": "The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
          "age":"all age",
          "duration":"50",
          "maxplayers":"10",
          "minplayers":"2",
          "price":"29.89",
          "slug"  :"superheros-adventure",
          "bgimg" :"/assets/all-game-slider-bg/allinadventures-superheros-Adventure-game.jpg"
         },
         {
          "id":7,
          "category":"escapegame",
          "type": "In-Person",
          "title": "Houdini's Magic Cell",
          "description": "As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
          "age":"all age",
          "duration":"50",
          "maxplayers":"10",
          "minplayers":"2",
          "price":"29.89",
          "slug"  :"houdinis-magic-cell",
          "bgimg" :"/assets/all-game-slider-bg/allinadventures-houdinis-magic-cell-game.jpg"
         },
        
         {
          "id":8,
          "category":"escapegame",
          "type": "In-Person",
          "title": "Special Agent",
          "description": "After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
          "age":"all age",
          "duration":"50",
          "maxplayers":"10",
          "minplayers":"2",
          "price":"29.89",
          "slug"  :"special-agent",
          "bgimg" :"/assets/all-game-slider-bg/allinadventures-special-agent-game.jpg"
         },
         {
          "id":9,
          "category":"escapegame",
          "type": "In-Person",
          "title": "Hollywood Premiere",
          "description": "Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
          "age":"all age",
          "duration":"50",
          "maxplayers":"10",
          "minplayers":"2",
          "price":"29.89",
          "slug"  :"hollywood-premiere",
          "bgimg" :"/assets/all-game-slider-bg/allinadventures-hollywood-premiere-game.jpg"
         }, 
        

          ],
       
          "events":             [
            {
              "id":1,
              "category":"event",
               "type": "In-Person",
               "title": "BIRTHDAY PARTIES",
               "description": "A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
               "slug"  :"birthday-party",
               "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-birthday-party.jpg"
             },
            {
              "id":2,
              "category":"event",
               "type": "In-Person",
               "title": "TEAM BUILDING",
               "description": "This fun and exciting interactive form of team building will bring your corporate team closer!",
               "slug"  :"team-building",
               "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-team-building.jpg"
             },
             {
              "id":3,
              "category":"event",
               "type": "In-Person",
               "title": "CORPORATE EVENTS",
               "description": "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
               "slug"  :"corporate-events",
               "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-corporate-events.jpg"
             },
             
             {
              "id":4,
              "category":"event",
               "type": "In-Person",
               "title": "FAMILY FUN ACTIVITIES",
               "description": "A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
               "slug"  :"family-fun-activity",
               "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-family-fun-activities.jpg"
             },
             {
              "id":5,
              "category":"event",
               "type": "In-Person",
               "title": "Bachelor Party",
               "description": "There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
               "slug"  :"bachelor-party",
               "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelor-party.jpg"
             },
             {
              "id":6,
              "category":"event",
               "type": "In-Person",
               "title": "Bachelorette Party",
               "description": "Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
               "slug"  :"bachelorette-party",
               "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelorette-party.jpg"
             },
             {
              "id":7,
              "category":"event",
               "type": "In-Person",
               "title": "PROPOSAL PARTY",
               "description": "A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
               "slug"  :"proposal-party",
               "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-proposal-party.jpg"
             },
             {
              "id":8,
              "category":"event",
               "type": "In-Person",
               "title": "DATE NIGHT / NIGHT OUT",
               "description": "Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
               "slug"  :"date-night",
               "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-date-night.jpg"
             },
             {
              "id":9,
              "category":"event",
               "type": "In-Person",
               "title": "Private Party",
               "description": "Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
               "slug"  :"private-party",
               "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-private-party.jpg"
             },
             {
              "id":10,
              "category":"event",
               "type": "In-Person",
               "title": "Reunion Party",
               "description": "Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
               "slug"  :"reunion-party",
               "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-reunion-party.jpg"
             },
             {
              "id":11,
              "category":"event",
               "type": "In-Person",
               "title": "Graduation Party",
               "description": "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
               "slug"  :"graduation-party",
               "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-graduation-party.jpg"
             },
             
             {
              "id":12,
              "category":"event",
               "type": "In-Person",
               "title": "SCHOOL EVENTS / FIELD TRIPS",
               "description": "Students exercise critical thinking and act to become the super-spies they see in the movies!",
               "slug"  :"school-events",
               "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-school-event.jpg"
             },
             {
              "id":13,
              "category":"event",
               "type": "In-Person",
               "title": "GENDER REVEAL PARTY",
               "description": "Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
               "slug"  :"gender-reveal-party",
               "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-gender-reveal-party-event.jpg"
             },


           ],

      },
//=====================================================================buffalo ny end
//=====================================================================middletown ny
"middletown-ny":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-middletown-ny-galleria-at-crystal-run-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-middletown-ny-galleria-at-crystal-run-mall-hero.jpg",
   "coverimageM_alt":"allinadventures escape room middletown ny galleria at crystal run mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
   "inpersongames":[
    {
      "id":1,
      "category":"escapegame",
      "type": "In-Person",
       "title": "Escape From Alcatraz",
       "description": "You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
       "age":"All age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"escape-from-alcatraz",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-escape-from-alcatraz-game.jpg"
     },
     {
      "id":2,
      "category":"escapegame",
       "type": "In-Person",
       "title": "Treasure Island",
       "description": "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
       "age":"ll age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"treasure-island",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-treasure-island-game.jpg"
     },
     {
      "id":3,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Zombie Apocalypse",
      "description": "The zombification virus has mutated and it is up to you to save humanity! Double check your research and create an immunity chemical test!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"zombie-apocalypse",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-zombie-apocalypse-game.jpg"
     },
     {
      "id":4,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Sherlock's Library",
      "description": "London's top detective duo, Sherlock Holmes and Dr. John H. Watson, have been called upon to solve their next big case.",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"sherlocks-library",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-sherlocks-library-game.jpg"
     },
     
     {
      "id":5,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Black Ops",
      "description": "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"black-ops",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-black-ops-game.jpg"
     },
     {
      "id":6,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Superhero's Adventure",
      "description": "The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
      "age":"All age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"superheros-adventure",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-superheros-Adventure-game.jpg"
     },
     {
      "id":7,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Houdini's Magic Cell",
      "description": "As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"houdinis-magic-cell",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-houdinis-magic-cell-game.jpg"
     },
    
     {
      "id":8,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Special Agent",
      "description": "After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"special-agent",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-special-agent-game.jpg"
     },
     {
      "id":9,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Hollywood Premiere",
      "description": "Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"hollywood-premiere",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-hollywood-premiere-game.jpg"
     }, 
     {
      "id":11,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Wizarding School ",
      "description": "Lost in the Wizarding School, locked in the office and late for class - this is not the key to success. Find your way out of the office!",
      "age":"All age",
      "duration":"60",
      "maxplayers":"4",
      "minplayers":"2",
      "price":"39.95",
      "slug"  :"wizarding-school",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-wizarding-school-game.jpg"
     },
     
      ],
   "otherphysicalgames": [
    {

        "id":1,
        "category":"other",
        "type": "In-Person",
        "title": "Beat The Seat",
        "description": "It's a 2 minute fun filled, exhilarating experience where you will test your endurance, coordination and ability to think on your feet.",
        "age":"All age (6+)",
        "duration":"2",
        "maxplayers":"",
        "minplayers":"1",
        "price":"5",
        "slug"  :"beat-the-seat",
        "bgimg" :"/assets/all-game-slider-bg/allinadventures-beat-the-seat-game.jpg"
       },
      ],
  "events":             [
    {
      "id":1,
      "category":"event",
       "type": "In-Person",
       "title": "BIRTHDAY PARTIES",
       "description": "A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
       "slug"  :"birthday-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-birthday-party.jpg"
     },
    {
      "id":2,
      "category":"event",
       "type": "In-Person",
       "title": "TEAM BUILDING",
       "description": "This fun and exciting interactive form of team building will bring your corporate team closer!",
       "slug"  :"team-building",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-team-building.jpg"
     },
     {
      "id":3,
      "category":"event",
       "type": "In-Person",
       "title": "CORPORATE EVENTS",
       "description": "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
       "slug"  :"corporate-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-corporate-events.jpg"
     },
     
     {
      "id":4,
      "category":"event",
       "type": "In-Person",
       "title": "FAMILY FUN ACTIVITIES",
       "description": "A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
       "slug"  :"family-fun-activity",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-family-fun-activities.jpg"
     },
     {
      "id":5,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelor Party",
       "description": "There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
       "slug"  :"bachelor-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelor-party.jpg"
     },
     {
      "id":6,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelorette Party",
       "description": "Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
       "slug"  :"bachelorette-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelorette-party.jpg"
     },
     {
      "id":7,
      "category":"event",
       "type": "In-Person",
       "title": "PROPOSAL PARTY",
       "description": "A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
       "slug"  :"proposal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-proposal-party.jpg"
     },
     {
      "id":8,
      "category":"event",
       "type": "In-Person",
       "title": "DATE NIGHT / NIGHT OUT",
       "description": "Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
       "slug"  :"date-night",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-date-night.jpg"
     },
     {
      "id":9,
      "category":"event",
       "type": "In-Person",
       "title": "Private Party",
       "description": "Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
       "slug"  :"private-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-private-party.jpg"
     },
     {
      "id":10,
      "category":"event",
       "type": "In-Person",
       "title": "Reunion Party",
       "description": "Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
       "slug"  :"reunion-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-reunion-party.jpg"
     },
     {
      "id":11,
      "category":"event",
       "type": "In-Person",
       "title": "Graduation Party",
       "description": "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
       "slug"  :"graduation-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-graduation-party.jpg"
     },
     
     {
      "id":12,
      "category":"event",
       "type": "In-Person",
       "title": "SCHOOL EVENTS / FIELD TRIPS",
       "description": "Students exercise critical thinking and act to become the super-spies they see in the movies!",
       "slug"  :"school-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-school-event.jpg"
     },
     {
      "id":13,
      "category":"event",
       "type": "In-Person",
       "title": "GENDER REVEAL PARTY",
       "description": "Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
       "slug"  :"gender-reveal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-gender-reveal-party-event.jpg"
     },


   ],

                },

//=====================================================================middletown ny end
//=====================================================================syracuse-ny ny
"syracuse-ny":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-syracuse-ny-destiny-usa-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-syracuse-ny-destiny-usa-mall-hero.jpg",
   "coverimageM_alt":"allinadventures escape room syracuse ny destiny usa mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
   "inpersongames":[
    {
      "id":1,
      "category":"escapegame",
      "type": "In-Person",
       "title": "Escape From Alcatraz",
       "description": "You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
       "age":"All age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"escape-from-alcatraz",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-escape-from-alcatraz-game.jpg"
     },
     {
      "id":2,
      "category":"escapegame",
       "type": "In-Person",
       "title": "Treasure Island",
       "description": "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
       "age":"ll age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"treasure-island",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-treasure-island-game.jpg"
     },
     {
      "id":3,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Zombie Apocalypse",
      "description": "The zombification virus has mutated and it is up to you to save humanity! Double check your research and create an immunity chemical test!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"zombie-apocalypse",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-zombie-apocalypse-game.jpg"
     },
     {
      "id":4,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Sherlock's Library",
      "description": "London's top detective duo, Sherlock Holmes and Dr. John H. Watson, have been called upon to solve their next big case.",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"sherlocks-library",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-sherlocks-library-game.jpg"
     },
     
     {
      "id":5,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Black Ops",
      "description": "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"black-ops",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-black-ops-game.jpg"
     },
     {
      "id":6,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Superhero's Adventure",
      "description": "The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"superheros-adventure",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-superheros-Adventure-game.jpg"
     },
     {
      "id":7,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Houdini's Magic Cell",
      "description": "As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"houdinis-magic-cell",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-houdinis-magic-cell-game.jpg"
     },
    
     {
      "id":8,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Special Agent",
      "description": "After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"special-agent",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-special-agent-game.jpg"
     },
     {
      "id":9,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Hollywood Premiere",
      "description": "Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"hollywood-premiere",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-hollywood-premiere-game.jpg"
     }, 
     {
      "id":12,
      "category":"escapegame",
      "type": "In-Person",
      "title": "locked in The Lift",
      "description": "Welcome to the 40's! You are trapped in a luxurious lift meant only for the most exclusive VIPs. See if you can piece together how to get things running again.",
      "age":"all age",
      "duration":"30",
      "maxplayers":"4",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"locked-in-the-lift",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-locked-in-the-lift-game.jpg"
     },
     
     {
        
      "id":13,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Magic Castle",
      "description": "Welcome to the Magic Castle! Pass your entrance exam to prove you belong among the most prestigious wizards. Test your wits, courage, loyalty, and cunning.",
      "age":"all age",
      "duration":"60",
      "maxplayers":"8",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"magic-castle",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-magic-castle-game.jpg"
     }
     
      ],
   "otherphysicalgames": [
    {

        "id":1,
        "category":"other",
        "type": "In-Person",
        "title": "Beat The Seat",
        "description": "It's a 2 minute fun filled, exhilarating experience where you will test your endurance, coordination and ability to think on your feet.",
        "age":"All age (6+)",
        "duration":"2",
        "maxplayers":"",
        "minplayers":"1",
        "price":"5",
        "slug"  :"beat-the-seat",
        "bgimg" :"/assets/all-game-slider-bg/allinadventures-beat-the-seat-game.jpg"
       },
      ],
  "events":             [
    {
      "id":1,
      "category":"event",
       "type": "In-Person",
       "title": "BIRTHDAY PARTIES",
       "description": "A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
       "slug"  :"birthday-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-birthday-party.jpg"
     },
    {
      "id":2,
      "category":"event",
       "type": "In-Person",
       "title": "TEAM BUILDING",
       "description": "This fun and exciting interactive form of team building will bring your corporate team closer!",
       "slug"  :"team-building",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-team-building.jpg"
     },
     {
      "id":3,
      "category":"event",
       "type": "In-Person",
       "title": "CORPORATE EVENTS",
       "description": "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
       "slug"  :"corporate-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-corporate-events.jpg"
     },
     
     {
      "id":4,
      "category":"event",
       "type": "In-Person",
       "title": "FAMILY FUN ACTIVITIES",
       "description": "A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
       "slug"  :"family-fun-activity",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-family-fun-activities.jpg"
     },
     {
      "id":5,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelor Party",
       "description": "There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
       "slug"  :"bachelor-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelor-party.jpg"
     },
     {
      "id":6,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelorette Party",
       "description": "Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
       "slug"  :"bachelorette-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelorette-party.jpg"
     },
     {
      "id":7,
      "category":"event",
       "type": "In-Person",
       "title": "PROPOSAL PARTY",
       "description": "A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
       "slug"  :"proposal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-proposal-party.jpg"
     },
     {
      "id":8,
      "category":"event",
       "type": "In-Person",
       "title": "DATE NIGHT / NIGHT OUT",
       "description": "Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
       "slug"  :"date-night",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-date-night.jpg"
     },
     {
      "id":9,
      "category":"event",
       "type": "In-Person",
       "title": "Private Party",
       "description": "Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
       "slug"  :"private-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-private-party.jpg"
     },
     {
      "id":10,
      "category":"event",
       "type": "In-Person",
       "title": "Reunion Party",
       "description": "Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
       "slug"  :"reunion-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-reunion-party.jpg"
     },
     {
      "id":11,
      "category":"event",
       "type": "In-Person",
       "title": "Graduation Party",
       "description": "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
       "slug"  :"graduation-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-graduation-party.jpg"
     },
     
     {
      "id":12,
      "category":"event",
       "type": "In-Person",
       "title": "SCHOOL EVENTS / FIELD TRIPS",
       "description": "Students exercise critical thinking and act to become the super-spies they see in the movies!",
       "slug"  :"school-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-school-event.jpg"
     },
     {
      "id":13,
      "category":"event",
       "type": "In-Person",
       "title": "GENDER REVEAL PARTY",
       "description": "Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
       "slug"  :"gender-reveal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-gender-reveal-party-event.jpg"
     },


   ],
                },
//=====================================================================syracuse-ny end
//=====================================================================watertown-ny
"watertown-ny":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-watertown-ny-salmon-run-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-watertown-ny-salmon-run-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-watertown-ny-salmon-run-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
   "inpersongames":[
    {
      "id":1,
      "category":"escapegame",
      "type": "In-Person",
       "title": "Escape From Alcatraz",
       "description": "You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
       "age":"All age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"escape-from-alcatraz",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-escape-from-alcatraz-game.jpg"
     },
     {
      "id":2,
      "category":"escapegame",
       "type": "In-Person",
       "title": "Treasure Island",
       "description": "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
       "age":"ll age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"treasure-island",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-treasure-island-game.jpg"
     },
     {
      "id":3,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Zombie Apocalypse",
      "description": "The zombification virus has mutated and it is up to you to save humanity! Double check your research and create an immunity chemical test!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"zombie-apocalypse",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-zombie-apocalypse-game.jpg"
     },
     {
      "id":4,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Sherlock's Library",
      "description": "London's top detective duo, Sherlock Holmes and Dr. John H. Watson, have been called upon to solve their next big case.",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"sherlocks-library",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-sherlocks-library-game.jpg"
     },
     
     {
      "id":5,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Black Ops",
      "description": "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"black-ops",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-black-ops-game.jpg"
     },
     {
      "id":6,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Superhero's Adventure",
      "description": "The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"superheros-adventure",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-superheros-Adventure-game.jpg"
     },
     {
      "id":7,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Houdini's Magic Cell",
      "description": "As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"houdinis-magic-cell",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-houdinis-magic-cell-game.jpg"
     },
    
     {
      "id":8,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Special Agent",
      "description": "After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"special-agent",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-special-agent-game.jpg"
     },
     {
      "id":9,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Hollywood Premiere",
      "description": "Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"hollywood-premiere",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-hollywood-premiere-game.jpg"
     }, 
     
      ],
  
  "events":             [
    {
      "id":1,
      "category":"event",
       "type": "In-Person",
       "title": "BIRTHDAY PARTIES",
       "description": "A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
       "slug"  :"birthday-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-birthday-party.jpg"
     },
    {
      "id":2,
      "category":"event",
       "type": "In-Person",
       "title": "TEAM BUILDING",
       "description": "This fun and exciting interactive form of team building will bring your corporate team closer!",
       "slug"  :"team-building",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-team-building.jpg"
     },
     {
      "id":3,
      "category":"event",
       "type": "In-Person",
       "title": "CORPORATE EVENTS",
       "description": "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
       "slug"  :"corporate-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-corporate-events.jpg"
     },
     
     {
      "id":4,
      "category":"event",
       "type": "In-Person",
       "title": "FAMILY FUN ACTIVITIES",
       "description": "A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
       "slug"  :"family-fun-activity",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-family-fun-activities.jpg"
     },
     {
      "id":5,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelor Party",
       "description": "There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
       "slug"  :"bachelor-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelor-party.jpg"
     },
     {
      "id":6,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelorette Party",
       "description": "Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
       "slug"  :"bachelorette-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelorette-party.jpg"
     },
     {
      "id":7,
      "category":"event",
       "type": "In-Person",
       "title": "PROPOSAL PARTY",
       "description": "A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
       "slug"  :"proposal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-proposal-party.jpg"
     },
     {
      "id":8,
      "category":"event",
       "type": "In-Person",
       "title": "DATE NIGHT / NIGHT OUT",
       "description": "Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
       "slug"  :"date-night",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-date-night.jpg"
     },
     {
      "id":9,
      "category":"event",
       "type": "In-Person",
       "title": "Private Party",
       "description": "Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
       "slug"  :"private-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-private-party.jpg"
     },
     {
      "id":10,
      "category":"event",
       "type": "In-Person",
       "title": "Reunion Party",
       "description": "Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
       "slug"  :"reunion-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-reunion-party.jpg"
     },
     {
      "id":11,
      "category":"event",
       "type": "In-Person",
       "title": "Graduation Party",
       "description": "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
       "slug"  :"graduation-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-graduation-party.jpg"
     },
     
     {
      "id":12,
      "category":"event",
       "type": "In-Person",
       "title": "SCHOOL EVENTS / FIELD TRIPS",
       "description": "Students exercise critical thinking and act to become the super-spies they see in the movies!",
       "slug"  :"school-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-school-event.jpg"
     },
     {
      "id":13,
      "category":"event",
       "type": "In-Person",
       "title": "GENDER REVEAL PARTY",
       "description": "Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
       "slug"  :"gender-reveal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-gender-reveal-party-event.jpg"
     },


   ],

                },
//=====================================================================watertown-ny end
//=====================================================================west-nyack-ny
"west-nyack-ny":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-west-nyack-ny-palisades-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-west-nyack-ny-palisades-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-west-nyack-ny-palisades-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
   "inpersongames":[
    {
      "id":1,
      "category":"escapegame",
      "type": "In-Person",
       "title": "Escape From Alcatraz",
       "description": "You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
       "age":"All age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"escape-from-alcatraz",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-escape-from-alcatraz-game.jpg"
     },
     {
      "id":2,
      "category":"escapegame",
       "type": "In-Person",
       "title": "Treasure Island",
       "description": "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
       "age":"ll age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"treasure-island",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-treasure-island-game.jpg"
     },
     {
      "id":3,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Zombie Apocalypse",
      "description": "The zombification virus has mutated and it is up to you to save humanity! Double check your research and create an immunity chemical test!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"zombie-apocalypse",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-zombie-apocalypse-game.jpg"
     },
     {
      "id":4,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Sherlock's Library",
      "description": "London's top detective duo, Sherlock Holmes and Dr. John H. Watson, have been called upon to solve their next big case.",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"sherlocks-library",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-sherlocks-library-game.jpg"
     },
     
     
     {
      "id":6,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Superhero's Adventure",
      "description": "The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"superheros-adventure",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-superheros-Adventure-game.jpg"
     },
     
     

      ],
   "otherphysicalgames": [
    {

        "id":1,
        "category":"other",
        "type": "In-Person",
        "title": "Beat The Seat",
        "description": "It's a 2 minute fun filled, exhilarating experience where you will test your endurance, coordination and ability to think on your feet.",
        "age":"All age (6+)",
        "duration":"2",
        "maxplayers":"",
        "minplayers":"1",
        "price":"5",
        "slug"  :"beat-the-seat",
        "bgimg" :"/assets/all-game-slider-bg/allinadventures-beat-the-seat-game.jpg"
       },
      {

          "id":2,
          "category":"other",
          "type": "In-Person",
          "title": "Game Show Room",
          "description": "Have you always dreamed of being a contestant on a TV game show? Well, dream no more because we've brought the game show experience to you!",
          "age":"All age (6+)",
          "duration":"60",
          "maxplayers":"16",
          "minplayers":"4",
          "price":"33",
          "slug"  :"game-show-room",
          "bgimg" :"/assets/all-game-slider-bg/allinadventures-game-show-room-game.jpg"
         },
      
      
    
      ],
  "events":             [
    {
      "id":1,
      "category":"event",
       "type": "In-Person",
       "title": "BIRTHDAY PARTIES",
       "description": "A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
       "slug"  :"birthday-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-birthday-party.jpg"
     },
    {
      "id":2,
      "category":"event",
       "type": "In-Person",
       "title": "TEAM BUILDING",
       "description": "This fun and exciting interactive form of team building will bring your corporate team closer!",
       "slug"  :"team-building",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-team-building.jpg"
     },
     {
      "id":3,
      "category":"event",
       "type": "In-Person",
       "title": "CORPORATE EVENTS",
       "description": "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
       "slug"  :"corporate-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-corporate-events.jpg"
     },
     
     {
      "id":4,
      "category":"event",
       "type": "In-Person",
       "title": "FAMILY FUN ACTIVITIES",
       "description": "A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
       "slug"  :"family-fun-activity",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-family-fun-activities.jpg"
     },
     {
      "id":5,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelor Party",
       "description": "There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
       "slug"  :"bachelor-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelor-party.jpg"
     },
     {
      "id":6,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelorette Party",
       "description": "Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
       "slug"  :"bachelorette-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelorette-party.jpg"
     },
     {
      "id":7,
      "category":"event",
       "type": "In-Person",
       "title": "PROPOSAL PARTY",
       "description": "A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
       "slug"  :"proposal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-proposal-party.jpg"
     },
     {
      "id":8,
      "category":"event",
       "type": "In-Person",
       "title": "DATE NIGHT / NIGHT OUT",
       "description": "Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
       "slug"  :"date-night",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-date-night.jpg"
     },
     {
      "id":9,
      "category":"event",
       "type": "In-Person",
       "title": "Private Party",
       "description": "Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
       "slug"  :"private-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-private-party.jpg"
     },
     {
      "id":10,
      "category":"event",
       "type": "In-Person",
       "title": "Reunion Party",
       "description": "Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
       "slug"  :"reunion-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-reunion-party.jpg"
     },
     {
      "id":11,
      "category":"event",
       "type": "In-Person",
       "title": "Graduation Party",
       "description": "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
       "slug"  :"graduation-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-graduation-party.jpg"
     },
     
     {
      "id":12,
      "category":"event",
       "type": "In-Person",
       "title": "SCHOOL EVENTS / FIELD TRIPS",
       "description": "Students exercise critical thinking and act to become the super-spies they see in the movies!",
       "slug"  :"school-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-school-event.jpg"
     },
     {
      "id":13,
      "category":"event",
       "type": "In-Person",
       "title": "GENDER REVEAL PARTY",
       "description": "Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
       "slug"  :"gender-reveal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-gender-reveal-party-event.jpg"
     },


   ],

        },
//=====================================================================west-nyack-ny end
//=====================================================================poughkeepsie-ny
"poughkeepsie-ny":{
  "coverimageL":"/assets/all-location-desktop-hero/Poughkeepsie-ny-poughkeepsie-galleria.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/Poughkeepsie-ny-poughkeepsie-galleria.jpg",
   "coverimageM_alt":"allinadventures-escape-room-west-poughkeepsie-ny-palisades-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
   "inpersongames":[
    {
      "id":1,
      "category":"escapegame",
      "type": "In-Person",
       "title": "Escape From Alcatraz",
       "description": "You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
       "age":"All age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"escape-from-alcatraz",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-escape-from-alcatraz-game.jpg"
     },
     {
      "id":2,
      "category":"escapegame",
       "type": "In-Person",
       "title": "Treasure Island",
       "description": "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
       "age":"ll age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"treasure-island",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-treasure-island-game.jpg"
     },
     {
      "id":3,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Zombie Apocalypse",
      "description": "The zombification virus has mutated and it is up to you to save humanity! Double check your research and create an immunity chemical test!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"zombie-apocalypse",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-zombie-apocalypse-game.jpg"
     },
     {
      "id":4,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Sherlock's Library",
      "description": "London's top detective duo, Sherlock Holmes and Dr. John H. Watson, have been called upon to solve their next big case.",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"sherlocks-library",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-sherlocks-library-game.jpg"
     },
     {
      "id":5,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Black Ops",
      "description": "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"black-ops",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-black-ops-game.jpg"
     },
     
     
     {
      "id":6,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Superhero's Adventure",
      "description": "The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"superheros-adventure",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-superheros-Adventure-game.jpg"
     },
     {
      "id":7,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Houdini's Magic Cell",
      "description": "As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"houdinis-magic-cell",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-houdinis-magic-cell-game.jpg"
     },
     

      ],
   "otherphysicalgames": [
    {
                                  
                                    "id":3,
                                    "category":"other",
                                    "type": "In-Person",
                                    "title": "Axe Throwing",
                                    "description": "Having a bad day? Come and throw axes. It involves a competitor throwing an axe at a target, attempting to hit the bullseye as near as possible.",
                                    "age":"All age",
                                    "duration":"20",
                                    "maxplayers":"10",
                                    "minplayers":"2",
                                    "price":"20",
                                    "slug"  :"axe-throwing",
                                    "bgimg" :"/assets/all-game-slider-bg/allinadventures-axe-throwing-game.jpg"
                                   },
                                
      
      
    
      ],
  "events":             [
    {
      "id":1,
      "category":"event",
       "type": "In-Person",
       "title": "BIRTHDAY PARTIES",
       "description": "A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
       "slug"  :"birthday-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-birthday-party.jpg"
     },
    {
      "id":2,
      "category":"event",
       "type": "In-Person",
       "title": "TEAM BUILDING",
       "description": "This fun and exciting interactive form of team building will bring your corporate team closer!",
       "slug"  :"team-building",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-team-building.jpg"
     },
     {
      "id":3,
      "category":"event",
       "type": "In-Person",
       "title": "CORPORATE EVENTS",
       "description": "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
       "slug"  :"corporate-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-corporate-events.jpg"
     },
     
     {
      "id":4,
      "category":"event",
       "type": "In-Person",
       "title": "FAMILY FUN ACTIVITIES",
       "description": "A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
       "slug"  :"family-fun-activity",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-family-fun-activities.jpg"
     },
     {
      "id":5,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelor Party",
       "description": "There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
       "slug"  :"bachelor-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelor-party.jpg"
     },
     {
      "id":6,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelorette Party",
       "description": "Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
       "slug"  :"bachelorette-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelorette-party.jpg"
     },
     {
      "id":7,
      "category":"event",
       "type": "In-Person",
       "title": "PROPOSAL PARTY",
       "description": "A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
       "slug"  :"proposal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-proposal-party.jpg"
     },
     {
      "id":8,
      "category":"event",
       "type": "In-Person",
       "title": "DATE NIGHT / NIGHT OUT",
       "description": "Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
       "slug"  :"date-night",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-date-night.jpg"
     },
     {
      "id":9,
      "category":"event",
       "type": "In-Person",
       "title": "Private Party",
       "description": "Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
       "slug"  :"private-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-private-party.jpg"
     },
     {
      "id":10,
      "category":"event",
       "type": "In-Person",
       "title": "Reunion Party",
       "description": "Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
       "slug"  :"reunion-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-reunion-party.jpg"
     },
     {
      "id":11,
      "category":"event",
       "type": "In-Person",
       "title": "Graduation Party",
       "description": "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
       "slug"  :"graduation-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-graduation-party.jpg"
     },
     
     {
      "id":12,
      "category":"event",
       "type": "In-Person",
       "title": "SCHOOL EVENTS / FIELD TRIPS",
       "description": "Students exercise critical thinking and act to become the super-spies they see in the movies!",
       "slug"  :"school-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-school-event.jpg"
     },
     {
      "id":13,
      "category":"event",
       "type": "In-Person",
       "title": "GENDER REVEAL PARTY",
       "description": "Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
       "slug"  :"gender-reveal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-gender-reveal-party-event.jpg"
     },


   ],

        },
//=====================================================================poughkeepsie-ny end

//====================================================================================NY end==============================

//******************************************************************************************NC ==============================
//=====================================================================raleigh-nc
"raleigh-nc":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-raleigh-nc-triangle-town-center-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-raleigh-nc-triangle-town-center-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-raleigh-nc-triangle-town-center-mall-hero",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
   "inpersongames":[
    {
      "id":1,
      "category":"escapegame",
      "type": "In-Person",
       "title": "Escape From Alcatraz",
       "description": "You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
       "age":"All age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"escape-from-alcatraz",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-escape-from-alcatraz-game.jpg"
     },
     {
      "id":2,
      "category":"escapegame",
       "type": "In-Person",
       "title": "Treasure Island",
       "description": "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
       "age":"ll age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"treasure-island",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-treasure-island-game.jpg"
     },
     {
      "id":3,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Zombie Apocalypse",
      "description": "The zombification virus has mutated and it is up to you to save humanity! Double check your research and create an immunity chemical test!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"zombie-apocalypse",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-zombie-apocalypse-game.jpg"
     },
     {
      "id":4,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Sherlock's Library",
      "description": "London's top detective duo, Sherlock Holmes and Dr. John H. Watson, have been called upon to solve their next big case.",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"sherlocks-library",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-sherlocks-library-game.jpg"
     },
     
     {
      "id":5,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Black Ops",
      "description": "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"black-ops",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-black-ops-game.jpg"
     },
     {
      "id":6,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Superhero's Adventure",
      "description": "The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"superheros-adventure",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-superheros-Adventure-game.jpg"
     },
     {
      "id":7,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Houdini's Magic Cell",
      "description": "As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"houdinis-magic-cell",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-houdinis-magic-cell-game.jpg"
     },
    
    
      ],
   
  "events":             [
    {
      "id":1,
      "category":"event",
       "type": "In-Person",
       "title": "BIRTHDAY PARTIES",
       "description": "A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
       "slug"  :"birthday-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-birthday-party.jpg"
     },
    {
      "id":2,
      "category":"event",
       "type": "In-Person",
       "title": "TEAM BUILDING",
       "description": "This fun and exciting interactive form of team building will bring your corporate team closer!",
       "slug"  :"team-building",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-team-building.jpg"
     },
     {
      "id":3,
      "category":"event",
       "type": "In-Person",
       "title": "CORPORATE EVENTS",
       "description": "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
       "slug"  :"corporate-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-corporate-events.jpg"
     },
     
     {
      "id":4,
      "category":"event",
       "type": "In-Person",
       "title": "FAMILY FUN ACTIVITIES",
       "description": "A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
       "slug"  :"family-fun-activity",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-family-fun-activities.jpg"
     },
     {
      "id":5,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelor Party",
       "description": "There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
       "slug"  :"bachelor-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelor-party.jpg"
     },
     {
      "id":6,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelorette Party",
       "description": "Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
       "slug"  :"bachelorette-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelorette-party.jpg"
     },
     {
      "id":7,
      "category":"event",
       "type": "In-Person",
       "title": "PROPOSAL PARTY",
       "description": "A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
       "slug"  :"proposal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-proposal-party.jpg"
     },
     {
      "id":8,
      "category":"event",
       "type": "In-Person",
       "title": "DATE NIGHT / NIGHT OUT",
       "description": "Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
       "slug"  :"date-night",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-date-night.jpg"
     },
     {
      "id":9,
      "category":"event",
       "type": "In-Person",
       "title": "Private Party",
       "description": "Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
       "slug"  :"private-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-private-party.jpg"
     },
     {
      "id":10,
      "category":"event",
       "type": "In-Person",
       "title": "Reunion Party",
       "description": "Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
       "slug"  :"reunion-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-reunion-party.jpg"
     },
     {
      "id":11,
      "category":"event",
       "type": "In-Person",
       "title": "Graduation Party",
       "description": "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
       "slug"  :"graduation-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-graduation-party.jpg"
     },
     
     {
      "id":12,
      "category":"event",
       "type": "In-Person",
       "title": "SCHOOL EVENTS / FIELD TRIPS",
       "description": "Students exercise critical thinking and act to become the super-spies they see in the movies!",
       "slug"  :"school-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-school-event.jpg"
     },
     {
      "id":13,
      "category":"event",
       "type": "In-Person",
       "title": "GENDER REVEAL PARTY",
       "description": "Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
       "slug"  :"gender-reveal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-gender-reveal-party-event.jpg"
     },


   ],

                },
//=====================================================================raleigh-nc end

//******************************************************************************************NC end==============================
//******************************************************************************************PA ==============================

//=====================================================================bensalem-pa
"bensalem-pa":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-bensalem-pa-neshaminy-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-bensalem-pa-neshaminy-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-bensalem-pa-neshaminy-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
   "inpersongames":[
    {
      "id":1,
      "category":"escapegame",
      "type": "In-Person",
       "title": "Escape From Alcatraz",
       "description": "You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
       "age":"All age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"escape-from-alcatraz",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-escape-from-alcatraz-game.jpg"
     },
     {
      "id":2,
      "category":"escapegame",
       "type": "In-Person",
       "title": "Treasure Island",
       "description": "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
       "age":"ll age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"treasure-island",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-treasure-island-game.jpg"
     },
     {
      "id":3,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Zombie Apocalypse",
      "description": "The zombification virus has mutated and it is up to you to save humanity! Double check your research and create an immunity chemical test!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"zombie-apocalypse",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-zombie-apocalypse-game.jpg"
     },
     {
      "id":4,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Sherlock's Library",
      "description": "London's top detective duo, Sherlock Holmes and Dr. John H. Watson, have been called upon to solve their next big case.",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"sherlocks-library",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-sherlocks-library-game.jpg"
     },
     
     {
      "id":5,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Black Ops",
      "description": "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"black-ops",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-black-ops-game.jpg"
     },
     {
      "id":6,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Superhero's Adventure",
      "description": "The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"superheros-adventure",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-superheros-Adventure-game.jpg"
     },
     {
      "id":7,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Houdini's Magic Cell",
      "description": "As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"houdinis-magic-cell",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-houdinis-magic-cell-game.jpg"
     },
    
     {
      "id":8,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Special Agent",
      "description": "After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"special-agent",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-special-agent-game.jpg"
     },
    

      ],
   
  "events":             [
    {
      "id":1,
      "category":"event",
       "type": "In-Person",
       "title": "BIRTHDAY PARTIES",
       "description": "A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
       "slug"  :"birthday-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-birthday-party.jpg"
     },
    {
      "id":2,
      "category":"event",
       "type": "In-Person",
       "title": "TEAM BUILDING",
       "description": "This fun and exciting interactive form of team building will bring your corporate team closer!",
       "slug"  :"team-building",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-team-building.jpg"
     },
     {
      "id":3,
      "category":"event",
       "type": "In-Person",
       "title": "CORPORATE EVENTS",
       "description": "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
       "slug"  :"corporate-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-corporate-events.jpg"
     },
     
     {
      "id":4,
      "category":"event",
       "type": "In-Person",
       "title": "FAMILY FUN ACTIVITIES",
       "description": "A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
       "slug"  :"family-fun-activity",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-family-fun-activities.jpg"
     },
     {
      "id":5,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelor Party",
       "description": "There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
       "slug"  :"bachelor-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelor-party.jpg"
     },
     {
      "id":6,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelorette Party",
       "description": "Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
       "slug"  :"bachelorette-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelorette-party.jpg"
     },
     {
      "id":7,
      "category":"event",
       "type": "In-Person",
       "title": "PROPOSAL PARTY",
       "description": "A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
       "slug"  :"proposal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-proposal-party.jpg"
     },
     {
      "id":8,
      "category":"event",
       "type": "In-Person",
       "title": "DATE NIGHT / NIGHT OUT",
       "description": "Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
       "slug"  :"date-night",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-date-night.jpg"
     },
     {
      "id":9,
      "category":"event",
       "type": "In-Person",
       "title": "Private Party",
       "description": "Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
       "slug"  :"private-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-private-party.jpg"
     },
     {
      "id":10,
      "category":"event",
       "type": "In-Person",
       "title": "Reunion Party",
       "description": "Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
       "slug"  :"reunion-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-reunion-party.jpg"
     },
     {
      "id":11,
      "category":"event",
       "type": "In-Person",
       "title": "Graduation Party",
       "description": "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
       "slug"  :"graduation-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-graduation-party.jpg"
     },
     
     {
      "id":12,
      "category":"event",
       "type": "In-Person",
       "title": "SCHOOL EVENTS / FIELD TRIPS",
       "description": "Students exercise critical thinking and act to become the super-spies they see in the movies!",
       "slug"  :"school-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-school-event.jpg"
     },
     {
      "id":13,
      "category":"event",
       "type": "In-Person",
       "title": "GENDER REVEAL PARTY",
       "description": "Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
       "slug"  :"gender-reveal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-gender-reveal-party-event.jpg"
     },


   ],

                },
//=====================================================================bensalem-pa end

//******************************************************************************************PA end==============================
//******************************************************************************************MA ==============================

//=====================================================================hadley-ma
"hadley-ma":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-hadley-ma-hampshire-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-hadley-ma-hampshire-mall-hero.jpg",
   "coverimageM_alt":"allinadventures escape room hadley ma hampshire mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
   "inpersongames":[
    {
      "id":1,
      "category":"escapegame",
      "type": "In-Person",
       "title": "Escape From Alcatraz",
       "description": "You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
       "age":"All age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"escape-from-alcatraz",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-escape-from-alcatraz-game.jpg"
     },
     {
      "id":2,
      "category":"escapegame",
       "type": "In-Person",
       "title": "Treasure Island",
       "description": "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
       "age":"ll age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"treasure-island",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-treasure-island-game.jpg"
     },
     {
      "id":3,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Zombie Apocalypse",
      "description": "The zombification virus has mutated and it is up to you to save humanity! Double check your research and create an immunity chemical test!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"zombie-apocalypse",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-zombie-apocalypse-game.jpg"
     },
     {
      "id":4,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Sherlock's Library",
      "description": "London's top detective duo, Sherlock Holmes and Dr. John H. Watson, have been called upon to solve their next big case.",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"sherlocks-library",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-sherlocks-library-game.jpg"
     },
     
     {
      "id":5,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Black Ops",
      "description": "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"black-ops",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-black-ops-game.jpg"
     },
     {
      "id":6,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Superhero's Adventure",
      "description": "he arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"superheros-adventure",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-superheros-Adventure-game.jpg"
     },
     {
      "id":7,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Houdini's Magic Cell",
      "description": "As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"houdinis-magic-cell",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-houdinis-magic-cell-game.jpg"
     },
    
     {
      "id":8,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Special Agent",
      "description": "After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"special-agent",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-special-agent-game.jpg"
     },
     {
      "id":9,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Hollywood Premiere",
      "description": "Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"hollywood-premiere",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-hollywood-premiere-game.jpg"
     }, 
      ],
   
  "events":[
    {
      "id":1,
      "category":"event",
       "type": "In-Person",
       "title": "BIRTHDAY PARTIES",
       "description": "A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
       "slug"  :"birthday-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-birthday-party.jpg"
     },
    {
      "id":2,
      "category":"event",
       "type": "In-Person",
       "title": "TEAM BUILDING",
       "description": "This fun and exciting interactive form of team building will bring your corporate team closer!",
       "slug"  :"team-building",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-team-building.jpg"
     },
     {
      "id":3,
      "category":"event",
       "type": "In-Person",
       "title": "CORPORATE EVENTS",
       "description": "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
       "slug"  :"corporate-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-corporate-events.jpg"
     },
     
     {
      "id":4,
      "category":"event",
       "type": "In-Person",
       "title": "FAMILY FUN ACTIVITIES",
       "description": "A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
       "slug"  :"family-fun-activity",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-family-fun-activities.jpg"
     },
     {
      "id":5,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelor Party",
       "description": "There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
       "slug"  :"bachelor-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelor-party.jpg"
     },
     {
      "id":6,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelorette Party",
       "description": "Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
       "slug"  :"bachelorette-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelorette-party.jpg"
     },
     {
      "id":7,
      "category":"event",
       "type": "In-Person",
       "title": "PROPOSAL PARTY",
       "description": "A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
       "slug"  :"proposal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-proposal-party.jpg"
     },
     {
      "id":8,
      "category":"event",
       "type": "In-Person",
       "title": "DATE NIGHT / NIGHT OUT",
       "description": "Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
       "slug"  :"date-night",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-date-night.jpg"
     },
     {
      "id":9,
      "category":"event",
       "type": "In-Person",
       "title": "Private Party",
       "description": "Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
       "slug"  :"private-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-private-party.jpg"
     },
     {
      "id":10,
      "category":"event",
       "type": "In-Person",
       "title": "Reunion Party",
       "description": "Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
       "slug"  :"reunion-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-reunion-party.jpg"
     },
     {
      "id":11,
      "category":"event",
       "type": "In-Person",
       "title": "Graduation Party",
       "description": "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
       "slug"  :"graduation-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-graduation-party.jpg"
     },
     
     {
      "id":12,
      "category":"event",
       "type": "In-Person",
       "title": "SCHOOL EVENTS / FIELD TRIPS",
       "description": "Students exercise critical thinking and act to become the super-spies they see in the movies!",
       "slug"  :"school-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-school-event.jpg"
     },
     {
      "id":13,
      "category":"event",
       "type": "In-Person",
       "title": "GENDER REVEAL PARTY",
       "description": "Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
       "slug"  :"gender-reveal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-gender-reveal-party-event.jpg"
     },


          ],

                },
//=====================================================================hadley-ma end
//=====================================================================holyoke-ma
"holyoke-ma":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-holyoke-ma-holyoke-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-holyoke-ma-holyoke-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-holyoke-ma-holyoke-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
   "inpersongames":[
    {
      "id":1,
      "category":"escapegame",
      "type": "In-Person",
       "title": "Escape From Alcatraz",
       "description": "You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
       "age":"All age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"escape-from-alcatraz",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-escape-from-alcatraz-game.jpg"
     },
     {
      "id":2,
      "category":"escapegame",
       "type": "In-Person",
       "title": "Treasure Island",
       "description": "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
       "age":"ll age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"treasure-island",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-treasure-island-game.jpg"
     },
   
     {
      "id":4,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Sherlock's Library",
      "description": "London's top detective duo, Sherlock Holmes and Dr. John H. Watson, have been called upon to solve their next big case.",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"sherlocks-library",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-sherlocks-library-game.jpg"
     },
     
     {
      "id":5,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Black Ops",
      "description": "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"black-ops",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-black-ops-game.jpg"
     },
     {
      "id":6,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Superhero's Adventure",
      "description": "The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"superheros-adventure",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-superheros-Adventure-game.jpg"
     },
     {
      "id":7,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Houdini's Magic Cell",
      "description": "As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"houdinis-magic-cell",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-houdinis-magic-cell-game.jpg"
     },
    
     {
      "id":8,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Special Agent",
      "description": "After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"special-agent",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-special-agent-game.jpg"
     },
    
      ],
   
  "events":             [
    {
      "id":1,
      "category":"event",
       "type": "In-Person",
       "title": "BIRTHDAY PARTIES",
       "description": "A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
       "slug"  :"birthday-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-birthday-party.jpg"
     },
    {
      "id":2,
      "category":"event",
       "type": "In-Person",
       "title": "TEAM BUILDING",
       "description": "This fun and exciting interactive form of team building will bring your corporate team closer!",
       "slug"  :"team-building",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-team-building.jpg"
     },
     {
      "id":3,
      "category":"event",
       "type": "In-Person",
       "title": "CORPORATE EVENTS",
       "description": "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
       "slug"  :"corporate-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-corporate-events.jpg"
     },
     
     {
      "id":4,
      "category":"event",
       "type": "In-Person",
       "title": "FAMILY FUN ACTIVITIES",
       "description": "A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
       "slug"  :"family-fun-activity",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-family-fun-activities.jpg"
     },
     {
      "id":5,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelor Party",
       "description": "There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
       "slug"  :"bachelor-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelor-party.jpg"
     },
     {
      "id":6,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelorette Party",
       "description": "Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
       "slug"  :"bachelorette-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelorette-party.jpg"
     },
     {
      "id":7,
      "category":"event",
       "type": "In-Person",
       "title": "PROPOSAL PARTY",
       "description": "A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
       "slug"  :"proposal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-proposal-party.jpg"
     },
     {
      "id":8,
      "category":"event",
       "type": "In-Person",
       "title": "DATE NIGHT / NIGHT OUT",
       "description": "Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
       "slug"  :"date-night",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-date-night.jpg"
     },
     {
      "id":9,
      "category":"event",
       "type": "In-Person",
       "title": "Private Party",
       "description": "Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
       "slug"  :"private-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-private-party.jpg"
     },
     {
      "id":10,
      "category":"event",
       "type": "In-Person",
       "title": "Reunion Party",
       "description": "Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
       "slug"  :"reunion-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-reunion-party.jpg"
     },
     {
      "id":11,
      "category":"event",
       "type": "In-Person",
       "title": "Graduation Party",
       "description": "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
       "slug"  :"graduation-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-graduation-party.jpg"
     },
     
     {
      "id":12,
      "category":"event",
       "type": "In-Person",
       "title": "SCHOOL EVENTS / FIELD TRIPS",
       "description": "Students exercise critical thinking and act to become the super-spies they see in the movies!",
       "slug"  :"school-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-school-event.jpg"
     },
     {
      "id":13,
      "category":"event",
       "type": "In-Person",
       "title": "GENDER REVEAL PARTY",
       "description": "Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
       "slug"  :"gender-reveal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-gender-reveal-party-event.jpg"
     },


   ],

                },
//=====================================================================holyoke-ma end
//=====================================================================kingston-ma
"kingston-ma":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-kingston-ma-kingston-collection-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-kingston-ma-kingston-collection-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-kingston-ma-kingston-collection-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
"inpersongames":[
    {
      "id":1,
      "category":"escapegame",
      "type": "In-Person",
       "title": "Escape From Alcatraz",
       "description": "You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
       "age":"All age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"escape-from-alcatraz",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-escape-from-alcatraz-game.jpg"
     },
     {
      "id":2,
      "category":"escapegame",
       "type": "In-Person",
       "title": "Treasure Island",
       "description": "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
       "age":"ll age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"treasure-island",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-treasure-island-game.jpg"
     },
     {
      "id":3,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Zombie Apocalypse",
      "description": "The zombification virus has mutated and it is up to you to save humanity! Double check your research and create an immunity chemical test!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"zombie-apocalypse",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-zombie-apocalypse-game.jpg"
     },
     {
      "id":4,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Sherlock's Library",
      "description": "London's top detective duo, Sherlock Holmes and Dr. John H. Watson, have been called upon to solve their next big case.",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"sherlocks-library",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-sherlocks-library-game.jpg"
     },
     
     {
      "id":5,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Black Ops",
      "description": "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"black-ops",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-black-ops-game.jpg"
     },
     {
      "id":6,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Superhero's Adventure",
      "description": "The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"superheros-adventure",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-superheros-Adventure-game.jpg"
     },
     {
      "id":7,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Houdini's Magic Cell",
      "description": "As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"houdinis-magic-cell",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-houdinis-magic-cell-game.jpg"
     },
    
     
     {
      "id":9,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Hollywood Premiere",
      "description": "Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"hollywood-premiere",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-hollywood-premiere-game.jpg"
     }, 
     {
      "id":10,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Lost in The Jungle",
      "description": "Having heard the mysterious sound of drums coming from the roof, you and your friends decided to check it out. Drawn by the beat, you find yourself trapped in the game!",
      "age":"all age",
      "duration":"60",
      "maxplayers":"5",
      "minplayers":"2",
      "price":"39.95",
      "slug"  :"lost-in-the-jungle",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-lost-in-the-jungle-game.jpg"
     },
     
      ],
   
  "events":             [
    {
      "id":1,
      "category":"event",
       "type": "In-Person",
       "title": "BIRTHDAY PARTIES",
       "description": "A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
       "slug"  :"birthday-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-birthday-party.jpg"
     },
    {
      "id":2,
      "category":"event",
       "type": "In-Person",
       "title": "TEAM BUILDING",
       "description": "This fun and exciting interactive form of team building will bring your corporate team closer!",
       "slug"  :"team-building",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-team-building.jpg"
     },
     {
      "id":3,
      "category":"event",
       "type": "In-Person",
       "title": "CORPORATE EVENTS",
       "description": "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
       "slug"  :"corporate-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-corporate-events.jpg"
     },
     
     {
      "id":4,
      "category":"event",
       "type": "In-Person",
       "title": "FAMILY FUN ACTIVITIES",
       "description": "A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
       "slug"  :"family-fun-activity",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-family-fun-activities.jpg"
     },
     {
      "id":5,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelor Party",
       "description": "There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
       "slug"  :"bachelor-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelor-party.jpg"
     },
     {
      "id":6,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelorette Party",
       "description": "Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
       "slug"  :"bachelorette-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelorette-party.jpg"
     },
     {
      "id":7,
      "category":"event",
       "type": "In-Person",
       "title": "PROPOSAL PARTY",
       "description": "A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
       "slug"  :"proposal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-proposal-party.jpg"
     },
     {
      "id":8,
      "category":"event",
       "type": "In-Person",
       "title": "DATE NIGHT / NIGHT OUT",
       "description": "Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
       "slug"  :"date-night",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-date-night.jpg"
     },
     {
      "id":9,
      "category":"event",
       "type": "In-Person",
       "title": "Private Party",
       "description": "Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
       "slug"  :"private-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-private-party.jpg"
     },
     {
      "id":10,
      "category":"event",
       "type": "In-Person",
       "title": "Reunion Party",
       "description": "Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
       "slug"  :"reunion-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-reunion-party.jpg"
     },
     {
      "id":11,
      "category":"event",
       "type": "In-Person",
       "title": "Graduation Party",
       "description": "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
       "slug"  :"graduation-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-graduation-party.jpg"
     },
     
     {
      "id":12,
      "category":"event",
       "type": "In-Person",
       "title": "SCHOOL EVENTS / FIELD TRIPS",
       "description": "Students exercise critical thinking and act to become the super-spies they see in the movies!",
       "slug"  :"school-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-school-event.jpg"
     },
     {
      "id":13,
      "category":"event",
       "type": "In-Person",
       "title": "GENDER REVEAL PARTY",
       "description": "Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
       "slug"  :"gender-reveal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-gender-reveal-party-event.jpg"
     },


   ],

                },
//=====================================================================kingston-ma end
//=====================================================================n-attleborough-ma
"n-attleborough-ma":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-north-attleborough-ma-emerald-square-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-north-attleborough-ma-emerald-square-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-north-attleborough-ma-emerald-square-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
   "inpersongames":[
    {
      "id":1,
      "category":"escapegame",
      "type": "In-Person",
       "title": "Escape From Alcatraz",
       "description": "You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
       "age":"All age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"escape-from-alcatraz",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-escape-from-alcatraz-game.jpg"
     },
     {
      "id":2,
      "category":"escapegame",
       "type": "In-Person",
       "title": "Treasure Island",
       "description": "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
       "age":"ll age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"treasure-island",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-treasure-island-game.jpg"
     },
     {
      "id":3,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Zombie Apocalypse",
      "description": "The zombification virus has mutated and it is up to you to save humanity! Double check your research and create an immunity chemical test!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"zombie-apocalypse",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-zombie-apocalypse-game.jpg"
     },
     {
      "id":4,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Sherlock's Library",
      "description": "London's top detective duo, Sherlock Holmes and Dr. John H. Watson, have been called upon to solve their next big case.",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"sherlocks-library",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-sherlocks-library-game.jpg"
     },
     
     {
      "id":5,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Black Ops",
      "description": "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"black-ops",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-black-ops-game.jpg"
     },
     {
      "id":6,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Superhero's Adventure",
      "description": "The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"superheros-adventure",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-superheros-Adventure-game.jpg"
     },
     {
      "id":7,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Houdini's Magic Cell",
      "description": "As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"houdinis-magic-cell",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-houdinis-magic-cell-game.jpg"
     },
    
     {
      "id":8,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Special Agent",
      "description": "After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"special-agent",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-special-agent-game.jpg"
     },
     {
      "id":9,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Hollywood Premiere",
      "description": "Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"hollywood-premiere",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-hollywood-premiere-game.jpg"
     }, 
    
      ],
  
  "events":             [
    {
      "id":1,
      "category":"event",
       "type": "In-Person",
       "title": "BIRTHDAY PARTIES",
       "description": "A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
       "slug"  :"birthday-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-birthday-party.jpg"
     },
    {
      "id":2,
      "category":"event",
       "type": "In-Person",
       "title": "TEAM BUILDING",
       "description": "This fun and exciting interactive form of team building will bring your corporate team closer!",
       "slug"  :"team-building",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-team-building.jpg"
     },
     {
      "id":3,
      "category":"event",
       "type": "In-Person",
       "title": "CORPORATE EVENTS",
       "description": "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
       "slug"  :"corporate-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-corporate-events.jpg"
     },
     
     {
      "id":4,
      "category":"event",
       "type": "In-Person",
       "title": "FAMILY FUN ACTIVITIES",
       "description": "A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
       "slug"  :"family-fun-activity",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-family-fun-activities.jpg"
     },
     {
      "id":5,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelor Party",
       "description": "There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
       "slug"  :"bachelor-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelor-party.jpg"
     },
     {
      "id":6,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelorette Party",
       "description": "Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
       "slug"  :"bachelorette-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelorette-party.jpg"
     },
     {
      "id":7,
      "category":"event",
       "type": "In-Person",
       "title": "PROPOSAL PARTY",
       "description": "A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
       "slug"  :"proposal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-proposal-party.jpg"
     },
     {
      "id":8,
      "category":"event",
       "type": "In-Person",
       "title": "DATE NIGHT / NIGHT OUT",
       "description": "Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
       "slug"  :"date-night",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-date-night.jpg"
     },
     {
      "id":9,
      "category":"event",
       "type": "In-Person",
       "title": "Private Party",
       "description": "Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
       "slug"  :"private-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-private-party.jpg"
     },
     {
      "id":10,
      "category":"event",
       "type": "In-Person",
       "title": "Reunion Party",
       "description": "Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
       "slug"  :"reunion-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-reunion-party.jpg"
     },
     {
      "id":11,
      "category":"event",
       "type": "In-Person",
       "title": "Graduation Party",
       "description": "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
       "slug"  :"graduation-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-graduation-party.jpg"
     },
     
     {
      "id":12,
      "category":"event",
       "type": "In-Person",
       "title": "SCHOOL EVENTS / FIELD TRIPS",
       "description": "Students exercise critical thinking and act to become the super-spies they see in the movies!",
       "slug"  :"school-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-school-event.jpg"
     },
     {
      "id":13,
      "category":"event",
       "type": "In-Person",
       "title": "GENDER REVEAL PARTY",
       "description": "Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
       "slug"  :"gender-reveal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-gender-reveal-party-event.jpg"
     },


   ],

                },
//=====================================================================n-attleborough-ma end

//******************************************************************************************MA end==============================

//****************************************************************************************** TX==============================
//=====================================================================austin-tx
"austin-tx":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-north-attleborough-ma-emerald-square-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-north-attleborough-ma-emerald-square-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-north-attleborough-ma-emerald-square-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
   "inpersongames":[
    {
      "id":1,
      "category":"escapegame",
      "type": "In-Person",
       "title": "Escape From Alcatraz",
       "description": "You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
       "age":"All age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"escape-from-alcatraz",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-escape-from-alcatraz-game.jpg"
     },
     {
      "id":2,
      "category":"escapegame",
       "type": "In-Person",
       "title": "Treasure Island",
       "description": "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
       "age":"ll age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"treasure-island",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-treasure-island-game.jpg"
     },
     {
      "id":3,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Zombie Apocalypse",
      "description": "The zombification virus has mutated and it is up to you to save humanity! Double check your research and create an immunity chemical test!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"zombie-apocalypse",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-zombie-apocalypse-game.jpg"
     },
     {
      "id":4,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Sherlock's Library",
      "description": "London's top detective duo, Sherlock Holmes and Dr. John H. Watson, have been called upon to solve their next big case.",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"sherlocks-library",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-sherlocks-library-game.jpg"
     },
     
     {
      "id":5,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Black Ops",
      "description": "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"black-ops",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-black-ops-game.jpg"
     },
     {
      "id":6,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Superhero's Adventure",
      "description": "The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"superheros-adventure",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-superheros-Adventure-game.jpg"
     },
     {
      "id":7,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Houdini's Magic Cell",
      "description": "As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"houdinis-magic-cell",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-houdinis-magic-cell-game.jpg"
     },
    
     {
      "id":8,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Special Agent",
      "description": "After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"special-agent",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-special-agent-game.jpg"
     },
      ],
   
  "events":             [
    {
      "id":1,
      "category":"event",
       "type": "In-Person",
       "title": "BIRTHDAY PARTIES",
       "description": "A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
       "slug"  :"birthday-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-birthday-party.jpg"
     },
    {
      "id":2,
      "category":"event",
       "type": "In-Person",
       "title": "TEAM BUILDING",
       "description": "This fun and exciting interactive form of team building will bring your corporate team closer!",
       "slug"  :"team-building",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-team-building.jpg"
     },
     {
      "id":3,
      "category":"event",
       "type": "In-Person",
       "title": "CORPORATE EVENTS",
       "description": "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
       "slug"  :"corporate-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-corporate-events.jpg"
     },
     
     {
      "id":4,
      "category":"event",
       "type": "In-Person",
       "title": "FAMILY FUN ACTIVITIES",
       "description": "A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
       "slug"  :"family-fun-activity",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-family-fun-activities.jpg"
     },
     {
      "id":5,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelor Party",
       "description": "There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
       "slug"  :"bachelor-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelor-party.jpg"
     },
     {
      "id":6,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelorette Party",
       "description": "Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
       "slug"  :"bachelorette-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelorette-party.jpg"
     },
     {
      "id":7,
      "category":"event",
       "type": "In-Person",
       "title": "PROPOSAL PARTY",
       "description": "A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
       "slug"  :"proposal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-proposal-party.jpg"
     },
     {
      "id":8,
      "category":"event",
       "type": "In-Person",
       "title": "DATE NIGHT / NIGHT OUT",
       "description": "Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
       "slug"  :"date-night",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-date-night.jpg"
     },
     {
      "id":9,
      "category":"event",
       "type": "In-Person",
       "title": "Private Party",
       "description": "Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
       "slug"  :"private-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-private-party.jpg"
     },
     {
      "id":10,
      "category":"event",
       "type": "In-Person",
       "title": "Reunion Party",
       "description": "Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
       "slug"  :"reunion-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-reunion-party.jpg"
     },
     {
      "id":11,
      "category":"event",
       "type": "In-Person",
       "title": "Graduation Party",
       "description": "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
       "slug"  :"graduation-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-graduation-party.jpg"
     },
     
     {
      "id":12,
      "category":"event",
       "type": "In-Person",
       "title": "SCHOOL EVENTS / FIELD TRIPS",
       "description": "Students exercise critical thinking and act to become the super-spies they see in the movies!",
       "slug"  :"school-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-school-event.jpg"
     },
     {
      "id":13,
      "category":"event",
       "type": "In-Person",
       "title": "GENDER REVEAL PARTY",
       "description": "Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
       "slug"  :"gender-reveal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-gender-reveal-party-event.jpg"
     },


   ],

                },
//=====================================================================austin-tx end

//******************************************************************************************TX end==============================
//****************************************************************************************** CT==============================
//=====================================================================milford-ct
"milford-ct":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-milford-ct-connecticut-post-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-milford-ct-connecticut-post-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-milford-ct-connecticut-post-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
   "inpersongames":[
    {
      "id":1,
      "category":"escapegame",
      "type": "In-Person",
       "title": "Escape From Alcatraz",
       "description": "You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
       "age":"All age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"escape-from-alcatraz",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-escape-from-alcatraz-game.jpg"
     },
     {
      "id":2,
      "category":"escapegame",
       "type": "In-Person",
       "title": "Treasure Island",
       "description": "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
       "age":"ll age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"treasure-island",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-treasure-island-game.jpg"
     },
     {
      "id":3,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Zombie Apocalypse",
      "description": "The zombification virus has mutated and it is up to you to save humanity! Double check your research and create an immunity chemical test!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"zombie-apocalypse",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-zombie-apocalypse-game.jpg"
     },
     {
      "id":4,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Sherlock's Library",
      "description": "London's top detective duo, Sherlock Holmes and Dr. John H. Watson, have been called upon to solve their next big case.",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"sherlocks-library",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-sherlocks-library-game.jpg"
     },
     
     {
      "id":5,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Black Ops",
      "description": "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"black-ops",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-black-ops-game.jpg"
     },
     
     {
      "id":7,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Houdini's Magic Cell",
      "description": "As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"houdinis-magic-cell",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-houdinis-magic-cell-game.jpg"
     },
    
     
     {
      "id":9,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Hollywood Premiere",
      "description": "Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"hollywood-premiere",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-hollywood-premiere-game.jpg"
     }, 
     

      ],
   
  "events":             [
    {
      "id":1,
      "category":"event",
       "type": "In-Person",
       "title": "BIRTHDAY PARTIES",
       "description": "A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
       "slug"  :"birthday-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-birthday-party.jpg"
     },
    {
      "id":2,
      "category":"event",
       "type": "In-Person",
       "title": "TEAM BUILDING",
       "description": "This fun and exciting interactive form of team building will bring your corporate team closer!",
       "slug"  :"team-building",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-team-building.jpg"
     },
     {
      "id":3,
      "category":"event",
       "type": "In-Person",
       "title": "CORPORATE EVENTS",
       "description": "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
       "slug"  :"corporate-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-corporate-events.jpg"
     },
     
     {
      "id":4,
      "category":"event",
       "type": "In-Person",
       "title": "FAMILY FUN ACTIVITIES",
       "description": "A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
       "slug"  :"family-fun-activity",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-family-fun-activities.jpg"
     },
     {
      "id":5,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelor Party",
       "description": "There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
       "slug"  :"bachelor-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelor-party.jpg"
     },
     {
      "id":6,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelorette Party",
       "description": "Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
       "slug"  :"bachelorette-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelorette-party.jpg"
     },
     {
      "id":7,
      "category":"event",
       "type": "In-Person",
       "title": "PROPOSAL PARTY",
       "description": "A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
       "slug"  :"proposal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-proposal-party.jpg"
     },
     {
      "id":8,
      "category":"event",
       "type": "In-Person",
       "title": "DATE NIGHT / NIGHT OUT",
       "description": "Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
       "slug"  :"date-night",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-date-night.jpg"
     },
     {
      "id":9,
      "category":"event",
       "type": "In-Person",
       "title": "Private Party",
       "description": "Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
       "slug"  :"private-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-private-party.jpg"
     },
     {
      "id":10,
      "category":"event",
       "type": "In-Person",
       "title": "Reunion Party",
       "description": "Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
       "slug"  :"reunion-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-reunion-party.jpg"
     },
     {
      "id":11,
      "category":"event",
       "type": "In-Person",
       "title": "Graduation Party",
       "description": "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
       "slug"  :"graduation-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-graduation-party.jpg"
     },
     
     {
      "id":12,
      "category":"event",
       "type": "In-Person",
       "title": "SCHOOL EVENTS / FIELD TRIPS",
       "description": "Students exercise critical thinking and act to become the super-spies they see in the movies!",
       "slug"  :"school-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-school-event.jpg"
     },
     {
      "id":13,
      "category":"event",
       "type": "In-Person",
       "title": "GENDER REVEAL PARTY",
       "description": "Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
       "slug"  :"gender-reveal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-gender-reveal-party-event.jpg"
     },


   ],
                },
//=====================================================================milford-ct end
//=====================================================================manchester-ct
"manchester-ct":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-manchester-ct-buckland-hills-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-manchester-ct-buckland-hills-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-manchester-ct-buckland-hills-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
   "inpersongames":[
    {
      "id":1,
      "category":"escapegame",
      "type": "In-Person",
       "title": "Escape From Alcatraz",
       "description": "You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
       "age":"All age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"escape-from-alcatraz",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-escape-from-alcatraz-game.jpg"
     },
     {
      "id":2,
      "category":"escapegame",
       "type": "In-Person",
       "title": "Treasure Island",
       "description": "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
       "age":"ll age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"treasure-island",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-treasure-island-game.jpg"
     },
     {
      "id":3,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Zombie Apocalypse",
      "description": "The zombification virus has mutated and it is up to you to save humanity! Double check your research and create an immunity chemical test!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"zombie-apocalypse",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-zombie-apocalypse-game.jpg"
     },
     {
      "id":4,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Sherlock's Library",
      "description": "London's top detective duo, Sherlock Holmes and Dr. John H. Watson, have been called upon to solve their next big case.",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"sherlocks-library",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-sherlocks-library-game.jpg"
     },
     
     {
      "id":5,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Black Ops",
      "description": "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"black-ops",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-black-ops-game.jpg"
     },
     {
      "id":6,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Superhero's Adventure",
      "description": "The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"superheros-adventure",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-superheros-Adventure-game.jpg"
     },
     {
      "id":7,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Houdini's Magic Cell",
      "description": "As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"houdinis-magic-cell",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-houdinis-magic-cell-game.jpg"
     },
    
     {
      "id":8,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Special Agent",
      "description": "After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"special-agent",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-special-agent-game.jpg"
     },
     {
      "id":9,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Hollywood Premiere",
      "description": "Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"hollywood-premiere",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-hollywood-premiere-game.jpg"
     }, 
      ],
   
  "events":             [
    {
      "id":1,
      "category":"event",
       "type": "In-Person",
       "title": "BIRTHDAY PARTIES",
       "description": "A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
       "slug"  :"birthday-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-birthday-party.jpg"
     },
    {
      "id":2,
      "category":"event",
       "type": "In-Person",
       "title": "TEAM BUILDING",
       "description": "This fun and exciting interactive form of team building will bring your corporate team closer!",
       "slug"  :"team-building",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-team-building.jpg"
     },
     {
      "id":3,
      "category":"event",
       "type": "In-Person",
       "title": "CORPORATE EVENTS",
       "description": "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
       "slug"  :"corporate-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-corporate-events.jpg"
     },
     
     {
      "id":4,
      "category":"event",
       "type": "In-Person",
       "title": "FAMILY FUN ACTIVITIES",
       "description": "A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
       "slug"  :"family-fun-activity",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-family-fun-activities.jpg"
     },
     {
      "id":5,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelor Party",
       "description": "There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
       "slug"  :"bachelor-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelor-party.jpg"
     },
     {
      "id":6,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelorette Party",
       "description": "Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
       "slug"  :"bachelorette-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelorette-party.jpg"
     },
     {
      "id":7,
      "category":"event",
       "type": "In-Person",
       "title": "PROPOSAL PARTY",
       "description": "A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
       "slug"  :"proposal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-proposal-party.jpg"
     },
     {
      "id":8,
      "category":"event",
       "type": "In-Person",
       "title": "DATE NIGHT / NIGHT OUT",
       "description": "Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
       "slug"  :"date-night",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-date-night.jpg"
     },
     {
      "id":9,
      "category":"event",
       "type": "In-Person",
       "title": "Private Party",
       "description": "Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
       "slug"  :"private-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-private-party.jpg"
     },
     {
      "id":10,
      "category":"event",
       "type": "In-Person",
       "title": "Reunion Party",
       "description": "Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
       "slug"  :"reunion-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-reunion-party.jpg"
     },
     {
      "id":11,
      "category":"event",
       "type": "In-Person",
       "title": "Graduation Party",
       "description": "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
       "slug"  :"graduation-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-graduation-party.jpg"
     },
     
     {
      "id":12,
      "category":"event",
       "type": "In-Person",
       "title": "SCHOOL EVENTS / FIELD TRIPS",
       "description": "Students exercise critical thinking and act to become the super-spies they see in the movies!",
       "slug"  :"school-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-school-event.jpg"
     },
     {
      "id":13,
      "category":"event",
       "type": "In-Person",
       "title": "GENDER REVEAL PARTY",
       "description": "Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
       "slug"  :"gender-reveal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-gender-reveal-party-event.jpg"
     },


   ],

                },
//====================================================================manchester-ct end
//=====================================================================waterbury-ct
"waterbury-ct":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-waterbury-ct-brass-mills-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-waterbury-ct-brass-mills-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-milford-ct-connecticut-post-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
   "inpersongames":[
    {
      "id":1,
      "category":"escapegame",
      "type": "In-Person",
       "title": "Escape From Alcatraz",
       "description": "You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
       "age":"All age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"escape-from-alcatraz",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-escape-from-alcatraz-game.jpg"
     },
     {
      "id":2,
      "category":"escapegame",
       "type": "In-Person",
       "title": "Treasure Island",
       "description": "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
       "age":"ll age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"treasure-island",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-treasure-island-game.jpg"
     },
     {
      "id":3,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Zombie Apocalypse",
      "description": "The zombification virus has mutated and it is up to you to save humanity! Double check your research and create an immunity chemical test!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"zombie-apocalypse",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-zombie-apocalypse-game.jpg"
     },
     {
      "id":4,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Sherlock's Library",
      "description": "London's top detective duo, Sherlock Holmes and Dr. John H. Watson, have been called upon to solve their next big case.",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"sherlocks-library",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-sherlocks-library-game.jpg"
     },
     
     {
      "id":5,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Black Ops",
      "description": "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"black-ops",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-black-ops-game.jpg"
     },
     {
      "id":6,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Superhero's Adventure",
      "description": "The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"superheros-adventure",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-superheros-Adventure-game.jpg"
     },
     {
      "id":7,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Houdini's Magic Cell",
      "description": "As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"houdinis-magic-cell",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-houdinis-magic-cell-game.jpg"
     },
    
     {
      "id":8,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Special Agent",
      "description": "After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"special-agent",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-special-agent-game.jpg"
     },
     {
      "id":9,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Hollywood Premiere",
      "description": "Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"hollywood-premiere",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-hollywood-premiere-game.jpg"
     }, 
      ],
  
  "events":             [
    {
      "id":1,
      "category":"event",
       "type": "In-Person",
       "title": "BIRTHDAY PARTIES",
       "description": "A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
       "slug"  :"birthday-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-birthday-party.jpg"
     },
    {
      "id":2,
      "category":"event",
       "type": "In-Person",
       "title": "TEAM BUILDING",
       "description": "This fun and exciting interactive form of team building will bring your corporate team closer!",
       "slug"  :"team-building",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-team-building.jpg"
     },
     {
      "id":3,
      "category":"event",
       "type": "In-Person",
       "title": "CORPORATE EVENTS",
       "description": "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
       "slug"  :"corporate-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-corporate-events.jpg"
     },
     
     {
      "id":4,
      "category":"event",
       "type": "In-Person",
       "title": "FAMILY FUN ACTIVITIES",
       "description": "A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
       "slug"  :"family-fun-activity",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-family-fun-activities.jpg"
     },
     {
      "id":5,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelor Party",
       "description": "There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
       "slug"  :"bachelor-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelor-party.jpg"
     },
     {
      "id":6,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelorette Party",
       "description": "Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
       "slug"  :"bachelorette-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelorette-party.jpg"
     },
     {
      "id":7,
      "category":"event",
       "type": "In-Person",
       "title": "PROPOSAL PARTY",
       "description": "A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
       "slug"  :"proposal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-proposal-party.jpg"
     },
     {
      "id":8,
      "category":"event",
       "type": "In-Person",
       "title": "DATE NIGHT / NIGHT OUT",
       "description": "Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
       "slug"  :"date-night",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-date-night.jpg"
     },
     {
      "id":9,
      "category":"event",
       "type": "In-Person",
       "title": "Private Party",
       "description": "Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
       "slug"  :"private-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-private-party.jpg"
     },
     {
      "id":10,
      "category":"event",
       "type": "In-Person",
       "title": "Reunion Party",
       "description": "Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
       "slug"  :"reunion-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-reunion-party.jpg"
     },
     {
      "id":11,
      "category":"event",
       "type": "In-Person",
       "title": "Graduation Party",
       "description": "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
       "slug"  :"graduation-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-graduation-party.jpg"
     },
     
     {
      "id":12,
      "category":"event",
       "type": "In-Person",
       "title": "SCHOOL EVENTS / FIELD TRIPS",
       "description": "Students exercise critical thinking and act to become the super-spies they see in the movies!",
       "slug"  :"school-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-school-event.jpg"
     },
     {
      "id":13,
      "category":"event",
       "type": "In-Person",
       "title": "GENDER REVEAL PARTY",
       "description": "Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
       "slug"  :"gender-reveal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-gender-reveal-party-event.jpg"
     },


   ],

                },
//====================================================================waterbury-ct end
//******************************************************************************************CT end==============================

//******************************************************************************************NJ ==============================
//=====================================================================rockaway-nj
"rockaway-nj":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-rockaway-nj-rockaway-townsquare-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-rockaway-nj-rockaway-townsquare-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-rockaway-nj-rockaway-townsquare-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
   "inpersongames":[
    {
      "id":1,
      "category":"escapegame",
      "type": "In-Person",
       "title": "Escape From Alcatraz",
       "description": "You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
       "age":"All age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"escape-from-alcatraz",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-escape-from-alcatraz-game.jpg"
     },
     {
      "id":2,
      "category":"escapegame",
       "type": "In-Person",
       "title": "Treasure Island",
       "description": "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
       "age":"ll age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"treasure-island",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-treasure-island-game.jpg"
     },
     {
      "id":3,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Zombie Apocalypse",
      "description": "The zombification virus has mutated and it is up to you to save humanity! Double check your research and create an immunity chemical test!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"zombie-apocalypse",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-zombie-apocalypse-game.jpg"
     },
     {
      "id":4,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Sherlock's Library",
      "description": "London's top detective duo, Sherlock Holmes and Dr. John H. Watson, have been called upon to solve their next big case.",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"sherlocks-library",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-sherlocks-library-game.jpg"
     },
     
     {
      "id":5,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Black Ops",
      "description": "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"black-ops",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-black-ops-game.jpg"
     },
     {
      "id":6,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Superhero's Adventure",
      "description": "The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"superheros-adventure",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-superheros-Adventure-game.jpg"
     },
     {
      "id":7,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Houdini's Magic Cell",
      "description": "As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"houdinis-magic-cell",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-houdinis-magic-cell-game.jpg"
     },
    
     
     {
      "id":9,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Hollywood Premiere",
      "description": "Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"hollywood-premiere",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-hollywood-premiere-game.jpg"
     }, 
    
      ],
   "otherphysicalgames": [
    
      {

          "id":2,
          "category":"other",
          "type": "In-Person",
          "title": "Game Show Room",
          "description": "Have you always dreamed of being a contestant on a TV game show? Well, dream no more because we've brought the game show experience to you!",
          "age":"All age (6+)",
          "duration":"60",
          "maxplayers":"16",
          "minplayers":"4",
          "price":"33",
          "slug"  :"game-show-room",
          "bgimg" :"/assets/all-game-slider-bg/allinadventures-game-show-room-game.jpg"
         },
     
      
    
      ],
  "events":             [
    {
      "id":1,
      "category":"event",
       "type": "In-Person",
       "title": "BIRTHDAY PARTIES",
       "description": "A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
       "slug"  :"birthday-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-birthday-party.jpg"
     },
    {
      "id":2,
      "category":"event",
       "type": "In-Person",
       "title": "TEAM BUILDING",
       "description": "This fun and exciting interactive form of team building will bring your corporate team closer!",
       "slug"  :"team-building",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-team-building.jpg"
     },
     {
      "id":3,
      "category":"event",
       "type": "In-Person",
       "title": "CORPORATE EVENTS",
       "description": "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
       "slug"  :"corporate-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-corporate-events.jpg"
     },
     
     {
      "id":4,
      "category":"event",
       "type": "In-Person",
       "title": "FAMILY FUN ACTIVITIES",
       "description": "A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
       "slug"  :"family-fun-activity",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-family-fun-activities.jpg"
     },
     {
      "id":5,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelor Party",
       "description": "There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
       "slug"  :"bachelor-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelor-party.jpg"
     },
     {
      "id":6,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelorette Party",
       "description": "Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
       "slug"  :"bachelorette-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelorette-party.jpg"
     },
     {
      "id":7,
      "category":"event",
       "type": "In-Person",
       "title": "PROPOSAL PARTY",
       "description": "A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
       "slug"  :"proposal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-proposal-party.jpg"
     },
     {
      "id":8,
      "category":"event",
       "type": "In-Person",
       "title": "DATE NIGHT / NIGHT OUT",
       "description": "Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
       "slug"  :"date-night",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-date-night.jpg"
     },
     {
      "id":9,
      "category":"event",
       "type": "In-Person",
       "title": "Private Party",
       "description": "Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
       "slug"  :"private-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-private-party.jpg"
     },
     {
      "id":10,
      "category":"event",
       "type": "In-Person",
       "title": "Reunion Party",
       "description": "Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
       "slug"  :"reunion-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-reunion-party.jpg"
     },
     {
      "id":11,
      "category":"event",
       "type": "In-Person",
       "title": "Graduation Party",
       "description": "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
       "slug"  :"graduation-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-graduation-party.jpg"
     },
     
     {
      "id":12,
      "category":"event",
       "type": "In-Person",
       "title": "SCHOOL EVENTS / FIELD TRIPS",
       "description": "Students exercise critical thinking and act to become the super-spies they see in the movies!",
       "slug"  :"school-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-school-event.jpg"
     },
     {
      "id":13,
      "category":"event",
       "type": "In-Person",
       "title": "GENDER REVEAL PARTY",
       "description": "Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
       "slug"  :"gender-reveal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-gender-reveal-party-event.jpg"
     },


   ],

                },
//====================================================================rockaway-nj end
//=====================================================================east-brunswick-nj
"east-brunswick-nj":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-east-brunswick-nj-brunswick-square-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-east-brunswick-nj-brunswick-square-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-east-brunswick-nj-brunswick-square-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
   "inpersongames":[
    {
      "id":1,
      "category":"escapegame",
      "type": "In-Person",
       "title": "Escape From Alcatraz",
       "description": "You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
       "age":"All age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"escape-from-alcatraz",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-escape-from-alcatraz-game.jpg"
     },
     {
      "id":2,
      "category":"escapegame",
       "type": "In-Person",
       "title": "Treasure Island",
       "description": "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
       "age":"ll age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"treasure-island",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-treasure-island-game.jpg"
     },
     
     {
      "id":4,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Sherlock's Library",
      "description": "London's top detective duo, Sherlock Holmes and Dr. John H. Watson, have been called upon to solve their next big case.",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"sherlocks-library",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-sherlocks-library-game.jpg"
     },
     
     {
      "id":5,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Black Ops",
      "description": "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"black-ops",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-black-ops-game.jpg"
     },
     {
      "id":6,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Superhero's Adventure",
      "description": "The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"superheros-adventure",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-superheros-Adventure-game.jpg"
     },
     {
      "id":7,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Houdini's Magic Cell",
      "description": "As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"houdinis-magic-cell",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-houdinis-magic-cell-game.jpg"
     },
     {
      "id":9,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Hollywood Premiere",
      "description": "Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"hollywood-premiere",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-hollywood-premiere-game.jpg"
     }, 
     
      ],
  
  "events":             [
    {
      "id":1,
      "category":"event",
       "type": "In-Person",
       "title": "BIRTHDAY PARTIES",
       "description": "A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
       "slug"  :"birthday-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-birthday-party.jpg"
     },
    {
      "id":2,
      "category":"event",
       "type": "In-Person",
       "title": "TEAM BUILDING",
       "description": "This fun and exciting interactive form of team building will bring your corporate team closer!",
       "slug"  :"team-building",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-team-building.jpg"
     },
     {
      "id":3,
      "category":"event",
       "type": "In-Person",
       "title": "CORPORATE EVENTS",
       "description": "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
       "slug"  :"corporate-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-corporate-events.jpg"
     },
     
     {
      "id":4,
      "category":"event",
       "type": "In-Person",
       "title": "FAMILY FUN ACTIVITIES",
       "description": "A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
       "slug"  :"family-fun-activity",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-family-fun-activities.jpg"
     },
     {
      "id":5,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelor Party",
       "description": "There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
       "slug"  :"bachelor-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelor-party.jpg"
     },
     {
      "id":6,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelorette Party",
       "description": "Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
       "slug"  :"bachelorette-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelorette-party.jpg"
     },
     {
      "id":7,
      "category":"event",
       "type": "In-Person",
       "title": "PROPOSAL PARTY",
       "description": "A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
       "slug"  :"proposal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-proposal-party.jpg"
     },
     {
      "id":8,
      "category":"event",
       "type": "In-Person",
       "title": "DATE NIGHT / NIGHT OUT",
       "description": "Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
       "slug"  :"date-night",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-date-night.jpg"
     },
     {
      "id":9,
      "category":"event",
       "type": "In-Person",
       "title": "Private Party",
       "description": "Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
       "slug"  :"private-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-private-party.jpg"
     },
     {
      "id":10,
      "category":"event",
       "type": "In-Person",
       "title": "Reunion Party",
       "description": "Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
       "slug"  :"reunion-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-reunion-party.jpg"
     },
     {
      "id":11,
      "category":"event",
       "type": "In-Person",
       "title": "Graduation Party",
       "description": "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
       "slug"  :"graduation-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-graduation-party.jpg"
     },
     
     {
      "id":12,
      "category":"event",
       "type": "In-Person",
       "title": "SCHOOL EVENTS / FIELD TRIPS",
       "description": "Students exercise critical thinking and act to become the super-spies they see in the movies!",
       "slug"  :"school-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-school-event.jpg"
     },
     {
      "id":13,
      "category":"event",
       "type": "In-Person",
       "title": "GENDER REVEAL PARTY",
       "description": "Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
       "slug"  :"gender-reveal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-gender-reveal-party-event.jpg"
     },


   ],

                },
//====================================================================east-brunswick-nj end
//=====================================================================woodbridge-nj
"woodbridge-nj":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-woodbridge-nj-woodbridge-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-woodbridge-nj-woodbridge-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-woodbridge-nj-woodbridge-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
   "inpersongames":[
    {
      "id":1,
      "category":"escapegame",
      "type": "In-Person",
       "title": "Escape From Alcatraz",
       "description": "You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
       "age":"All age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"escape-from-alcatraz",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-escape-from-alcatraz-game.jpg"
     },
     {
      "id":2,
      "category":"escapegame",
       "type": "In-Person",
       "title": "Treasure Island",
       "description": "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
       "age":"ll age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"treasure-island",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-treasure-island-game.jpg"
     },
     {
      "id":3,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Zombie Apocalypse",
      "description": "The zombification virus has mutated and it is up to you to save humanity! Double check your research and create an immunity chemical test!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"zombie-apocalypse",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-zombie-apocalypse-game.jpg"
     },
     {
      "id":4,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Sherlock's Library",
      "description": "London's top detective duo, Sherlock Holmes and Dr. John H. Watson, have been called upon to solve their next big case.",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"sherlocks-library",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-sherlocks-library-game.jpg"
     },
     
     {
      "id":5,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Black Ops",
      "description": "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"black-ops",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-black-ops-game.jpg"
     },
     {
      "id":6,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Superhero's Adventure",
      "description": "The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"superheros-adventure",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-superheros-Adventure-game.jpg"
     },
     {
      "id":7,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Houdini's Magic Cell",
      "description": "As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"houdinis-magic-cell",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-houdinis-magic-cell-game.jpg"
     },
    
     {
      "id":8,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Special Agent",
      "description": "After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"special-agent",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-special-agent-game.jpg"
     },
     {
      "id":9,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Hollywood Premiere",
      "description": "Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"hollywood-premiere",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-hollywood-premiere-game.jpg"
     }, 
      ],
   
  "events":             [
    {
      "id":1,
      "category":"event",
       "type": "In-Person",
       "title": "BIRTHDAY PARTIES",
       "description": "A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
       "slug"  :"birthday-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-birthday-party.jpg"
     },
    {
      "id":2,
      "category":"event",
       "type": "In-Person",
       "title": "TEAM BUILDING",
       "description": "This fun and exciting interactive form of team building will bring your corporate team closer!",
       "slug"  :"team-building",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-team-building.jpg"
     },
     {
      "id":3,
      "category":"event",
       "type": "In-Person",
       "title": "CORPORATE EVENTS",
       "description": "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
       "slug"  :"corporate-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-corporate-events.jpg"
     },
     
     {
      "id":4,
      "category":"event",
       "type": "In-Person",
       "title": "FAMILY FUN ACTIVITIES",
       "description": "A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
       "slug"  :"family-fun-activity",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-family-fun-activities.jpg"
     },
     {
      "id":5,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelor Party",
       "description": "There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
       "slug"  :"bachelor-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelor-party.jpg"
     },
     {
      "id":6,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelorette Party",
       "description": "Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
       "slug"  :"bachelorette-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelorette-party.jpg"
     },
     {
      "id":7,
      "category":"event",
       "type": "In-Person",
       "title": "PROPOSAL PARTY",
       "description": "A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
       "slug"  :"proposal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-proposal-party.jpg"
     },
     {
      "id":8,
      "category":"event",
       "type": "In-Person",
       "title": "DATE NIGHT / NIGHT OUT",
       "description": "Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
       "slug"  :"date-night",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-date-night.jpg"
     },
     {
      "id":9,
      "category":"event",
       "type": "In-Person",
       "title": "Private Party",
       "description": "Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
       "slug"  :"private-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-private-party.jpg"
     },
     {
      "id":10,
      "category":"event",
       "type": "In-Person",
       "title": "Reunion Party",
       "description": "Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
       "slug"  :"reunion-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-reunion-party.jpg"
     },
     {
      "id":11,
      "category":"event",
       "type": "In-Person",
       "title": "Graduation Party",
       "description": "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
       "slug"  :"graduation-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-graduation-party.jpg"
     },
     
     {
      "id":12,
      "category":"event",
       "type": "In-Person",
       "title": "SCHOOL EVENTS / FIELD TRIPS",
       "description": "Students exercise critical thinking and act to become the super-spies they see in the movies!",
       "slug"  :"school-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-school-event.jpg"
     },
     {
      "id":13,
      "category":"event",
       "type": "In-Person",
       "title": "GENDER REVEAL PARTY",
       "description": "Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
       "slug"  :"gender-reveal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-gender-reveal-party-event.jpg"
     },


   ],

                },
//====================================================================woodbridge-nj end

//******************************************************************************************NJ end==============================


//******************************************************************************************MD==============================
//=====================================================================bowie-md
"bowie-md":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-bowie-md-bowie-town-center-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-bowie-md-bowie-town-center-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-bowie-md-bowie-town-center-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
   "inpersongames":[
    {
      "id":1,
      "category":"escapegame",
      "type": "In-Person",
       "title": "Escape From Alcatraz",
       "description": "You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
       "age":"All age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"escape-from-alcatraz",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-escape-from-alcatraz-game.jpg"
     },
     {
      "id":2,
      "category":"escapegame",
       "type": "In-Person",
       "title": "Treasure Island",
       "description": "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
       "age":"ll age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"treasure-island",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-treasure-island-game.jpg"
     },
     {
      "id":3,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Zombie Apocalypse",
      "description": "The zombification virus has mutated and it is up to you to save humanity! Double check your research and create an immunity chemical test!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"zombie-apocalypse",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-zombie-apocalypse-game.jpg"
     },
     {
      "id":4,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Sherlock's Library",
      "description": "London's top detective duo, Sherlock Holmes and Dr. John H. Watson, have been called upon to solve their next big case.",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"sherlocks-library",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-sherlocks-library-game.jpg"
     },
     
     {
      "id":5,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Black Ops",
      "description": "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"black-ops",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-black-ops-game.jpg"
     },
     {
      "id":6,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Superhero's Adventure",
      "description": "The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"superheros-adventure",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-superheros-Adventure-game.jpg"
     },
     {
      "id":7,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Houdini's Magic Cell",
      "description": "As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"houdinis-magic-cell",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-houdinis-magic-cell-game.jpg"
     },
    
     {
      "id":8,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Special Agent",
      "description": "After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"special-agent",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-special-agent-game.jpg"
     },
      ],
   
  "events":[
    {
      "id":1,
      "category":"event",
       "type": "In-Person",
       "title": "BIRTHDAY PARTIES",
       "description": "A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
       "slug"  :"birthday-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-birthday-party.jpg"
     },
    {
      "id":2,
      "category":"event",
       "type": "In-Person",
       "title": "TEAM BUILDING",
       "description": "This fun and exciting interactive form of team building will bring your corporate team closer!",
       "slug"  :"team-building",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-team-building.jpg"
     },
     {
      "id":3,
      "category":"event",
       "type": "In-Person",
       "title": "CORPORATE EVENTS",
       "description": "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
       "slug"  :"corporate-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-corporate-events.jpg"
     },
     
     {
      "id":4,
      "category":"event",
       "type": "In-Person",
       "title": "FAMILY FUN ACTIVITIES",
       "description": "A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
       "slug"  :"family-fun-activity",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-family-fun-activities.jpg"
     },
     {
      "id":5,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelor Party",
       "description": "There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
       "slug"  :"bachelor-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelor-party.jpg"
     },
     {
      "id":6,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelorette Party",
       "description": "Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
       "slug"  :"bachelorette-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelorette-party.jpg"
     },
     {
      "id":7,
      "category":"event",
       "type": "In-Person",
       "title": "PROPOSAL PARTY",
       "description": "A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
       "slug"  :"proposal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-proposal-party.jpg"
     },
     {
      "id":8,
      "category":"event",
       "type": "In-Person",
       "title": "DATE NIGHT / NIGHT OUT",
       "description": "Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
       "slug"  :"date-night",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-date-night.jpg"
     },
     {
      "id":9,
      "category":"event",
       "type": "In-Person",
       "title": "Private Party",
       "description": "Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
       "slug"  :"private-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-private-party.jpg"
     },
     {
      "id":10,
      "category":"event",
       "type": "In-Person",
       "title": "Reunion Party",
       "description": "Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
       "slug"  :"reunion-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-reunion-party.jpg"
     },
     {
      "id":11,
      "category":"event",
       "type": "In-Person",
       "title": "Graduation Party",
       "description": "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
       "slug"  :"graduation-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-graduation-party.jpg"
     },
     
     {
      "id":12,
      "category":"event",
       "type": "In-Person",
       "title": "SCHOOL EVENTS / FIELD TRIPS",
       "description": "Students exercise critical thinking and act to become the super-spies they see in the movies!",
       "slug"  :"school-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-school-event.jpg"
     },
     {
      "id":13,
      "category":"event",
       "type": "In-Person",
       "title": "GENDER REVEAL PARTY",
       "description": "Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
       "slug"  :"gender-reveal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-gender-reveal-party-event.jpg"
     },


           ],

          },
//====================================================================bowie-md end
//=====================================================================white-marsh-md
"white-marsh-md":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-white-marsh-md-white-marsh-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-white-marsh-md-white-marsh-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-white-marsh-md-white-marsh-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
   "inpersongames":[
    {
      "id":1,
      "category":"escapegame",
      "type": "In-Person",
       "title": "Escape From Alcatraz",
       "description": "You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
       "age":"All age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"escape-from-alcatraz",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-escape-from-alcatraz-game.jpg"
     },
     {
      "id":2,
      "category":"escapegame",
       "type": "In-Person",
       "title": "Treasure Island",
       "description": "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
       "age":"ll age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"treasure-island",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-treasure-island-game.jpg"
     },
     {
      "id":3,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Zombie Apocalypse",
      "description": "The zombification virus has mutated and it is up to you to save humanity! Double check your research and create an immunity chemical test!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"zombie-apocalypse",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-zombie-apocalypse-game.jpg"
     },
     {
      "id":4,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Sherlock's Library",
      "description": "London's top detective duo, Sherlock Holmes and Dr. John H. Watson, have been called upon to solve their next big case.",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"sherlocks-library",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-sherlocks-library-game.jpg"
     },
     
     {
      "id":5,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Black Ops",
      "description": "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"black-ops",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-black-ops-game.jpg"
     },
     {
      "id":6,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Superhero's Adventure",
      "description": "The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"superheros-adventure",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-superheros-Adventure-game.jpg"
     },
     {
      "id":7,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Houdini's Magic Cell",
      "description": "As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"houdinis-magic-cell",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-houdinis-magic-cell-game.jpg"
     },
    
     {
      "id":8,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Special Agent",
      "description": "After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"special-agent",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-special-agent-game.jpg"
     },
     {
      "id":9,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Hollywood Premiere",
      "description": "Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"hollywood-premiere",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-hollywood-premiere-game.jpg"
     }, 
     

      ],
   
  "events":             [
    {
      "id":1,
      "category":"event",
       "type": "In-Person",
       "title": "BIRTHDAY PARTIES",
       "description": "A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
       "slug"  :"birthday-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-birthday-party.jpg"
     },
    {
      "id":2,
      "category":"event",
       "type": "In-Person",
       "title": "TEAM BUILDING",
       "description": "This fun and exciting interactive form of team building will bring your corporate team closer!",
       "slug"  :"team-building",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-team-building.jpg"
     },
     {
      "id":3,
      "category":"event",
       "type": "In-Person",
       "title": "CORPORATE EVENTS",
       "description": "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
       "slug"  :"corporate-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-corporate-events.jpg"
     },
     
     {
      "id":4,
      "category":"event",
       "type": "In-Person",
       "title": "FAMILY FUN ACTIVITIES",
       "description": "A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
       "slug"  :"family-fun-activity",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-family-fun-activities.jpg"
     },
     {
      "id":5,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelor Party",
       "description": "There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
       "slug"  :"bachelor-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelor-party.jpg"
     },
     {
      "id":6,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelorette Party",
       "description": "Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
       "slug"  :"bachelorette-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelorette-party.jpg"
     },
     {
      "id":7,
      "category":"event",
       "type": "In-Person",
       "title": "PROPOSAL PARTY",
       "description": "A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
       "slug"  :"proposal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-proposal-party.jpg"
     },
     {
      "id":8,
      "category":"event",
       "type": "In-Person",
       "title": "DATE NIGHT / NIGHT OUT",
       "description": "Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
       "slug"  :"date-night",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-date-night.jpg"
     },
     {
      "id":9,
      "category":"event",
       "type": "In-Person",
       "title": "Private Party",
       "description": "Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
       "slug"  :"private-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-private-party.jpg"
     },
     {
      "id":10,
      "category":"event",
       "type": "In-Person",
       "title": "Reunion Party",
       "description": "Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
       "slug"  :"reunion-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-reunion-party.jpg"
     },
     {
      "id":11,
      "category":"event",
       "type": "In-Person",
       "title": "Graduation Party",
       "description": "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
       "slug"  :"graduation-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-graduation-party.jpg"
     },
     
     {
      "id":12,
      "category":"event",
       "type": "In-Person",
       "title": "SCHOOL EVENTS / FIELD TRIPS",
       "description": "Students exercise critical thinking and act to become the super-spies they see in the movies!",
       "slug"  :"school-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-school-event.jpg"
     },
     {
      "id":13,
      "category":"event",
       "type": "In-Person",
       "title": "GENDER REVEAL PARTY",
       "description": "Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
       "slug"  :"gender-reveal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-gender-reveal-party-event.jpg"
     },


   ],

                },
//====================================================================white-marsh-md end

//******************************************************************************************MD end==============================


//******************************************************************************************VA==============================
//=====================================================================roanoke-va
"roanoke-va":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-roanoke-va-valley-view-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-roanoke-va-valley-view-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-roanoke-va-valley-view-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
   "inpersongames":[
    {
      "id":1,
      "category":"escapegame",
      "type": "In-Person",
       "title": "Escape From Alcatraz",
       "description": "You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
       "age":"All age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"escape-from-alcatraz",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-escape-from-alcatraz-game.jpg"
     },
     {
      "id":2,
      "category":"escapegame",
       "type": "In-Person",
       "title": "Treasure Island",
       "description": "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
       "age":"ll age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"treasure-island",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-treasure-island-game.jpg"
     },
     {
      "id":3,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Zombie Apocalypse",
      "description": "The zombification virus has mutated and it is up to you to save humanity! Double check your research and create an immunity chemical test!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"zombie-apocalypse",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-zombie-apocalypse-game.jpg"
     },
     {
      "id":4,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Sherlock's Library",
      "description": "London's top detective duo, Sherlock Holmes and Dr. John H. Watson, have been called upon to solve their next big case.",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"sherlocks-library",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-sherlocks-library-game.jpg"
     },
     
     {
      "id":5,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Black Ops",
      "description": "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"black-ops",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-black-ops-game.jpg"
     },
     {
      "id":6,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Superhero's Adventure",
      "description": "The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"superheros-adventure",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-superheros-Adventure-game.jpg"
     },
     {
      "id":7,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Houdini's Magic Cell",
      "description": "As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"houdinis-magic-cell",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-houdinis-magic-cell-game.jpg"
     },
    
     {
      "id":8,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Special Agent",
      "description": "After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"special-agent",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-special-agent-game.jpg"
     },
     {
      "id":9,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Hollywood Premiere",
      "description": "Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"hollywood-premiere",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-hollywood-premiere-game.jpg"
     }, 
     
      ],
  
  "events": [
    {
      "id":1,
      "category":"event",
       "type": "In-Person",
       "title": "BIRTHDAY PARTIES",
       "description": "A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
       "slug"  :"birthday-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-birthday-party.jpg"
     },
    {
      "id":2,
      "category":"event",
       "type": "In-Person",
       "title": "TEAM BUILDING",
       "description": "This fun and exciting interactive form of team building will bring your corporate team closer!",
       "slug"  :"team-building",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-team-building.jpg"
     },
     {
      "id":3,
      "category":"event",
       "type": "In-Person",
       "title": "CORPORATE EVENTS",
       "description": "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
       "slug"  :"corporate-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-corporate-events.jpg"
     },
     
     {
      "id":4,
      "category":"event",
       "type": "In-Person",
       "title": "FAMILY FUN ACTIVITIES",
       "description": "A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
       "slug"  :"family-fun-activity",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-family-fun-activities.jpg"
     },
     {
      "id":5,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelor Party",
       "description": "There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
       "slug"  :"bachelor-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelor-party.jpg"
     },
     {
      "id":6,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelorette Party",
       "description": "Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
       "slug"  :"bachelorette-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelorette-party.jpg"
     },
     {
      "id":7,
      "category":"event",
       "type": "In-Person",
       "title": "PROPOSAL PARTY",
       "description": "A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
       "slug"  :"proposal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-proposal-party.jpg"
     },
     {
      "id":8,
      "category":"event",
       "type": "In-Person",
       "title": "DATE NIGHT / NIGHT OUT",
       "description": "Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
       "slug"  :"date-night",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-date-night.jpg"
     },
     {
      "id":9,
      "category":"event",
       "type": "In-Person",
       "title": "Private Party",
       "description": "Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
       "slug"  :"private-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-private-party.jpg"
     },
     {
      "id":10,
      "category":"event",
       "type": "In-Person",
       "title": "Reunion Party",
       "description": "Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
       "slug"  :"reunion-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-reunion-party.jpg"
     },
     {
      "id":11,
      "category":"event",
       "type": "In-Person",
       "title": "Graduation Party",
       "description": "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
       "slug"  :"graduation-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-graduation-party.jpg"
     },
     
     {
      "id":12,
      "category":"event",
       "type": "In-Person",
       "title": "SCHOOL EVENTS / FIELD TRIPS",
       "description": "Students exercise critical thinking and act to become the super-spies they see in the movies!",
       "slug"  :"school-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-school-event.jpg"
     },
     {
      "id":13,
      "category":"event",
       "type": "In-Person",
       "title": "GENDER REVEAL PARTY",
       "description": "Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
       "slug"  :"gender-reveal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-gender-reveal-party-event.jpg"
     },


            ],

                },
//====================================================================roanoke-va end

//******************************************************************************************VA end==============================


//******************************************************************************************GA==============================
//=====================================================================lawrenceville-ga
"lawrenceville-ga":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-lawrenceville-ga-sugarloaf-mills-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-lawrenceville-ga-sugarloaf-mills-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-lawrenceville-ga-sugarloaf-mills-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
   "inpersongames":[
    {
      "id":1,
      "category":"escapegame",
      "type": "In-Person",
       "title": "Escape From Alcatraz",
       "description": "You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
       "age":"All age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"escape-from-alcatraz",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-escape-from-alcatraz-game.jpg"
     },
    
     {
      "id":2,
      "category":"escapegame",
       "type": "In-Person",
       "title": "Treasure Island",
       "description": "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
       "age":"ll age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"treasure-island",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-treasure-island-game.jpg"
     },
     {
      "id":3,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Zombie Apocalypse",
      "description": "The zombification virus has mutated and it is up to you to save humanity! Double check your research and create an immunity chemical test!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"zombie-apocalypse",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-zombie-apocalypse-game.jpg"
     },
     {
      "id":4,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Sherlock's Library",
      "description": "London's top detective duo, Sherlock Holmes and Dr. John H. Watson, have been called upon to solve their next big case.",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"sherlocks-library",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-sherlocks-library-game.jpg"
     },
     
     {
      "id":5,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Black Ops",
      "description": "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"black-ops",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-black-ops-game.jpg"
     },
     {
      "id":6,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Superhero's Adventure",
      "description": "The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"superheros-adventure",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-superheros-Adventure-game.jpg"
     },
     {
      "id":7,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Houdini's Magic Cell",
      "description": "As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"houdinis-magic-cell",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-houdinis-magic-cell-game.jpg"
     },
    
      ],
   "otherphysicalgames": [
    {

        "id":1,
        "category":"other",
        "type": "In-Person",
        "title": "Beat The Seat",
        "description": "It's a 2 minute fun filled, exhilarating experience where you will test your endurance, coordination and ability to think on your feet.",
        "age":"All age (6+)",
        "duration":"2",
        "maxplayers":"",
        "minplayers":"1",
        "price":"5",
        "slug"  :"beat-the-seat",
        "bgimg" :"/assets/all-game-slider-bg/allinadventures-beat-the-seat-game.jpg"
       },
      
      ],
  "events":             [
    {
      "id":1,
      "category":"event",
       "type": "In-Person",
       "title": "BIRTHDAY PARTIES",
       "description": "A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
       "slug"  :"birthday-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-birthday-party.jpg"
     },
    {
      "id":2,
      "category":"event",
       "type": "In-Person",
       "title": "TEAM BUILDING",
       "description": "This fun and exciting interactive form of team building will bring your corporate team closer!",
       "slug"  :"team-building",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-team-building.jpg"
     },
     {
      "id":3,
      "category":"event",
       "type": "In-Person",
       "title": "CORPORATE EVENTS",
       "description": "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
       "slug"  :"corporate-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-corporate-events.jpg"
     },
     
     {
      "id":4,
      "category":"event",
       "type": "In-Person",
       "title": "FAMILY FUN ACTIVITIES",
       "description": "A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
       "slug"  :"family-fun-activity",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-family-fun-activities.jpg"
     },
     {
      "id":5,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelor Party",
       "description": "There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
       "slug"  :"bachelor-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelor-party.jpg"
     },
     {
      "id":6,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelorette Party",
       "description": "Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
       "slug"  :"bachelorette-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelorette-party.jpg"
     },
     {
      "id":7,
      "category":"event",
       "type": "In-Person",
       "title": "PROPOSAL PARTY",
       "description": "A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
       "slug"  :"proposal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-proposal-party.jpg"
     },
     {
      "id":8,
      "category":"event",
       "type": "In-Person",
       "title": "DATE NIGHT / NIGHT OUT",
       "description": "Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
       "slug"  :"date-night",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-date-night.jpg"
     },
     {
      "id":9,
      "category":"event",
       "type": "In-Person",
       "title": "Private Party",
       "description": "Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
       "slug"  :"private-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-private-party.jpg"
     },
     {
      "id":10,
      "category":"event",
       "type": "In-Person",
       "title": "Reunion Party",
       "description": "Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
       "slug"  :"reunion-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-reunion-party.jpg"
     },
     {
      "id":11,
      "category":"event",
       "type": "In-Person",
       "title": "Graduation Party",
       "description": "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
       "slug"  :"graduation-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-graduation-party.jpg"
     },
     
     {
      "id":12,
      "category":"event",
       "type": "In-Person",
       "title": "SCHOOL EVENTS / FIELD TRIPS",
       "description": "Students exercise critical thinking and act to become the super-spies they see in the movies!",
       "slug"  :"school-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-school-event.jpg"
     },
     {
      "id":13,
      "category":"event",
       "type": "In-Person",
       "title": "GENDER REVEAL PARTY",
       "description": "Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
       "slug"  :"gender-reveal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-gender-reveal-party-event.jpg"
     },


   ],

                },
//====================================================================lawrenceville-ga end

//******************************************************************************************GA end==============================
//******************************************************************************************OH==============================
//=====================================================================columbus-oh
"columbus-oh":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-columbus-oh-polaris-fashion-place-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-columbus-oh-polaris-fashion-place-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-lawrenceville-ga-sugarloaf-mills-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
   "inpersongames":[
    {
      "id":1,
      "category":"escapegame",
      "type": "In-Person",
       "title": "Escape From Alcatraz",
       "description": "You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
       "age":"All age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"escape-from-alcatraz",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-escape-from-alcatraz-game.jpg"
     },
     {
      "id":2,
      "category":"escapegame",
       "type": "In-Person",
       "title": "Treasure Island",
       "description": "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
       "age":"ll age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"treasure-island",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-treasure-island-game.jpg"
     },
     
     {
      "id":4,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Sherlock's Library",
      "description": "London's top detective duo, Sherlock Holmes and Dr. John H. Watson, have been called upon to solve their next big case.",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"sherlocks-library",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-sherlocks-library-game.jpg"
     },
     
     {
      "id":5,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Black Ops",
      "description": "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"black-ops",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-black-ops-game.jpg"
     },
    
     {
      "id":7,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Houdini's Magic Cell",
      "description": "As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"houdinis-magic-cell",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-houdinis-magic-cell-game.jpg"
     },
      ],
   
  "events": [
    {
      "id":1,
      "category":"event",
       "type": "In-Person",
       "title": "BIRTHDAY PARTIES",
       "description": "A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
       "slug"  :"birthday-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-birthday-party.jpg"
     },
    {
      "id":2,
      "category":"event",
       "type": "In-Person",
       "title": "TEAM BUILDING",
       "description": "This fun and exciting interactive form of team building will bring your corporate team closer!",
       "slug"  :"team-building",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-team-building.jpg"
     },
     {
      "id":3,
      "category":"event",
       "type": "In-Person",
       "title": "CORPORATE EVENTS",
       "description": "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
       "slug"  :"corporate-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-corporate-events.jpg"
     },
     
     {
      "id":4,
      "category":"event",
       "type": "In-Person",
       "title": "FAMILY FUN ACTIVITIES",
       "description": "A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
       "slug"  :"family-fun-activity",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-family-fun-activities.jpg"
     },
     {
      "id":5,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelor Party",
       "description": "There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
       "slug"  :"bachelor-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelor-party.jpg"
     },
     {
      "id":6,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelorette Party",
       "description": "Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
       "slug"  :"bachelorette-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelorette-party.jpg"
     },
     {
      "id":7,
      "category":"event",
       "type": "In-Person",
       "title": "PROPOSAL PARTY",
       "description": "A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
       "slug"  :"proposal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-proposal-party.jpg"
     },
     {
      "id":8,
      "category":"event",
       "type": "In-Person",
       "title": "DATE NIGHT / NIGHT OUT",
       "description": "Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
       "slug"  :"date-night",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-date-night.jpg"
     },
     {
      "id":9,
      "category":"event",
       "type": "In-Person",
       "title": "Private Party",
       "description": "Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
       "slug"  :"private-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-private-party.jpg"
     },
     {
      "id":10,
      "category":"event",
       "type": "In-Person",
       "title": "Reunion Party",
       "description": "Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
       "slug"  :"reunion-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-reunion-party.jpg"
     },
     {
      "id":11,
      "category":"event",
       "type": "In-Person",
       "title": "Graduation Party",
       "description": "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
       "slug"  :"graduation-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-graduation-party.jpg"
     },
     
     {
      "id":12,
      "category":"event",
       "type": "In-Person",
       "title": "SCHOOL EVENTS / FIELD TRIPS",
       "description": "Students exercise critical thinking and act to become the super-spies they see in the movies!",
       "slug"  :"school-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-school-event.jpg"
     },
     {
      "id":13,
      "category":"event",
       "type": "In-Person",
       "title": "GENDER REVEAL PARTY",
       "description": "Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
       "slug"  :"gender-reveal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-gender-reveal-party-event.jpg"
     },


   ],

                },
//====================================================================columbus-oh end
//=====================================================================mentor-oh
"mentor-oh":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-mentor-oh-great-lakes-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-mentor-oh-great-lakes-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-mentor-oh-great-lakes-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
   "inpersongames":[
    {
      "id":1,
      "category":"escapegame",
      "type": "In-Person",
       "title": "Escape From Alcatraz",
       "description": "You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
       "age":"All age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"escape-from-alcatraz",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-escape-from-alcatraz-game.jpg"
     },
     {
      "id":2,
      "category":"escapegame",
       "type": "In-Person",
       "title": "Treasure Island",
       "description": "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
       "age":"ll age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"treasure-island",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-treasure-island-game.jpg"
     },
     {
      "id":3,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Zombie Apocalypse",
      "description": "The zombification virus has mutated and it is up to you to save humanity! Double check your research and create an immunity chemical test!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"zombie-apocalypse",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-zombie-apocalypse-game.jpg"
     },
     {
      "id":4,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Sherlock's Library",
      "description": "London's top detective duo, Sherlock Holmes and Dr. John H. Watson, have been called upon to solve their next big case.",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"sherlocks-library",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-sherlocks-library-game.jpg"
     },
     
     {
      "id":5,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Black Ops",
      "description": "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"black-ops",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-black-ops-game.jpg"
     },
     {
      "id":6,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Superhero's Adventure",
      "description": "The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"superheros-adventure",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-superheros-Adventure-game.jpg"
     },
     {
      "id":7,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Houdini's Magic Cell",
      "description": "As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"houdinis-magic-cell",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-houdinis-magic-cell-game.jpg"
     },
     {
      "id":9,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Hollywood Premiere",
      "description": "Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"hollywood-premiere",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-hollywood-premiere-game.jpg"
     }, 
     

      ],
   
  "events": [
    {
      "id":1,
      "category":"event",
       "type": "In-Person",
       "title": "BIRTHDAY PARTIES",
       "description": "A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
       "slug"  :"birthday-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-birthday-party.jpg"
     },
    {
      "id":2,
      "category":"event",
       "type": "In-Person",
       "title": "TEAM BUILDING",
       "description": "This fun and exciting interactive form of team building will bring your corporate team closer!",
       "slug"  :"team-building",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-team-building.jpg"
     },
     {
      "id":3,
      "category":"event",
       "type": "In-Person",
       "title": "CORPORATE EVENTS",
       "description": "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
       "slug"  :"corporate-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-corporate-events.jpg"
     },
     
     {
      "id":4,
      "category":"event",
       "type": "In-Person",
       "title": "FAMILY FUN ACTIVITIES",
       "description": "A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
       "slug"  :"family-fun-activity",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-family-fun-activities.jpg"
     },
     {
      "id":5,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelor Party",
       "description": "There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
       "slug"  :"bachelor-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelor-party.jpg"
     },
     {
      "id":6,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelorette Party",
       "description": "Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
       "slug"  :"bachelorette-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelorette-party.jpg"
     },
     {
      "id":7,
      "category":"event",
       "type": "In-Person",
       "title": "PROPOSAL PARTY",
       "description": "A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
       "slug"  :"proposal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-proposal-party.jpg"
     },
     {
      "id":8,
      "category":"event",
       "type": "In-Person",
       "title": "DATE NIGHT / NIGHT OUT",
       "description": "Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
       "slug"  :"date-night",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-date-night.jpg"
     },
     {
      "id":9,
      "category":"event",
       "type": "In-Person",
       "title": "Private Party",
       "description": "Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
       "slug"  :"private-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-private-party.jpg"
     },
     {
      "id":10,
      "category":"event",
       "type": "In-Person",
       "title": "Reunion Party",
       "description": "Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
       "slug"  :"reunion-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-reunion-party.jpg"
     },
     {
      "id":11,
      "category":"event",
       "type": "In-Person",
       "title": "Graduation Party",
       "description": "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
       "slug"  :"graduation-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-graduation-party.jpg"
     },
     
     {
      "id":12,
      "category":"event",
       "type": "In-Person",
       "title": "SCHOOL EVENTS / FIELD TRIPS",
       "description": "Students exercise critical thinking and act to become the super-spies they see in the movies!",
       "slug"  :"school-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-school-event.jpg"
     },
     {
      "id":13,
      "category":"event",
       "type": "In-Person",
       "title": "GENDER REVEAL PARTY",
       "description": "Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
       "slug"  :"gender-reveal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-gender-reveal-party-event.jpg"
     },


   ],

                },
//====================================================================mentor-oh end
//=====================================================================dayton-oh
"dayton-oh":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-dayton-oh-dayton-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-dayton-oh-dayton-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-dayton-oh-dayton-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
   "inpersongames":[
    {
      "id":1,
      "category":"escapegame",
      "type": "In-Person",
       "title": "Escape From Alcatraz",
       "description": "You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
       "age":"All age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"escape-from-alcatraz",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-escape-from-alcatraz-game.jpg"
     },
     {
      "id":2,
      "category":"escapegame",
       "type": "In-Person",
       "title": "Treasure Island",
       "description": "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
       "age":"ll age",
       "duration":"50",
       "maxplayers":"10",
       "minplayers":"2",
       "price":"29.89",
       "slug"  :"treasure-island",
       "bgimg" :"/assets/all-game-slider-bg/allinadventures-treasure-island-game.jpg"
     },
     {
      "id":3,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Zombie Apocalypse",
      "description": "The zombification virus has mutated and it is up to you to save humanity! Double check your research and create an immunity chemical test!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"zombie-apocalypse",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-zombie-apocalypse-game.jpg"
     },
     {
      "id":4,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Sherlock's Library",
      "description": "London's top detective duo, Sherlock Holmes and Dr. John H. Watson, have been called upon to solve their next big case.",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"sherlocks-library",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-sherlocks-library-game.jpg"
     },
     
     {
      "id":5,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Black Ops",
      "description": "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"black-ops",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-black-ops-game.jpg"
     },
     {
      "id":6,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Superhero's Adventure",
      "description": "The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"superheros-adventure",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-superheros-Adventure-game.jpg"
     },
     {
      "id":7,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Houdini's Magic Cell",
      "description": "As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"houdinis-magic-cell",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-houdinis-magic-cell-game.jpg"
     },
    
     {
      "id":8,
      "category":"escapegame",
      "type": "In-Person",
      "title": "Special Agent",
      "description": "After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
      "age":"all age",
      "duration":"50",
      "maxplayers":"10",
      "minplayers":"2",
      "price":"29.89",
      "slug"  :"special-agent",
      "bgimg" :"/assets/all-game-slider-bg/allinadventures-special-agent-game.jpg"
     },
      ],
  
  "events":[
    {
      "id":1,
      "category":"event",
       "type": "In-Person",
       "title": "BIRTHDAY PARTIES",
       "description": "A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
       "slug"  :"birthday-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-birthday-party.jpg"
     },
    {
      "id":2,
      "category":"event",
       "type": "In-Person",
       "title": "TEAM BUILDING",
       "description": "This fun and exciting interactive form of team building will bring your corporate team closer!",
       "slug"  :"team-building",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-team-building.jpg"
     },
     {
      "id":3,
      "category":"event",
       "type": "In-Person",
       "title": "CORPORATE EVENTS",
       "description": "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
       "slug"  :"corporate-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-corporate-events.jpg"
     },
     
     {
      "id":4,
      "category":"event",
       "type": "In-Person",
       "title": "FAMILY FUN ACTIVITIES",
       "description": "A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
       "slug"  :"family-fun-activity",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-family-fun-activities.jpg"
     },
     {
      "id":5,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelor Party",
       "description": "There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
       "slug"  :"bachelor-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelor-party.jpg"
     },
     {
      "id":6,
      "category":"event",
       "type": "In-Person",
       "title": "Bachelorette Party",
       "description": "Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
       "slug"  :"bachelorette-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelorette-party.jpg"
     },
     {
      "id":7,
      "category":"event",
       "type": "In-Person",
       "title": "PROPOSAL PARTY",
       "description": "A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
       "slug"  :"proposal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-proposal-party.jpg"
     },
     {
      "id":8,
      "category":"event",
       "type": "In-Person",
       "title": "DATE NIGHT / NIGHT OUT",
       "description": "Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
       "slug"  :"date-night",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-date-night.jpg"
     },
     {
      "id":9,
      "category":"event",
       "type": "In-Person",
       "title": "Private Party",
       "description": "Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
       "slug"  :"private-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-private-party.jpg"
     },
     {
      "id":10,
      "category":"event",
       "type": "In-Person",
       "title": "Reunion Party",
       "description": "Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
       "slug"  :"reunion-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-reunion-party.jpg"
     },
     {
      "id":11,
      "category":"event",
       "type": "In-Person",
       "title": "Graduation Party",
       "description": "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
       "slug"  :"graduation-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-graduation-party.jpg"
     },
     
     {
      "id":12,
      "category":"event",
       "type": "In-Person",
       "title": "SCHOOL EVENTS / FIELD TRIPS",
       "description": "Students exercise critical thinking and act to become the super-spies they see in the movies!",
       "slug"  :"school-events",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-school-event.jpg"
     },
     {
      "id":13,
      "category":"event",
       "type": "In-Person",
       "title": "GENDER REVEAL PARTY",
       "description": "Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
       "slug"  :"gender-reveal-party",
       "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-gender-reveal-party-event.jpg"
     },


   ],

                }
//====================================================================dayton-oh end

//******************************************************************************************OH end==============================
}