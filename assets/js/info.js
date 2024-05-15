$( function() {
    const countries = [
        "France",
        "Germany",
        "India",
        "Italy",
        "Japan",
        "Sweden",
        "Switzerland",
        "United Kingdom",
        "United States of America",
      ];
      
      var capitals = [
        "London",
        "Paris",
        "Stockholm",
        "Bern",
        "Tokyo",
        "Washington, D.C."
      ];
;
    $( "#country-input" ).autocomplete({
      source: countries
    });
    $( "#city-input").autocomplete({
        source: capitals
      });
  } );


