$(document).ready(function () {
  const passwordInput = $("#password");
  const confirmPasswordInput = $("#confirmPassword");
  const errorMessage = $("#passwordError");

  passwordInput.on("input", checkPasswordMatch);
  confirmPasswordInput.on("input", checkPasswordMatch);

  function checkPasswordMatch() {
    const password = passwordInput.val().trim();
    const confirmPassword = confirmPasswordInput.val().trim();

    if (password === confirmPassword) {
      errorMessage.css("display", "none");
    } else {
      errorMessage.css("display", "block");
    }
  }

  $("#il").change(function () {
    var ilSecilen = $(this).val();
    var ilceSec = $("#ilce");
    ilceSec.empty();

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
        "Kepez"
      ];
      for (var i = 0; i < antalyaIlceler.length; i++) {
        ilceSec.append(
          $("<option>", {
            value: antalyaIlceler[i],
            text: antalyaIlceler[i]
          })
        );
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
        "👽Üsküdar👽"
      ];
      for (var i = 0; i < istanbulIlceler.length; i++) {
        ilceSec.append(
          $("<option>", {
            value: istanbulIlceler[i],
            text: istanbulIlceler[i]
          })
        );
      }
    }
  });
});
