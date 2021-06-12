function chairRelease(time) {
    //fetch('/chairRelease').then(status => console.log(status));

    var content = {
        "time": time
    }

      fetch('/chairRelease', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
      })
}