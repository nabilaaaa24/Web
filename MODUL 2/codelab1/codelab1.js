function jumlah() {
  let input1 = parseInt(document.getElementById("input1").value);
  let input2 = parseInt(document.getElementById("input2").value);

  let hitung = input1 + input2;
  alert("Hasil Penjumlahan = " + hitung);
}

function ulang() {
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
}
