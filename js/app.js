$(document).ready(function() {
    $("#formWeb").submit(function(event) {
      const food = $("#food").val();
      const color = $("#color").val();
      const drink = $("#drink").val();
      const person = $("#person").val();
      const subject = $("#subject").val();
      const course = $("#course").val();
  
      $(".food").text(food);
      $(".color").text(color);
      $(".drink").text(drink);
      $(".person").text(person);
      $(".subject").text(subject);
      $(".course").text(course);

      console.log(food);
      console.log(color);
      console.log(drink);
      console.log(person);
      console.log(subject);
      console.log(course);


      let favThings = ["food", "color", "drink", "person", "subject", "course" ];
      let firstThing = favThings[0];
      let secondThing = favThings[1];
      let thirdThing = favThings[2];

      console.log(favThings);
      console.log(firstThing);
      console

  
      event.preventDefault();
    });
  });