(function (window) {
    let speakWord = `Good Bye`;
    let byeSpeaker = function (name) {
      console.log(speakWord + " " + name);
    };
    window.byeSpeaker = byeSpeaker;
  })(window);
  