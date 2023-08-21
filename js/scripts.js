function newItem() {
  //Adding a new item
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  if (inputValue === "") {
    alert("You must write something");
  } else {
    $("#list").append(li);
  }

  //Crossing out an item from the list of items
  function crossOut() {
    li.toggleClass("strike");
  }
  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });

  //Adding the delete X button
  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  //Adding the class delete from the css
  crossOutButton.on("click", deleteListItem);
  function deleteListItem() {
    li.addClass("delete");
  }

  //Reordering the items
  $("#list").sortable();
}
