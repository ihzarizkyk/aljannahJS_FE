const contentData = {
    saranaprasarana: `<iframe width="1000" height="1000" src="http://sarpras.raudlatuljannah.sch.id/" allowfullscreen></iframe>`,
    sdm: `<iframe width="1000" height="1000" src="https://sdm.raudlatuljannah.sch.id/login.php" allowfullscreen></iframe>`,
    elearning: `<iframe width="1000" height="1000" src="https://lms.raudlatuljannah.com/login" allowfullscreen></iframe>`,
    esurat: `<iframe width="1000" height="1000" src="https://e-surat.raudlatuljannah.com/" allowfullscreen></iframe>`,
    earsip: `<iframe width="1000" height="1000" src="https://e-arsip.raudlatuljannah.com/" allowfullscreen></iframe>`,
    pusattumbuhkembang: `<iframe width="1000" height="1000" src="https://ptk.raudlatuljannah.com/" allowfullscreen></iframe>`,
    raporpreschool: `<iframe width="1000" height="1000" src="https://raportps.raudlatuljannah.com/" allowfullscreen></iframe>`,
    raporsd1: `<iframe width="1000" height="1000" src="https://raport-sd-01.raudlatuljannah.com/" allowfullscreen></iframe>`,
    raporsd2: `<iframe width="1000" height="1000" src="https://raport-sd-02.raudlatuljannah.com/" allowfullscreen></iframe>`,
    raporsmp: `<iframe width="1000" height="1000" src="https://raportsmp.raudlatuljannah.com/" allowfullscreen></iframe>`,
    raporsma: `<iframe width="1000" height="1000" src="http://103.76.27.34:7080/" allowfullscreen></iframe>`,
    absensisiswa: `<iframe width="1000" height="1000" src="https://absensisiswa.raudlatuljannah.sch.id/" allowfullscreen></iframe>`,
    perpustakaan: `<iframe width="1000" height="1000" src="https://aljannah.raudlatuljannah.sch.id/#" allowfullscreen></iframe>`,
    ppdb: `<iframe width="1000" height="1000" src="https://ppdb.raudlatuljannah.com/" allowfullscreen></iframe>`,
    kesiswaan: `<iframe width="1000" height="1000" src="https://kesiswaan.raudlatuljannah.sch.id/" allowfullscreen></iframe>`
  };

  const menuItems = document.querySelectorAll('#menu-item');
  const contentDiv = document.getElementById('content');

  menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
      const selectedContent = event.target.getAttribute('data-content');
      contentDiv.innerHTML = contentData[selectedContent];
    });
  });