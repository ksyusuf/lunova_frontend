export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  requirements: string[];
}

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Topluluk Gönüllüsü',
    location: 'Online / Türkiye Geneli',
    type: 'Gönüllü',
    department: 'Topluluk',
    description: 'Bağımlılıkla mücadele eden bireylere ve ailelerine online destek toplantılarında, farkındalık etkinliklerinde ve forum moderasyonunda destek sağlayacak topluluk gönüllüsü arıyoruz.',
    requirements: [
      'Empati ve aktif dinleme yeteneği',
      'Bağımlılık veya ruh sağlığı alanında kişisel ya da mesleki deneyim tercih edilir',
      'Haftada en az 3 saat zaman ayırabilme',
      'Gizlilik ilkelerine titizlikle uyum',
      'Takım ruhuna sahip, sorumluluk sahibi',
      'Temel dijital araç kullanımı (Zoom, e-posta vb.)'
    ]
  },
  {
    id: '2',
    title: 'Destek Gönüllüsü',
    location: 'Online / Türkiye Geneli',
    type: 'Gönüllü',
    department: 'Destek',
    description: 'Bireysel iyileşme süreçlerinde eşlik etmek, aile destek gruplarına katılmak ve kriz anlarında ilk yönlendirmeyi sağlamak üzere destek gönüllüsü arıyoruz. Psikolog veya sosyal hizmet uzmanı öğrencileri teşvik edilir.',
    requirements: [
      'Psikoloji, sosyal hizmet, hemşirelik veya ilgili alanda öğrenci/mezun tercih edilir',
      'Temel kriz iletişimi konusunda ilgi veya eğitim',
      'Motivasyonel görüşme tekniklerine açıklık',
      'Düzenli süpervizyon seanslarına katılım',
      'Haftada en az 4 saat zaman ayırabilme',
      'Etik ve mesleki sınırlara saygı'
    ]
  },
  {
    id: '3',
    title: 'Teknik Gönüllü',
    location: 'Online / Türkiye Geneli',
    type: 'Gönüllü',
    department: 'Teknoloji',
    description: 'Lunova platformunun geliştirilmesine, veri güvenliğine, arayüz iyileştirmelerine ve teknik altyapı çalışmalarına katkı sağlayacak yazılım veya tasarım alanında deneyimli teknik gönüllü arıyoruz.',
    requirements: [
      'Yazılım geliştirme, UX/UI tasarım, veri güvenliği veya sistem yönetimi deneyimi',
      'Sosyal sorumluluk projelerine katkı sağlama motivasyonu',
      'Kullanıcı gizliliği ve veri etiği konusunda duyarlılık',
      'Ekip ortamında uzaktan çalışma deneyimi',
      'Haftada en az 3 saat zaman ayırabilme',
      'Açık kaynak veya sivil teknoloji projelerine ilgi artı'
    ]
  },
  {
    id: '4',
    title: 'İçerik & Farkındalık Gönüllüsü',
    location: 'Online / Türkiye Geneli',
    type: 'Gönüllü',
    department: 'İletişim',
    description: 'Bağımlılık farkındalığı üzerine blog yazıları, sosyal medya içerikleri ve bilgilendirme materyalleri hazırlayacak; toplumda damgalanmayı azaltmaya katkı sunacak içerik gönüllüsü arıyoruz.',
    requirements: [
      'Türkçe yazım, blog veya içerik üretim deneyimi',
      'Bağımlılık ve ruh sağlığı konularında araştırma yapabilme',
      'Etik, kapsayıcı ve damgalanmayı azaltan dil kullanımı',
      'Sosyal medya araçlarına (Instagram, LinkedIn) hakimiyet tercih edilir',
      'Haftada en az 2–3 saat zaman ayırabilme',
      'Araştırma ve kaynak doğrulama hassasiyeti'
    ]
  },
  {
    id: '5',
    title: 'Hukuki Bilgi Gönüllüsü',
    location: 'Online / Türkiye Geneli',
    type: 'Gönüllü',
    department: 'Hukuk',
    description: 'Bağımlılık sürecinde karşılaşılan hukuki sorunlar hakkında bilgilendirici içerik hazırlayacak, genel hukuki yönlendirme desteği sağlayacak hukuk fakültesi öğrencisi veya avukat gönüllüsü arıyoruz.',
    requirements: [
      'Hukuk fakültesi 3. sınıf ve üzeri öğrenci veya avukat',
      'Ceza hukuku, aile hukuku veya sağlık hukuku alanında ilgi',
      'Bireysel hukuki temsil sağlamaksızın genel bilgilendirme yapabilme',
      'Gizlilik ve mesleki etik kurallarına uyum',
      'Haftada en az 2 saat zaman ayırabilme',
      'Savunmasız gruplara yönelik çalışmaya açık olma'
    ]
  }
];
