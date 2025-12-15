import { Zap, MonitorPlay, DollarSign, Clock, LayoutTemplate, Bot, BarChart, Globe, Lock, Cpu, Image as ImageIcon, Layers, CheckCircle2, TrendingUp, Sparkles, BrainCircuit } from 'lucide-react';
import { PricingTier, FeatureItem, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '플랫폼', href: '#platform' },
  { label: '블로그', href: '#blog-feature' },
  { label: '올인원', href: '#all-in-one' },
  { label: '비디오', href: '#video-feature' },
  { label: '요금제', href: '#pricing' },
];

export const HERO_CONTENT = {
  badge: 'AutoAgent Beta v1.0',
  title: 'AutoAgent',
  subtitle: '콘텐츠의 미래를\n새롭게 정의합니다.',
  ctaPrimary: '무료로 시작하기',
  ctaSecondary: '데모 보기',
};

// Merged Philosophy + Features for the 2nd Section
export const PLATFORM_FEATURES = [
  {
    id: 'blog',
    tagline: "단순한 반복 작업이\n아닌", // Added newline
    title: 'AI 블로그 자동화',
    description: '트렌드 분석부터 발행까지. 당신의 브랜드 블로그를 24시간 관리합니다.',
    icon: LayoutTemplate,
    align: 'left'
  },
  {
    id: 'video',
    tagline: "창의적인 영감에\n있습니다.", // Added newline
    title: 'AI 영상 자동화',
    description: '텍스트만 입력하세요. 스크립트, 영상 소스, 더빙까지 AI가 제작합니다.',
    icon: MonitorPlay,
    align: 'right'
  },
  {
    id: 'asset',
    tagline: "AutoAgent는\n기술을 통해", // Added newline
    title: '자산 관리 & 수익화',
    description: '애드센스, 제휴 마케팅 수익을 실시간으로 분석하고 최적화합니다.',
    icon: TrendingUp,
    align: 'left'
  },
  {
    id: 'assistant',
    tagline: "당신의 시간을\n되돌려줍니다.", // Added newline
    title: 'AI 어시스턴트',
    description: '콘텐츠 기획, 일정 관리, 아이디어 제안까지. 완벽한 파트너입니다.',
    icon: BrainCircuit,
    align: 'right'
  }
];

export const FEATURES_BLOG_DETAILS = [
  {
    title: "실시간 트렌드 분석", // Removed "1. "
    text: "매일 수천 개의 뉴스 키워드를 분석합니다. 지금 사람들이 가장 궁금해하는 주제를 찾아내어 트래픽이 보장된 글감을 선정합니다.",
    icon: BarChart
  },
  {
    title: "클릭을 부르는 제목 생성", // Removed "2. "
    text: "AI가 검색 노출(SEO)과 클릭률(CTR)을 동시에 고려한 매력적인 제목 10가지를 제안하고, 가장 최적화된 하나를 선택합니다.",
    icon: Zap
  },
  {
    title: "SEO 최적화 원고 작성", // Removed "3. "
    text: "구글과 네이버의 알고리즘을 분석하여 H1, H2 태그 구조를 잡고, 전문적인 깊이가 있는 본문을 순식간에 작성합니다.",
    icon: LayoutTemplate
  },
  {
    title: "이미지 생성 및 자동 발행", // Removed "4. "
    text: "내용에 딱 맞는 고화질 이미지를 생성하고, 블로그 플랫폼에 최종 업로드까지. 이 모든 과정이 단 3분 안에 끝납니다.",
    icon: CheckCircle2
  }
];

export const FEATURES_VIDEO_DETAILS = [
  {
    title: "Text to Video",
    text: "단 한 줄의 문장으로 시작하세요. 스크립트 작성부터 영상 소스 매칭, 자막 생성, 그리고 전문 성우의 내레이션까지.",
    icon: MonitorPlay
  },
  {
    title: "수익화의 자동화",
    text: "유튜브 애드센스, 쿠팡 파트너스, 제휴 마케팅. 콘텐츠가 소비되는 모든 순간이 수익으로 연결되도록 설계되었습니다.",
    icon: DollarSign
  }
];

export const ALL_IN_ONE_DETAILS = [
  {
    title: "구독료 다이어트",
    text: "ChatGPT Plus, Claude Pro, Gemini Advanced... 따로 결제해서 월 10만원씩 쓰시나요? AutoAgent 하나로 모든 최신 LLM 모델을 자유롭게 사용하세요.",
    icon: Cpu
  },
  {
    title: "미디어 생성의 허브",
    text: "미드저니, 달리, 런웨이... 이미지와 비디오를 만들기 위해 여러 사이트를 오갈 필요가 없습니다. 글의 맥락을 이해하는 멀티모달 AI가 한곳에서 모든 미디어를 생성합니다.",
    icon: Layers
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Starter',
    price: '₩0',
    description: '자동화를 처음 시작하는 크리에이터',
    features: [
      '일 1회 AI 자동 블로그 포스팅',
      '기본 템플릿 제공',
      '자동 이미지 생성 (SD)',
      '호스팅 및 도메인 지원',
      '기본 통계 대시보드'
    ],
    cta: '지금 무료로 시작',
    popular: false
  },
  {
    name: 'Pro',
    price: '₩29,000',
    description: '수익화를 가속화하는 전문 마케터',
    features: [
      '일 무제한 블로그 포스팅',
      '프리미엄 SEO 최적화',
      'AI 비디오 생성 (월 10회)',
      '광고 수익화 모델 연동',
      '우선 기술 지원',
      '커스텀 도메인 연결'
    ],
    cta: 'Pro로 업그레이드',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '문의',
    description: '대규모 에이전시 및 기업',
    features: [
      '전용 서버 구축 지원',
      '무제한 비디오 생성',
      'API 액세스 권한',
      '전담 매니저 배정',
      '화이트라벨링 지원'
    ],
    cta: '영업팀 문의',
    popular: false
  }
];