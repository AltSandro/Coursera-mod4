(function (window) {
    let speakWord = "Hello";
    let helloSpeaker = function (name) {
      console.log(speakWord + ` ` + name);
    };
    window.helloSpeaker = helloSpeaker;
  })(window);
  