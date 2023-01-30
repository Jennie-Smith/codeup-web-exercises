"use strict";
(async function (){
    function getGitHubCommit(){
        return fetch("data/docrob_github_events.json")
            .then((response) => response.json())
            .then((data) => {
                return data[0].created_at
            })
            .catch((error) => error)
    }
    let date = await getGitHubCommit();
    console.log("Last commit date: " + date)

    function wait(x){
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    resolve("yay it worked");
                } else {
                    reject("boo");
                }
            }, x);
        })
        return myPromise
    }
    // wait()
    // console.log(await wait(1000))
    // console.log(await wait(3000))
    wait(1000).then(() => console.log('You will see this after 1 second'));
    wait(3000).then(() => console.log('You will see this after 3 second'));

})()


