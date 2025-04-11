import React, { useState, useEffect } from "react";
import DayCard from "./components/DayCard";

const days = [
  {
    day: 1,
    challenge: "Bangun 30 menit lebih pagi dari biasanya",
    habits: ["Minum 1 gelas air putih", "Buat to-do list sederhana"],
    journal: "Apa hal paling sederhana yang bikin kamu bahagia hari ini?",
    affirmation:
      "Aku layak untuk berkembang dan hidupku terus membaik setiap hari.",
  },
  {
    day: 2,
    challenge: "Tidak membuka media sosial selama 2 jam pertama setelah bangun",
    habits: ["Tarik napas dalam 3x", "Rapikan tempat tidur"],
    journal: "Hal apa yang ingin kamu kurangi dari hidupmu dan kenapa?",
    affirmation: "Aku punya kendali atas waktuku dan pikiranku.",
  },
  {
    day: 3,
    challenge: "Tulis 3 hal yang kamu syukuri hari ini",
    habits: ["Tersenyum saat bangun", "Ucapkan terima kasih 1x ke orang lain"],
    journal: "Apa hal terbaik yang terjadi minggu ini?",
    affirmation: "Syukur membuka pintu kebahagiaan dalam hidupku.",
  },
  {
    day: 4,
    challenge: "Lakukan olahraga ringan selama 10 menit",
    habits: ["Stretching setelah bangun", "Minum air putih sebelum olahraga"],
    journal: "Apa efek positif dari gerak tubuh bagi perasaanmu?",
    affirmation: "Tubuhku kuat dan aku merawatnya dengan cinta.",
  },
  {
    day: 5,
    challenge: "Baca minimal 5 halaman buku",
    habits: [
      "Matikan notifikasi HP 30 menit",
      "Siapkan tempat baca yang nyaman",
    ],
    journal: "Apa satu hal baru yang kamu pelajari hari ini?",
    affirmation: "Aku terbuka untuk ilmu dan terus berkembang.",
  },
  {
    day: 6,
    challenge: "Tidak mengeluh selama sehari",
    habits: [
      "Ganti keluhan dengan solusi",
      "Tersenyum saat mulai merasa kesal",
    ],
    journal: "Kapan terakhir kamu bersyukur atas tantangan?",
    affirmation: "Aku memilih melihat sisi baik dari setiap keadaan.",
  },
  {
    day: 7,
    challenge: "Meditasi atau hening selama 5 menit",
    habits: ["Atur napas dengan perlahan", "Duduk nyaman tanpa distraksi"],
    journal: "Bagaimana perasaanmu setelah diam sejenak?",
    affirmation: "Kedamaian berasal dari dalam diriku.",
  },
  {
    day: 8,
    challenge: "Bersih-bersih 1 area kecil (meja, laci, dsb)",
    habits: ["Pilih 1 area kecil", "Putar musik saat beres-beres"],
    journal: "Apa rasanya punya ruang yang lebih rapi?",
    affirmation: "Ruang rapi membawa energi baru ke dalam hidupku.",
  },
  {
    day: 9,
    challenge: "Tuliskan tujuan hidup jangka panjangmu",
    habits: ["Tulis tanpa sensor", "Bayangkan versi terbaik dirimu"],
    journal: "Apa yang paling kamu inginkan dalam hidup?",
    affirmation: "Aku bergerak ke arah hidup yang aku impikan.",
  },
  {
    day: 10,
    challenge: "Habiskan waktu 30 menit tanpa gadget",
    habits: ["Matikan notifikasi", "Cari aktivitas tanpa layar"],
    journal: "Apa yang kamu sadari saat tidak pegang HP?",
    affirmation: "Hadir sepenuhnya membuatku merasa hidup.",
  },
  {
    day: 11,
    challenge: "Tulis surat ke diri sendiri di masa depan",
    habits: [
      "Luangkan waktu tanpa distraksi",
      "Tulis dengan jujur dan penuh harapan",
    ],
    journal: "Apa yang ingin kamu sampaikan ke dirimu 1 tahun ke depan?",
    affirmation: "Aku tumbuh dan terus menjadi versi terbaikku.",
  },
  {
    day: 12,
    challenge: "Ucapkan terima kasih secara langsung ke seseorang",
    habits: ["Pikirkan orang yang berjasa", "Sampaikan dengan tulus"],
    journal: "Bagaimana perasaanmu setelah mengucapkan terima kasih?",
    affirmation: "Aku dikelilingi oleh kebaikan dan cinta.",
  },
  {
    day: 13,
    challenge: "Habiskan 30 menit di alam (taman, halaman, dsb)",
    habits: ["Lihat langit atau pepohonan", "Lepas sandal & rasakan tanah"],
    journal: "Apa yang kamu rasakan saat terhubung dengan alam?",
    affirmation: "Aku adalah bagian dari alam yang tenang dan kuat.",
  },
  {
    day: 14,
    challenge: "Tantang diri menyelesaikan tugas yang ditunda",
    habits: ["Pilih 1 tugas kecil", "Mulai dengan 5 menit fokus"],
    journal: "Apa rasanya menyelesaikan hal yang sempat tertunda?",
    affirmation: "Aku mampu menyelesaikan apa yang aku mulai.",
  },
  {
    day: 15,
    challenge: "Berikan pujian tulus ke 3 orang",
    habits: ["Amati kebaikan orang lain", "Ucapkan tanpa berharap balasan"],
    journal: "Apa dampaknya saat kamu memuji orang lain?",
    affirmation: "Menyebar kebaikan membawa kebahagiaan untukku juga.",
  },
  {
    day: 16,
    challenge: "Evaluasi kembali goals-mu di bulan ini",
    habits: ["Buka kembali catatan tujuan", "Tandai progress atau revisi"],
    journal: "Apakah kamu masih berada di arah yang sama?",
    affirmation: "Aku fleksibel namun tetap fokus pada impianku.",
  },
  {
    day: 17,
    challenge: "Buat daftar 10 hal kecil yang kamu suka dari dirimu",
    habits: ["Lihat cermin dan tersenyum", "Tulis tanpa menghakimi"],
    journal: "Apa yang membuatmu unik dan berharga?",
    affirmation: "Aku mencintai dan menerima diriku sepenuhnya.",
  },
  {
    day: 18,
    challenge: "Coba aktivitas baru (masak resep baru, teknik seni, dsb)",
    habits: ["Pilih hal kecil yang menyenangkan", "Nikmati prosesnya"],
    journal: "Apa yang kamu rasakan saat mencoba hal baru?",
    affirmation:
      "Setiap hari adalah kesempatan untuk tumbuh dan mencoba hal baru.",
  },
  {
    day: 19,
    challenge: "Luangkan waktu untuk istirahat total selama 1 jam",
    habits: ["Matikan gadget", "Rebahkan diri dan tarik napas perlahan"],
    journal: "Apakah kamu memberi cukup ruang untuk istirahat?",
    affirmation: "Aku layak untuk beristirahat dan memulihkan diri.",
  },
  {
    day: 20,
    challenge: "Ceritakan masa kecil yang menyenangkan ke seseorang",
    habits: ["Pilih 1 momen bahagia", "Ceritakan dengan penuh warna"],
    journal: "Kenangan mana yang masih bikin kamu tersenyum?",
    affirmation: "Kenangan indah membentuk kekuatanku hari ini.",
  },
  {
    day: 21,
    challenge: "Berjalan tanpa tujuan selama 15–30 menit",
    habits: ["Lepaskan target", "Nikmati sekitar dan amati hal kecil"],
    journal: "Apa hal menarik yang kamu lihat atau rasakan?",
    affirmation: "Aku hadir sepenuhnya di setiap langkah yang kuambil.",
  },
  {
    day: 22,
    challenge: "Tulis 3 kekhawatiran, lalu coret dengan solusi/sikap",
    habits: ["Jujur dengan rasa takutmu", "Ganti dengan kalimat empowering"],
    journal: "Apa perasaanmu setelah menulis dan mencoret ketakutanmu?",
    affirmation: "Aku punya kekuatan untuk menghadapi semua tantangan.",
  },
  {
    day: 23,
    challenge: "Offline dari semua media sosial selama 1 hari",
    habits: ["Aktifkan mode senyap", "Isi waktu dengan hal produktif"],
    journal: "Apa perbedaan yang kamu rasakan tanpa distraksi digital?",
    affirmation: "Kehidupan nyataku lebih bermakna dari dunia maya.",
  },
  {
    day: 24,
    challenge: "Lakukan sesuatu untuk orang asing (random kindness)",
    habits: ["Tersenyum, bantu orang, beri pujian", "Lakukan tanpa ekspektasi"],
    journal: "Apa dampaknya ke orang lain & dirimu sendiri?",
    affirmation: "Kebaikan kecil pun bisa membuat dunia jadi lebih hangat.",
  },
  {
    day: 25,
    challenge: "Lihat kembali progress dari hari 1 hingga hari ini",
    habits: ["Buka jurnal harianmu", "Beri apresiasi ke diri sendiri"],
    journal: "Apa perubahan paling terasa dalam dirimu?",
    affirmation: "Aku berkembang dengan konsisten, sekecil apapun langkahku.",
  },
  {
    day: 26,
    challenge:
      "Tonton/mendengar sesuatu yang menginspirasi (TED, podcast, dsb)",
    habits: ["Catat 3 hal penting", "Renungkan maknanya untukmu"],
    journal: "Apa insight terbaik yang kamu dapatkan?",
    affirmation: "Inspirasi mengalir padaku setiap hari.",
  },
  {
    day: 27,
    challenge: "Bereskan 1 bagian rumah/kamar yang berantakan",
    habits: ["Fokus hanya 1 tempat", "Rasakan kelegaan setelahnya"],
    journal: "Apa hubungan antara ruang fisik dan pikiranmu?",
    affirmation: "Saat aku merapikan sekitarku, aku juga merapikan pikiranku.",
  },
  {
    day: 28,
    challenge: "Tulis ulang visimu dalam 1 paragraf yang memotivasi",
    habits: ["Tulis dengan hati", "Letakkan di tempat terlihat"],
    journal: "Apakah visimu membuatmu merasa hidup?",
    affirmation: "Aku punya arah dan tujuanku jelas.",
  },
  {
    day: 29,
    challenge: "Buat waktu refleksi dalam keheningan minimal 15 menit",
    habits: ["Tanpa musik/gadget", "Tarik napas dalam dan tenangkan pikiran"],
    journal: "Apa yang muncul saat kamu memberi ruang keheningan?",
    affirmation: "Dalam diam, aku mendengar suaraku yang paling jujur.",
  },
  {
    day: 30,
    challenge: "Rayakan pencapaianmu dengan cara yang kamu suka!",
    habits: [
      "Tulis 5 hal yang kamu banggakan",
      "Hadiahi diri dengan hal positif",
    ],
    journal: "Apa hal paling bermakna dari perjalanan 30 hari ini?",
    affirmation:
      "Aku bangga dengan diriku. Ini adalah awal dari petualangan baruku.",
  },
];

function App() {
  const [currentDay, setCurrentDay] = useState(1);
  const [completedDays, setCompletedDays] = useState(() => {
    const saved = localStorage.getItem("growthup_done");
    const completed = saved ? JSON.parse(saved) : [];
    if (!Array.isArray(completed)) {
      console.error(
        "Data 'growthup_done' tidak valid, menginisialisasi ulang."
      );
      localStorage.setItem("growthup_done", JSON.stringify([]));
    }
    return saved ? completed : [];
  });

  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("growthup-notes");
    return saved ? JSON.parse(saved) : {};
  });

  const saveNote = (day, text) => {
    const updatedNotes = { ...notes, [day]: text };
    setNotes(updatedNotes);
    localStorage.setItem("growthup-notes", JSON.stringify(updatedNotes));
  };


  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("growthup_dark") === "true";
  });

  useEffect(() => {
    localStorage.setItem("growthup_dark", darkMode);
  }, [darkMode]);

  // Motivasi harian + reminder tantangan (notifikasi 1x per hari)
  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();

    const showMotivation = () => {
      const lastShown = localStorage.getItem("motivation_shown_at");
      const lastDate = lastShown ? new Date(lastShown) : null;

      if (!lastDate || now.toDateString() !== lastDate.toDateString()) {
        const messages = [
          "Kamu hebat! Teruskan langkahmu hari ini 💪",
          "Ingat, satu langkah kecil hari ini adalah kemenangan ✨",
          "Hari baru, semangat baru! 🌅",
          "Kamu sedang membangun versi terbaik dari dirimu 💫",
          "Langkah kecil hari ini lebih baik dari diam 🔥",
          "Jangan menyerah, kamu makin dekat dengan tujuanmu 🚀",
        ];
        const randomMessage =
          messages[Math.floor(Math.random() * messages.length)];

        new Notification("Motivasi Harian 🌟", {
          body: randomMessage,
          icon: "/icon-512.png",
        });

        localStorage.setItem("motivation_shown_at", now.toISOString());
      }
    };

     const showReminder = () => {
       if (!Array.isArray(completedDays)) {
         console.error("completedDays bukan array:", completedDays);
         return;
       }
       const lastReminder = localStorage.getItem("reminder_shown_at");
       const last = lastReminder ? new Date(lastReminder) : null;
       const isSameDay = last && now.toDateString() === last.toDateString();

       const isEvening = hour >= 18;
       const doneToday = completedDays.includes(currentDay);

       if (isEvening && !doneToday && !isSameDay) {
         new Notification("Yuk selesaikan tantanganmu hari ini! ✨", {
           body: "Klik untuk kembali ke GrowthUp dan tandai tantangan hari ini ✅",
           icon: "/icon-512.png",
         });
         localStorage.setItem("reminder_shown_at", now.toISOString());
       }
     };

    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    } else {
      showMotivation();
      showReminder();

      const interval = setInterval(() => {
        const now = new Date();
        if (Notification.permission === "granted") {
          const hour = now.getHours();
          if (hour >= 18) {
            showReminder();
          }
        }
      }, 5 * 60 * 1000);

      return () => clearInterval(interval);
    }
  }, [currentDay, completedDays]);

  const [viewSummary, setViewSummary] = useState(false);
  const dayData = days.find((d) => d.day === currentDay);

  const toggleDone = () => {
    if (!Array.isArray(completedDays)) {
      console.error("completedDays bukan array:", completedDays);
      return;
    }

    const alreadyDone = completedDays.includes(currentDay);
    const updated = alreadyDone
      ? completedDays.filter((d) => d !== currentDay)
      : [...completedDays, currentDay];

    setCompletedDays(updated);
    localStorage.setItem("growthup_done", JSON.stringify(updated));

    if (!alreadyDone && currentDay < days.length) {
      setTimeout(() => setCurrentDay((prev) => prev + 1), 500);
    }
  };


  const resetProgress = () => {
    setCompletedDays([]);
    localStorage.removeItem("growthup_done");
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-br from-orange-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 flex flex-col items-center px-4 py-10 relative transition-all">
        {/* Toggle Dark Mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-4 right-4 text-xs px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full shadow hover:brightness-110"
        >
          {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>

        <h1 className="text-3xl font-bold text-orange-600 dark:text-orange-300 mb-6">
          GrowthUp 🌱
        </h1>

        {/* Progress Bar */}
        <div className="w-full max-w-md bg-gray-200 dark:bg-gray-700 h-2 rounded-full mb-6">
          <div
            className="bg-green-500 h-2 rounded-full"
            style={{ width: `${(completedDays.length / 30) * 100}%` }}
          ></div>
        </div>

        {/* Toggle View */}
        <button
          onClick={() => setViewSummary((prev) => !prev)}
          className="mb-4 px-4 py-2 text-sm bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 rounded"
        >
          {viewSummary ? "Kembali ke Tantangan" : "Lihat Ringkasan"}
        </button>

        {viewSummary ? (
          <div className="bg-white dark:bg-gray-900 shadow-md p-4 rounded-xl w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Ringkasan Progres</h2>
            <ul className="list-decimal list-inside text-sm text-gray-800 dark:text-gray-200 max-h-96 overflow-auto">
              {days.map((d) => (
                <li
                  key={d.day}
                  className={
                    completedDays.includes(d.day)
                      ? "text-green-600"
                      : "text-gray-400"
                  }
                >
                  Hari {d.day}: {d.challenge}
                </li>
              ))}
            </ul>
            <button
              onClick={resetProgress}
              className="mt-4 w-full py-2 rounded-xl text-sm bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-100 hover:bg-red-200 dark:hover:bg-red-700"
            >
              Reset Progres
            </button>
          </div>
        ) : (
          dayData && (
            <DayCard
              data={dayData}
              isDone={completedDays.includes(currentDay)}
              onDone={toggleDone}
            />
          )
        )}

        <div className="w-full flex justify-center">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            <h3 className="text-lg font-semibold mt-6 text-center">
              Catatan Hari Ini
            </h3>
            <textarea
              value={notes[currentDay] || ""}
              onChange={(e) => saveNote(currentDay, e.target.value)}
              placeholder="Tulis catatan pribadi kamu di sini..."
              className="w-full p-3 border rounded-xl mt-2 h-32 bg-white text-black dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {!viewSummary && (
          <div className="mt-6 space-x-2">
            <button
              onClick={() => setCurrentDay((prev) => Math.max(prev - 1, 1))}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Sebelumnya
            </button>
            <button
              onClick={() =>
                setCurrentDay((prev) => (prev < days.length ? prev + 1 : prev))
              }
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Selanjutnya
            </button>
          </div>
        )}
      </div>
    </div>
  );
}


export default App;
