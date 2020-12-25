function popup(){
    email1 = document.getElementById("email1").value;
    Ksandi = document.getElementById("Ksandi").value;
      if (email1 =="" && Ksandi==""){alert("Email dan Kata Sandi Tidak Boleh Kosong! Silahkan Lengkapi Data Login Terlebih Dahulu");}
      else if (email1==""){alert("Silahkan Isi Email Anda Terlebih Dahulu!");}
      else if (Ksandi==""){alert("Silahkan Isi Kata Sandi Anda Terlebih Dahulu!");}
      else{alert("Selamat Anda Berhasil Masuk! Dengan Data"+
      "\n Email         : " + email1 + 
      "\n Kata Sandi    : " + Ksandi );}}