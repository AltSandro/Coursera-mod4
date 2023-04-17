(function () {
    let names = ["Yaakov","John","Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];
  
    for (let n = 0; n < names.length; n++) {
      let firstLetter = names[n].charAt(0).toLowerCase();
      if (firstLetter === "j") {
        byeSpeaker(names[n]);
      } else {
        helloSpeaker(names[n]);
      }
    }
  
  })();
  