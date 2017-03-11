function getRadioVal(radios) {
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
          // do whatever you want with the checked radio
          return (radios[i].value);

          // only one radio can be logically checked, don't check the rest
          break;
      } else {
          return '#';
      }
  }
}

function readyDownload(obj) {
  var json = JSON.stringify(obj);
  var blob = new Blob([json], {type: "application/json"});
  var url  = URL.createObjectURL(blob);

  var a = document.getElementsByTagName('a')[0];
  a.download    = obj.team_number + "_match" + obj.match_number + ".json";
  a.href        = url;
  a.textContent = "Download is ready!";
}

function getAllForms() {
  var DATA = {
    team_number: "#",
    match_number: "#",
    auto: { auto_high_shot: "#", auto_low_shot: "#", auto_gear: "#", cross_line: "#" },
    tele: { tele_high_shot: "#", tele_low_shot: "#", tele_gear: "#", climb: "#" },
    comments: "#"
  };
  DATA.team_number         = document.getElementById("team_number")[0].value || '#';
  DATA.match_number        = document.getElementById("match_number")[0].value || '#';
  DATA.auto.auto_high_shot = document.getElementById("auto_high_shot")[0].value || '#';
  DATA.auto.auto_low_shot  = document.getElementById("auto_low_shot")[0].value || '#';
  DATA.auto.auto_gear      = document.getElementById("auto_gear")[0].value || '#';
  DATA.auto.cross_line     = getRadioVal(document.getElementById("cross_line"));
  DATA.tele.tele_high_shot = document.getElementById("tele_high_shot")[0].value || '#';
  DATA.tele.tele_low_shot  = document.getElementById("tele_low_shot")[0].value || '#';
  DATA.tele.tele_gear      = document.getElementById("tele_gear")[0].value || '#';
  DATA.tele.climb          = getRadioVal(document.getElementById("climb"));
  DATA.comments            = document.getElementById("comments")[0].value || '#';
  readyDownload(DATA);
}
