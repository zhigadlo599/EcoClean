import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useParams } from 'react-router-dom';

const blogPosts: Record<string, any> = {
  "nettoyage-a-domicile": {
    title: "Як зберегти будинок чистим та здоровим",
    author: "Патрик",
    date: "11 Травня 2025",
    category: "Прибирання вдома",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1920",
    content: `Чистий дім — запорука здорового життя. Ось кілька простих порад для щоденного догляду: провітрюйте приміщення, дезінфікуйте часто чіпані поверхні, використовуйте екологічні засоби й залучайте членів сім'ї.`,
    relatedPosts: [
      { title: "Чому гігієна дому впливає на наше благополуччя", date: "31 Березня 2022", category: "Прибирання вдома", slug: "hygiene-domestique-bien-etre" },
      { title: "Як зробити дім приємно пахнучим", date: "31 Березня 2022", category: "Прибирання вдома", slug: "interieur-qui-sent-bon" }
    ]
  },
  "hygiene-domestique-bien-etre": {
    title: "Чому гігієна дому впливає на наше благополуччя",
    author: "Патрик",
    date: "31 Березня 2022",
    category: "Прибирання вдома",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=1920",
    content: `Стан дому впливає на фізичне та психічне здоров'я: чисте повітря, менше алергенів і менше стресу. Регулярне провітрювання і екологічне прибирання допомагають зберегти комфорт.`,
    relatedPosts: [
      { title: "Як зберегти будинок чистим та здоровим", date: "11 Травня 2025", category: "Прибирання вдома", slug: "nettoyage-a-domicile" }
    ]
  },
  "interieur-qui-sent-bon": {
    title: "Як зробити дім приємно пахнучим",
    author: "Патрик",
    date: "31 Березня 2022",
    category: "Прибирання вдома",
    image: "https://images.unsplash.com/photo-1583845112239-97ef1341b271?auto=format&fit=crop&q=80&w=1920",
    content: `Поради: провітрюйте щодня по 15 хвилин, використовуйте соду для нейтралізації запахів, мийте текстиль регулярно, застосовуйте ефірні олії та кімнатні рослини.`,
    relatedPosts: [
      { title: "Як зберегти будинок чистим та здоровим", date: "11 Травня 2025", category: "Прибирання вдома", slug: "nettoyage-a-domicile" }
    ]
  }
};

const getCategoryStyle = (category: string) => {
  if (category === "Професійне прибирання") return "bg-white/20 text-white backdrop-blur-sm";
  return "bg-white/10 backdrop-blur-sm text-white";
};

const BlogPost: React.FC = () => {
  const { slug } = useParams();
  const [mounted, setMounted] = useState(false);
  const [isChrome, setIsChrome] = useState(false);

  const post = slug ? blogPosts[slug as string] : null;

  useEffect(() => {
    const isChromeBrowser = /Chrome/.test(navigator.userAgent) && !/Edge/.test(navigator.userAgent);
    setIsChrome(isChromeBrowser);
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  if (!mounted) return (
    <div className="min-h-screen bg-gradient-to-b from-white to-eco-green-50/30 pt-24 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-eco-green-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Завантаження...</p>
      </div>
    </div>
  );

  if (!post) return (
    <div className="min-h-screen flex items-center justify-center bg-eco-green-50">
      <div className="text-center px-4">
        <h1 className="text-3xl font-bold text-eco-green-800 mb-4">Стаття не знайдена</h1>
        <p className="text-eco-green-600 mb-8">Вибачте, стаття не знайдена або була переміщена.</p>
        <Link to="/blog"><Button variant="default" size="lg">Повернутися до блогу</Button></Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-eco-green-50/30 pt-24">
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${post.image}')` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`max-w-4xl mx-auto text-center ${isChrome ? 'will-change-transform' : ''}`}>
              <div className={`inline-flex items-center px-4 py-2 rounded-full font-medium text-sm mb-4 ${getCategoryStyle(post.category)}`}>
                {post.category}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{post.title}</h1>
              <div className="flex items-center justify-center gap-4 text-white/80 text-sm">
                <div className="flex items-center gap-2"><User className="h-4 w-4" /><span>{post.author}</span></div>
                <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /><span>{post.date}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Link to="/blog"><Button variant="ghost" className="gap-2 group"><ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Повернутися до блогу</Button></Link>
            <Button variant="ghost" className="gap-2"><Share2 className="h-4 w-4" /> Поділитися</Button>
          </div>

          <article className={`prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 ${isChrome ? 'will-change-transform' : ''}`}>
            {post.content.split('\n').map((p: string, i: number) => (<p key={i}>{p}</p>))}
          </article>

          <div className={`mt-16 pt-8 border-t border-gray-200 ${isChrome ? 'will-change-transform' : ''}`}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Схожі статті</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {post.relatedPosts.map((r: any, i: number) => (
                <Link key={i} to={`/blog/${r.slug}`} className="group block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="text-sm mb-2 text-eco-green-600">{r.category}</div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-eco-green-600 transition-colors duration-300 mb-2">{r.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500"><Calendar className="h-4 w-4" /><span>{r.date}</span></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
