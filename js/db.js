let db;
const request = indexedDB.open("AndroWebFS", 1);

request.onupgradeneeded = function(event) {
  db = event.target.result;
  db.createObjectStore("files", { keyPath: "filename" });
};

request.onsuccess = function(event) {
  db = event.target.result;
  console.log("IndexedDB initialized");
};

request.onerror = function(event) {
  console.error("DB error:", event.target.errorCode);
};
