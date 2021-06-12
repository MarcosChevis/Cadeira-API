function chairRelease(time) {
    //fetch('/chairRelease').then(status => console.log(status));

    fetch("/chairRelease", {
        method: "POST",
        body: time
      });
}