const king_name = ["Sennacherib", "Sargon", "Ashurbanipal", "Esarhaddon", "Ashurnasirpal", "Shalmaneser", "Tiglath-Pileser"];
const epithet_1 = ["foremost of all rulers", "the one who strikes enemies with lightning", "guardian of truth who loves justice", "great king", "strong king", "virile warrior", "favorite of the great gods", "the true shepherd who reorganized the confused people", "renewed the statues of the great gods", "beloved of the goddess Zarpanītu", "beloved of the god Marduk"];
const location = ["king of the world", "king of Assyria", "king of Sumer and Akkad", "king of the four quarters", "governor of Babylon"];

function RandomEpithets(){
    let kingNameInd = Math.floor(Math.random() * king_name.length);
    let epithetInd = Math.floor(Math.random() * epithet_1.length);
    let locationind = Math.floor(Math.random() * location.length);

    console.log(`${king_name[kingNameInd]+","} ${epithet_1[epithetInd]+","} ${location[locationind]}`)
}

RandomEpithets();