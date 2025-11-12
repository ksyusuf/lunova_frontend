export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  readTime: string;
  publishedDate: string;
  image: string;
  tags: string[];
  featured: boolean;
}

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Bağımlılıkla Mücadelede Yanınızdayız: Lunova Kimdir?',
    excerpt: 'Bağımlılık mücadelenizde yalnız değilsiniz. Lunova’nın teknoloji destekli bütüncül yaklaşımını, uzman kadrosunu ve 12 aylık ücretsiz takip programıyla sürdürülebilir iyileşme taahhüdünü keşfedin.',
    content: 'Lunova, bağımlılıkla mücadelede bütüncül ve yenilikçi çözümler sunan öncü bir dijital platformdur. Amacımız, bağımlılık sürecinin her aşamasında, bireylerin ve ailelerinin yanında durarak kapsamlı destek sağlamaktır...',
    author: {
      name: 'Lunova Uzman Ekibi',
      avatar: '/fauna-assets/blog/avatar-1.png'
    },
    readTime: '4 min read',
    publishedDate: '2024-10-25',
    image: '/fauna-assets/blog/image-lg-post.png',
    tags: ['Lunova', 'Bağımlılık', 'Dijital Destek', 'Bütüncül Tedavi'],
    featured: true
  },
  {
    id: '2',
    title: 'Bağımlılığın Nörolojik Temelleri: Bir Tercih Değil, Hastalıktır',
    excerpt: 'Bağımlılığın sadece bir irade meselesi değil, beyindeki ödül ve motivasyon sistemlerindeki değişimlerle (Dopamin) ilişkili karmaşık bir beyin hastalığı olduğunu öğrenin.',
    content: 'Bağımlılık, beyindeki ödül ve motivasyon sistemlerindeki değişikliklerle ilişkili karmaşık bir süreçtir. Bu süreçte, beynin normal işleyişi bozulur ve bağımlılık yapıcı madde veya davranışa karşı kontrol edilmesi güç bir dürtü gelişir...',
    author: {
      name: 'Uzman Psikolog',
      avatar: '/fauna-assets/blog/circle-avatar-1.png'
    },
    readTime: '6 min read',
    publishedDate: '2024-10-23',
    image: '/fauna-assets/blog/image-sm-1.png',
    tags: ['Nöroloji', 'Dopamin', 'Hastalık', 'Bağımlılık Tanımı'],
    featured: false
  },
  {
    id: '3',
    title: 'Davranışsal Bağımlılıklar: Kumar, İnternet ve İlişki Bağımlılığı',
    excerpt: 'Fiziksel yoksunluk olmasa bile hayatımızı olumsuz etkileyebilen Kumar, Teknoloji ve İlişki bağımlılığı gibi duygusal ve davranışsal zorlanmaları, belirtileri ve etkileriyle ele alıyoruz.',
    content: 'Belirli bir davranışın tekrarlanmasına karşı duyulan psikolojik bir zorlanmadır. Davranış, kişinin yaşamını olumsuz etkilemeye başladığı halde sürdürülür. Fiziksel yoksunluk belirtisi olmasa da, kişi bu davranıştan uzak kaldığında anksiyete, depresyon gibi duygusal belirtiler yaşar...',
    author: {
      name: 'Jenny Wilson',
      avatar: '/fauna-assets/blog/circle-avatar-2.png'
    },
    readTime: '7 min read',
    publishedDate: '2024-10-20',
    image: '/fauna-assets/blog/image-sm-2.png',
    tags: ['Davranışsal', 'Teknoloji', 'Kumar', 'Psikoloji'],
    featured: false
  },
  {
    id: '4',
    title: 'Bağımlılık Tüm Aileyi Nasıl Etkiler? Stres ve İlişkisel Etkiler',
    excerpt: 'Bağımlılığın sadece bireyi değil, tüm aile sistemini nasıl etkilediğini, ortaya çıkan duygusal ve ekonomik yükleri ve Lunova Aile Destek Programlarının önemini inceliyoruz.',
    content: 'Bağımlılık, sadece bağımlı bireyi değil, tüm aile sistemini etkileyen bir durumdur. Aile üyeleri genellikle bağımlılığın ikincil kurbanları olarak tanımlanır ve önemli duygusal, psikolojik ve ekonomik yüklerle karşı karşıya kalırlar...',
    author: {
      name: 'Leslie Alexander',
      avatar: '/fauna-assets/blog/circle-avatar-3.png'
    },
    readTime: '5 min read',
    publishedDate: '2024-10-18',
    image: '/fauna-assets/blog/image-sm-3.png',
    tags: ['Aile Terapisi', 'Sosyal Destek', 'Travma', 'Çocuklar'],
    featured: false
  },
  {
    id: '5',
    title: 'Sürdürülebilir İyileşme: Tedavi Yaklaşımları ve Nüks Önleme',
    excerpt: 'Detoksifikasyondan farmakoterapiye, Bilişsel Davranışçı Terapi (BDT) ve grup terapisine kadar kanıta dayalı bağımlılık tedavi yaklaşımlarını ve nüks önleme stratejilerini detaylıca inceleyin.',
    content: 'Bağımlılık tedavisi, kişiye özel planlanmalı ve bütüncül bir yaklaşım içermelidir. Başarılı bir tedavi, fiziksel, psikolojik ve sosyal faktörlerin tümünü ele alır. İyileşme, genellikle doğrusal değil, döngüsel bir süreçtir...',
    author: {
      name: 'Lunova Uzman Ekibi',
      avatar: '/fauna-assets/blog/avatar-1.png'
    },
    readTime: '9 min read',
    publishedDate: '2024-10-15',
    image: '/fauna-assets/blog/image-lg-post.png',
    tags: ['Tedavi', 'BDT', 'Nüks Önleme', 'Takip Programı'],
    featured: false
  },
  {
    id: '6',
    title: 'Bağımlılık ve Toplumsal Damgalanma: Yardım Aramanın Önündeki Engel',
    excerpt: 'Bağımlılığın bir ahlaki zayıflık değil, bir hastalık olduğunu anlamak neden önemlidir? Damgalanmanın tedavi arayışını nasıl engellediğini ve toplumsal tutumu nasıl değiştirebileceğimizi konuşuyoruz.',
    content: 'Bağımlılık konusundaki toplumsal damgalanma, bağımlı bireylerin iyileşme sürecinde karşılaştıkları en büyük engellerden biridir. Damgalanma, bağımlılığı bir ahlaki zayıflık veya karakter eksikliği olarak görme eğiliminden kaynaklanır...',
    author: {
      name: 'Sosyal Sorumluluk Ekibi',
      avatar: '/fauna-assets/blog/circle-avatar-1.png'
    },
    readTime: '5 min read',
    publishedDate: '2024-10-12',
    image: '/fauna-assets/blog/image-sm-1.png',
    tags: ['Damgalanma', 'Farkındalık', 'Sosyal Sorumluluk'],
    featured: false
  }
];