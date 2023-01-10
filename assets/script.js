var formEl = document.querySelector('')
var searchHandl 
var inputText
var formatTypes = ["maps", "audio", "photos", "manuscripts", "newspapers",
"film-and-videos", "notated-music", "websites"];



var getResources = function () {
    var apiUrl = 'https://www.loc.gov/search/?q=' + searchHandl + '&fo=json';
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          console.log(response);
          response.json().then(function (data) {
            console.log(data);
            displayRepos(data, searchHandl);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to LoC');
      });
  };