document.addEventListener("DOMContentLoaded", function () {
  const buttonDaftar = document.querySelector(".custom-btn");

  buttonDaftar.addEventListener("click", function () {
    const nama = document.getElementById("input1").value;
    const email = document.getElementById("input2").value;
    const alamat = document.getElementById("input3").value;

    if (nama === "" || email === "" || alamat === "") {
      alert("Anda harus mengisi data dengan lengkap!");
    } else {
      alert("Pendaftaran berhasil!");
    }
  });
});
