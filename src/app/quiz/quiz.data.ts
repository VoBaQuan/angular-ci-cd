import { MultiLangQuizQuestion } from './quiz.model';

export const QUIZ_QUESTIONS: MultiLangQuizQuestion[] = [
  {
    id: 1,
    correctIndex: 2,
    translations: {
      vi: {
        question: 'Signal ổn định (stable) được giới thiệu từ phiên bản Angular nào?',
        options: ['Angular 14', 'Angular 16', 'Angular 17', 'Angular 19'],
      },
      en: {
        question: 'In which Angular version were Signals introduced as stable?',
        options: ['Angular 14', 'Angular 16', 'Angular 17', 'Angular 19'],
      },
      zh: {
        question: 'Angular Signals 在哪个版本正式稳定？',
        options: ['Angular 14', 'Angular 16', 'Angular 17', 'Angular 19'],
      },
    },
  },
  {
    id: 2,
    correctIndex: 2,
    translations: {
      vi: {
        question: 'Hàm nào dùng để tạo một derived signal (chỉ đọc) từ các signal khác?',
        options: ['signal()', 'effect()', 'computed()', 'readonly()'],
      },
      en: {
        question: 'Which function is used to create a derived (read-only) signal from other signals?',
        options: ['signal()', 'effect()', 'computed()', 'readonly()'],
      },
      zh: {
        question: '哪个函数用于从其他 signal 创建派生（只读）signal？',
        options: ['signal()', 'effect()', 'computed()', 'readonly()'],
      },
    },
  },
  {
    id: 3,
    correctIndex: 2,
    translations: {
      vi: {
        question: 'Cách đúng để đọc giá trị của một signal là gì?',
        options: ['mySignal.value', 'mySignal.get()', 'mySignal()', 'get(mySignal)'],
      },
      en: {
        question: "What is the correct way to read a signal's value?",
        options: ['mySignal.value', 'mySignal.get()', 'mySignal()', 'get(mySignal)'],
      },
      zh: {
        question: '读取 signal 值的正确方式是什么？',
        options: ['mySignal.value', 'mySignal.get()', 'mySignal()', 'get(mySignal)'],
      },
    },
  },
  {
    id: 4,
    correctIndex: 1,
    translations: {
      vi: {
        question: 'effect() sẽ chạy lại khi nào?',
        options: [
          'Chỉ chạy một lần khi component khởi tạo',
          'Chạy lại mỗi khi bất kỳ signal nào trong nó thay đổi giá trị',
          'Chỉ chạy khi gọi thủ công',
          'Chạy theo chu kỳ change detection',
        ],
      },
      en: {
        question: 'When does effect() re-run?',
        options: [
          'Runs only once when the component initializes',
          'Re-runs whenever any signal it reads changes',
          'Only runs when called manually',
          'Runs on every change detection cycle',
        ],
      },
      zh: {
        question: 'effect() 何时重新运行？',
        options: [
          '仅在组件初始化时运行一次',
          '每当其读取的任何 signal 值改变时重新运行',
          '仅在手动调用时运行',
          '随每次变更检测周期运行',
        ],
      },
    },
  },
  {
    id: 5,
    correctIndex: 1,
    translations: {
      vi: {
        question: 'Phương thức nào của WritableSignal dùng để cập nhật giá trị dựa trên giá trị hiện tại?',
        options: ['set(newValue)', 'update(fn)', 'mutate(fn)', 'patch(fn)'],
      },
      en: {
        question: 'Which WritableSignal method updates the value based on the current value?',
        options: ['set(newValue)', 'update(fn)', 'mutate(fn)', 'patch(fn)'],
      },
      zh: {
        question: 'WritableSignal 的哪个方法根据当前值更新？',
        options: ['set(newValue)', 'update(fn)', 'mutate(fn)', 'patch(fn)'],
      },
    },
  },
  {
    id: 6,
    correctIndex: 0,
    translations: {
      vi: {
        question: 'input() signal-based trong Angular 17+ dùng để làm gì?',
        options: [
          'Thay thế @Input() decorator, nhận dữ liệu từ component cha dưới dạng signal',
          'Tạo writable signal cho form input',
          'Lắng nghe sự kiện từ DOM element',
          'Khai báo biến reactive trong service',
        ],
      },
      en: {
        question: 'What is the purpose of signal-based input() in Angular 17+?',
        options: [
          'Replaces @Input() decorator, receives parent data as a signal',
          'Creates a writable signal for form inputs',
          'Listens to events from DOM elements',
          'Declares reactive variables in a service',
        ],
      },
      zh: {
        question: 'Angular 17+ 中基于 signal 的 input() 的作用是什么？',
        options: [
          '替代 @Input() 装饰器，以 signal 形式接收父组件数据',
          '为表单输入创建可写 signal',
          '监听 DOM 元素事件',
          '在 service 中声明响应式变量',
        ],
      },
    },
  },
  {
    id: 7,
    correctIndex: 1,
    translations: {
      vi: {
        question: 'toSignal() từ @angular/core/rxjs-interop có tác dụng gì?',
        options: [
          'Chuyển một signal thành Observable',
          'Chuyển một Observable thành signal để dùng trong template',
          'Tạo signal từ Promise',
          'Kết hợp nhiều signal thành một',
        ],
      },
      en: {
        question: 'What does toSignal() from @angular/core/rxjs-interop do?',
        options: [
          'Converts a signal to an Observable',
          'Converts an Observable into a signal for use in templates',
          'Creates a signal from a Promise',
          'Combines multiple signals into one',
        ],
      },
      zh: {
        question: '@angular/core/rxjs-interop 中的 toSignal() 有什么作用？',
        options: [
          '将 signal 转换为 Observable',
          '将 Observable 转换为 signal 以在模板中使用',
          '从 Promise 创建 signal',
          '将多个 signal 合并为一个',
        ],
      },
    },
  },
  {
    id: 8,
    correctIndex: 2,
    translations: {
      vi: {
        question: 'computed() signal có thể được ghi (writable) trực tiếp không?',
        options: [
          'Có, dùng .set() như WritableSignal',
          'Có, nếu truyền option { writable: true }',
          'Không, computed() luôn là read-only signal',
          'Có, nhưng phải dùng linkedSignal() thay thế',
        ],
      },
      en: {
        question: 'Can a computed() signal be written to directly?',
        options: [
          'Yes, using .set() like a WritableSignal',
          'Yes, if you pass the option { writable: true }',
          'No, computed() is always a read-only signal',
          'Yes, but you must use linkedSignal() instead',
        ],
      },
      zh: {
        question: 'computed() signal 可以直接写入吗？',
        options: [
          '可以，像 WritableSignal 一样使用 .set()',
          '可以，传入 { writable: true } 选项即可',
          '不可以，computed() 始终是只读 signal',
          '可以，但必须改用 linkedSignal()',
        ],
      },
    },
  },
  {
    id: 9,
    correctIndex: 1,
    translations: {
      vi: {
        question: 'Để tạo một signal-based output trong Angular 17+, ta dùng gì?',
        options: ['@Output() với EventEmitter', 'output() function', 'emit() function', 'outputSignal()'],
      },
      en: {
        question: 'What is used to create a signal-based output in Angular 17+?',
        options: ['@Output() with EventEmitter', 'output() function', 'emit() function', 'outputSignal()'],
      },
      zh: {
        question: 'Angular 17+ 中如何创建基于 signal 的 output？',
        options: ['使用 @Output() 和 EventEmitter', 'output() 函数', 'emit() 函数', 'outputSignal()'],
      },
    },
  },
  {
    id: 10,
    correctIndex: 1,
    translations: {
      vi: {
        question: 'Signal khác với BehaviorSubject của RxJS ở điểm nào chính yếu?',
        options: [
          'Signal không thể dùng trong template',
          'Signal không cần subscribe/unsubscribe, tự động cleanup',
          'Signal chỉ dùng được trong Angular service',
          'Signal không hỗ trợ giá trị ban đầu',
        ],
      },
      en: {
        question: "What is the key difference between Signal and RxJS's BehaviorSubject?",
        options: [
          'Signal cannot be used in templates',
          "Signal doesn't require subscribe/unsubscribe, it auto-cleans up",
          'Signal can only be used in Angular services',
          "Signal doesn't support an initial value",
        ],
      },
      zh: {
        question: 'Signal 与 RxJS BehaviorSubject 的主要区别是什么？',
        options: [
          'Signal 不能在模板中使用',
          'Signal 不需要 subscribe/unsubscribe，自动清理',
          'Signal 只能在 Angular service 中使用',
          'Signal 不支持初始值',
        ],
      },
    },
  },
];
