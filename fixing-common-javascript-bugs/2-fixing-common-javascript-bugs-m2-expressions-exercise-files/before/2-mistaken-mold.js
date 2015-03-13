function getResource(url, callbacks) {
    reqwest(url, function (response) {
        console.log("response", response);
        if (typeof callbacks === "array") {
            callbacks.forEach(function (callback) {
                callback(response);
            });
        } else {
            callbacks(response);
        }
    });
}

function callback1(data) { console.log("callback1", data) }
function callback2(data) { console.log("callback2", data) }

getResource("data.json", callback1);
getResource("data.json", [callback1, callback2]);
