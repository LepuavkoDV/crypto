import { Component, OnInit } from '@angular/core';
import { DataState } from './store/reducers/data.reducer';
import { Store } from '@ngrx/store';
import { DataActions } from './store/actions/data.actions';
import { selectData } from './store/selectors/data.selectors';
import { IData } from './types/idata';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crypto';
  columns: string[] = [
    'name',
    'website',
  ];
  dataSource = new MatTableDataSource<IData>();

  constructor(
    private store: Store<DataState>,
  ) {}

  ngOnInit(): void {
    this.store.dispatch({ type: DataActions.loadData });
    this.store.select(selectData).subscribe(data => this.dataSource.data = data);
  }
}
