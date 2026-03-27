export type Lang = 'en' | 'vi' | 'zh';

export interface Translations {
  start: {
    subtitle: string;
    loading: string;
    questions: string;
    optionsPerQ: string;
    oneChoice: string;
    start: string;
    note: string;
  };
  controls: {
    shuffle: string;
    timer: string;
  };
  question: {
    label: string;
    correct: string;
    wrongPrefix: string;
  };
  timer: {
    timeUp: string;
    sec: string;
  };
  quiz: {
    back: string;
    answered: string;
    seeResults: string;
    next: string;
    goHome: string;
    leaveTitle: string;
    leaveMessage: string;
    leaveConfirm: string;
    leaveCancel: string;
  };
  result: {
    title: string;
    perfect: string;
    great: string;
    good: string;
    needPractice: string;
    youChose: string;
    notAnswered: string;
    correctAnswer: string;
    restart: string;
  };
  history: {
    title: string;
    empty: string;
    clear: string;
  };
  intro: {
    badge: string;
    hero: { title: string; subtitle: string };
    features: { title: string; subtitle: string };
    ts: { title: string; desc: string };
    di: { title: string; desc: string };
    cli: { title: string; desc: string };
    ssr: { title: string; desc: string };
    standalone: { title: string; desc: string };
    reactivity: { title: string; desc: string };
    compare: {
      title: string;
      feature: string;
      learning: string;
      steep: string;
      moderate: string;
      gentle: string;
    };
    signals: { title: string; subtitle: string };
    signalFn: { label: string; desc: string };
    computedFn: { label: string; desc: string };
    effectFn: { label: string; desc: string };
    cta: { title: string; subtitle: string; button: string };
  };
}

export const LANG_FLAGS: Record<Lang, string> = {
  en: '🇺🇸',
  vi: '🇻🇳',
  zh: '🇨🇳',
};

export const LANG_LABELS: Record<Lang, string> = {
  en: 'EN',
  vi: 'VI',
  zh: '中',
};

export const TRANSLATIONS: Record<Lang, Translations> = {
  en: {
    start: {
      subtitle: 'Test your Angular Signals knowledge',
      loading: 'Loading questions...',
      questions: 'questions',
      optionsPerQ: 'options / question',
      oneChoice: '1 choice',
      start: 'Start',
      note: 'Each question allows only one answer, no changes allowed',
    },
    controls: {
      shuffle: 'Shuffle Questions',
      timer: '30s Timer',
    },
    question: {
      label: 'Question',
      correct: 'Correct!',
      wrongPrefix: 'Correct answer:',
    },
    timer: {
      timeUp: "Time's up!",
      sec: 's',
    },
    quiz: {
      back: 'Back',
      answered: 'answered',
      seeResults: 'See Results',
      next: 'Next',
      goHome: 'Home',
      leaveTitle: 'Leave the quiz?',
      leaveMessage: 'Your progress will be lost if you leave now.',
      leaveConfirm: 'Leave',
      leaveCancel: 'Stay',
    },
    result: {
      title: 'Results',
      perfect: 'Excellent! You mastered Angular Signals!',
      great: 'Great job! Almost there!',
      good: 'Good effort! Review the incorrect ones.',
      needPractice: 'Keep practicing Angular Signals.',
      youChose: 'You chose:',
      notAnswered: 'Not answered',
      correctAnswer: 'Answer:',
      restart: 'Restart',
    },
    history: {
      title: 'Recent Scores',
      empty: 'No history yet',
      clear: 'Clear',
    },
    intro: {
      badge: 'Learning Guide',
      hero: {
        title: 'Master Angular',
        subtitle:
          'Explore the Angular ecosystem — core features, framework comparisons, and the new Signals reactivity — then prove your knowledge.',
      },
      features: {
        title: 'Why Angular?',
        subtitle: 'A complete, opinionated framework for enterprise-grade web applications',
      },
      ts: {
        title: 'TypeScript First',
        desc: 'Built entirely in TypeScript for type safety, autocompletion, and superior tooling across your project.',
      },
      di: {
        title: 'Dependency Injection',
        desc: 'Powerful built-in DI system for writing modular, testable, and maintainable code at scale.',
      },
      cli: {
        title: 'Angular CLI',
        desc: 'Generate components, services, run builds and tests from one unified command-line tool.',
      },
      ssr: {
        title: 'Server-Side Rendering',
        desc: 'First-class SSR via @angular/ssr for better SEO, faster load times, and improved Core Web Vitals.',
      },
      standalone: {
        title: 'Standalone Components',
        desc: 'Simplified architecture without NgModules — components declare their own imports directly.',
      },
      reactivity: {
        title: 'Angular Signals',
        desc: 'Fine-grained reactivity without Zone.js. Signals make data flow explicit, efficient, and predictable.',
      },
      compare: {
        title: 'Angular vs Other Frameworks',
        feature: 'Feature',
        learning: 'Learning Curve',
        steep: 'Steep',
        moderate: 'Moderate',
        gentle: 'Gentle',
      },
      signals: {
        title: 'What are Angular Signals?',
        subtitle:
          'Introduced in Angular 16, Signals replace Zone.js-based change detection with a fine-grained reactive system. Dependencies are tracked automatically — only the affected parts of the UI re-render.',
      },
      signalFn: {
        label: 'signal()',
        desc: 'A writable reactive container. Calling .set() or .update() automatically notifies all dependents.',
      },
      computedFn: {
        label: 'computed()',
        desc: 'A derived read-only signal. Re-evaluates lazily only when one of its tracked dependencies changes.',
      },
      effectFn: {
        label: 'effect()',
        desc: 'A side effect that re-runs whenever a signal it reads is updated — for logging, DOM ops, and more.',
      },
      cta: {
        title: 'Ready to test your knowledge?',
        subtitle:
          'Take the Angular Signals quiz — 10 questions covering signals, computed, effects, and more.',
        button: 'Start the Quiz',
      },
    },
  },

  vi: {
    start: {
      subtitle: 'Kiểm tra kiến thức của bạn về Angular Signals',
      loading: 'Đang tải câu hỏi...',
      questions: 'câu hỏi',
      optionsPerQ: 'đáp án / câu',
      oneChoice: 'lần chọn',
      start: 'Bắt đầu',
      note: 'Mỗi câu chỉ được chọn một lần, không thể đổi lại',
    },
    controls: {
      shuffle: 'Xáo trộn câu hỏi',
      timer: 'Đếm ngược 30s',
    },
    question: {
      label: 'Câu',
      correct: 'Chính xác!',
      wrongPrefix: 'Đáp án đúng:',
    },
    timer: {
      timeUp: 'Hết giờ!',
      sec: 's',
    },
    quiz: {
      back: 'Quay lại',
      answered: 'đã trả lời',
      seeResults: 'Xem kết quả',
      next: 'Tiếp theo',
      goHome: 'Trang chủ',
      leaveTitle: 'Thoát bài kiểm tra?',
      leaveMessage: 'Tiến trình làm bài sẽ bị mất nếu bạn thoát lúc này.',
      leaveConfirm: 'Thoát',
      leaveCancel: 'Tiếp tục',
    },
    result: {
      title: 'Kết quả',
      perfect: 'Xuất sắc! Bạn nắm vững Angular Signals!',
      great: 'Rất tốt! Chỉ còn một chút nữa thôi!',
      good: 'Khá tốt! Hãy ôn lại những câu sai nhé.',
      needPractice: 'Cần ôn tập thêm về Angular Signals.',
      youChose: 'Bạn chọn:',
      notAnswered: 'Chưa trả lời',
      correctAnswer: 'Đáp án:',
      restart: 'Làm lại',
    },
    history: {
      title: 'Điểm gần đây',
      empty: 'Chưa có lịch sử',
      clear: 'Xóa',
    },
    intro: {
      badge: 'Hướng dẫn học',
      hero: {
        title: 'Khám phá Angular',
        subtitle:
          'Tìm hiểu hệ sinh thái Angular — tính năng cốt lõi, so sánh framework và Signals reactivity hiện đại — rồi kiểm tra kiến thức của bạn.',
      },
      features: {
        title: 'Tại sao chọn Angular?',
        subtitle: 'Framework toàn diện cho ứng dụng web cấp doanh nghiệp',
      },
      ts: {
        title: 'TypeScript làm nền tảng',
        desc: 'Xây dựng hoàn toàn bằng TypeScript để đảm bảo type safety, autocompletion và tooling mạnh mẽ.',
      },
      di: {
        title: 'Dependency Injection',
        desc: 'Hệ thống DI tích hợp sẵn giúp code module hoá, dễ test và bảo trì ở quy mô lớn.',
      },
      cli: {
        title: 'Angular CLI',
        desc: 'Tạo component, service, chạy build và test từ một công cụ dòng lệnh thống nhất.',
      },
      ssr: {
        title: 'Server-Side Rendering',
        desc: 'SSR tích hợp qua @angular/ssr giúp SEO tốt hơn, tải trang nhanh hơn và cải thiện Core Web Vitals.',
      },
      standalone: {
        title: 'Standalone Components',
        desc: 'Kiến trúc đơn giản hơn không cần NgModule — component tự khai báo các import của mình.',
      },
      reactivity: {
        title: 'Angular Signals',
        desc: 'Reactivity chi tiết không cần Zone.js. Signals làm cho luồng dữ liệu trở nên rõ ràng và hiệu quả.',
      },
      compare: {
        title: 'Angular so với các Framework khác',
        feature: 'Tính năng',
        learning: 'Độ khó học',
        steep: 'Khó',
        moderate: 'Vừa',
        gentle: 'Dễ',
      },
      signals: {
        title: 'Angular Signals là gì?',
        subtitle:
          'Được giới thiệu trong Angular 16, Signals thay thế Zone.js change detection bằng hệ thống reactive chi tiết. Dependency được tự động theo dõi — chỉ phần UI bị ảnh hưởng mới cập nhật.',
      },
      signalFn: {
        label: 'signal()',
        desc: 'Container reactive có thể ghi. Khi gọi .set() hoặc .update(), tất cả phụ thuộc tự động được thông báo.',
      },
      computedFn: {
        label: 'computed()',
        desc: 'Signal chỉ đọc được dẫn xuất. Chỉ tính lại khi một trong các dependency được theo dõi thay đổi.',
      },
      effectFn: {
        label: 'effect()',
        desc: 'Side effect chạy lại khi bất kỳ signal nào nó đọc được cập nhật — dùng cho logging, DOM...',
      },
      cta: {
        title: 'Sẵn sàng kiểm tra kiến thức?',
        subtitle:
          'Làm bài kiểm tra Angular Signals — 10 câu hỏi về signals, computed, effects và nhiều hơn nữa.',
        button: 'Bắt đầu làm bài',
      },
    },
  },

  zh: {
    start: {
      subtitle: '测试你对 Angular Signals 的掌握程度',
      loading: '正在加载题目...',
      questions: '道题',
      optionsPerQ: '个选项 / 题',
      oneChoice: '次选择',
      start: '开始',
      note: '每题只能选择一次，不可更改',
    },
    controls: {
      shuffle: '随机题目',
      timer: '30秒计时',
    },
    question: {
      label: '题目',
      correct: '回答正确！',
      wrongPrefix: '正确答案：',
    },
    timer: {
      timeUp: '时间到！',
      sec: '秒',
    },
    quiz: {
      back: '上一题',
      answered: '已作答',
      seeResults: '查看结果',
      next: '下一题',
      goHome: '首页',
      leaveTitle: '离开测验？',
      leaveMessage: '现在离开将会丢失答题进度。',
      leaveConfirm: '离开',
      leaveCancel: '继续答题',
    },
    result: {
      title: '测验结果',
      perfect: '优秀！你完全掌握了 Angular Signals！',
      great: '非常好！再接再厉！',
      good: '不错！复习一下错误的题目吧。',
      needPractice: '需要继续学习 Angular Signals。',
      youChose: '你的答案：',
      notAnswered: '未作答',
      correctAnswer: '正确答案：',
      restart: '重新开始',
    },
    history: {
      title: '最近成绩',
      empty: '暂无记录',
      clear: '清除',
    },
    intro: {
      badge: '学习指南',
      hero: {
        title: '掌握 Angular',
        subtitle:
          '探索 Angular 生态系统 — 核心功能、框架对比和全新 Signals 响应式 — 然后测试你的知识。',
      },
      features: {
        title: '为什么选择 Angular？',
        subtitle: '面向企业级 Web 应用的完整框架',
      },
      ts: {
        title: 'TypeScript 优先',
        desc: '完全基于 TypeScript 构建，提供类型安全、自动补全和强大的工具链。',
      },
      di: {
        title: '依赖注入',
        desc: '内置强大的 DI 系统，让代码模块化、可测试且易于大规模维护。',
      },
      cli: {
        title: 'Angular CLI',
        desc: '通过统一命令行工具生成组件、服务，运行构建和测试。',
      },
      ssr: {
        title: '服务端渲染',
        desc: '通过 @angular/ssr 提供原生 SSR 支持，改善 SEO 和首屏加载速度。',
      },
      standalone: {
        title: '独立组件',
        desc: '更简洁的架构，无需 NgModules — 组件直接声明自身所需的导入。',
      },
      reactivity: {
        title: 'Angular Signals',
        desc: '无需 Zone.js 的细粒度响应式。Signals 让数据流更加明确高效。',
      },
      compare: {
        title: 'Angular 与其他框架对比',
        feature: '特性',
        learning: '学习曲线',
        steep: '陡峭',
        moderate: '中等',
        gentle: '平缓',
      },
      signals: {
        title: '什么是 Angular Signals？',
        subtitle:
          'Angular 16 引入的 Signals 以细粒度响应式系统取代了基于 Zone.js 的变更检测。依赖关系自动追踪，只有受影响的 UI 部分才会更新。',
      },
      signalFn: {
        label: 'signal()',
        desc: '可写的响应式容器。调用 .set() 或 .update() 时，所有依赖方自动收到通知。',
      },
      computedFn: {
        label: 'computed()',
        desc: '只读的派生信号。仅当其被追踪的依赖项发生变化时才重新计算。',
      },
      effectFn: {
        label: 'effect()',
        desc: '当其读取的任何 signal 更新时重新运行的副作用。用于日志、DOM 操作等。',
      },
      cta: {
        title: '准备好测试你的知识了吗？',
        subtitle: '参加 Angular Signals 测验 — 10 道题目涵盖 signals、computed、effects 等内容。',
        button: '开始测验',
      },
    },
  },
};
