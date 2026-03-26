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
  question: {
    label: string;
    correct: string;
    wrongPrefix: string;
  };
  quiz: {
    back: string;
    answered: string;
    seeResults: string;
    next: string;
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
    question: {
      label: 'Question',
      correct: 'Correct!',
      wrongPrefix: 'Correct answer:',
    },
    quiz: {
      back: 'Back',
      answered: 'answered',
      seeResults: 'See Results',
      next: 'Next',
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
    question: {
      label: 'Câu',
      correct: 'Chính xác!',
      wrongPrefix: 'Đáp án đúng:',
    },
    quiz: {
      back: 'Quay lại',
      answered: 'đã trả lời',
      seeResults: 'Xem kết quả',
      next: 'Tiếp theo',
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
    question: {
      label: '题目',
      correct: '回答正确！',
      wrongPrefix: '正确答案：',
    },
    quiz: {
      back: '上一题',
      answered: '已作答',
      seeResults: '查看结果',
      next: '下一题',
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
  },
};
