const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const lang = users.filter(function(person){
    if (person.languages.length > 2) {
        return true
    } else {
        return false
    }
})
console.log(lang)

const emailAddress = users.map(function(user){
    return user.email
})
console.log("Array of emails" + emailAddress.join(" "))

const years = users.reduce(function(sum, user){
    return sum + user.yearsOfExperience
}, 0)
// console.log("years total: " + years)
console.log("years average: " + (years/5))

const longestEmail = users.reduce(function(longest, user){
    if (user.email.length > longest) {
        return user.email
    } else {
        return longest
    }
}, "")
console.log("Longest Email: " + longestEmail);

const userNames = users.reduce(function(names, user){
    return names + " " + user.name
}, "")
console.log("Their names are:" + userNames)