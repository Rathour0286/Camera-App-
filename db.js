//connect to database
let db;
let openRequest = indexedDB.open('myDatabase'); /* we give a name to our db and second arg which is the version of db is optional.by default if no verion */
let a = 123;
openRequest.addEventListener('success', () => {  /* first type of event that trigered on opening request */
    console.log('db connected'); 
    db = openRequest.result;
})

openRequest.addEventListener("upgradeneeded", () => {   /* second type of event that trigered on two time db upgraded OR initalised db 
when we first time visit or when we upgrade on it   */
    console.log("db upgraded OR initalised db ");
    db = openRequest.result;

    db.createObjectStore('video', { keyPath: "id" });
    db.createObjectStore("image", { keyPath: "id" });
});

openRequest.addEventListener("error", () => {
    console.log("db error");
});