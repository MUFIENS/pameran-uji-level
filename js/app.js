/* ==============================
   DATA — PROJECTS DUMMY
   ============================== */
const PROJECTS = [
  {
    id: 1,
    name: "SiKasir — Sistem Kasir Digital",
    team: "Tim Alpha",
    kelas: "X PPLG 1",
    kategori: "Manajemen Bisnis",
    desc: "Aplikasi kasir berbasis web yang memudahkan pencatatan transaksi penjualan, pengelolaan stok barang, dan laporan keuangan harian secara digital dan efisien.",
    descLong:
      "SiKasir adalah sistem kasir digital yang dirancang untuk membantu pelaku usaha kecil dan menengah dalam mengelola transaksi penjualan secara lebih terorganisir. Aplikasi ini menyediakan fitur input produk, pencatatan transaksi real-time, pengelolaan stok otomatis, dan laporan keuangan harian yang dapat dicetak.",
    tujuan:
      "Mempermudah pengelolaan keuangan usaha kecil dan menengah melalui sistem digital yang mudah digunakan tanpa memerlukan pelatihan khusus.",
    anggota: [
      { nama: "Aldi Firmansyah", peran: "Full Stack Developer" },
      { nama: "Bunga Pertiwi", peran: "UI/UX Designer" },
      { nama: "Cahyo Nugroho", peran: "Backend Developer" },
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    demo: "#",
    github: "https://github.com",
    color: "#0D3B66",
  },
  {
    id: 2,
    name: "PerpusDigi — Sistem Perpustakaan",
    team: "Tim Beta",
    kelas: "X PPLG 1",
    kategori: "Pendidikan",
    desc: "Sistem manajemen perpustakaan digital untuk pencatatan peminjaman buku, katalog koleksi, dan notifikasi pengembalian secara otomatis.",
    descLong:
      "PerpusDigi hadir sebagai solusi digitalisasi perpustakaan sekolah. Sistem ini memungkinkan petugas perpustakaan mencatat peminjaman dan pengembalian buku secara digital, mengelola katalog koleksi buku, serta mengirim notifikasi kepada peminjam yang belum mengembalikan buku tepat waktu.",
    tujuan:
      "Memodernisasi sistem perpustakaan sekolah agar lebih efisien, akurat, dan mudah diakses oleh seluruh warga sekolah.",
    anggota: [
      { nama: "Dian Rahayu", peran: "Frontend Developer" },
      { nama: "Eko Saputra", peran: "Backend Developer" },
      { nama: "Fitri Handayani", peran: "Database Designer" },
    ],
    tech: ["HTML", "CSS", "PHP", "MySQL", "Bootstrap"],
    demo: "#",
    github: "",
    color: "#1A5496",
  },
  {
    id: 3,
    name: "TokoKu — Platform E-Commerce",
    team: "Tim Gamma",
    kelas: "X PPLG 2",
    kategori: "E-Commerce",
    desc: "Platform jual beli online sederhana dengan fitur katalog produk, keranjang belanja, manajemen pesanan, dan sistem pembayaran terintegrasi.",
    descLong:
      "TokoKu adalah platform e-commerce yang memungkinkan penjual mendaftarkan produk dan pembeli melakukan transaksi secara online. Dilengkapi dengan fitur katalog produk berfilter, keranjang belanja, proses checkout, manajemen pesanan, serta halaman admin untuk monitoring penjualan.",
    tujuan:
      "Memberikan pengalaman berbelanja online yang mudah dan aman bagi pengguna serta membantu UMKM memasarkan produk secara digital.",
    anggota: [
      { nama: "Gilang Ramadan", peran: "Project Manager" },
      { nama: "Hani Safitri", peran: "Frontend Developer" },
      { nama: "Irvan Setiawan", peran: "Backend Developer" },
      { nama: "Jihan Aulia", peran: "UI Designer" },
    ],
    tech: ["HTML", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
    demo: "#",
    github: "https://github.com",
    color: "#2B6CB0",
  },
  {
    id: 4,
    name: "PresenSi — Sistem Absensi Siswa",
    team: "Tim Delta",
    kelas: "X PPLG 2",
    kategori: "Pendidikan",
    desc: "Sistem absensi siswa berbasis web dengan fitur rekapitulasi kehadiran, laporan per kelas, dan dashboard monitoring bagi guru dan wali kelas.",
    descLong:
      "PresenSi adalah sistem absensi digital yang menggantikan pencatatan manual dengan solusi berbasis web. Guru dapat mencatat kehadiran siswa dengan cepat, sementara wali kelas dan kepala sekolah dapat memantau rekap kehadiran secara real-time melalui dashboard yang informatif.",
    tujuan:
      "Meningkatkan efisiensi pencatatan kehadiran siswa dan menyediakan data kehadiran yang akurat dan mudah diakses oleh seluruh pihak sekolah.",
    anggota: [
      { nama: "Kevin Pratama", peran: "Full Stack Developer" },
      { nama: "Layla Husna", peran: "UI/UX Designer" },
      { nama: "Mahendra Putra", peran: "Backend Developer" },
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    demo: "#",
    github: "https://github.com",
    color: "#0D3B66",
  },
  {
    id: 5,
    name: "ProfilKu — Website Company Profile",
    team: "Tim Epsilon",
    kelas: "X PPLG 1",
    kategori: "Company Profile",
    desc: "Website company profile modern untuk UMKM lokal yang menampilkan profil perusahaan, layanan, portofolio, dan kontak secara profesional.",
    descLong:
      "ProfilKu adalah template company profile yang dirancang khusus untuk UMKM lokal yang ingin memiliki kehadiran profesional di internet. Website ini menampilkan halaman Beranda, Tentang Kami, Layanan, Portofolio, dan Hubungi Kami dengan desain yang modern, responsif, dan mudah dikustomisasi.",
    tujuan:
      "Membantu UMKM lokal memiliki website company profile yang profesional sebagai sarana promosi dan meningkatkan kepercayaan pelanggan.",
    anggota: [
      { nama: "Nanda Kurniawan", peran: "Frontend Developer" },
      { nama: "Olivia Maharani", peran: "UI/UX Designer" },
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    github: "",
    color: "#1A5496",
  },
  {
    id: 6,
    name: "NilaiKu — Sistem Manajemen Nilai",
    team: "Tim Zeta",
    kelas: "X PPLG 2",
    kategori: "Pendidikan",
    desc: "Aplikasi pengelolaan nilai siswa berbasis web yang memudahkan guru dalam input nilai, perhitungan rata-rata, dan pembuatan rapor digital.",
    descLong:
      "NilaiKu membantu guru mengelola nilai siswa secara digital dari mulai input nilai harian, UTS, hingga UAS. Sistem ini secara otomatis menghitung rata-rata nilai, menampilkan grafik perkembangan belajar siswa, dan menghasilkan laporan nilai yang siap dicetak.",
    tujuan:
      "Mempermudah guru dalam pengelolaan nilai dan memberikan informasi perkembangan belajar siswa yang transparan kepada orang tua.",
    anggota: [
      { nama: "Putri Amallia", peran: "Full Stack Developer" },
      { nama: "Qori Abdurrahman", peran: "Database Designer" },
      { nama: "Rina Salsabila", peran: "UI Designer" },
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    demo: "#",
    github: "https://github.com",
    color: "#2B6CB0",
  },
];

const KATEGORI_LIST = ["Semua", ...new Set(PROJECTS.map((p) => p.kategori))];
const KELAS_LIST = ["Semua Kelas", ...new Set(PROJECTS.map((p) => p.kelas))];

/* ==============================
   APP STATE
   ============================== */
let currentPage = "home";
let searchQuery = "";
let filterKategori = "Semua";
let filterKelas = "Semua Kelas";
let currentProjectId = null;

/* ==============================
   ROUTER
   ============================== */
function navigate(page, projectId = null) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById("page-" + page)?.classList.add("active");

  document.querySelectorAll(".navbar__link").forEach((l) => {
    l.classList.toggle("active", l.dataset.page === page);
  });

  currentPage = page;

  if (page === "projects") renderProjects();
  if (page === "detail" && projectId) {
    currentProjectId = projectId;
    renderDetail(projectId);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
  closeMobileNav();
}

/* ==============================
   NAVBAR
   ============================== */
function initNavbar() {
  document.querySelectorAll("[data-page]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      navigate(el.dataset.page);
    });
  });

  document.getElementById("navToggle").addEventListener("click", () => {
    document.getElementById("mobileNav").classList.toggle("open");
  });
}

function closeMobileNav() {
  document.getElementById("mobileNav").classList.remove("open");
}

/* ==============================
   HOME PAGE
   ============================== */
function renderHome() {
  // Recent projects (first 3)
  const recent = PROJECTS.slice(0, 3);
  const grid = document.getElementById("recentGrid");
  if (grid) grid.innerHTML = recent.map((p) => cardHTML(p)).join("");
}

/* ==============================
   PROJECTS PAGE
   ============================== */
function renderProjects() {
  const filtered = PROJECTS.filter((p) => {
    const q = searchQuery.toLowerCase();
    const matchQ =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.team.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q);
    const matchK = filterKategori === "Semua" || p.kategori === filterKategori;
    const matchKl = filterKelas === "Semua Kelas" || p.kelas === filterKelas;
    return matchQ && matchK && matchKl;
  });

  const grid = document.getElementById("projectsGrid");
  const info = document.getElementById("resultsInfo");

  if (info)
    info.innerHTML = `Menampilkan <strong>${filtered.length}</strong> dari ${PROJECTS.length} project`;

  if (grid) {
    if (filtered.length === 0) {
      grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1">
        <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 6.15 6.15a7.5 7.5 0 0 0 10.5 10.5z"/></svg>
        <h3>Project tidak ditemukan</h3>
        <p>Coba ubah kata kunci atau filter pencarian Anda.</p>
      </div>`;
    } else {
      grid.innerHTML = filtered.map((p) => cardHTML(p)).join("");
    }
  }

  // Bind detail buttons
  document.querySelectorAll(".js-detail").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      navigate("detail", parseInt(btn.dataset.id));
    });
  });
}

function initFilters() {
  // Search
  const searchEl = document.getElementById("searchInput");
  if (searchEl) {
    searchEl.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderProjects();
    });
  }

  // Kategori buttons
  const kGroup = document.getElementById("kategoriGroup");
  if (kGroup) {
    kGroup.innerHTML = KATEGORI_LIST.map(
      (k) =>
        `<button class="filter-btn ${k === filterKategori ? "active" : ""}" data-kat="${k}">${k}</button>`,
    ).join("");
    kGroup.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        filterKategori = btn.dataset.kat;
        kGroup
          .querySelectorAll(".filter-btn")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderProjects();
      });
    });
  }

  // Kelas select
  const kelasEl = document.getElementById("kelasFilter");
  if (kelasEl) {
    kelasEl.innerHTML = KELAS_LIST.map(
      (k) => `<option value="${k}">${k}</option>`,
    ).join("");
    kelasEl.addEventListener("change", (e) => {
      filterKelas = e.target.value;
      renderProjects();
    });
  }
}

/* ==============================
   CARD HTML
   ============================== */
function cardHTML(p) {
  const techTags = p.tech
    .map((t) => `<span class="tech-tag">${t}</span>`)
    .join("");
  return `
    <div class="card">
      <div class="card__thumb-placeholder">
        <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.4" viewBox="0 0 24 24" color="#1A5496">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <path stroke-linecap="round" d="M8 21h8M12 17v4"/>
        </svg>
        <span>${p.kelas}</span>
      </div>
      <div class="card__body">
        <div class="card__meta">
          <span class="badge badge--blue">${p.kategori}</span>
          <span class="badge badge--gray">${p.kelas}</span>
        </div>
        <div class="card__title">${p.name}</div>
        <div class="card__team">
          <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="display:inline;vertical-align:middle;margin-right:4px">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
            <circle cx="9" cy="7" r="4"/>
          </svg>
          ${p.team} &bull; ${p.anggota.length} anggota
        </div>
        <div class="card__desc">${p.desc}</div>
        <div class="card__tech">${techTags}</div>
        <div class="card__footer">
          <button class="btn btn-primary btn-sm js-detail" data-id="${p.id}" style="width:100%;justify-content:center">
            Lihat Detail
            <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>`;
}

/* ==============================
   DETAIL PAGE
   ============================== */
function renderDetail(id) {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) return;

  document.getElementById("detailTitle").textContent = p.name;
  document.getElementById("detailTeam").textContent = `${p.team} · ${p.kelas}`;
  document.getElementById("detailBadge").textContent = p.kategori;

  document.getElementById("detailDesc").textContent = p.descLong;
  document.getElementById("detailTujuan").textContent = p.tujuan;

  // Tech
  document.getElementById("detailTech").innerHTML = p.tech
    .map((t) => `<span class="tech-tag">${t}</span>`)
    .join("");

  // Members
  document.getElementById("detailMembers").innerHTML = p.anggota
    .map(
      (m) => `
    <div class="member-item">
      <div class="member-avatar">${m.nama
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("")}</div>
      <div>
        <div class="member-name">${m.nama}</div>
        <div class="member-role">${m.peran}</div>
      </div>
    </div>`,
    )
    .join("");

  // Links
  const linksEl = document.getElementById("detailLinks");
  linksEl.innerHTML = `
    <a href="${p.demo}" class="detail-link" target="_blank">
      <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
      Lihat Demo Website
    </a>
    ${
      p.github
        ? `<a href="${p.github}" class="detail-link" target="_blank">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
      Lihat di GitHub
    </a>`
        : ""
    }
  `;
}

/* ==============================
   INIT
   ============================== */
document.addEventListener("DOMContentLoaded", () => {
  // Stats
  document.getElementById("statTim").textContent = PROJECTS.length;
  document.getElementById("statProject").textContent = PROJECTS.length;
  document.getElementById("statSiswa").textContent = PROJECTS.reduce(
    (acc, p) => acc + p.anggota.length,
    0,
  );

  initNavbar();
  initFilters();
  renderHome();
  navigate("home");

  // "Lihat Semua Project" on home
  document.querySelectorAll(".js-goto-projects").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      navigate("projects");
    });
  });
});
