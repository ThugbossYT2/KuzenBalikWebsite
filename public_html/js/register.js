const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const errorMessage = document.getElementById("passwordError");

passwordInput.addEventListener("input", checkPasswordMatch);
confirmPasswordInput.addEventListener("input", checkPasswordMatch);

function checkPasswordMatch() {
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  if (password === confirmPassword) {
    errorMessage.style.display = "none";
  } else {
    errorMessage.style.display = "block";
  }
}
function ilceGetir() {
  var ilSecilen = document.getElementById("il").value;
  var ilceSec = document.getElementById("ilce");
  ilceSec.innerHTML = "";

  if (ilSecilen == "Antalya") {
    var antalyaIlceler = [
      "Alanya",
      "Elmalı",
      "Finike",
      "Gazipaşa",
      "Gündoğmuş",
      "İbradı",
      "Demre",
      "Kaş",
      "Kemer",
      "Korkuteli",
      "Kumluca",
      "Manavgat",
      "Serik",
      "Muratpaşa",
      "Konyaaltı",
      "Aksu",
      "Döşemealtı",
      "Kepez",
    ];
    for (var i = 0; i < antalyaIlceler.length; i++) {
      var option = document.createElement("option");
      option.text = antalyaIlceler[i];
      option.value = antalyaIlceler[i];
      ilceSec.appendChild(option);
    }
  } else if (ilSecilen == "istanbul") {
    var istanbulIlceler = [
      "Arnavutköy",
      "Avcılar",
      "Bağcılar",
      "Bahçelievler",
      "Bakırköy",
      "Başakşehir",
      "Bayrampaşa",
      "Beşiktaş",
      "Beylikdüzü",
      "Beyoğlu",
      "Büyükçekmece",
      "Çatalca",
      "Esenler",
      "Esenyurt",
      "Eyüpsultan",
      "Fatih",
      "Gaziosmanpaşa",
      "Güngören",
      "Kâğıthane",
      "Küçükçekmece",
      "Sarıyer",
      "Silivri",
      "Sultangazi",
      "Şişli",
      "Zeytinburnu",
      "Adalar",
      "Ataşehir",
      "Beykoz",
      "Çekmeköy",
      "Kadıköy",
      "Kartal",
      "Maltepe",
      "Pendik",
      "Sancaktepe",
      "Sultanbeyli",
      "Şile",
      "Tuzla",
      "Ümraniye",
      "❤Üsküdar❤",
    ];
    for (var i = 0; i < istanbulIlceler.length; i++) {
      var option = document.createElement("option");
      option.text = istanbulIlceler[i];
      option.value = istanbulIlceler[i];
      ilceSec.appendChild(option);
    }
  }
}
