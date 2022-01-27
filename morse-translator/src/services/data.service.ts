import {Injectable} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MorseLogEntry} from 'src/model/morse-log-entry';
import {HttpClient} from '@angular/common/http';

interface IEntry {
  Alpha: string;
  MorseCode: string;
  Time: Date;
  State: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://localhost:9190/api/LogEntry';
  dataSource = new MatTableDataSource<IEntry>();

  constructor(private httpClient: HttpClient) {
  }

  async sendEntry(entry: MorseLogEntry): Promise<void> {
    const newEntry: any = {
      Alpha: entry.alpha,
      MorseCode: entry.morseCode,
      State: entry.state.valueOf(),
      Time: entry.time
    };

    await this.httpClient.post<IEntry>(this.url, newEntry).toPromise();

    await this.loadData();
  }

  async loadData(): Promise<void> {
    this.dataSource.data = await this.httpClient.get<IEntry[]>(this.url).toPromise();
  }
}
