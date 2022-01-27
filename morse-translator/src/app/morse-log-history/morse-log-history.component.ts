import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MorseLogEntry} from '../../model/morse-log-entry';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-morse-log-history',
  templateUrl: './morse-log-history.component.html',
  styleUrls: ['./morse-log-history.component.scss']
})
export class MorseLogHistoryComponent implements OnInit {
  logs: MorseLogEntry[] = [];
  dataSource = new MatTableDataSource();

  displayedColumns: string[] = ['state', 'time', 'alpha', 'morse'];

  constructor(public dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.loadData();
  }

  async updateHistory(logEntry: MorseLogEntry): Promise<void> {
    await this.dataService.sendEntry(logEntry);
  }
}
