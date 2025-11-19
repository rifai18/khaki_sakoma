function cariResep() {
  const input = document.getElementById("inputBahan").value.toLowerCase();
  const bahanUser = input.split(",").map((b) => b.trim());

  let hasil = [];

  // Cek kecocokan bahan
  dataResep.forEach((resep) => {
    let cocok = bahanUser.every((bahan) =>
      resep.bahan.some((item) => item.toLowerCase().includes(bahan))
    );

    if (cocok) hasil.push(resep);
  });

  // Tampilkan hasil
  const container = document.getElementById("hasil");
  container.innerHTML = "";

  if (hasil.length === 0) {
    container.innerHTML = "<p>Tidak ada resep yang cocok.</p>";
    return;
  }

  hasil.forEach((r) => {
    const div = document.createElement("div");
    div.className = "resep-card";
    div.innerHTML = `
            <h4>${r.nama}</h4>
            <p class="bahan"><b>Bahan:</b> ${r.bahan.join(", ")}</p>
            <p><b>Kategori:</b> ${r.kategori}</p>
            <p><b>Kesulitan:</b> ${r.tingkat}</p>
        `;
    container.appendChild(div);
  });
}
