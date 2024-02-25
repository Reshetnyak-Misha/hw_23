function getHours(minute) {
    if (!isNaN(minute) && (minute < 6000)) {
        let hour = Math.floor(minute / 60);
        let minutes = minute % 60;
        alert(`Hours: ${hour}, minutes: ${minutes}`)
    } else {
        alert("Enter corrent value pls");
    }
}
const minute = prompt("Min:");
getHours(minute);
