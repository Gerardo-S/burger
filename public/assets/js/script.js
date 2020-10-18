
$(() => {


  $(".change-devour").on("click", function () {
    const id = $(this).data("id");
    const newDevour = $(this).data("newdevour");
    console.log("newdevour: " + newDevour);
    const newDevourState = { value: newDevour };

    // Send the PUT request.
    $.ajax(`/api/burgers/${id}/devoured`, {
      type: "PUT",
      // Convert object to JSON
      data: JSON.stringify(newDevourState),

      // Tell the server that this request contains JSON
      contentType: "application/json; charset=UTF-8",
    }).then(() => {

      location.reload();
    });
  });

  // Once submit button is clicked a new burger list item is generated
  $(".create-form").on("submit", (event) => {
      event.preventDefault();

    const newBurger = {
      name: $("#inputBurger").val().trim(),

    };
    
    if (newBurger.name == "") {
      alert("Input was left blank or an invalid. Please enter a correct burger name")
      return false;
    } 
    else {
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(() => {
        console.log(newBurger);
        location.reload();
      });
    }

  });
// Delete all devoured burgers
  $(".reset").on("click", function () {
     $.ajax(`/api/burgers`, {
      type: "DELETE",
    }).then(() => {
      location.reload();
    });
  });
});
