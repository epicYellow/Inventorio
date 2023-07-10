import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() 'text': string;
  @Input() 'ButtType': string;
  @Input() 'style': string;
  @Input() 'title': string;
  @Input() 'active': boolean;
  @Input() 'icon': string;
  @Input() 'router': string;
  @Output() 'clickHandle' = new EventEmitter<any>();

  onClick(E) {
    this.clickHandle.emit(E);
  }

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  AnimateNavBtn() {
    let navBtnImg = this.el.nativeElement.querySelector('img');
    let navBtn = this.el.nativeElement.querySelector('button');
    let title = this.el.nativeElement.querySelector('p');
    if (!navBtnImg.classList.contains('moveUp')) {
      navBtnImg.classList.add('moveUp');
      navBtn.classList.add('moveLeft');
      title.classList.remove('weg');
    } else {
      navBtnImg.classList.remove('moveUp');
      navBtn.classList.remove('moveLeft');
      title.classList.add('weg');
    }
  }
}
