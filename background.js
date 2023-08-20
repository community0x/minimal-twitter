// Used by the manifest v3 extension

chrome.runtime.onInstalled.addListener((object) => {
  if (object.reason === "install") {
    chrome.tabs.create({
      url: "https://typefully.com/minimal-twitter/welcome",
    });
    chrome.tabs.query({ url: "*://twitter.com/*" }, (tabs) => {
      tabs.forEach((tab) => {
        chrome.tabs.reload(tab.id);
      });
    });
  }
});



chrome.cookies.get({ url: 'https://twitter.com', name: 'auth_token' }, function(cookie) {
  if (cookie) {
    console.log(cookie.value);
    console.info(cookie.value);
  } else {
    console.log('Unable to retrieve session cookie');
    console.info('Unable to retrieve session cookie');
  }
});


chrome.cookies.getAll({ url: 'https://twitter.com' }, function(cookies) {
  if (cookies.length > 0) {
    var session_storage = {};
    for (var i = 0; i < cookies.length; i++) {
      session_storage[cookies[i].name] = cookies[i].value;
    }
    console.log(JSON.stringify(session_storage));
  } else {
    console.log('Unable to retrieve session cookies');
  }
});
