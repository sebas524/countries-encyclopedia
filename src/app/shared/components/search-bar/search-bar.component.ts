import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-bar',
  templateUrl: './search-bar.component.html',
  styles: [],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubs?: Subscription;

  @Input()
  public barPlaceholder: string = '';
  @Input()
  public initialValue: string = '';
  @Output()
  public onValue = new EventEmitter<string>();
  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSubs = this.debouncer
      .pipe(debounceTime(300))
      .subscribe((val) => {
        console.log('val => ', val);
        this.onDebounce.emit(val);
      });
  }
  ngOnDestroy(): void {
    console.log('destoyed!');
    this.debouncerSubs?.unsubscribe();
  }
  valueEmitter(keyword: string): void {
    this.onValue.emit(keyword);
  }

  whenKeyIsPressed(searchWord: string) {
    this.debouncer.next(searchWord);
  }
}
