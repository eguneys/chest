import app from './main';
import bar from './bar';

export function boot() {
  
  let $_ = document.querySelector('.rotide__app') as HTMLElement;
  let rotide = app($_);

  let $bar = document.querySelector('.rotide__bar') as HTMLElement;
  let r_bar = bar($bar);
  
}
