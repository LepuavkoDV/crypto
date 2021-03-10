import { Component, OnInit } from '@angular/core';
import { DataState } from './reducers/data.reducer';
import { Store } from '@ngrx/store';
import { DataActions } from './actions/data.actions';
import { Observable } from 'rxjs';
import { selectData } from './selectors/data.selectors';
import { IData } from './types/idata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crypto';
  data$: Observable<IData[]>;

  constructor(
    private store: Store<DataState>,
  ) {}

  ngOnInit(): void {
    this.store.dispatch({ type: DataActions.loadData });
    this.data$ = this.store.select(selectData);
  }
}
