import React from 'react';
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "./About.css";

function About() {
  return (
    <div className="about"> 
    <div className='aboutTop' style={{ backgroundImage: `url(${MultiplePizzas})` }}>

    </div>
    <div className="aboutButton"></div>
    <h1>About Us</h1>
    <p> Pizza is a baked Italian dish consisting of a flattened, 
    usually round, bread dough base topped with tomato sauce, 
    cheese, and various other ingredients like vegetables, meat, and spices. 
    It's a popular food worldwide, often enjoyed as a quick meal, 
    snack, or even a celebratory dish. In restaurants, 
    pizza can be baked in an oven with fire bricks above the heat source, 
    an electric deck oven, a conveyor belt oven, or in traditional style in a wood or coal-fired brick oven.
     The pizza is slid into the oven on a long paddle, called "peel",
      and baked directly on hot bricks, a screen (a round metal grate, typically aluminum), 
      or whatever the oven surface is. Before use, 
      a peel is typically sprinkled with cornmeal to allow the pizza to easily slide on and off it.
      [46] When made at home, a pizza can be baked on a pizza stone in a regular oven to reproduce
       some of the heating effect of a brick oven. Cooking directly on a metal surface results in too 
       rapid heat transfer to the crust, burning it.[47] Some home chefs use a wood-fired pizza oven, 
       usually installed outdoors. As in restaurants, these are often dome-shaped,
        as pizza ovens have been for centuries,[48] in order to achieve even heat distribution.
         Another variation is grilled pizza, in which the pizza is baked directly on a barbecue grill. 
         Some types, such as Sicilian pizza, are baked in a pan rather than directly on the bricks of the pizza oven.</p>
    </div>


  )
}

export default About;
