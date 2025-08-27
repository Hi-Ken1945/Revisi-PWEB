import babal from "./assets/gw.jpg";

import "./style.css";

function App() {
  return (
    <>
      <header className="main-header">
        <h1>Halo, Aku Balya</h1>
        <p>Siswa | -1 Device</p>
      </header>

      <nav className="navbar">
        <ul>
          <li><a href="#about">Tentang</a></li>
          <li><a href="#projects">Proyek</a></li>
          <li><a href="#skills">Keahlian</a></li>
          <li><a href="#contact">Kontak</a></li>
        </ul>
      </nav>

      <main>
        <section id="about" className="card">
          <h2>Tentang Saya</h2>
          <div className="about-container">
            <img src={babal} alt="Foto Iken" className="profile-pic" />
            <p>
              Ini Aku, Aku suka bermain game dan aku suka mencoba hal hal yang
              menurutku menyenangkan
            </p>
          </div>
        </section>

        <section id="projects" className="card">
          <h2>Proyek Terbaru</h2>
          <div className="projects-grid">
            <article className="project-item">
              <h3>Projek Perpus</h3>
              <p>Program tentang Pembelian Buku Tanpa ada masalah</p>
            </article>
            <article className="project-item">
              <h3>Ibis Paint</h3>
              <p>
                Belajar Desain dan memahami tools-tools yang ada di Ibis Paint
              </p>
            </article>
          </div>
        </section>

        <section id="skills" className="card">
          <h2>Keahlian</h2>
          <ul className="skills-list">
            <li>Main Legenda Seluler</li>
            <li>Berenang</li>
            <li>Badminton</li>
          </ul>
        </section>

        <section id="contact" className="card">
          <h2>Kontak Saya</h2>
          <form id="contact-form">
            <label htmlFor="nama">Nama:</label>
            <input type="text" id="nama" name="nama" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="pesan">Pesan:</label>
            <textarea id="pesan" name="pesan" rows="4" required></textarea>

            <button type="submit">Kirim</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 I Ken. Semua Hak Dilindungi.</p>
      </footer>
    </>
  );
}

export default App;

