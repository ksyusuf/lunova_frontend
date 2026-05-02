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
    title: 'Klinik Psikolog',
    location: 'İstanbul, Türkiye',
    type: 'Tam Zamanlı',
    department: 'Psikoloji',
    description: 'Bağımlılıkla mücadele eden bireylere bireysel ve grup terapi hizmetleri sunan, online terapi deneyimine sahip klinik psikolog aranmaktadır.',
    requirements: [
      'Klinik Psikoloji Lisans/Lisansüstü diploması',
      'En az 3 yıl bağımlılık alanında klinik deneyim',
      'Online terapi konusunda deneyim',
      'Bütüncül tedavi yaklaşımına hakimiyet',
      'Empati, profesyonellik ve gizlilik ilkelerine bağlılık',
      'Etik kurallara uyum'
    ]
  },
  {
    id: '2',
    title: 'Bağımlılık Danışmanı',
    location: 'Ankara, Türkiye',
    type: 'Tam Zamanlı',
    department: 'Psikoloji',
    description: 'Bağımlılık tedavi süreçlerinde danışan destek gruplarına liderlik edecek ve rehabilitasyon programları yürütecek deneyimli bağımlılık danışmanı aranmaktadır.',
    requirements: [
      'Bağımlılık Danışmanlığı Sertifikası',
      '5+ yıl bağımlılık tedavi deneyimi',
      '12 Adım programı bilgisi',
      'Grup terapi ve motivasyonel görüşme becerileri',
      'Nüks önleme stratejileri konusunda deneyim',
      'Çok yönlü destek sağlama yeteneği'
    ]
  },
  {
    id: '3',
    title: 'Aile Terapisti',
    location: 'İzmir, Türkiye',
    type: 'Yarı Zamanlı',
    department: 'Psikoloji',
    description: 'Bağımlılıktan etkilenen ailelere destek ve terapi hizmetleri sunacak, aile dinamiklerini iyileştirmeye odaklı aile terapisti aranmaktadır.',
    requirements: [
      'Aile Terapisi eğitimi ve sertifikası',
      'En az 2 yıl aile terapisi deneyimi',
      'Bağımlılık ailelerinde çalışma deneyimi tercih',
      'Çift ve aile terapisi modellerine hakimiyet',
      'Psikoeğitim ve destek grupları deneyimi',
      'Güçlü iletişim ve empati yeteneği'
    ]
  },
  {
    id: '4',
    title: 'Sosyal Medya Uzmanı',
    location: 'İstanbul, Türkiye',
    type: 'Tam Zamanlı',
    department: 'Pazarlama',
    description: 'Bağımlılık farkındalığı ve iyileşme süreçleri konusunda etik, duyarlı içerik üretip sosyal medya hesaplarını yönetecek sosyal medya uzmanı aranmaktadır.',
    requirements: [
      'Sosyal medya pazarlama ve yönetim deneyimi',
      'İçerik üretimi ve stratejik planlama yeteneği',
      'Bağımlılık ve ruh sağlığı konularında duyarlılık',
      'Analitik düşünme ve raporlama becerileri',
      'SEO ve içerik optimizasyonu bilgisi',
      'Toplumsal farkındalık projelerinde deneyim'
    ]
  },
  {
    id: '5',
    title: 'Online Terapi Koordinatörü',
    location: 'Remote / Türkiye',
    type: 'Tam Zamanlı',
    department: 'Psikoloji',
    description: 'Online terapi hizmetlerinin koordinasyonunu yürütecek, teknoloji destekli terapi platformlarını yönetecek koordinatör aranmaktadır.',
    requirements: [
      'Klinik Psikoloji veya ilgili lisans mezunu',
      'Online terapi platform deneyimi',
      'Teknoloji okuryazarlığı',
      'Koordinasyon ve yönetim becerileri',
      'HIPAA ve veri güvenliği bilgisi',
      'İletişim ve ekip çalışması yeteneği'
    ]
  },
  {
    id: '6',
    title: 'İçerik Editörü / Blogger',
    location: 'İstanbul, Türkiye',
    type: 'Freelance',
    department: 'Pazarlama',
    description: 'Bağımlılık konusunda bilinçlendirici blog yazıları ve eğitici içerikler üretecek, web sitesi içeriklerini yönetecek içerik editörü aranmaktadır.',
    requirements: [
      'Türkçe yazım ve editörlük deneyimi',
      'Blog yazarlığı ve SEO içerik üretimi',
      'Bağımlılık ve ruh sağlığı konularında bilgi',
      'Araştırma ve kaynak doğrulama becerileri',
      'Etik ve duyarlı dil kullanımı',
      'WordPress ve içerik yönetim sistemleri deneyimi'
    ]
  }
];