// Make sure we wait to attach our handlers until the DOM is fully loaded.
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
        // Reload the page to get the updated list
        location.reload();
      });
    });
  
    $(".create-form").on("submit", (event) => {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      
      const newBurger = {
        name: $("#inputBurger").val().trim(),
        // devoured: $("[name=devoured]").val(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(() => {
        console.log(newBurger);
        // Reload the page to get the updated list
        location.reload();
      });
    });
  
    // $(".delete-cat").on("click", function () {
    //   const id = $(this).data("id");
  
    //   // Send the DELETE request.
    //   $.ajax(`/api/cats/${id}`, {
    //     type: "DELETE",
    //   }).then(() => {
    //     // Reload the page to get the updated list
    //     location.reload();
    //   });
    // });
  });
  