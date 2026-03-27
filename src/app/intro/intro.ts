import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { I18nService } from '../i18n/i18n.service';
import { ThemeService } from '../theme.service';
import { fadeIn } from '../animations';

@Component({
  selector: 'app-intro',
  imports: [LucideAngularModule],
  templateUrl: './intro.html',
  animations: [fadeIn],
})
export class IntroComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly theme = inject(ThemeService);
  private readonly router = inject(Router);

  protected readonly features = computed(() => {
    const t = this.i18n.t().intro;
    return [
      { icon: 'file-code', color: 'text-blue-500', title: t.ts.title, desc: t.ts.desc },
      { icon: 'layers', color: 'text-purple-500', title: t.di.title, desc: t.di.desc },
      { icon: 'terminal', color: 'text-green-500', title: t.cli.title, desc: t.cli.desc },
      { icon: 'server', color: 'text-orange-500', title: t.ssr.title, desc: t.ssr.desc },
      { icon: 'puzzle', color: 'text-pink-500', title: t.standalone.title, desc: t.standalone.desc },
      { icon: 'zap', color: 'text-primary-500', title: t.reactivity.title, desc: t.reactivity.desc },
    ];
  });

  protected readonly compareRows = computed(() => {
    const c = this.i18n.t().intro.compare;
    return [
      { feature: 'Type', angular: 'Full Framework', react: 'UI Library', vue: 'Progressive FW' },
      { feature: 'Language', angular: 'TypeScript', react: 'JSX / TSX', vue: 'JS / TypeScript' },
      { feature: 'State Mgmt', angular: 'Signals / RxJS', react: 'useState / Zustand', vue: 'ref / Pinia' },
      { feature: 'DI System', angular: '✓ Built-in', react: '✗ None', vue: '✗ None' },
      { feature: 'SSR', angular: '@angular/ssr', react: 'Next.js', vue: 'Nuxt.js' },
      { feature: c.learning, angular: c.steep, react: c.moderate, vue: c.gentle },
    ];
  });

  protected readonly signalConcepts = computed(() => {
    const t = this.i18n.t().intro;
    return [
      {
        label: t.signalFn.label,
        desc: t.signalFn.desc,
        code: `const count = signal(0);\n\ncount.set(5);\ncount.update(v => v + 1);\n\n// count() → 6`,
      },
      {
        label: t.computedFn.label,
        desc: t.computedFn.desc,
        code: `const count = signal(3);\nconst double = computed(\n  () => count() * 2\n);\n\n// double() → 6`,
      },
      {
        label: t.effectFn.label,
        desc: t.effectFn.desc,
        code: `const name = signal('Angular');\n\neffect(() => {\n  console.log(name());\n  // re-runs on change\n});`,
      },
    ];
  });

  goToQuiz(): void {
    this.router.navigate(['/quiz']);
  }
}
