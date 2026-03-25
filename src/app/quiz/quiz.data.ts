import { QuizQuestion } from './quiz.model';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Signal ổn định (stable) được giới thiệu từ phiên bản Angular nào?',
    options: ['Angular 14', 'Angular 16', 'Angular 17', 'Angular 19'],
    correctIndex: 2,
  },
  {
    id: 2,
    question: 'Hàm nào dùng để tạo một derived signal (chỉ đọc) từ các signal khác?',
    options: ['signal()', 'effect()', 'computed()', 'readonly()'],
    correctIndex: 2,
  },
  {
    id: 3,
    question: 'Cách đúng để đọc giá trị của một signal là gì?',
    options: ['mySignal.value', 'mySignal.get()', 'mySignal()', 'get(mySignal)'],
    correctIndex: 2,
  },
  {
    id: 4,
    question: 'effect() sẽ chạy lại khi nào?',
    options: [
      'Chỉ chạy một lần khi component khởi tạo',
      'Chạy lại mỗi khi bất kỳ signal nào trong nó thay đổi giá trị',
      'Chỉ chạy khi gọi thủ công',
      'Chạy theo chu kỳ change detection',
    ],
    correctIndex: 1,
  },
  {
    id: 5,
    question: 'Phương thức nào của WritableSignal dùng để cập nhật giá trị dựa trên giá trị hiện tại?',
    options: ['set(newValue)', 'update(fn)', 'mutate(fn)', 'patch(fn)'],
    correctIndex: 1,
  },
  {
    id: 6,
    question: 'input() signal-based trong Angular 17+ dùng để làm gì?',
    options: [
      'Thay thế @Input() decorator, nhận dữ liệu từ component cha dưới dạng signal',
      'Tạo writable signal cho form input',
      'Lắng nghe sự kiện từ DOM element',
      'Khai báo biến reactive trong service',
    ],
    correctIndex: 0,
  },
  {
    id: 7,
    question: 'toSignal() từ @angular/core/rxjs-interop có tác dụng gì?',
    options: [
      'Chuyển một signal thành Observable',
      'Chuyển một Observable thành signal để dùng trong template',
      'Tạo signal từ Promise',
      'Kết hợp nhiều signal thành một',
    ],
    correctIndex: 1,
  },
  {
    id: 8,
    question: 'computed() signal có thể được ghi (writable) trực tiếp không?',
    options: [
      'Có, dùng .set() như WritableSignal',
      'Có, nếu truyền option { writable: true }',
      'Không, computed() luôn là read-only signal',
      'Có, nhưng phải dùng linkedSignal() thay thế',
    ],
    correctIndex: 2,
  },
  {
    id: 9,
    question: 'Để tạo một signal-based output trong Angular 17+, ta dùng gì?',
    options: ['@Output() với EventEmitter', 'output() function', 'emit() function', 'outputSignal()'],
    correctIndex: 1,
  },
  {
    id: 10,
    question: 'Signal khác với BehaviorSubject của RxJS ở điểm nào chính yếu?',
    options: [
      'Signal không thể dùng trong template',
      'Signal không cần subscribe/unsubscribe, tự động cleanup',
      'Signal chỉ dùng được trong Angular service',
      'Signal không hỗ trợ giá trị ban đầu',
    ],
    correctIndex: 1,
  },
];
