var testo = $("#text p").text();

$("#search").keyup(function(){
  
  var word = $(this).val();
  var sanitized_word = word.replace("[", "\\[");
  sanitized_word = sanitized_word.replace("]", "\\]");
  var RegEx = new RegExp(sanitized_word, "g");

  $("#text").html("<p>" + testo.replace(RegEx,"<span>" + word + "</span>") + "</p>");
});
