function tampilkan(){
    email = document.getElementById("email").value;
    Username = document.getElementById("Username").value;
    namaL = document.getElementById("namaL").value;
    Ksandi = document.getElementById("Ksandi").value;
    konfirmasi = document.getElementById("konfirmasi").value;
    alamat = document.getElementById("alamat").value;
    jenisK = document.getElementById("jenisK").value;
      if (email =="" && Username =="" && namaL=="" && Ksandi=="" && konfirmasi=="" && alamat=="" && jenisK ==""){alert("Data Diri Tidak Boleh Kosong! Silahkan Lengkapi Data Diri Anda Terlebih Dahulu!");}
      else if (email==""){alert("Silahkan Lengkapi Data Diri yang Belum Diisi");}
      else if (Username==""){alert("Silahkan Lengkapi Data Diri yang Belum Diisi");}
      else if (namaL==""){alert("Silahkan Lengkapi Data Diri yang Belum Diisi");}
      else if (Ksandi==""){alert("Silahkan Lengkapi Data Diri yang Belum Diisi");}
      else if (konfirmasi==""){alert("Silahkan Lengkapi Data Diri yang Belum Diisi");}
      else if (konfirmasi!=Ksandi){alert("Konfirmasi Kata Sandi Anda Salah! Silahkan Cocokkan dengan Kata Sandi yang Telah Anda Isikan Sebelumnya");}
      else if (alamat==""){alert("Silahkan Lengkapi Data Diri yang Belum Diisi");}
      else if (jenisK==""){alert("Silahkan Lengkapi Data Diri yang Belum Diisi");}
      else{alert("Selamat Anda Berhasil Mendaftar! Dengan Data"+
      "\n Email         : " + email + 
      "\n Username      : " + Username +
      "\n Nama          : " + namaL + 
      "\n Kata Sandi    : " + Ksandi + 
      "\n Alamat        : " + alamat +
      "\n Jenis Kelamin : " + jenisK);}}